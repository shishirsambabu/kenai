"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { Service, accentHex } from "../lib/services";
import { Location } from "../lib/locations";
import {
  serviceLocationIntro,
  serviceLocationFaqs,
  serviceLocationTitle,
} from "../lib/localContent";

const WRAP = "min(1000px,92vw)";

export default function LocationServiceContent({
  service,
  location,
  otherServices,
}: {
  service: Service;
  location: Location;
  otherServices: { slug: string; name: string; accent: Service["accent"] }[];
}) {
  const accent = accentHex(service.accent);
  const intro = serviceLocationIntro(service, location);
  const faqs = serviceLocationFaqs(service, location);
  const h1 = serviceLocationTitle(service, location);

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
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#7a7f93", marginBottom: 22, display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>home</Link>
            <span style={{ color: accent }}>/</span>
            <Link href="/locations" style={{ color: "#7a7f93", textDecoration: "none" }}>locations</Link>
            <span style={{ color: accent }}>/</span>
            <Link href={`/locations/${location.slug}`} style={{ color: "#7a7f93", textDecoration: "none" }}>{location.slug}</Link>
            <span style={{ color: accent }}>/</span>
            <span style={{ color: "#E5E7EB" }}>{service.slug}</span>
          </nav>

          <Eyebrow>{service.module} · {location.name}</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,5.6vw,4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "10px 0 20px",
            }}
          >
            {service.name} in{" "}
            <span style={{ color: accent, textShadow: `0 0 26px ${accent}88` }}>{location.name}</span>
          </h1>

          <div style={{ borderLeft: `2px solid ${accent}`, padding: "8px 0 8px 24px", maxWidth: "74ch" }}>
            <p style={{ color: "#E5E7EB", fontSize: "1.2rem", lineHeight: 1.65 }}>{intro[0]}</p>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <a href="/#contact" style={cta(accent, true)}>&gt; Book {service.name} in {location.name}</a>
            <Link href={`/services/${service.slug}`} style={cta(accent, false)}>Service details</Link>
          </div>
        </div>
      </header>

      <section style={{ padding: "20px 0 30px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <p style={bodyP}>{intro[1]}</p>
          </SectionReveal>
          <SectionReveal>
            <h2 style={h2}>AI in {location.name}</h2>
            <p style={bodyP}>{intro[2]}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "30px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 24 }}>
            <h2 style={h2}>Why {location.name} teams choose kenai</h2>
          </SectionReveal>
          <div className="ls-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {service.benefits.map((b, i) => (
              <SectionReveal key={b} delay={i * 0.05}>
                <div style={{ padding: "20px 22px", border: "1px solid rgba(0,240,255,0.14)", background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)", display: "flex", gap: 14, height: "100%" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: accent, fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: "#cfd3e0", fontSize: "1.04rem", lineHeight: 1.5 }}>{b}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section style={{ padding: "30px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <h2 style={h2}>Areas served around {location.name}</h2>
            <p style={{ color: "#9aa0b3", fontSize: "1.02rem", marginBottom: 16 }}>
              On-site and remote delivery for teams in and around {location.name}:
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[location.name, ...location.nearby].map((a) => (
                <span key={a} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: "#cfd3e0", padding: "8px 14px", border: "1px solid rgba(0,240,255,0.18)", background: "rgba(0,240,255,0.03)" }}>
                  {a}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Other services here */}
      {otherServices.length > 0 && (
        <section style={{ padding: "30px 0" }}>
          <div style={{ width: WRAP, margin: "0 auto" }}>
            <SectionReveal style={{ marginBottom: 18 }}>
              <h2 style={h2}>More AI services in {location.name}</h2>
            </SectionReveal>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/locations/${location.slug}/${s.slug}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: accentHex(s.accent), textDecoration: "none", padding: "10px 16px", border: `1px solid ${accentHex(s.accent)}44` }}
                >
                  {s.name} in {location.name} &gt;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 24 }}>
            <h2 style={h2}>{service.name} in {location.name} — FAQ</h2>
          </SectionReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "80ch" }}>
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} accent={accent} defaultOpen={i === 0} />
            ))}
          </div>
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
                padding: "clamp(34px,6vw,56px)",
                textAlign: "center",
                clipPath: "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${accent}14, transparent 70%)`, pointerEvents: "none" }} />
              <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem,4.2vw,2.6rem)", marginBottom: 14, position: "relative" }}>
                {service.name} in {location.name}, done right
              </h2>
              <p style={{ color: "#aeb3c4", fontSize: "1.06rem", maxWidth: "52ch", margin: "0 auto 24px", position: "relative" }}>
                Tell us about your team {location.type === "city" ? `in ${location.name}` : `in ${location.name}`}. We&apos;ll design the program that fits.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <a href="/#contact" style={cta(accent, true)}>&gt; Book a consult</a>
                <Link href={`/locations/${location.slug}`} style={cta(accent, false)}>All services in {location.name}</Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <style>{`@media(max-width:680px){.ls-grid{grid-template-columns:1fr!important}}`}</style>
    </article>
  );
}

const h2: React.CSSProperties = {
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.5rem,3.4vw,2.2rem)",
  letterSpacing: "-0.01em",
  margin: "8px 0 14px",
};
const bodyP: React.CSSProperties = { color: "#cfd3e0", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "72ch", marginBottom: 8 };

function cta(color: string, primary: boolean): React.CSSProperties {
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
    padding: "15px 26px",
    clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
    cursor: "none",
    ...(primary
      ? { color: "#0A0A12", background: color, boxShadow: `0 0 26px ${color}55` }
      : { color, background: "transparent", boxShadow: `inset 0 0 0 1px ${color}88` }),
  };
}

function FAQItem({ q, a, accent, defaultOpen }: { q: string; a: string; accent: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <div style={{ border: "1px solid rgba(0,240,255,0.14)", background: "rgba(255,255,255,0.012)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 20px", background: "none", border: "none", textAlign: "left", cursor: "none", color: "#E5E7EB", fontFamily: "'Chakra Petch', sans-serif", fontWeight: 600, fontSize: "1.08rem" }}
      >
        {q}
        <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 18, flexShrink: 0 }}>{open ? "−" : "+"}</span>
      </button>
      {open && <div style={{ padding: "0 20px 20px", color: "#9aa0b3", fontSize: "1.02rem", lineHeight: 1.65 }}>{a}</div>}
    </div>
  );
}
