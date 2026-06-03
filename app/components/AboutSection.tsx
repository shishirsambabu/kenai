"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";

const STATS = [
  { val: 100, label: "+ professionals trained" },
  { val: 40, label: "+ workshops delivered" },
  { val: 15, label: "+ orgs & colleges" },
  { val: 1, label: "award-winning" },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1200;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <>{count}</>;
}

function StatCard({ val, label, delay }: { val: number; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      style={{
        padding: 20,
        border: "1px solid rgba(0,240,255,0.14)",
        background: "rgba(255,255,255,0.015)",
        textAlign: "center",
      }}
    >
      <b
        style={{
          display: "block",
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 700,
          fontSize: "2rem",
          color: "#00F0FF",
          textShadow: "0 0 18px rgba(0,240,255,.4)",
        }}
      >
        <CountUp target={val} inView={inView} />
      </b>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10.5px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#7a7f93",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 54, maxWidth: 760 }}>
          <Eyebrow>Founder</Eyebrow>
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
            Built by a practitioner,{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              not a vendor.
            </span>
          </h2>
        </SectionReveal>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 46, alignItems: "center" }}>
          <SectionReveal>
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                border: "1px solid rgba(0,240,255,0.2)",
                clipPath:
                  "polygon(0 0,100% 0,100% calc(100% - 26px),calc(100% - 26px) 100%,0 100%)",
                overflow: "hidden",
                boxShadow:
                  "0 0 0 1px rgba(255,46,151,0.08), 0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,240,255,0.08)",
              }}
            >
              {/* Photo */}
              <img
                src="/sam.jpg"
                alt="Sam — Shishir Babu, founder kenai"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />

              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,18,0.85) 0%, rgba(10,10,18,0.1) 50%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Cyan glow edge */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "1px solid rgba(0,240,255,0.25)",
                  pointerEvents: "none",
                }}
              />

              {/* Name badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 22,
                  left: 22,
                  right: 22,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#00F0FF",
                    textShadow: "0 0 12px rgba(0,240,255,0.8)",
                    marginBottom: 4,
                  }}
                >
                  // Sam · Shishir Babu
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#7a7f93",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Founder, kenai
                </div>
              </div>

              {/* Award corner badge */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(255,46,151,0.12)",
                  border: "1px solid rgba(255,46,151,0.4)",
                  padding: "4px 10px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#FF2E97",
                  textShadow: "0 0 8px #FF2E97",
                }}
              >
                ★ Indywood 2026
              </div>
            </motion.div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E5E7EB",
                padding: "12px 16px",
                margin: "0 0 22px",
                border: "1px solid rgba(255,46,151,.4)",
                background: "rgba(255,46,151,.06)",
                clipPath:
                  "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)",
              }}
            >
              <span style={{ color: "#FF2E97", fontSize: 16, textShadow: "0 0 10px #FF2E97" }}>
                ★
              </span>{" "}
              Indywood HR Excellence Award{" "}
              <b style={{ color: "#FF2E97" }}>2026</b> — Excellence in Digital HR Transformation
            </motion.div>

            <p style={{ color: "#aeb3c4", fontSize: "1.08rem", marginBottom: 14, maxWidth: "60ch" }}>
              kenai is led by <strong>Sam (Shishir Babu)</strong> — an AI trainer and L&D consultant
              who has spent years at the intersection of people and technology. He doesn&apos;t teach AI
              from a deck; he builds with it daily and teaches what actually works.
            </p>
            <p style={{ color: "#aeb3c4", fontSize: "1.08rem", marginBottom: 14, maxWidth: "60ch" }}>
              The mission is simple: make AI a skill your team owns, not a subscription they fear.
              Practical, India-first, and globally relevant.
            </p>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#00F0FF",
                marginTop: 6,
                fontSize: 13,
                marginBottom: 28,
              }}
            >
              — Sam · founder, kenai
            </div>

            <div
              className="stats-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}
            >
              {STATS.map((s, i) => (
                <StatCard key={s.label} val={s.val} label={s.label} delay={i * 0.08} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media(max-width:820px){.about-grid{grid-template-columns:1fr!important;gap:30px!important}}
        @media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}
