"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { Location } from "../lib/locations";
import { Service, accentHex } from "../lib/services";
import { locationHubIntro } from "../lib/localContent";

const WRAP = "min(1080px,92vw)";

export default function LocationHubContent({
  location,
  localizedServices,
  childLocations,
}: {
  location: Location;
  localizedServices: Service[];
  childLocations: { slug: string; name: string }[];
}) {
  const intro = locationHubIntro(location);

  return (
    <article>
      <header style={{ position: "relative", padding: "150px 0 50px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 620,
            height: 460,
            borderRadius: "50%",
            filter: "blur(110px)",
            background: "radial-gradient(circle, rgba(0,240,255,0.24), transparent 70%)",
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
            <Link href="/locations" style={{ color: "#7a7f93", textDecoration: "none" }}>locations</Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>{location.slug}</span>
          </nav>

          <Eyebrow>AI services · {location.region}</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.3rem,6vw,4.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "10px 0 20px",
            }}
          >
            AI Training &amp; Consulting in{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>{location.name}</span>
          </h1>
          <div style={{ borderLeft: "2px solid #00F0FF", padding: "8px 0 8px 24px", maxWidth: "74ch" }}>
            <p style={{ color: "#E5E7EB", fontSize: "1.2rem", lineHeight: 1.65 }}>{intro[0]}</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <a href="/#contact" style={cta("#00F0FF", true)}>&gt; Book a consult</a>
            <Link href="/tools/ai-readiness" style={cta("#00F0FF", false)}>Take the readiness quiz</Link>
          </div>
        </div>
      </header>

      <section style={{ padding: "10px 0 30px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <p style={bodyP}>{intro[1]}</p>
          </SectionReveal>
          <SectionReveal>
            <h2 style={h2}>The AI landscape in {location.name}</h2>
            <p style={bodyP}>{intro[2]}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Localized services */}
      <section style={{ padding: "30px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal style={{ marginBottom: 24 }}>
            <h2 style={h2}>AI services in {location.name}</h2>
          </SectionReveal>
          <div className="lh-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {localizedServices.map((s, i) => {
              const accent = accentHex(s.accent);
              return (
                <SectionReveal key={s.slug} delay={(i % 3) * 0.05}>
                  <motion.div whileHover={{ y: -5 }} style={{ height: "100%" }}>
                    <Link
                      href={`/locations/${location.slug}/${s.slug}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        padding: "22px 22px 24px",
                        background: "#0d0d18",
                        border: "1px solid rgba(0,240,255,0.14)",
                        textDecoration: "none",
                        clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)",
                        transition: "border-color .2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${accent}88`)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,240,255,0.14)")}
                    >
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, marginBottom: 10 }}>{s.module}</span>
                      <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#E5E7EB", lineHeight: 1.15, marginBottom: 6 }}>
                        {s.name} in {location.name}
                      </h3>
                      <p style={{ color: "#9aa0b3", fontSize: "0.95rem", lineHeight: 1.5, flexGrow: 1 }}>{s.tagline}</p>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: accent, marginTop: 14 }}>view &gt;_</span>
                    </Link>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Child locations (cities in a state / country) */}
      {childLocations.length > 0 && (
        <section style={{ padding: "30px 0" }}>
          <div style={{ width: WRAP, margin: "0 auto" }}>
            <SectionReveal style={{ marginBottom: 18 }}>
              <h2 style={h2}>Cities we serve in {location.name}</h2>
            </SectionReveal>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {childLocations.map((c) => (
                <Link key={c.slug} href={`/locations/${c.slug}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#00F0FF", textDecoration: "none", padding: "10px 16px", border: "1px solid rgba(0,240,255,0.3)" }}>
                  AI training in {c.name} &gt;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas served */}
      <section style={{ padding: "30px 0 80px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <SectionReveal>
            <h2 style={h2}>Areas served around {location.name}</h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              {[location.name, ...location.nearby].map((a) => (
                <span key={a} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: "#cfd3e0", padding: "8px 14px", border: "1px solid rgba(0,240,255,0.18)", background: "rgba(0,240,255,0.03)" }}>{a}</span>
              ))}
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
