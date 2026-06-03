"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import SplitText from "./SplitText";
import TiltCard from "./TiltCard";

const RESOURCES = [
  {
    id: "r01",
    type: "BLUEPRINT",
    typeColor: "#00F0FF",
    title: "Future-Ready HR Team: Free Claude Blueprint",
    desc: "A ready-to-use blueprint for making your HR team future-ready with Claude. Workflows, prompts and a step-by-step rollout guide — all free.",
    link: "https://shishirbabu.gumroad.com/l/ttueqr",
    icon: "◈",
    tags: ["HR", "Claude", "Free"],
  },
  {
    id: "r02",
    type: "BLUEPRINT",
    typeColor: "#FF2E97",
    title: "AI-Powered L&D Operating System",
    desc: "The complete L&D OS built on AI — free blueprint. Design, deliver and measure learning with an AI-native workflow from day one.",
    link: "https://shishirbabu.gumroad.com/l/ldai",
    icon: "▶",
    tags: ["L&D", "Blueprint", "Free"],
  },
  {
    id: "r03",
    type: "SYSTEM",
    typeColor: "#A855F7",
    title: "FREE HR AI System Blueprint",
    desc: "A practical HR AI system built with Claude + Excel. Automate repetitive HR tasks without any code — just Claude and a spreadsheet.",
    link: "https://shishirbabu.gumroad.com/l/qohfrx",
    icon: "⬡",
    tags: ["HR", "Claude", "Excel"],
  },
  {
    id: "r04",
    type: "AUDIT",
    typeColor: "#00F0FF",
    title: "The LinkedIn First Impression Audit",
    desc: "Find and fix the exact things holding your LinkedIn profile back — a structured audit you can do in under 30 minutes.",
    link: "https://shishirbabu.gumroad.com/l/oeyudp",
    icon: "⬢",
    tags: ["LinkedIn", "Career", "Free"],
  },
  {
    id: "r05",
    type: "BLUEPRINT",
    typeColor: "#FF2E97",
    title: "Presentation Blueprint for Claude",
    desc: "Build AI-powered decks with Gamma using Claude. A complete blueprint for creating stunning, structured presentations — fast.",
    link: "https://shishirbabu.gumroad.com/l/mrjaso",
    icon: "◉",
    tags: ["Presentations", "Gamma", "Claude"],
  },
  {
    id: "r06",
    type: "SKILL",
    typeColor: "#A855F7",
    title: "Claude Lead Gen Skill — Apify Edition",
    desc: "Use Claude + Apify to build a lead generation machine. Scrape, enrich and qualify leads with AI — no dev skills needed.",
    link: "https://shishirbabu.gumroad.com/l/jnwko",
    icon: "◎",
    tags: ["Lead Gen", "Apify", "Claude"],
  },
];

function ResourceCard({
  resource,
  delay,
}: {
  resource: (typeof RESOURCES)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          y: -4,
          borderColor: `${resource.typeColor}66`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${resource.typeColor}22`,
        }}
        style={{
          display: "block",
          textDecoration: "none",
          padding: "24px 22px",
          background: "linear-gradient(135deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))",
          border: "1px solid rgba(0,240,255,0.1)",
          position: "relative",
          overflow: "hidden",
          cursor: "none",
          transition: "border-color 0.3s",
          height: "100%",
        }}
      >
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: delay + 0.2, duration: 0.6 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${resource.typeColor}, transparent)`,
            transformOrigin: "left",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: resource.typeColor,
              background: `${resource.typeColor}18`,
              padding: "3px 10px",
              border: `1px solid ${resource.typeColor}44`,
            }}
          >
            {resource.type}
          </span>
          <span
            style={{
              fontSize: "1.4rem",
              color: resource.typeColor,
              textShadow: `0 0 14px ${resource.typeColor}`,
              lineHeight: 1,
            }}
          >
            {resource.icon}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            fontWeight: 700,
            fontSize: "1.12rem",
            marginBottom: 8,
            lineHeight: 1.25,
            color: "#E5E7EB",
          }}
        >
          {resource.title}
        </h3>
        <p
          style={{
            color: "#7a7f93",
            fontSize: "0.92rem",
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {resource.desc}
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {resource.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "#7a7f93",
                border: "1px solid rgba(0,240,255,0.12)",
                padding: "2px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: resource.typeColor,
            opacity: 0.7,
          }}
        >
          get free →
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(168,85,247,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
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
        <SectionReveal style={{ marginBottom: 60 }}>
          <Eyebrow>Free resources</Eyebrow>
          <SplitText
            text="Take something useful before you go."
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,5vw,3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.02,
              margin: ".5rem 0 1rem",
            }}
            accentWords={["useful", "go."]}
            accentColor="#A855F7"
            delay={0.1}
          />
          <p
            style={{
              fontSize: "clamp(1rem,1.5vw,1.18rem)",
              color: "#aeb3c4",
              maxWidth: "60ch",
            }}
          >
            Guides, templates, cheatsheets and frameworks — all free. No
            gimmicks, no upsell traps. Just useful stuff from real work.
          </p>
        </SectionReveal>

        <div
          className="resources-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 18,
          }}
        >
          {RESOURCES.map((r, i) => (
            <ResourceCard key={r.id} resource={r} delay={i * 0.07} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.resources-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.resources-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
