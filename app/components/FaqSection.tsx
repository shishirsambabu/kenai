"use client";

import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import JsonLd from "./JsonLd";
import { faqSchema } from "../lib/schema";
import type { FAQ } from "../lib/catalog";

/**
 * Homepage FAQ + FAQPage schema. Built to answer the exact questions people
 * (and AI assistants) ask about Shishir Babu and kenai — the fastest path to
 * showing up for "who is Shishir Babu" / "what is kenai" queries.
 */
const FAQS: FAQ[] = [
  {
    q: "Who is Shishir Babu?",
    a: "Shishir Babu (Sam) is an AI trainer and Learning & Development consultant based in India, and the founder of kenai. He won the Indywood HR Excellence Award 2026 for Excellence in Digital HR Transformation, and has trained 100+ professionals across 15+ organisations and colleges through 40+ hands-on workshops.",
  },
  {
    q: "What is kenai?",
    a: "kenai is an AI consulting and training studio founded by Shishir Babu. It helps HR teams, businesses and colleges actually do AI — through hands-on workshops, bootcamps, corporate training, automation and advisory. Its philosophy is 'learn by doing — the way of AI.'",
  },
  {
    q: "What does kenai offer?",
    a: "AI workshops, multi-week bootcamps, org-wide corporate training, strategic AI advisory, and AI automation builds with tools like n8n. Programs are tailored for HR & L&D, businesses and colleges, and are always hands-on with real outcomes.",
  },
  {
    q: "Does kenai train colleges and students?",
    a: "Yes. kenai runs industry-ready AI and automation programs for students and faculty — project-based learning that bridges the gap between the syllabus and what the job market actually needs, including AI job-search and placement modules.",
  },
  {
    q: "How is kenai's AI training different?",
    a: "kenai doesn't hand you slides and leave. Every session is hands-on — your team builds with AI on real work the same day, with responsible-use guardrails built in and a take-home prompt and automation kit. The capability stays with your team.",
  },
  {
    q: "Where is kenai based and who can work with it?",
    a: "kenai is based in India and works with HR teams, businesses, leaders and colleges. Training is delivered on-site across India and online worldwide. Reach out at hello@kenai.in.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" style={{ position: "relative", padding: "110px 0" }}>
      <JsonLd data={faqSchema(FAQS)} />
      <div style={{ width: "min(900px,92vw)", margin: "0 auto" }}>
        <SectionReveal style={{ marginBottom: 44, textAlign: "center" }}>
          <div style={{ display: "inline-flex" }}>
            <Eyebrow>FAQ</Eyebrow>
          </div>
          <h2
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,5vw,3.2rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.04,
              margin: ".4rem 0",
            }}
          >
            Questions about{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
              kenai &amp; Shishir Babu
            </span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div style={{ display: "grid", gap: 14 }}>
            {FAQS.map((f) => (
              <details
                key={f.q}
                style={{
                  border: "1px solid rgba(0,240,255,0.14)",
                  background: "rgba(255,255,255,0.015)",
                  padding: "18px 22px",
                }}
              >
                <summary
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.16rem",
                    color: "#E5E7EB",
                    cursor: "none",
                    listStyle: "none",
                  }}
                >
                  <span style={{ color: "#FF2E97", marginRight: 10 }}>?</span>
                  {f.q}
                </summary>
                <p
                  style={{
                    color: "#aeb3c4",
                    fontSize: "1.04rem",
                    lineHeight: 1.7,
                    marginTop: 12,
                  }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
