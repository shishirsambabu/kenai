"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { SERVICES, accentHex } from "../lib/services";

function ServiceRow({ index }: { index: number }) {
  const s = SERVICES[index];
  const accent = accentHex(s.accent);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.05, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Link
        href={`/services/${s.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "20px 20px 22px",
          border: "1px solid rgba(0,240,255,0.12)",
          background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
          textDecoration: "none",
          transition: "border-color .2s, transform .2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${accent}88`;
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,240,255,0.12)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: accent,
            marginBottom: 9,
          }}
        >
          {s.module}
        </span>
        <span
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            fontWeight: 700,
            fontSize: "1.18rem",
            color: "#E5E7EB",
            lineHeight: 1.15,
          }}
        >
          {s.name}
        </span>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 44, maxWidth: 760 }}>
          <Eyebrow>Services</Eyebrow>
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
            A service for every{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              way in.
            </span>
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch" }}>
            Consulting, training, automation and bespoke builds — each with its own deep-dive page,
            process and FAQs. Explore where AI fits your team.
          </p>
        </SectionReveal>

        <div
          className="svc-home-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}
        >
          {SERVICES.map((_, i) => (
            <ServiceRow key={SERVICES[i].slug} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.1}>
          <div style={{ marginTop: 34 }}>
            <Link
              href="/services"
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
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                cursor: "none",
              }}
            >
              &gt; View all services
            </Link>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media(max-width:900px){.svc-home-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:680px){.svc-home-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}
