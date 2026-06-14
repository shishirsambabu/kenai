"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { SERVICES, accentHex } from "../lib/services";

const WRAP = "min(1180px,92vw)";

export default function ServicesIndex() {
  return (
    <>
      <header style={{ position: "relative", padding: "150px 0 50px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 620,
            height: 460,
            borderRadius: "50%",
            filter: "blur(110px)",
            background: "radial-gradient(circle, rgba(0,240,255,0.28), transparent 70%)",
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
            <span style={{ color: "#E5E7EB" }}>services</span>
          </nav>
          <Eyebrow>Service architecture</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem,7vw,4.6rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            Every way to{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>
              do AI
            </span>
            , with kenai.
          </h1>
          <p
            style={{
              color: "#aeb3c4",
              fontSize: "clamp(1.05rem,1.8vw,1.3rem)",
              maxWidth: "62ch",
              lineHeight: 1.6,
            }}
          >
            From a single hands-on workshop to a full organisation-wide transformation. Every service
            is practitioner-led, outcome-focused, and built to leave your team genuinely capable.
          </p>
        </div>
      </header>

      <section style={{ padding: "40px 0 90px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <div
            className="svc-index-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}
          >
            {SERVICES.map((s, i) => {
              const accent = accentHex(s.accent);
              return (
                <SectionReveal key={s.slug} delay={(i % 3) * 0.06}>
                  <motion.div whileHover={{ y: -6 }} style={{ height: "100%" }}>
                    <Link
                      href={`/services/${s.slug}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        padding: "24px 24px 26px",
                        background: "#0d0d18",
                        border: "1px solid rgba(0,240,255,0.14)",
                        textDecoration: "none",
                        clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)",
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
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: accent,
                          marginBottom: 12,
                        }}
                      >
                        {s.module}
                      </span>
                      <h2
                        style={{
                          fontFamily: "'Chakra Petch', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.5rem",
                          color: "#E5E7EB",
                          marginBottom: 10,
                          lineHeight: 1.1,
                        }}
                      >
                        {s.name}
                      </h2>
                      <p style={{ color: "#9aa0b3", fontSize: "1rem", lineHeight: 1.5, flexGrow: 1 }}>
                        {s.tagline}
                      </p>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 12,
                          color: accent,
                          marginTop: 18,
                        }}
                      >
                        explore &gt;_
                      </span>
                    </Link>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){.svc-index-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.svc-index-grid{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}
