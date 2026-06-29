import { NextResponse } from "next/server";
import { isAuthed, isDefaultPasscode } from "../../../lib/admin-auth";
import { listLeads, updateLead, leadStats, type LeadStatus } from "../../../lib/leads-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STATUSES: LeadStatus[] = ["new", "contacted", "scheduled", "won", "lost"];

export async function GET() {
  if (!isAuthed()) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const [leads, stats] = await Promise.all([listLeads(), leadStats()]);
  return NextResponse.json({ ok: true, leads, stats, isDefaultPasscode });
}

export async function PATCH(req: Request) {
  if (!isAuthed()) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  let body: { id?: string; status?: string; adminNote?: string; meetingAt?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  if (!body.id) {
    return NextResponse.json({ ok: false, error: "missing_id" }, { status: 422 });
  }
  const patch: { status?: LeadStatus; adminNote?: string; meetingAt?: string } = {};
  if (body.status && STATUSES.includes(body.status as LeadStatus)) {
    patch.status = body.status as LeadStatus;
  }
  if (body.adminNote !== undefined) patch.adminNote = String(body.adminNote).slice(0, 2000);
  if (body.meetingAt !== undefined) patch.meetingAt = String(body.meetingAt).slice(0, 40);

  const updated = await updateLead(body.id, patch);
  if (!updated) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, lead: updated });
}
