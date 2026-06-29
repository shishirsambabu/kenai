import { NextResponse } from "next/server";
import { checkPasscode, sessionToken, COOKIE_NAME, isDefaultPasscode } from "../../../lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let passcode = "";
  try {
    const body = await req.json();
    passcode = String(body.passcode ?? "");
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!checkPasscode(passcode)) {
    return NextResponse.json({ ok: false, error: "wrong_passcode" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, isDefaultPasscode });
  res.cookies.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hours
  });
  return res;
}
