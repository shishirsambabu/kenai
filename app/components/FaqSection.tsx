"use client";

import { useState } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import { SITE } from "../lib/services";

const FAQS = [
  {
    q: "What does kenai do?",
    a: "kenai is a practitioner-led AI consulting and training studio. We help HR teams, businesses and colleges adopt AI through hands-on training, corporate workshops, automation builds and advisory — the way of AI is learning by doing.",
  },
  {
    q: "Who is kenai for?",
    a: "HR and L&D teams, corporates and SMEs, leaders, startups and colleges — anyone who wants their people to genuinely do AI rather than just talk about it.",
  },
  {
    q: "What makes kenai different?",
    a: "kenai is built by a practitioner, not a vendor. Founder Sam (Shishir Babu) builds with AI daily and teaches what actually works — every engagement is hands-on, India-first and outcome-led, with adoption that outlasts the session.",
  },
  {
    q: "Does kenai work remotely or only in India?",
    a: "kenai is based in India and delivers both on-site and remote engagements globally. The approach is India-first but globally relevant.",
  },
  {
    q: "How do I get started with kenai?",
    a: "Book a consult through the contact form. Tell us what your team needs — a workshop, a bootcamp, automation or advisory — and we'll design the path.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ border: "1px solid rgba(0,240,255,0.14)", background: "rgba(255,255,255,0.012)" }}>
      <button
        onClick={onToggle}
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
          fontSize: "1.12rem",
        }}
      >
        {q}
        <span style={{ color: "#00F0FF", fontFamily: "'JetBrains Mono', monospace", fontSize: 18, flexShrink: 0 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 20px", color: "#9aa0b3", fontSize: "1.04rem", lineHeight: 1.65 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" style={{ position: "relative", padding: "110px 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 44, maxWidth: 760 }}>
          <Eyebrow>FAQ</Eyebrow>
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
            Questions,{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
              answered.
            </span>
          </h2>
        </SectionReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "82ch" }}>
          {FAQS.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
