"use client";

import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import LeadForm from "./LeadForm";

export default function NewsletterSection() {
  return (
    <section id="newsletter" style={{ position: "relative", padding: "90px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <div
          className="newsletter-grid"
          style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center" }}
        >
          <SectionReveal>
            <Eyebrow>The way of AI · newsletter</Eyebrow>
            <h2
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem,4.5vw,3rem)",
                letterSpacing: "-0.01em",
                margin: ".4rem 0 1rem",
                lineHeight: 1.05,
              }}
            >
              Practical AI,{" "}
              <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
                in your inbox.
              </span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#aeb3c4", maxWidth: "52ch", lineHeight: 1.6 }}>
              Frameworks, prompts and real-world AI workflows you can use the same day. No hype, no
              fluff — just what&apos;s actually working. Join HR leaders, founders and teams learning
              the way of AI.
            </p>
            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 22,
                flexWrap: "wrap",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7a7f93",
              }}
            >
              <span><span style={{ color: "#00F0FF" }}>›</span> Frameworks &amp; playbooks</span>
              <span><span style={{ color: "#FF2E97" }}>›</span> Prompt drops</span>
              <span><span style={{ color: "#A855F7" }}>›</span> Unsubscribe anytime</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <LeadForm
              source="newsletter_signup"
              compact
              submitLabel="> Subscribe"
              terminalLabel="kenai@newsletter: subscribe"
            />
          </SectionReveal>
        </div>
      </div>
      <style>{`@media(max-width:820px){.newsletter-grid{grid-template-columns:1fr!important;gap:28px!important}}`}</style>
    </section>
  );
}
