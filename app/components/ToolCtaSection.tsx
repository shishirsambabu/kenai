"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function ToolCtaSection() {
  return (
    <section style={{ position: "relative", padding: "70px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(0,240,255,0.3)",
              background: "#0d0d18",
              padding: "clamp(30px,5vw,48px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 28,
              flexWrap: "wrap",
              clipPath: "polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 0% 50%, rgba(0,240,255,0.12), transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", maxWidth: "54ch" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FF2E97",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                // free tool · 2 minutes
              </span>
              <h2
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem,3.6vw,2.4rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                  marginBottom: 10,
                }}
              >
                How AI-ready is your{" "}
                <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
                  organisation?
                </span>
              </h2>
              <p style={{ color: "#aeb3c4", fontSize: "1.05rem", lineHeight: 1.6 }}>
                Take the free AI Readiness Assessment — six quick questions, an instant score, and a
                tailored next step for your team.
              </p>
            </div>
            <motion.div whileHover={{ y: -3 }} style={{ position: "relative" }}>
              <Link
                href="/tools/ai-readiness"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 30px",
                  color: "#0A0A12",
                  background: "#00F0FF",
                  boxShadow: "0 0 28px rgba(0,240,255,0.5)",
                  clipPath: "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                  cursor: "none",
                  whiteSpace: "nowrap",
                }}
              >
                &gt; Take the assessment
              </Link>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
