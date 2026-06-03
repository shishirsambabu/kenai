"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";

const TESTIMONIALS = [
  {
    quote:
      "Our HR team went from \"AI-curious\" to shipping real automations in a single bootcamp. Sam makes it click.",
    name: "Head of HR",
    org: "Enterprise · placeholder",
    initial: "H",
  },
  {
    quote:
      "Best AI session our students have had — hands-on, relevant, and zero corporate fluff. They built things they're proud of.",
    name: "Dean",
    org: "College · placeholder",
    initial: "D",
  },
  {
    quote:
      "Finally an AI trainer who actually does the work. The advisory roadmap alone paid for itself.",
    name: "Founder",
    org: "SMB · placeholder",
    initial: "F",
  },
];

const MARQUEE_ITEMS = [
  "HR TEAMS", "·", "CORPORATES", "·", "COLLEGES", "·", "STARTUPS", "·", "L&D LEADERS", "·",
  "HR TEAMS", "·", "CORPORATES", "·", "COLLEGES", "·", "STARTUPS", "·", "L&D LEADERS", "·",
];

function TCard({ quote, name, org, initial, delay }: (typeof TESTIMONIALS)[0] & { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -5, borderColor: "rgba(168,85,247,0.5)" }}
      style={{
        padding: "28px 26px",
        border: "1px solid rgba(0,240,255,0.14)",
        background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#A855F7",
          fontSize: 40,
          lineHeight: 0.6,
          opacity: 0.6,
        }}
      >
        &ldquo;
      </div>
      <p style={{ color: "#cfd3e0", fontSize: "1.06rem", margin: "10px 0 20px" }}>{quote}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            width: 34,
            height: 34,
            border: "1px solid #00F0FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', monospace",
            color: "#00F0FF",
            fontSize: 13,
            clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)",
          }}
        >
          {initial}
        </span>
        <span>
          <b
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontSize: "1rem",
              display: "block",
            }}
          >
            {name}
          </b>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#7a7f93",
              letterSpacing: "0.06em",
            }}
          >
            {org}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

export default function ProofSection() {
  return (
    <section id="proof" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 54, maxWidth: 760 }}>
          <Eyebrow>Social proof</Eyebrow>
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
            Teams that stopped{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              watching
            </span>{" "}
            and started building.
          </h2>
        </SectionReveal>

        <div
          className="tcards"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginBottom: 48 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TCard key={t.initial} {...t} delay={i * 0.1} />
          ))}
        </div>

        <SectionReveal>
          <div
            className="marquee-wrap"
            style={{
              overflow: "hidden",
              borderTop: "1px solid rgba(0,240,255,0.14)",
              borderBottom: "1px solid rgba(0,240,255,0.14)",
              padding: "22px 0",
              WebkitMaskImage:
                "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
              maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
            }}
          >
            <div className="mtrack">
              {MARQUEE_ITEMS.map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    color: "#7a7f93",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                    opacity: 0.6,
                    transition: "color .3s, opacity .3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00F0FF";
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#7a7f93";
                    (e.currentTarget as HTMLElement).style.opacity = "0.6";
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`@media(max-width:820px){.tcards{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
