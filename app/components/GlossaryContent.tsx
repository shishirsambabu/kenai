"use client";

import Link from "next/link";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { GlossaryTerm, getTerm } from "../lib/glossary";
import { getService } from "../lib/services";

const WRAP = "min(880px,92vw)";

export default function GlossaryContent({ term }: { term: GlossaryTerm }) {
  const services = term.related.map((s) => getService(s)).filter(Boolean);
  const seeAlso = term.seeAlso.map((s) => getTerm(s)).filter(Boolean);

  return (
    <article>
      <header style={{ position: "relative", padding: "150px 0 40px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 440,
            height: 440,
            borderRadius: "50%",
            filter: "blur(100px)",
            background: "radial-gradient(circle, rgba(0,240,255,0.28), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: WRAP, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#7a7f93", marginBottom: 22, display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>home</Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <Link href="/glossary" style={{ color: "#7a7f93", textDecoration: "none" }}>glossary</Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>{term.slug}</span>
          </nav>
          <Eyebrow>AI glossary</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,5.5vw,3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "10px 0 20px",
            }}
          >
            {term.term}
          </h1>
          {/* Definition block — the GEO/AISO quotable answer */}
          <div style={{ borderLeft: "2px solid #00F0FF", padding: "10px 0 10px 24px" }}>
            <p style={{ color: "#E5E7EB", fontSize: "1.25rem", lineHeight: 1.6, fontWeight: 500 }}>
              {term.definition}
            </p>
          </div>
        </div>
      </header>

      <section style={{ padding: "30px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <p style={bodyP}>{term.body}</p>
          </SectionReveal>
          <SectionReveal>
            <h2 style={h2}>Why it matters</h2>
            <p style={bodyP}>{term.whyItMatters}</p>
          </SectionReveal>

          {services.length > 0 && (
            <SectionReveal>
              <h2 style={h2}>How kenai helps</h2>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
                {services.map((s) => (
                  <Link
                    key={s!.slug}
                    href={`/services/${s!.slug}`}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: "#00F0FF",
                      textDecoration: "none",
                      padding: "10px 16px",
                      border: "1px solid rgba(0,240,255,0.4)",
                    }}
                  >
                    {s!.name} &gt;
                  </Link>
                ))}
              </div>
            </SectionReveal>
          )}

          {seeAlso.length > 0 && (
            <SectionReveal>
              <h2 style={h2}>See also</h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {seeAlso.map((t) => (
                  <li key={t!.slug}>
                    <Link
                      href={`/glossary/${t!.slug}`}
                      style={{ color: "#aeb3c4", textDecoration: "none", fontSize: "1.06rem", display: "flex", gap: 10 }}
                    >
                      <span style={{ color: "#FF2E97", fontFamily: "'JetBrains Mono', monospace" }}>›</span>
                      <span><b style={{ color: "#E5E7EB" }}>{t!.term}</b> — {t!.short}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          )}
        </div>
      </section>

      <section style={{ padding: "40px 0 90px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <div
              style={{
                border: "1px solid rgba(0,240,255,0.3)",
                background: "#0d0d18",
                padding: "32px 30px",
                textAlign: "center",
                clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))",
              }}
            >
              <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.6rem", marginBottom: 12 }}>
                Want your team fluent in this?
              </h2>
              <p style={{ color: "#aeb3c4", marginBottom: 22, maxWidth: "48ch", marginInline: "auto" }}>
                kenai turns AI concepts into hands-on capability your team owns.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/#contact" style={ctaPrimary}>&gt; Book a consult</a>
                <Link href="/glossary" style={ctaGhost}>Back to glossary</Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </article>
  );
}

const h2: React.CSSProperties = {
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.4rem,3vw,1.9rem)",
  letterSpacing: "-0.01em",
  margin: "34px 0 14px",
};
const bodyP: React.CSSProperties = { color: "#cfd3e0", fontSize: "1.12rem", lineHeight: 1.75, maxWidth: "70ch" };
const ctaPrimary: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "14px 26px",
  color: "#0A0A12",
  background: "#00F0FF",
  boxShadow: "0 0 24px rgba(0,240,255,0.5)",
  clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
  cursor: "none",
};
const ctaGhost: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "14px 26px",
  color: "#00F0FF",
  background: "transparent",
  boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)",
  clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
  cursor: "none",
};
