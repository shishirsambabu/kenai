"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { INDUSTRIES, industryAccent } from "../lib/industries";

function Chip({ index }: { index: number }) {
  const ind = INDUSTRIES[index];
  const accent = industryAccent(ind.accent);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 5) * 0.04, duration: 0.5 }}
    >
      <Link
        href={`/industries/${ind.slug}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 18px",
          border: "1px solid rgba(0,240,255,0.12)",
          background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
          textDecoration: "none",
          transition: "border-color .2s, transform .2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${accent}88`;
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,240,255,0.12)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 13 }}>›</span>
        <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 600, fontSize: "1.08rem", color: "#E5E7EB" }}>
          {ind.title}
        </span>
      </Link>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section id="industries" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 44, maxWidth: 760 }}>
          <Eyebrow>Industries</Eyebrow>
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
            AI for{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              your field.
            </span>
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch" }}>
            See exactly how AI applies to your function — use cases, workflows and outcomes built for
            how your team actually works.
          </p>
        </SectionReveal>

        <div
          className="ind-home-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}
        >
          {INDUSTRIES.map((_, i) => (
            <Chip key={INDUSTRIES[i].slug} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.1}>
          <div style={{ marginTop: 34 }}>
            <Link
              href="/industries"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 26px",
                color: "#00F0FF",
                background: "transparent",
                boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)",
                clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                cursor: "none",
              }}
            >
              &gt; Explore all industries
            </Link>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media(max-width:900px){.ind-home-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:560px){.ind-home-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}
