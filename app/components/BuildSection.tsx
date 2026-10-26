"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { getService } from "../lib/catalog";

const BUILD_SLUGS = ["forward-deployed-engineering", "ai-native-building"] as const;

function BuildCard({ slug, delay }: { slug: string; delay: number }) {
  const s = getService(slug);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  if (!s) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, borderColor: `${s.accent}88` }}
      style={{
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${s.accent}40`,
        background: "linear-gradient(170deg,rgba(255,255,255,0.03),rgba(255,255,255,0.006))",
        padding: "32px 30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -70,
          right: -70,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${s.accent}2e, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10.5,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: s.accent,
          marginBottom: 14,
        }}
      >
        {s.eyebrow}
      </div>
      <h3
        style={{
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 700,
          fontSize: "1.7rem",
          lineHeight: 1.08,
          marginBottom: 12,
          color: "#E5E7EB",
        }}
      >
        {s.name}
      </h3>
      <p style={{ color: "#aeb3c4", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 18 }}>
        {s.tagline}
      </p>
      <ul style={{ listStyle: "none", display: "grid", gap: 9, margin: "0 0 24px", padding: 0, flex: 1 }}>
        {s.outcomes.slice(0, 3).map((o) => (
          <li
            key={o}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12.5,
              color: "#b9bdce",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: s.accent, fontWeight: 700, textShadow: `0 0 8px ${s.accent}` }}>▹</span>
            {o}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${s.slug}`}
        style={{
          alignSelf: "flex-start",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: 12.5,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "12px 20px",
          color: "#0A0A12",
          background: s.accent,
          clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          boxShadow: `0 0 22px ${s.accent}44`,
        }}
      >
        &gt; Explore {s.shortName}
      </Link>
    </motion.div>
  );
}

export default function BuildSection() {
  return (
    <section id="build" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 20, maxWidth: 820 }}>
          <Eyebrow>Build with kenai</Eyebrow>
          <h2
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,5vw,3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.02,
              margin: ".4rem 0 1rem",
            }}
          >
            We don&apos;t just teach AI.{" "}
            <span style={{ color: "#FF2E97", textShadow: "0 0 22px rgba(255,46,151,.5)" }}>
              We build it with you.
            </span>
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "62ch", lineHeight: 1.6 }}>
            Training makes your team capable. But when you need AI <em>in production now</em>,
            kenai embeds and builds it with you. This is the real differentiator — most
            trainers stop at the slides; we ship the system.
          </p>
        </SectionReveal>

        <div className="build-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 30 }}>
          {BUILD_SLUGS.map((slug, i) => (
            <BuildCard key={slug} slug={slug} delay={i * 0.1} />
          ))}
        </div>

        <SectionReveal delay={0.2} style={{ marginTop: 26 }}>
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12.5,
              color: "#7a7f93",
            }}
          >
            <span style={{ color: "#00F0FF" }}>&gt;_</span>
            Have a real problem to ship?
            <Link href="/#contact" style={{ color: "#00F0FF", textDecoration: "none", borderBottom: "1px solid rgba(0,240,255,0.4)" }}>
              Tell us what to build →
            </Link>
          </div>
        </SectionReveal>
      </div>
      <style>{`@media(max-width:820px){.build-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
