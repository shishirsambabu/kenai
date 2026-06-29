"use client";

import { useCallback, useEffect, useState } from "react";

type Lead = {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  source: string;
  meta: Record<string, unknown>;
  receivedAt: string;
  status: string;
  adminNote: string;
  meetingAt: string;
  updatedAt: string;
};

type Stats = Record<string, number>;

const STATUSES = ["new", "contacted", "scheduled", "won", "lost"];
const STATUS_COLOR: Record<string, string> = {
  new: "#00F0FF",
  contacted: "#A855F7",
  scheduled: "#FF2E97",
  won: "#37d67a",
  lost: "#7a7f93",
};

export default function AdminDashboard() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [passcode, setPasscode] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats>({});
  const [filter, setFilter] = useState<string>("all");
  const [defaultPass, setDefaultPass] = useState(false);

  const fetchLeads = useCallback(async () => {
    const res = await fetch("/api/admin/leads", { cache: "no-store" });
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const data = await res.json();
    setLeads(data.leads ?? []);
    setStats(data.stats ?? {});
    setDefaultPass(!!data.isDefaultPasscode);
    setAuthed(true);
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const login = async () => {
    setLoginErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode }),
    });
    if (!res.ok) {
      setLoginErr("> wrong passcode");
      return;
    }
    setPasscode("");
    await fetchLeads();
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setLeads([]);
  };

  const patchLead = async (id: string, patch: Partial<Lead>) => {
    // optimistic
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...patch }),
    });
    fetchLeads();
  };

  if (authed === null) {
    return <Center>Loading…</Center>;
  }

  if (!authed) {
    return (
      <Center>
        <div style={{ width: "min(380px,92vw)" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00F0FF", fontSize: 12, letterSpacing: "0.2em", marginBottom: 16 }}>
            &gt;_ kenai · enquiries
          </div>
          <h1 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.8rem", marginBottom: 18 }}>
            Admin login
          </h1>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="passcode"
            className="form-input"
            autoFocus
          />
          <button onClick={login} style={btn("#00F0FF")} >
            &gt; enter
          </button>
          {loginErr && (
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#FF2E97", fontSize: 12, marginTop: 10 }}>
              {loginErr}
            </div>
          )}
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7a7f93", fontSize: 11, marginTop: 18, lineHeight: 1.7 }}>
            Set the passcode with the <b>ADMIN_PASSCODE</b> env var. Default is
            <b> kenai-admin</b> until you change it.
          </p>
        </div>
      </Center>
    );
  }

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  return (
    <div style={{ width: "min(1240px,94vw)", margin: "0 auto", padding: "30px 0 80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00F0FF", fontSize: 11, letterSpacing: "0.2em" }}>
            &gt;_ kenai · enquiries
          </div>
          <h1 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.9rem" }}>
            Booking &amp; enquiry manager
          </h1>
        </div>
        <button onClick={logout} style={{ ...btnInline, color: "#7a7f93", borderColor: "rgba(122,127,147,0.4)" }}>
          log out
        </button>
      </div>

      {defaultPass && (
        <div style={{ border: "1px solid rgba(255,46,151,0.4)", background: "rgba(255,46,151,0.08)", padding: "12px 16px", marginBottom: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#FF2E97" }}>
          ⚠ Using the default passcode. Set <b>ADMIN_PASSCODE</b> in your environment before going live.
        </div>
      )}

      {/* Stats */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 22 }}>
        {["total", ...STATUSES].map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k === "total" ? "all" : k)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              padding: "10px 14px",
              cursor: "pointer",
              background: (filter === k || (k === "total" && filter === "all")) ? "rgba(0,240,255,0.1)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${k === "total" ? "rgba(0,240,255,0.3)" : (STATUS_COLOR[k] ?? "#333") + "55"}`,
              color: k === "total" ? "#E5E7EB" : STATUS_COLOR[k],
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <b style={{ fontSize: 16 }}>{stats[k] ?? 0}</b>
            <span style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7a7f93", padding: "40px 0", textAlign: "center" }}>
          No enquiries{filter !== "all" ? ` with status "${filter}"` : " yet"}. New submissions from the contact form,
          newsletter and AI readiness tool appear here.
        </div>
      ) : (
        <div style={{ display: "grid", gap: 14 }}>
          {filtered.map((l) => (
            <LeadCard key={l.id} lead={l} onPatch={patchLead} />
          ))}
        </div>
      )}
    </div>
  );
}

function LeadCard({ lead, onPatch }: { lead: Lead; onPatch: (id: string, p: Partial<Lead>) => void }) {
  const [note, setNote] = useState(lead.adminNote);
  const [meeting, setMeeting] = useState(lead.meetingAt);
  const color = STATUS_COLOR[lead.status] ?? "#00F0FF";

  return (
    <div style={{ border: `1px solid ${color}33`, background: "rgba(255,255,255,0.015)", padding: "18px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ minWidth: 240, flex: 1 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
            <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.15rem" }}>
              {lead.name || "(no name)"}
            </span>
            <a href={`mailto:${lead.email}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#00F0FF", textDecoration: "none" }}>
              {lead.email}
            </a>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7a7f93", marginBottom: 8 }}>
            {fmt(lead.receivedAt)} · <span style={{ color: "#FF2E97" }}>{lead.type}</span> · via {lead.source}
          </div>
          {lead.message && (
            <p style={{ color: "#c4c8d6", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 8, maxWidth: "70ch" }}>
              {lead.message}
            </p>
          )}
          {lead.meta && Object.keys(lead.meta).length > 0 && (
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#9aa0b3" }}>
              {Object.entries(lead.meta).map(([k, v]) => (
                <span key={k} style={{ marginRight: 12 }}>
                  {k}: <b style={{ color: "#A855F7" }}>{String(v)}</b>
                </span>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 200 }}>
          <select
            value={lead.status}
            onChange={(e) => onPatch(lead.id, { status: e.target.value })}
            className="form-input"
            style={{ borderColor: `${color}66`, color }}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#7a7f93", letterSpacing: "0.1em" }}>
            MEETING
          </label>
          <input
            type="datetime-local"
            value={meeting}
            onChange={(e) => setMeeting(e.target.value)}
            onBlur={() => meeting !== lead.meetingAt && onPatch(lead.id, { meetingAt: meeting })}
            className="form-input"
          />
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onBlur={() => note !== lead.adminNote && onPatch(lead.id, { adminNote: note })}
          placeholder="internal note (saved on blur)…"
          className="form-input"
          style={{ minHeight: 52, resize: "vertical" }}
        />
      </div>
    </div>
  );
}

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function Center({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      {children}
    </div>
  );
}

function btn(color: string): React.CSSProperties {
  return {
    width: "100%",
    marginTop: 12,
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "13px 18px",
    color: "#0A0A12",
    background: color,
    border: "none",
    cursor: "pointer",
  };
}

const btnInline: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12,
  padding: "9px 16px",
  background: "transparent",
  border: "1px solid",
  cursor: "pointer",
};
