"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { Industry, industryAccent } from "../lib/industries";
import { getService, accentHex } from "../lib/services";
import { getCaseStudy } from "../lib/caseStudies";

const WRAP = "min(1080px,92vw)";

export default function IndustryContent({ industry }: { industry: Industry }) {
  const accent = industryAccent(industry.accent);
  const services = industry.services.map((s) => getService(s)).filter(Boolean);
  const cases = industry.caseStudies.map((c) => getCaseStudy(c)).filter(Boolean);

  return (
    <article>
      <header style={{ position: "relative", padding: "150px 0 60px", overflow: "hidden" }}>
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
            <Link href="/industries" style={{ color: "#7a7f93", textDecoration: "none" }}>
              industries
            </Link>
            <span style={{ color: accent }}>/</span>
            <span style={{ color: "#E5E7EB" }}>{industry.slug}</span>
          </nav>

          <Eyebrow>{industry.ref} · Industry</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem,6.5vw,4.4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            {industry.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span style={{ color: accent, textShadow: `0 0 26px ${accent}88` }}>
              {industry.title.split(" ").slice(-1)}
            </span>
          </h1>
          <p style={{ color: "#aeb3c4", fontSize: "clamp(1.05rem,1.8vw,1.3rem)", maxWidth: "60ch", lineHeight: 1.6, marginBottom: 30 }}>
            {industry.tagline}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/#contact" style={ctaPrimary(accent)}>
              &gt; Book a consult
            </a>
            <Link href="/industries" style={ctaGhost(accent)}>
              All industries
            </Link>
          </div>
        </div>
      </header>

      {/* Intro / definition */}
      <section style={{ padding: "30px 0 40px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <div style={{ borderLeft: `2px solid ${accent}`, padding: "8px 0 8px 24px", maxWidth: "74ch" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: accent,
                  display: "block",
                  marginBottom: 10,
                }}
              >
                // how AI applies to {industry.name.toLowerCase()}
              </span>
              <p style={{ color: "#cfd3e0", fontSize: "1.18rem", lineHeight: 1.7 }}>{industry.intro}</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Use cases + Workflows */}
      <section style={{ padding: "40px 0" }}>
        <div className="ind-2col" style={{ width: WRAP, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <SectionReveal>
            <Eyebrow>Use cases</Eyebrow>
            <h2 style={headingStyle}>Where AI helps</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {industry.useCases.map((u) => (
                <li key={u} style={{ display: "flex", gap: 12, color: "#cfd3e0", fontSize: "1.05rem", lineHeight: 1.5 }}>
                  <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>›</span>
                  {u}
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Eyebrow>Workflows</Eyebrow>
            <h2 style={headingStyle}>What we build</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {industry.workflows.map((w) => (
                <li key={w} style={{ display: "flex", gap: 12, color: "#cfd3e0", fontSize: "1.05rem", lineHeight: 1.5 }}>
                  <span style={{ color: "#FF2E97", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>⌘</span>
                  {w}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ padding: "50px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 30 }}>
            <Eyebrow>Expected outcomes</Eyebrow>
            <h2 style={headingStyle}>
              What you can{" "}
              <span style={{ color: accent, textShadow: `0 0 22px ${accent}88` }}>expect</span>
            </h2>
          </SectionReveal>
          <div className="ind-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {industry.outcomes.map((o, i) => (
              <SectionReveal key={o} delay={i * 0.06}>
                <div
                  style={{
                    padding: "20px 22px",
                    border: "1px solid rgba(0,240,255,0.14)",
                    background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
                    display: "flex",
                    gap: 14,
                    height: "100%",
                  }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: accent, fontWeight: 700, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ color: "#cfd3e0", fontSize: "1.04rem", lineHeight: 1.5 }}>{o}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended services */}
      <section style={{ padding: "50px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 28 }}>
            <Eyebrow>Service offerings</Eyebrow>
            <h2 style={headingStyle}>How kenai helps {industry.name}</h2>
          </SectionReveal>
          <div className="ind-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {services.map((s, i) => (
              <SectionReveal key={s!.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${s!.slug}`}
                  style={{
                    display: "block",
                    padding: "22px 22px 24px",
                    border: "1px solid rgba(0,240,255,0.14)",
                    background: "#0d0d18",
                    textDecoration: "none",
                    height: "100%",
                    transition: "border-color .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${accentHex(s!.accent)}88`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,240,255,0.14)")}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: accentHex(s!.accent),
                    }}
                  >
                    {s!.module}
                  </span>
                  <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.25rem", margin: "8px 0", color: "#E5E7EB" }}>
                    {s!.name}
                  </h3>
                  <p style={{ color: "#9aa0b3", fontSize: "0.96rem", lineHeight: 1.5 }}>{s!.tagline}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {cases.length > 0 && (
        <section style={{ padding: "50px 0" }}>
          <div style={{ width: WRAP, margin: "0 auto" }}>
            <SectionReveal style={{ marginBottom: 24 }}>
              <Eyebrow>Proof</Eyebrow>
              <h2 style={headingStyle}>Related case studies</h2>
            </SectionReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {cases.map((c, i) => (
                <SectionReveal key={c!.slug} delay={i * 0.06}>
                  <Link
                    href={`/case-studies/${c!.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      flexWrap: "wrap",
                      padding: "20px 24px",
                      border: "1px solid rgba(0,240,255,0.14)",
                      background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${accent}88`)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,240,255,0.14)")}
                  >
                    <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#E5E7EB" }}>
                      {c!.title}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: accent }}>read &gt;_</span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: "50px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 28 }}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 style={headingStyle}>
              {industry.name} &amp; AI,{" "}
              <span style={{ color: accent, textShadow: `0 0 22px ${accent}88` }}>answered</span>
            </h2>
          </SectionReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "80ch" }}>
            {industry.faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} accent={accent} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "50px 0 90px" }}>
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
              <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "clamp(1.7rem,4.5vw,2.8rem)", marginBottom: 14, position: "relative" }}>
                Bring AI to your {industry.name} team
              </h2>
              <p style={{ color: "#aeb3c4", fontSize: "1.08rem", maxWidth: "50ch", margin: "0 auto 26px", position: "relative" }}>
                Tell us what your team does. We&apos;ll design the workshop, program or build that fits.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <motion.a href="/#contact" whileHover={{ y: -3 }} style={ctaPrimary(accent)}>
                  &gt; Book a consult
                </motion.a>
                <Link href="/tools/ai-readiness" style={ctaGhost(accent)}>
                  Take the readiness quiz
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <style>{`
        @media(max-width:760px){
          .ind-2col{grid-template-columns:1fr!important}
          .ind-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </article>
  );
}

const headingStyle: React.CSSProperties = {
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.6rem,4vw,2.6rem)",
  letterSpacing: "-0.01em",
  lineHeight: 1.05,
};

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

function FAQItem({ q, a, accent, defaultOpen }: { q: string; a: string; accent: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <div style={{ border: "1px solid rgba(0,240,255,0.14)", background: "rgba(255,255,255,0.012)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: "18px 20px",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "none",
          color: "#E5E7EB",
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 600,
          fontSize: "1.1rem",
        }}
      >
        {q}
        <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 18, flexShrink: 0 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 20px", color: "#9aa0b3", fontSize: "1.02rem", lineHeight: 1.65 }}>{a}</div>
      )}
    </div>
  );
}
