"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

/** Homepage spotlight for the flagship 3-Day AI Bootcamp (₹6,999). */
export default function BootcampBanner() {
  return (
    <section id="bootcamp" style={{ position: "relative", padding: "70px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,46,151,0.32)",
              background:
                "linear-gradient(120deg,rgba(255,46,151,0.10),rgba(13,13,24,0.92) 45%,rgba(0,240,255,0.08))",
              padding: "clamp(28px,4vw,44px)",
              clipPath:
                "polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))",
            }}
          >
            <motion.div
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: -80,
                right: -60,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,46,151,0.4), transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="bcb-grid"
              style={{ display: "grid", gridTemplateColumns: "1.4fr .6fr", gap: 28, alignItems: "center", position: "relative", zIndex: 1 }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#FF2E97",
                    marginBottom: 12,
                  }}
                >
                  ★ Flagship program
                </div>
                <h2
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.7rem,4vw,2.6rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                    marginBottom: 12,
                  }}
                >
                  The 3-Day AI Bootcamp —{" "}
                  <span style={{ color: "#FF2E97", textShadow: "0 0 22px rgba(255,46,151,.5)" }}>
                    ₹6,999
                  </span>
                </h2>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: "#c4c8d6",
                  }}
                >
                  {[
                    "Day 1 · Claude Architecture",
                    "Day 2 · Cowork & Claude Code",
                    "Day 3 · Automation w/ Codex",
                  ].map((d, i) => (
                    <span
                      key={d}
                      style={{
                        border: `1px solid ${["#00F0FF", "#A855F7", "#FF2E97"][i]}44`,
                        background: `${["#00F0FF", "#A855F7", "#FF2E97"][i]}10`,
                        padding: "6px 12px",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link
                  href="/bootcamp"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "16px 30px",
                    color: "#0A0A12",
                    background: "#FF2E97",
                    boxShadow: "0 0 28px rgba(255,46,151,0.45)",
                    clipPath:
                      "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                  }}
                >
                  &gt; See the bootcamp
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
      <style>{`@media(max-width:760px){.bcb-grid{grid-template-columns:1fr!important;gap:20px!important}.bcb-grid > div:last-child{justify-content:flex-start!important}}`}</style>
    </section>
  );
}
