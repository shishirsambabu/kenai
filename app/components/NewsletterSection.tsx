"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";

/**
 * Newsletter capture (community). Funnels into the same lead pipeline as the
 * contact form and the readiness tool, tagged as a newsletter signup.
 */
export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async () => {
    if (!email.trim() || !email.includes("@")) {
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "Newsletter",
          source: "homepage-newsletter",
        }),
      });
      setState(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="newsletter" style={{ position: "relative", padding: "100px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(0,240,255,0.2)",
            background:
              "linear-gradient(135deg,rgba(0,240,255,0.06),rgba(13,13,24,0.92) 55%,rgba(168,85,247,0.06))",
            padding: "clamp(34px,5vw,56px)",
            clipPath:
              "polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))",
          }}
        >
          <div className="nl-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 36, alignItems: "center" }}>
            <SectionReveal>
              <Eyebrow>The signal · newsletter</Eyebrow>
              <h2
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.7rem,4vw,2.6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  margin: ".4rem 0 .8rem",
                }}
              >
                One practical AI idea,{" "}
                <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
                  every week.
                </span>
              </h2>
              <p style={{ color: "#aeb3c4", fontSize: "1.06rem", maxWidth: "48ch", lineHeight: 1.6 }}>
                No hype, no spam. Just one usable prompt, workflow or framework from
                live consulting and training work — straight to your inbox.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              {state === "done" ? (
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#00F0FF",
                    fontSize: 14,
                    border: "1px solid rgba(0,240,255,0.3)",
                    padding: "18px 20px",
                    background: "rgba(0,240,255,0.05)",
                  }}
                >
                  ✦ You&apos;re in. Watch your inbox for the next signal.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="form-input"
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                  />
                  <motion.button
                    onClick={submit}
                    disabled={state === "sending"}
                    whileHover={{ y: -2 }}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "15px 24px",
                      color: "#0A0A12",
                      background: "#00F0FF",
                      border: "none",
                      cursor: "none",
                      clipPath:
                        "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                    }}
                  >
                    {state === "sending" ? "..." : "> subscribe"}
                  </motion.button>
                  {state === "error" && (
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#FF2E97", fontSize: 12 }}>
                      &gt; enter a valid email
                    </div>
                  )}
                </div>
              )}
            </SectionReveal>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:760px){.nl-grid{grid-template-columns:1fr!important;gap:24px!important}}`}</style>
    </section>
  );
}
