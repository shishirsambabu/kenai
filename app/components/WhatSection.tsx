"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";

const CARDS = [
  {
    num: "// 01",
    title: "AI for HR & L&D",
    body: "Consulting and training that helps HR teams adopt AI for hiring, onboarding, ops and people decisions — responsibly and fast.",
    href: "/services/ai-training-for-hr",
  },
  {
    num: "// 02",
    title: "AI for business",
    body: "Automation and AI training for corporates and leaders. Cut busywork, ship faster, and make AI a daily working tool — not a buzzword.",
    href: "/services/ai-training-for-business",
  },
  {
    num: "// 03",
    title: "AI for colleges",
    body: "Industry-ready AI & automation programs for students and faculty. Bridge the gap between the syllabus and what the market actually needs.",
    href: "/services/ai-training-for-colleges",
  },
];

function DoCard({ num, title, body, href, delay }: { num: string; title: string; body: string; href: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -5, borderColor: "rgba(0,240,255,0.4)" }}
      style={{
        position: "relative",
        padding: "30px 26px",
        background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
        border: "1px solid rgba(0,240,255,0.14)",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 120% at 0 0,rgba(0,240,255,.1),transparent 45%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 26,
          color: "#00F0FF",
          textShadow: "0 0 16px rgba(0,240,255,.5)",
        }}
      >
        &gt;_
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#FF2E97",
          fontSize: 12,
          letterSpacing: "0.2em",
          margin: "10px 0",
        }}
      >
        {num}
      </div>
      <h3
        style={{
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 600,
          fontSize: "1.5rem",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p style={{ color: "#9aa0b3", fontSize: "1.02rem", marginBottom: 16 }}>{body}</p>
      <Link
        href={href}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          letterSpacing: "0.06em",
          color: "#00F0FF",
          textDecoration: "none",
          position: "relative",
          zIndex: 1,
        }}
      >
        &gt; Explore this service →
      </Link>
    </motion.div>
  );
}

export default function WhatSection() {
  return (
    <section id="what" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 54, maxWidth: 760 }}>
          <Eyebrow>What kenai does</Eyebrow>
          <h2
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              lineHeight: 1.02,
              fontSize: "clamp(2rem,5vw,3.4rem)",
              letterSpacing: "-0.01em",
              margin: ".5rem 0 1rem",
            }}
          >
            Practical AI capability,{" "}
            <span
              style={{
                color: "#00F0FF",
                textShadow: "0 0 22px rgba(0,240,255,.55)",
              }}
            >
              built into your team.
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem,1.5vw,1.18rem)",
              color: "#aeb3c4",
              maxWidth: "60ch",
            }}
          >
            We don&apos;t hand you slides and leave. kenai turns HR teams, corporates,
            leaders and students into people who can actually <em>do</em> AI —
            workflows, automation, judgment. Real outcomes, hands on keyboard.
          </p>
        </SectionReveal>

        <div className="do-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {CARDS.map((c, i) => (
            <DoCard key={c.num} {...c} delay={i * 0.1} />
          ))}
        </div>
      </div>
      <style>{`@media(max-width:820px){.do-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
