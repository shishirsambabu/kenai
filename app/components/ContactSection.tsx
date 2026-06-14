"use client";

import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import LeadForm from "./LeadForm";

export default function ContactSection() {
  return (
    <section id="contact" style={{ position: "relative", padding: "110px 0" }}>
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <SectionReveal>
              <Eyebrow>Contact / booking</Eyebrow>
            </SectionReveal>
            <SectionReveal delay={0.05}>
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
                Ready to{" "}
                <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.55)" }}>
                  do
                </span>{" "}
                AI?
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p style={{ fontSize: "clamp(1rem,1.5vw,1.18rem)", color: "#aeb3c4", maxWidth: "60ch", marginBottom: 26 }}>
                Book a workshop, scope a bootcamp, or get advisory for your org. Tell us what your
                team needs to learn — we&apos;ll design the path.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: "13.5px" }}>
                <a
                  href="mailto:hello@kenai.in"
                  style={{ color: "#E5E7EB", textDecoration: "none", display: "flex", gap: 12, alignItems: "center", transition: "color .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00F0FF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5E7EB")}
                >
                  <b style={{ color: "#FF2E97" }}>&gt;</b> hello@kenai.in
                </a>
                <a
                  href="https://kenai.in"
                  style={{ color: "#E5E7EB", textDecoration: "none", display: "flex", gap: 12, alignItems: "center", transition: "color .2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00F0FF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5E7EB")}
                >
                  <b style={{ color: "#FF2E97" }}>&gt;</b> kenai.in
                </a>
                <span style={{ color: "#E5E7EB", display: "flex", gap: 12, alignItems: "center" }}>
                  <b style={{ color: "#FF2E97" }}>&gt;</b> Based in India · available globally
                </span>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.15}>
            <LeadForm
              source="homepage_contact"
              interestOptions={[
                "A workshop",
                "A bootcamp",
                "Corporate training",
                "Advisory",
                "Automation / build",
                "Something for a college",
              ]}
              showMessage
            />
          </SectionReveal>
        </div>
      </div>

      <style>{`@media(max-width:820px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
