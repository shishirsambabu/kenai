"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { CaseStudy, caseAccent } from "../lib/caseStudies";
import { getService, accentHex } from "../lib/services";

const WRAP = "min(1000px,92vw)";

export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  const accent = caseAccent(study.accent);
  const services = study.servicesUsed.map((s) => getService(s)).filter(Boolean);

  return (
    <article>
      <header style={{ position: "relative", padding: "150px 0 50px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: "50%",
            filter: "blur(100px)",
            background: `radial-gradient(circle, ${accent}40, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: WRAP, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#7a7f93",
              marginBottom: 22,
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>
              home
            </Link>
            <span style={{ color: accent }}>/</span>
            <Link href="/case-studies" style={{ color: "#7a7f93", textDecoration: "none" }}>
              case-studies
            </Link>
            <span style={{ color: accent }}>/</span>
            <span style={{ color: "#E5E7EB" }}>{study.slug}</span>
          </nav>

          <Eyebrow>
            {study.ref} · {study.sector}
          </Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.1rem,5.2vw,3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "10px 0 16px",
            }}
          >
            {study.title}
          </h1>
          <p style={{ color: "#aeb3c4", fontSize: "clamp(1.05rem,1.8vw,1.25rem)", maxWidth: "62ch", lineHeight: 1.6 }}>
            {study.summary}
          </p>
          <div
            style={{
              marginTop: 18,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#7a7f93",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ color: accent }}>client:</span> {study.client}
          </div>
        </div>
      </header>

      {/* Results band */}
      <section style={{ padding: "20px 0 50px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <div
            className="cs-results"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${study.results.length},1fr)`,
              gap: 18,
            }}
          >
            {study.results.map((r, i) => (
              <SectionReveal key={r.label} delay={i * 0.08}>
                <div
                  style={{
                    padding: "24px 20px",
                    border: `1px solid ${accent}33`,
                    background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Chakra Petch', sans-serif",
                      fontWeight: 700,
                      fontSize: "2rem",
                      color: accent,
                      textShadow: `0 0 18px ${accent}55`,
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    {r.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9aa0b3",
                      lineHeight: 1.4,
                    }}
                  >
                    {r.label}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Block accent={accent} eyebrow="The situation" title="Where they started">
        <p style={bodyP}>{study.situation}</p>
      </Block>

      <Block accent={accent} eyebrow="The challenges" title="What stood in the way">
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
          {study.challenges.map((c) => (
            <li key={c} style={{ display: "flex", gap: 12, color: "#aeb3c4", fontSize: "1.08rem", lineHeight: 1.55 }}>
              <span style={{ color: "#FF2E97", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>✕</span>
              {c}
            </li>
          ))}
        </ul>
      </Block>

      <Block accent={accent} eyebrow="The approach" title="How kenai engaged">
        <p style={bodyP}>{study.approach}</p>
      </Block>

      <Block accent={accent} eyebrow="The implementation" title="What we built">
        <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, counterReset: "step" }}>
          {study.implementation.map((step, i) => (
            <li key={step} style={{ display: "flex", gap: 14, color: "#cfd3e0", fontSize: "1.06rem", lineHeight: 1.55 }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  color: accent,
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Block>

      <Block accent={accent} eyebrow="The results" title="What changed">
        <p style={bodyP}>{study.resultsNarrative}</p>
      </Block>

      <Block accent={accent} eyebrow="Lessons learned" title="What we'd carry forward">
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
          {study.lessons.map((l) => (
            <li key={l} style={{ display: "flex", gap: 12, color: "#cfd3e0", fontSize: "1.06rem", lineHeight: 1.55 }}>
              <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>›</span>
              {l}
            </li>
          ))}
        </ul>
      </Block>

      {/* Framework + services used */}
      <section style={{ padding: "30px 0 50px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <div
              style={{
                border: "1px solid rgba(0,240,255,0.14)",
                background: "#0d0d18",
                padding: "26px 26px 28px",
                clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                // framework used
              </span>
              <h3
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  margin: "8px 0 18px",
                }}
              >
                {study.framework}
              </h3>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#7a7f93",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                services applied
              </span>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {services.map((s) => (
                  <Link
                    key={s!.slug}
                    href={`/services/${s!.slug}`}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: accentHex(s!.accent),
                      textDecoration: "none",
                      padding: "8px 14px",
                      border: `1px solid ${accentHex(s!.accent)}44`,
                    }}
                  >
                    {s!.name} &gt;
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "40px 0 90px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${accent}44`,
                background: "#0d0d18",
                padding: "clamp(36px,6vw,60px)",
                textAlign: "center",
                clipPath: "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at 50% 0%, ${accent}14, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
              <h2
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.7rem,4.5vw,2.8rem)",
                  marginBottom: 14,
                  position: "relative",
                }}
              >
                Want results like this?
              </h2>
              <p style={{ color: "#aeb3c4", fontSize: "1.08rem", maxWidth: "50ch", margin: "0 auto 26px", position: "relative" }}>
                Tell us about your team. We&apos;ll design the engagement that gets you there.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <motion.a href="/#contact" whileHover={{ y: -3 }} style={ctaPrimary(accent)}>
                  &gt; Book a consult
                </motion.a>
                <Link href="/case-studies" style={ctaGhost(accent)}>
                  More case studies
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <style>{`@media(max-width:680px){.cs-results{grid-template-columns:1fr!important}}`}</style>
    </article>
  );
}

const bodyP: React.CSSProperties = {
  color: "#cfd3e0",
  fontSize: "1.12rem",
  lineHeight: 1.75,
  maxWidth: "68ch",
};

function Block({
  accent,
  eyebrow,
  title,
  children,
}: {
  accent: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "34px 0" }}>
      <div style={{ width: WRAP, margin: "0 auto" }}>
        <SectionReveal>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: accent,
              display: "block",
              marginBottom: 8,
            }}
          >
            // {eyebrow}
          </span>
          <h2
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
              letterSpacing: "-0.01em",
              marginBottom: 18,
            }}
          >
            {title}
          </h2>
          {children}
        </SectionReveal>
      </div>
    </section>
  );
}

function ctaPrimary(color: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "15px 28px",
    color: "#0A0A12",
    background: color,
    boxShadow: `0 0 28px ${color}55`,
    clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
    cursor: "none",
  };
}
function ctaGhost(color: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "15px 28px",
    color,
    background: "transparent",
    boxShadow: `inset 0 0 0 1px ${color}88`,
    clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
    cursor: "none",
  };
}
