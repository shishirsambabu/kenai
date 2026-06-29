"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { track } from "../lib/analytics";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("A workshop");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<{ text: string; isError: boolean } | null>(null);

  const submit = async () => {
    if (!name.trim() || !email.trim()) {
      setStatus({ text: "> error: name & email required", isError: true });
      return;
    }
    setStatus({ text: "> transmitting...", isError: false });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          type,
          message: msg,
          source: "homepage-contact",
        }),
      });
      if (!res.ok) throw new Error("failed");
      track("lead_submit", { source: "contact", type });
      setStatus({
        text: `> request queued for "${type}" — we'll reply to ${email} ✦`,
        isError: false,
      });
      setName("");
      setEmail("");
      setMsg("");
    } catch {
      setStatus({
        text: `> network error — email hello@kenai.in directly`,
        isError: true,
      });
    }
  };

  return (
    <section id="contact" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <SectionReveal>
              <Eyebrow>Contact / booking</Eyebrow>
            </SectionReveal>
            <SectionReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem,5vw,3.4rem)",
                  letterSpacing: "-0.01em",
                  margin: ".5rem 0 1rem",
                  lineHeight: 1.02,
                }}
              >
                Ready to{" "}
                <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
                  do
                </span>{" "}
                AI?
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch", marginBottom: 26 }}>
                Book a workshop, scope a bootcamp, or get advisory for your org. Tell us what your
                team needs to learn — we&apos;ll design the path.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: "13.5px" }}>
                <a
                  href="mailto:hello@kenai.in"
                  style={{ color: "#E5E7EB", textDecoration: "none", display: "flex", gap: 12, alignItems: "center", transition: "color .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00F0FF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5E7EB")}
                >
                  <b style={{ color: "#FF2E97" }}>&gt;</b> hello@kenai.in
                </a>
                <a
                  href="https://kenai.in"
                  style={{ color: "#E5E7EB", textDecoration: "none", display: "flex", gap: 12, alignItems: "center", transition: "color .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00F0FF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5E7EB")}
                >
                  <b style={{ color: "#FF2E97" }}>&gt;</b> kenai.in
                </a>
                <span style={{ color: "#E5E7EB", display: "flex", gap: 12, alignItems: "center" }}>
                  <b style={{ color: "#FF2E97" }}>&gt;</b> Based in India · available globally
                </span>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.15}>
            <div
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(0,240,255,0.14)",
                clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))",
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
                  kenai@booking: new_request
                </span>
              </div>

              <div style={{ padding: 22 }}>
                {[
                  { label: "name", id: "name", type: "text", placeholder: "your name", val: name, set: setName },
                  { label: "email", id: "email", type: "email", placeholder: "you@company.com", val: email, set: setEmail },
                ].map((f) => (
                  <div key={f.id} style={{ marginBottom: 16 }}>
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
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={f.val}
                      onChange={(e) => f.set(e.target.value)}
                      className="form-input"
                      autoComplete="off"
                    />
                  </div>
                ))}

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
                    <span style={{ color: "#FF2E97" }}>&gt; </span>i need
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="form-input"
                  >
                    {["A workshop", "A bootcamp", "Corporate training", "Advisory", "Something for a college"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

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
                    <span style={{ color: "#FF2E97" }}>&gt; </span>details
                  </label>
                  <textarea
                    placeholder="team size, goals, timeline..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="form-input"
                    style={{ resize: "vertical", minHeight: 90 }}
                  />
                </div>

                <motion.button
                  onClick={submit}
                  whileHover={{ y: -2, boxShadow: "0 0 28px rgba(0,240,255,0.6)", background: "#7df6ff" }}
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
                    background: "#00F0FF",
                    border: "none",
                    clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                    cursor: "none",
                    transition: "background .18s",
                  }}
                >
                  &gt; transmit request
                </motion.button>

                {status && (
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: status.isError ? "#00F0FF" : "#FF2E97",
                      fontSize: 13,
                      marginTop: 14,
                    }}
                  >
                    {status.text}
                  </div>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`@media(max-width:820px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
