import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

/**
 * Lightweight, dependency-free lead store. Persists enquiries to a JSON file
 * (best-effort) with an in-memory working copy that always works — so it runs
 * on a normal Node host without a database. For serverless/multi-instance
 * deployments, set LEAD_WEBHOOK_URL (in /api/lead) to forward to a real CRM.
 *
 * File location: $LEADS_FILE or <cwd>/.data/leads.json
 */

export type LeadStatus = "new" | "contacted" | "scheduled" | "won" | "lost";

export type StoredLead = {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  source: string;
  meta: Record<string, unknown>;
  receivedAt: string;
  userAgent: string;
  status: LeadStatus;
  adminNote: string;
  meetingAt: string; // ISO datetime of a scheduled meeting ("" if none)
  updatedAt: string;
};

const FILE = process.env.LEADS_FILE || path.join(process.cwd(), ".data", "leads.json");

// In-memory working copy (authoritative for the running process).
let memory: StoredLead[] | null = null;

async function load(): Promise<StoredLead[]> {
  if (memory) return memory;
  try {
    const raw = await fs.readFile(FILE, "utf8");
    memory = JSON.parse(raw) as StoredLead[];
  } catch {
    memory = [];
  }
  return memory;
}

async function persist(): Promise<void> {
  if (!memory) return;
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(memory, null, 2), "utf8");
  } catch {
    // Read-only FS (e.g. serverless) — memory copy still serves this process.
  }
}

export async function addLead(
  input: Partial<StoredLead> & { email: string },
): Promise<StoredLead> {
  const leads = await load();
  const now = new Date().toISOString();
  const lead: StoredLead = {
    id: crypto.randomUUID(),
    name: input.name ?? "",
    email: input.email,
    type: input.type ?? "general",
    message: input.message ?? "",
    source: input.source ?? "website",
    meta: input.meta ?? {},
    receivedAt: now,
    userAgent: input.userAgent ?? "",
    status: "new",
    adminNote: "",
    meetingAt: "",
    updatedAt: now,
  };
  leads.unshift(lead); // newest first
  await persist();
  return lead;
}

export async function listLeads(): Promise<StoredLead[]> {
  return [...(await load())];
}

export async function updateLead(
  id: string,
  patch: Partial<Pick<StoredLead, "status" | "adminNote" | "meetingAt">>,
): Promise<StoredLead | null> {
  const leads = await load();
  const lead = leads.find((l) => l.id === id);
  if (!lead) return null;
  if (patch.status) lead.status = patch.status;
  if (patch.adminNote !== undefined) lead.adminNote = patch.adminNote;
  if (patch.meetingAt !== undefined) lead.meetingAt = patch.meetingAt;
  lead.updatedAt = new Date().toISOString();
  await persist();
  return lead;
}

export async function leadStats() {
  const leads = await load();
  const by = (s: LeadStatus) => leads.filter((l) => l.status === s).length;
  return {
    total: leads.length,
    new: by("new"),
    contacted: by("contacted"),
    scheduled: by("scheduled"),
    won: by("won"),
    lost: by("lost"),
  };
}
