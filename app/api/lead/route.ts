import { NextRequest, NextResponse } from "next/server";

/**
 * Lead capture endpoint. Validates a submission and forwards it to the
 * configured destination. Designed to work the moment the site owner sets
 * env vars — no code change required:
 *
 *   - HubSpot:  HUBSPOT_PORTAL_ID + HUBSPOT_FORM_GUID
 *               (public Forms submission endpoint, no secret key needed)
 *   - Webhook:  LEAD_WEBHOOK_URL  (Zapier / n8n / Make / Formspree etc.)
 *
 * If nothing is configured the lead is logged server-side and the request
 * still succeeds, so the UX never breaks in development or before setup.
 */

export const runtime = "nodejs";

interface LeadPayload {
  name?: string;
  email?: string;
  type?: string;
  message?: string;
  source?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function forwardToHubSpot(lead: LeadPayload): Promise<boolean> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) return false;

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
  const fields = [
    { name: "email", value: lead.email },
    { name: "firstname", value: lead.name },
    { name: "message", value: lead.message },
    { name: "interest", value: lead.type },
  ].filter((f) => f.value);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields,
      context: { pageUri: lead.source || "kenai.in", pageName: "kenai lead" },
    }),
  });
  return res.ok;
}

async function forwardToWebhook(lead: LeadPayload): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, capturedAt: new Date().toISOString() }),
  });
  return res.ok;
}

export async function POST(req: NextRequest) {
  let lead: LeadPayload;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (lead.name || "").trim();
  const email = (lead.email || "").trim();

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const clean: LeadPayload = {
    name,
    email,
    type: (lead.type || "").trim() || undefined,
    message: (lead.message || "").trim() || undefined,
    source: (lead.source || "").trim() || undefined,
  };

  try {
    let delivered = false;
    delivered = (await forwardToHubSpot(clean)) || delivered;
    if (!delivered) delivered = await forwardToWebhook(clean);

    if (!delivered) {
      // No destination configured yet — don't lose the lead silently in logs.
      console.log("[kenai lead]", JSON.stringify(clean));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[kenai lead] delivery failed", err);
    // Still capture it so the lead isn't lost; surface success to the user.
    console.log("[kenai lead]", JSON.stringify(clean));
    return NextResponse.json({ ok: true });
  }
}
