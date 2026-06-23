"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface LeadFormProps {
  /** Where this lead originated, stored with the submission */
  source: string;
  /** Options for the "I need" select. Omit to hide the field. */
  interestOptions?: string[];
  /** Show the free-text details field */
  showMessage?: boolean;
  /** Button label */
  submitLabel?: string;
  /** Header label in the terminal chrome */
  terminalLabel?: string;
  /** Called after a successful submission */
  onSuccess?: (email: string) => void;
  /** Compact mode: just name + email (for gated lead magnets) */
  compact?: boolean;
}

export default function LeadForm({
  source,
  interestOptions,
  showMessage = false,
  submitLabel = "> transmit request",
  terminalLabel = "kenai@booking: new_request",
  onSuccess,
  compact = false,
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(interestOptions?.[0] ?? "");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ text: string; isError: boolean } | null>(null);

  const submit = async () => {
    if (!name.trim() || !email.trim()) {
      setStatus({ text: "> error: name & email required", isError: true });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type, message: msg, source }),
      });
      const data = await res.json().catch(() => ({ ok: res.ok }));
      if (!res.ok || !data.ok) {
        setStatus({ text: `> error: ${data.error || "something went wrong"}`, isError: true });
        setLoading(false);
        return;
      }
      setStatus({ text: `> received ✦ we'll reply to ${email}`, isError: false });
      onSuccess?.(email);
      setName("");
      setEmail("");
      setMsg("");
    } catch {
      setStatus({ text: "> error: network issue — try again or email hello@kenai.in", isError: true });
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#0d0d18",
        border: "1px solid rgba(0,240,255,0.14)",
        clipPath:
          "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px",
          borderBottom: "1px solid rgba(0,240,255,0.14)",
          background: "rgba(0,240,255,0.03)",
        }}
      >
        {["#FF2E97", "#A855F7", "#00F0FF"].map((c) => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", display: "inline-block", background: c }} />
        ))}
        <span style={{ marginLeft: 8, color: "#00F0FF", fontSize: 11, letterSpacing: "0.1em" }}>
          {terminalLabel}
        </span>
      </div>

      <div style={{ padding: 22 }}>
        <Field label="name">
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            autoComplete="name"
          />
        </Field>
        <Field label="email">
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            autoComplete="email"
          />
        </Field>

        {!compact && interestOptions && interestOptions.length > 0 && (
          <Field label="i need">
            <select value={type} onChange={(e) => setType(e.target.value)} className="form-input">
              {interestOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        )}

        {!compact && showMessage && (
          <Field label="details">
            <textarea
              placeholder="team size, goals, timeline..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="form-input"
              style={{ resize: "vertical", minHeight: 90 }}
            />
          </Field>
        )}

        <motion.button
          onClick={submit}
          disabled={loading}
          whileHover={loading ? undefined : { y: -2, boxShadow: "0 0 28px rgba(0,240,255,0.6)", background: "#7df6ff" }}
          style={{
            width: "100%",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "15px 26px",
            color: "#0A0A12",
            background: loading ? "#3a8a92" : "#00F0FF",
            border: "none",
            clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
            cursor: loading ? "wait" : "none",
            transition: "background .18s",
          }}
        >
          {loading ? "> transmitting..." : submitLabel}
        </motion.button>

        {status && (
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: status.isError ? "#FF2E97" : "#00F0FF",
              fontSize: 13,
              marginTop: 14,
              lineHeight: 1.5,
            }}
          >
            {status.text}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#00F0FF",
          marginBottom: 7,
        }}
      >
        <span style={{ color: "#FF2E97" }}>&gt; </span>
        {label}
      </label>
      {children}
    </div>
  );
}
