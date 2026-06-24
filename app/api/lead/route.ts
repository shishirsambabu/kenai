import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Unified lead pipeline. The contact form, newsletter capture and the
 * AI readiness tool all POST here. Leads are logged server-side and, if a
 * LEAD_WEBHOOK_URL env var is configured (e.g. an n8n / Zapier / Make hook,
 * or an email-forwarding endpoint), forwarded there in real time.
 *
 * No third-party SDK required — set LEAD_WEBHOOK_URL to go live.
 */

type LeadPayload = {
  name?: string;
  email?: string;
  type?: string; // what they want (workshop, advisory, newsletter, ...)
  message?: string;
  source?: string; // which form / page
  meta?: Record<string, unknown>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const lead = {
    name: (body.name ?? "").trim().slice(0, 200),
    email: email.slice(0, 254),
    type: (body.type ?? "general").slice(0, 120),
    message: (body.message ?? "").trim().slice(0, 4000),
    source: (body.source ?? "website").slice(0, 120),
    meta: body.meta ?? {},
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent")?.slice(0, 300) ?? "",
  };

  // Always log — visible in server logs even without a webhook configured.
  console.log("[kenai:lead]", JSON.stringify(lead));

  // Forward to the configured pipeline if available.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Don't fail the user's submission if forwarding hiccups.
      console.error("[kenai:lead] webhook_forward_failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: true, service: "kenai lead pipeline" });
}
