"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    num: "01",
    key: "// orient",
    title: "See what's actually possible",
    body: "We cut through the hype and show your team where AI creates real leverage in their specific role — not generic demos.",
    color: "#00F0FF",
    shadow: "rgba(0,240,255,.4)",
  },
  {
    num: "02",
    key: "// build",
    title: "Hands on the keyboard, day one",
    body: "Everyone builds. Real prompts, real automations, real workflows from your world. Learning sticks because you made it work yourself.",
    color: "#FF2E97",
    shadow: "rgba(255,46,151,.4)",
  },
  {
    num: "03",
    key: "// master",
    title: "From capable to fluent",
    body: "We layer judgment, governance and habits so AI becomes a default working tool — and your team keeps levelling up after we leave.",
    color: "#A855F7",
    shadow: "rgba(168,85,247,.4)",
  },
];

function Step({ step, delay }: { step: (typeof STEPS)[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      style={{ position: "relative", paddingLeft: 78, paddingBottom: 44 }}
      className="approach-step"
    >
      <div
        style={{
          position: "absolute",
          left: 24,
          top: 2,
          transform: "translateX(-50%)",
          width: 42,
          height: 42,
          background: "#0A0A12",
          border: `2px solid ${step.color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          color: step.color,
          boxShadow: `0 0 18px ${step.shadow}`,
          clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)",
          zIndex: 1,
        }}
      >
        {step.num}
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#7a7f93",
        }}
      >
        {step.key}
      </div>
      <h3
        style={{
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 700,
          fontSize: "1.45rem",
          marginBottom: 6,
          marginTop: 4,
        }}
      >
        {step.title}
      </h3>
      <p style={{ color: "#9aa0b3", maxWidth: "58ch", marginTop: 6, fontSize: "1.04rem" }}>
        {step.body}
      </p>
    </motion.div>
  );
}

export default function ApproachSection() {
  return (
    <section id="approach" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 54, maxWidth: 760 }}>
          <Eyebrow>The approach</Eyebrow>
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
            Learn by doing.{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              The way of AI.
            </span>
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch" }}>
            ken means &ldquo;to know.&rdquo; The way of AI isn&apos;t watching — it&apos;s
            practising until the tool becomes second nature. Here&apos;s the discipline.
          </p>
        </SectionReveal>

        <div style={{ position: "relative", marginTop: 30 }}>
          <div className="path-line" />
          {STEPS.map((step, i) => (
            <Step key={step.num} step={step} delay={i * 0.15} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .approach-step{padding-left:58px!important}
          .path-line{left:18px!important}
        }
      `}</style>
    </section>
  );
}
