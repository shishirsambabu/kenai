"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { Service, accentHex, getRelated } from "../lib/services";

const WRAP = "min(1080px,92vw)";

export default function ServiceContent({ service }: { service: Service }) {
  const accent = accentHex(service.accent);
  const related = getRelated(service);

  return (
    <article>
      {/* Hero */}
      <header style={{ position: "relative", padding: "150px 0 70px", overflow: "hidden" }}>
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
          {/* Breadcrumb */}
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
            <Link href="/services" style={{ color: "#7a7f93", textDecoration: "none" }}>
              services
            </Link>
            <span style={{ color: accent }}>/</span>
            <span style={{ color: "#E5E7EB" }}>{service.slug}</span>
          </nav>

          <Eyebrow>{service.module} · AI services</Eyebrow>
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
            {service.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span style={{ color: accent, textShadow: `0 0 26px ${accent}88` }}>
              {service.title.split(" ").slice(-1)}
            </span>
          </h1>
          <p
            style={{
              color: "#aeb3c4",
              fontSize: "clamp(1.05rem,1.8vw,1.3rem)",
              maxWidth: "60ch",
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            {service.tagline}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <CTA href="/#contact" accent={accent} primary>
              &gt; Book a consult
            </CTA>
            <CTA href="/services" accent={accent}>
              All services
            </CTA>
          </div>
        </div>
      </header>

      {/* Definition — GEO-quotable */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <div
              style={{
                borderLeft: `2px solid ${accent}`,
                padding: "8px 0 8px 24px",
                maxWidth: "72ch",
              }}
            >
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
                // definition
              </span>
              <p style={{ color: "#cfd3e0", fontSize: "1.18rem", lineHeight: 1.7 }}>
                {service.definition}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Problem + Solution */}
      <section style={{ padding: "60px 0" }}>
        <div
          className="svc-2col"
          style={{ width: WRAP, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
        >
          <SectionReveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 style={headingStyle}>What gets in the way</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
              {service.problem.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    gap: 12,
                    color: "#aeb3c4",
                    fontSize: "1.06rem",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: "#FF2E97", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                    ✕
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <Eyebrow>The kenai approach</Eyebrow>
            <h2 style={headingStyle}>How we solve it</h2>
            <p style={{ color: "#cfd3e0", fontSize: "1.08rem", lineHeight: 1.7, marginTop: 18 }}>
              {service.solution}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "60px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 36 }}>
            <Eyebrow>Outcomes</Eyebrow>
            <h2 style={headingStyle}>
              What you{" "}
              <span style={{ color: accent, textShadow: `0 0 22px ${accent}88` }}>get</span>
            </h2>
          </SectionReveal>
          <div
            className="svc-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}
          >
            {service.benefits.map((b, i) => (
              <SectionReveal key={b} delay={i * 0.06}>
                <div
                  style={{
                    padding: "22px 24px",
                    border: "1px solid rgba(0,240,255,0.14)",
                    background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: accent,
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ color: "#cfd3e0", fontSize: "1.04rem", lineHeight: 1.5 }}>{b}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "60px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 36 }}>
            <Eyebrow>The process</Eyebrow>
            <h2 style={headingStyle}>How it runs</h2>
          </SectionReveal>
          <div
            className="svc-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(service.process.length, 4)},1fr)`,
              gap: 18,
            }}
          >
            {service.process.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.08}>
                <div
                  style={{
                    padding: "24px 22px 28px",
                    border: "1px solid rgba(0,240,255,0.14)",
                    background: "#0d0d18",
                    height: "100%",
                    clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 800,
                      fontSize: "1.8rem",
                      color: accent,
                      textShadow: `0 0 16px ${accent}66`,
                      marginBottom: 10,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Chakra Petch', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "#9aa0b3", fontSize: "0.98rem", lineHeight: 1.55 }}>{step.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 32 }}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 style={headingStyle}>
              Questions,{" "}
              <span style={{ color: accent, textShadow: `0 0 22px ${accent}88` }}>answered</span>
            </h2>
          </SectionReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "80ch" }}>
            {service.faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} accent={accent} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section style={{ padding: "60px 0" }}>
          <div style={{ width: WRAP, margin: "0 auto" }}>
            <SectionReveal style={{ marginBottom: 28 }}>
              <Eyebrow>Explore more</Eyebrow>
              <h2 style={headingStyle}>Related services</h2>
            </SectionReveal>
            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {related.map((r, i) => (
                <SectionReveal key={r.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${r.slug}`}
                    style={{
                      display: "block",
                      padding: "22px 22px 24px",
                      border: "1px solid rgba(0,240,255,0.14)",
                      background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
                      textDecoration: "none",
                      height: "100%",
                      transition: "border-color .2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${accentHex(r.accent)}88`)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,240,255,0.14)")}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: accentHex(r.accent),
                      }}
                    >
                      {r.module}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Chakra Petch', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        margin: "8px 0 8px",
                        color: "#E5E7EB",
                      }}
                    >
                      {r.name}
                    </h3>
                    <p style={{ color: "#9aa0b3", fontSize: "0.96rem", lineHeight: 1.5 }}>{r.tagline}</p>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: accentHex(r.accent),
                        marginTop: 12,
                        display: "inline-block",
                      }}
                    >
                      view &gt;_
                    </span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA band */}
      <section style={{ padding: "70px 0 90px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${accent}44`,
                background: "#0d0d18",
                padding: "clamp(36px,6vw,64px)",
                textAlign: "center",
                clipPath:
                  "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
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
                  fontSize: "clamp(1.8rem,4.5vw,3rem)",
                  letterSpacing: "-0.01em",
                  marginBottom: 14,
                  position: "relative",
                }}
              >
                Ready to{" "}
                <span style={{ color: accent, textShadow: `0 0 22px ${accent}88` }}>do</span> AI?
              </h2>
              <p
                style={{
                  color: "#aeb3c4",
                  fontSize: "1.1rem",
                  maxWidth: "52ch",
                  margin: "0 auto 28px",
                  position: "relative",
                }}
              >
                Tell us what your team needs. We&apos;ll design the path — workshop, program or build.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <CTA href="/#contact" accent={accent} primary>
                  &gt; Book a consult
                </CTA>
                <CTA href="/services" accent={accent}>
                  Browse all services
                </CTA>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <style>{`
        @media(max-width:760px){
          .svc-2col{grid-template-columns:1fr!important}
          .svc-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </article>
  );
}

const headingStyle: React.CSSProperties = {
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.7rem,4vw,2.8rem)",
  letterSpacing: "-0.01em",
  lineHeight: 1.05,
};

function CTA({
  href,
  accent,
  primary,
  children,
}: {
  href: string;
  accent: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      style={{
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
        clipPath:
          "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        cursor: "none",
        ...(primary
          ? { color: "#0A0A12", background: accent, boxShadow: `0 0 28px ${accent}66` }
          : { color: accent, background: "transparent", boxShadow: `inset 0 0 0 1px ${accent}88` }),
      }}
    >
      {children}
    </motion.a>
  );
}

function FAQItem({
  q,
  a,
  accent,
  defaultOpen,
}: {
  q: string;
  a: string;
  accent: string;
  defaultOpen?: boolean;
}) {
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
        <div
          style={{
            padding: "0 20px 20px",
            color: "#9aa0b3",
            fontSize: "1.02rem",
            lineHeight: 1.65,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}
