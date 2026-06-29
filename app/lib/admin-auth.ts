import crypto from "crypto";
import { cookies } from "next/headers";

/**
 * Minimal stateless admin auth. The passcode is set via ADMIN_PASSCODE.
 * On login we store an HMAC-style token in an httpOnly cookie; every admin
 * request re-derives the expected token and compares. No DB, no session store.
 *
 * If ADMIN_PASSCODE is unset, a default is used and `isDefaultPasscode` is true
 * so the UI can warn loudly to change it before going live.
 */

const COOKIE = "kenai_admin";
const DEFAULT_PASSCODE = "kenai-admin";

export const isDefaultPasscode = !process.env.ADMIN_PASSCODE;

function passcode(): string {
  return process.env.ADMIN_PASSCODE || DEFAULT_PASSCODE;
}

function tokenFor(pass: string): string {
  // Salt with the passcode itself + a fixed namespace; constant per deployment.
  return crypto.createHash("sha256").update(`kenai:${pass}`).digest("hex");
}

export function checkPasscode(input: string): boolean {
  return input === passcode();
}

export function sessionToken(): string {
  return tokenFor(passcode());
}

export const COOKIE_NAME = COOKIE;

/** True if the current request carries a valid admin cookie. */
export function isAuthed(): boolean {
  const c = cookies().get(COOKIE)?.value;
  if (!c) return false;
  const expected = sessionToken();
  // length-safe compare
  if (c.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(c), Buffer.from(expected));
}
