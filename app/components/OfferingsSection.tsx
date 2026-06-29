"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";

const OFFERINGS = [
  {
    tag: "module_01",
    sub: "half / full day",
    title: "Work",
    accent: "shops",
    body: "High-impact, hands-on sessions that get a team using AI tools the same day. Zero fluff, immediate wins.",
    href: "/services/ai-workshops",
    list: [
      "Live build alongside the trainer",
      "Role-specific use cases (HR, ops, leadership)",
      "Take-home prompt & automation kit",
    ],
  },
  {
    tag: "module_02",
    sub: "multi-session",
    title: "Boot",
    accent: "camps",
    body: "Structured, multi-week programs that take a cohort from curious to genuinely capable — projects, not theory.",
    href: "/services/ai-bootcamps",
    list: [
      "Progressive skill path with real projects",
      "Automation & agent building",
      "Capstone + certification",
    ],
  },
  {
    tag: "module_03",
    sub: "org-wide",
    title: "Corporate ",
    accent: "training",
    body: "Rollouts tailored to your stack, policies and goals. We meet your teams where they work and embed AI into it.",
    href: "/services/corporate-ai-training",
    list: [
      "Custom curriculum to your workflows",
      "Tool integration (M365, Google, n8n & more)",
      "Manager enablement & adoption tracking",
    ],
  },
  {
    tag: "module_04",
    sub: "strategic",
    title: "Ad",
    accent: "visory",
    body: "Fractional AI guidance for leaders. Strategy, governance and the roadmap to make adoption stick — not stall.",
    href: "/services/ai-advisory",
    list: [
      "AI adoption strategy & roadmap",
      "Responsible-use & governance guardrails",
      "On-call expert for your team",
    ],
  },
];

function OffCard({
  tag, sub, title, accent, body, list, href, delay,
}: (typeof OFFERINGS)[0] & { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{
        y: -6,
        borderColor: "rgba(255,46,151,0.5)",
        boxShadow: "0 24px 60px rgba(0,0,0,.55),0 0 40px rgba(255,46,151,.12)",
      }}
      style={{
        position: "relative",
        background: "#0d0d18",
        border: "1px solid rgba(0,240,255,0.14)",
        clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 16,
          height: 16,
          background: "#00F0FF",
          clipPath: "polygon(100% 0,0 0,100% 100%)",
          boxShadow: "0 0 14px #00F0FF",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(0,240,255,0.14)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#7a7f93",
        }}
      >
        <span style={{ color: "#00F0FF" }}>{tag}</span>
        <span>{sub}</span>
      </div>
      <div style={{ padding: "24px 22px 28px" }}>
        <h3
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            fontWeight: 700,
            fontSize: "1.7rem",
            marginBottom: 8,
          }}
        >
          {title}
          <span style={{ color: "#FF2E97" }}>{accent}</span>
        </h3>
        <p style={{ color: "#9aa0b3", marginBottom: 18, fontSize: "1.04rem" }}>{body}</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
          {list.map((item) => (
            <li
              key={item}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12.5px",
                color: "#b9bdce",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "#00F0FF", fontWeight: 700 }}>›</span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          style={{
            display: "inline-block",
            marginTop: 18,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.06em",
            color: "#FF2E97",
            textDecoration: "none",
          }}
        >
          &gt; See details →
        </Link>
      </div>
    </motion.article>
  );
}

export default function OfferingsSection() {
  return (
    <section id="offerings" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 54, maxWidth: 760 }}>
          <Eyebrow>Offerings</Eyebrow>
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
            Pick your{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              path.
            </span>
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch" }}>
            From a single high-energy workshop to a full org rollout. Every format is hands-on and outcome-led.
          </p>
        </SectionReveal>

        <div
          className="off-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}
        >
          {OFFERINGS.map((o, i) => (
            <OffCard key={o.tag} {...o} delay={i * 0.08} />
          ))}
        </div>
      </div>
      <style>{`@media(max-width:820px){.off-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
