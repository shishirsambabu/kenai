"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import SplitText from "./SplitText";
import Eyebrow from "./Eyebrow";
import SectionReveal from "./SectionReveal";

const PRODUCTS = [
  {
    id: "p01",
    tag: "build_kit",
    badge: "BESTSELLER",
    badgeColor: "#FF2E97",
    title: "AI Co-Pilot Build Kit",
    subtitle: "for HR & L&D",
    desc: "Everything you need to build your own AI co-pilot for HR and L&D work — prompts, workflows, templates and a step-by-step build guide. Hands-on from day one.",
    price: "₹999",
    link: "https://shishirbabu.gumroad.com/l/ksmpwr",
    features: ["Prompts + workflows", "HR · L&D ready", "Instant download"],
    glow: "rgba(255,46,151,0.25)",
    accent: "#FF2E97",
  },
  {
    id: "p02",
    tag: "skill_system",
    badge: "DEEP DIVE",
    badgeColor: "#A855F7",
    title: "Deep Practice",
    subtitle: "Complete L&D Skill System for Claude",
    desc: "The most thorough L&D skill system built for Claude. Learn to design, deliver and evaluate learning with AI as your co-facilitator — not just a writing tool.",
    price: "$49",
    link: "https://shishirbabu.gumroad.com/l/beeery",
    features: ["Full L&D lifecycle", "Claude-native workflow", "Practice exercises"],
    glow: "rgba(168,85,247,0.22)",
    accent: "#A855F7",
  },
  {
    id: "p03",
    tag: "skill_pack",
    badge: "POPULAR",
    badgeColor: "#00F0FF",
    title: "L&D Skill Pack",
    subtitle: "for Claude.ai",
    desc: "A focused, practical skill pack for L&D professionals using Claude.ai. Covers instructional design, content creation, assessment and learner engagement.",
    price: "$29",
    link: "https://shishirbabu.gumroad.com/l/rpksk",
    features: ["Instructional design", "Content & assessment", "Claude.ai optimised"],
    glow: "rgba(0,240,255,0.2)",
    accent: "#00F0FF",
  },
  {
    id: "p04",
    tag: "automation_bundle",
    badge: "NEW",
    badgeColor: "#FF2E97",
    title: "AI Job Search OS",
    subtitle: "Automation Bundle",
    desc: "A complete automation system for your job search — AI-powered resume tailoring, cover letter generation, outreach sequences and application tracking. Done-for-you.",
    price: "₹1999",
    link: "https://shishirbabu.gumroad.com/l/hesvfe",
    features: ["Resume + cover letter AI", "Outreach automation", "Full job search OS"],
    glow: "rgba(255,46,151,0.2)",
    accent: "#FF2E97",
  },
];

function ProductCard({
  product,
  delay,
}: {
  product: (typeof PRODUCTS)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard intensity={6}>
        <motion.div
          whileHover={{ boxShadow: `0 0 60px ${product.glow}, 0 30px 60px rgba(0,0,0,0.6)` }}
          style={{
            position: "relative",
            background: "linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
            border: `1px solid rgba(${product.accent === "#00F0FF" ? "0,240,255" : product.accent === "#FF2E97" ? "255,46,151" : "168,85,247"},0.2)`,
            overflow: "hidden",
            transition: "border-color 0.3s",
            height: "100%",
          }}
        >
          {/* Glow corner */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${product.glow}, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          {/* Top bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "1px solid rgba(0,240,255,0.08)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7a7f93",
            }}
          >
            <span style={{ color: "#00F0FF" }}>{product.tag}</span>
            <span
              style={{
                color: "#0A0A12",
                background: product.badgeColor,
                padding: "2px 8px",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
              }}
            >
              {product.badge}
            </span>
          </div>

          <div style={{ padding: "22px 22px 26px" }}>
            <div
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 700,
                fontSize: "1.6rem",
                lineHeight: 1.1,
                marginBottom: 4,
              }}
            >
              {product.title}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: product.accent,
                letterSpacing: "0.08em",
                marginBottom: 14,
                textShadow: `0 0 12px ${product.accent}88`,
              }}
            >
              {product.subtitle}
            </div>
            <p
              style={{
                color: "#9aa0b3",
                fontSize: "0.98rem",
                lineHeight: 1.65,
                marginBottom: 18,
              }}
            >
              {product.desc}
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                marginBottom: 22,
              }}
            >
              {product.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "#b9bdce",
                    display: "flex",
                    gap: 9,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: product.accent,
                      textShadow: `0 0 8px ${product.accent}`,
                      fontWeight: 700,
                    }}
                  >
                    ✦
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: product.accent,
                  textShadow: `0 0 20px ${product.accent}88`,
                }}
              >
                {product.price}
              </span>
              <motion.a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 18px",
                  color: "#0A0A12",
                  background: product.accent,
                  clipPath:
                    "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)",
                  cursor: "none",
                  boxShadow: `0 0 24px ${product.glow}`,
                }}
              >
                Get it &gt;
              </motion.a>
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

export default function GumroadSection() {
  return (
    <section
      id="products"
      style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,46,151,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: "min(1180px,92vw)",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <SectionReveal style={{ marginBottom: 64 }}>
          <Eyebrow>Digital products</Eyebrow>
          <SplitText
            text="Tools & playbooks built from real work."
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,5vw,3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.02,
              margin: ".5rem 0 1rem",
            }}
            accentWords={["real", "work."]}
            accentColor="#FF2E97"
            delay={0.1}
          />
          <p
            style={{
              fontSize: "clamp(1rem,1.5vw,1.18rem)",
              color: "#aeb3c4",
              maxWidth: "60ch",
              marginBottom: 18,
            }}
          >
            Practical resources you can use today. Prompts, playbooks, templates
            and courses — all from live consulting and training work.
          </p>
          <a
            href="https://shishirbabu.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#00F0FF",
              textDecoration: "none",
              letterSpacing: "0.08em",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid rgba(0,240,255,0.4)",
              paddingBottom: 2,
              transition: "color 0.2s",
            }}
          >
            &gt;_ view all on gumroad ↗
          </a>
        </SectionReveal>

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.products-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.products-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
