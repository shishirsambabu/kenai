"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { CASE_STUDIES, caseAccent } from "../lib/caseStudies";

const WRAP = "min(1100px,92vw)";

export default function CaseStudiesIndex() {
  return (
    <>
      <header style={{ position: "relative", padding: "150px 0 50px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 440,
            borderRadius: "50%",
            filter: "blur(110px)",
            background: "radial-gradient(circle, rgba(255,46,151,0.22), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: WRAP, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#7a7f93",
              marginBottom: 22,
              display: "flex",
              gap: 8,
            }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>
              home
            </Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>case-studies</span>
          </nav>
          <Eyebrow>Proof</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem,7vw,4.4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            Teams that started{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>
              building.
            </span>
          </h1>
          <p style={{ color: "#aeb3c4", fontSize: "clamp(1.05rem,1.8vw,1.3rem)", maxWidth: "60ch", lineHeight: 1.6 }}>
            Real engagements, real outcomes. How kenai takes HR teams, businesses and colleges from
            AI-curious to genuinely capable — and what we learned doing it.
          </p>
        </div>
      </header>

      <section style={{ padding: "30px 0 90px" }}>
        <div style={{ width: WRAP, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
          {CASE_STUDIES.map((c, i) => {
            const accent = caseAccent(c.accent);
            return (
              <SectionReveal key={c.slug} delay={(i % 2) * 0.06}>
                <motion.div whileHover={{ y: -4 }}>
                  <Link
                    href={`/case-studies/${c.slug}`}
                    style={{
                      display: "block",
                      padding: "30px 30px 32px",
                      background: "#0d0d18",
                      border: "1px solid rgba(0,240,255,0.14)",
                      textDecoration: "none",
                      clipPath: "polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,0 100%)",
                      transition: "border-color .2s, box-shadow .2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${accent}88`;
                      e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,.5), 0 0 30px ${accent}22`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,240,255,0.14)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        flexWrap: "wrap",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        marginBottom: 14,
                      }}
                    >
                      <span style={{ color: accent }}>
                        {c.ref} · {c.sector}
                      </span>
                      <span style={{ color: "#7a7f93" }}>{c.client}</span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Chakra Petch', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.4rem,3vw,2rem)",
                        color: "#E5E7EB",
                        lineHeight: 1.1,
                        marginBottom: 12,
                      }}
                    >
                      {c.title}
                    </h2>
                    <p style={{ color: "#9aa0b3", fontSize: "1.08rem", lineHeight: 1.55, maxWidth: "70ch" }}>
                      {c.summary}
                    </p>
                    <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 20 }}>
                      {c.results.slice(0, 3).map((r) => (
                        <span key={r.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                          <b
                            style={{
                              fontFamily: "'Chakra Petch', sans-serif",
                              fontWeight: 700,
                              fontSize: "1.25rem",
                              color: accent,
                            }}
                          >
                            {r.metric}
                          </b>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: "#7a7f93", letterSpacing: "0.06em" }}>
                            {r.label}
                          </span>
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: accent,
                        marginTop: 20,
                        display: "inline-block",
                      }}
                    >
                      read case study &gt;_
                    </span>
                  </Link>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
