"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { LOCATIONS } from "../lib/locations";

// Show a curated, high-intent set on the homepage (Kerala-forward + metros).
const FEATURED = [
  "kerala",
  "kochi",
  "thiruvananthapuram",
  "kozhikode",
  "bangalore",
  "mumbai",
  "hyderabad",
  "chennai",
  "delhi",
  "pune",
];

function Chip({ slug, index }: { slug: string; index: number }) {
  const loc = LOCATIONS.find((l) => l.slug === slug);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  if (!loc) return null;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 5) * 0.04, duration: 0.5 }}
    >
      <Link
        href={`/locations/${loc.slug}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 18px",
          border: "1px solid rgba(0,240,255,0.12)",
          background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)",
          textDecoration: "none",
          transition: "border-color .2s, transform .2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,240,255,0.55)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,240,255,0.12)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <span style={{ color: "#00F0FF", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 13 }}>◎</span>
        <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#E5E7EB" }}>
          AI Training in {loc.name}
        </span>
      </Link>
    </motion.div>
  );
}

export default function LocationsSection() {
  return (
    <section id="locations" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 44, maxWidth: 760 }}>
          <Eyebrow>Locations</Eyebrow>
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
            AI training,{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>near you.</span>
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch" }}>
            Hands-on AI training, workshops, consulting and automation across India — on-site and
            online. Kerala-rooted, nationally available.
          </p>
        </SectionReveal>

        <div className="loc-home-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}>
          {FEATURED.map((slug, i) => (
            <Chip key={slug} slug={slug} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.1}>
          <div style={{ marginTop: 34 }}>
            <Link
              href="/locations"
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
                padding: "14px 26px",
                color: "#00F0FF",
                background: "transparent",
                boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)",
                clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                cursor: "none",
              }}
            >
              &gt; All locations
            </Link>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media(max-width:900px){.loc-home-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:560px){.loc-home-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}
