import type { Metadata } from "next";
import Link from "next/link";
import { bootcamp } from "../lib/programs";
import { absoluteUrl } from "../lib/site";
import { courseSchema, breadcrumbSchema, faqSchema } from "../lib/schema";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Lead,
  Prose,
  H2,
  CheckList,
  Panel,
  FAQList,
  RelatedLinks,
  CTABlock,
  Section,
} from "../components/page-ui";

export const metadata: Metadata = {
  title: "3-Day AI Bootcamp (₹6,999) — Claude, Code & Automation",
  description:
    "kenai's hands-on 3-day AI bootcamp by Shishir Babu. Day 1 Claude architecture, Day 2 Claude Cowork & Claude Code, Day 3 automation with Codex & agents. ₹6,999.",
  alternates: { canonical: "/bootcamp" },
  openGraph: {
    title: "kenai 3-Day AI Bootcamp — ₹6,999",
    description:
      "Claude architecture · Claude Cowork & Code · automation with Codex. Hands-on, by Shishir Babu.",
    url: absoluteUrl("/bootcamp"),
  },
};

export default function BootcampPage() {
  return (
    <PageShell>
      <JsonLd data={courseSchema(bootcamp)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Bootcamp", path: "/bootcamp" },
        ])}
      />
      <JsonLd data={faqSchema(bootcamp.faqs)} />

      {/* Hero */}
      <Container style={{ paddingTop: 40 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "3-Day AI Bootcamp", path: "/bootcamp" }]} />
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
          <span style={pill("#FF2E97")}>★ Flagship program</span>
          <span style={pill("#00F0FF")}>3 days · hands-on</span>
          <span style={pill("#A855F7")}>No code required</span>
        </div>
        <PageTitle accent="#FF2E97">{bootcamp.name}</PageTitle>
        <Lead>{bootcamp.tagline}</Lead>

        {/* Price band */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            border: "1px solid rgba(255,46,151,0.3)",
            background: "rgba(255,46,151,0.06)",
            padding: "22px 26px",
            margin: "10px 0 8px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 700,
                fontSize: "2.6rem",
                color: "#FF2E97",
                textShadow: "0 0 22px rgba(255,46,151,.4)",
                lineHeight: 1,
              }}
            >
              {bootcamp.priceLabel}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7a7f93", letterSpacing: "0.1em", marginTop: 4 }}>
              per seat · all 3 days included
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200, fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: "#aeb3c4", lineHeight: 1.7 }}>
            <div>&gt; {bootcamp.mode}</div>
            <div>&gt; {bootcamp.level}</div>
          </div>
          <Link href="/#contact" style={ctaBtn}>
            &gt; Book your seat
          </Link>
        </div>
      </Container>

      <Section>
        <Container>
          <Prose paragraphs={bootcamp.intro} />
        </Container>
      </Section>

      {/* The 3 days */}
      <Section>
        <Container>
          <H2 accent="#FF2E97">What you&apos;ll do — day by day</H2>
          <div style={{ display: "grid", gap: 18 }}>
            {bootcamp.days.map((d) => (
              <div
                key={d.day}
                style={{
                  border: `1px solid ${d.accent}30`,
                  background: "linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.005))",
                  padding: "26px 26px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "100%",
                    background: d.accent,
                    boxShadow: `0 0 16px ${d.accent}`,
                  }}
                />
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 10 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: d.accent,
                    }}
                  >
                    {d.label}
                  </span>
                  <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#E5E7EB" }}>
                    {d.title}
                  </h3>
                </div>
                <p style={{ color: "#aeb3c4", fontSize: "1.04rem", marginBottom: 16, maxWidth: "70ch" }}>
                  {d.summary}
                </p>
                <CheckList items={d.topics} accent={d.accent} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes + includes */}
      <Section>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} className="bc-two">
            <Panel accent="#00F0FF">
              <H2 accent="#00F0FF">What you walk away with</H2>
              <CheckList items={bootcamp.outcomes} accent="#00F0FF" />
            </Panel>
            <Panel accent="#A855F7">
              <H2 accent="#A855F7">What&apos;s included</H2>
              <CheckList items={bootcamp.includes} accent="#A855F7" />
            </Panel>
          </div>
          <style>{`@media(max-width:760px){.bc-two{grid-template-columns:1fr!important}}`}</style>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section>
        <Container>
          <H2 accent="#FF2E97">Who it&apos;s for</H2>
          <CheckList items={bootcamp.audience} accent="#FF2E97" />
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container width={860}>
          <H2 accent="#FF2E97">Bootcamp FAQ</H2>
          <FAQList faqs={bootcamp.faqs} accent="#FF2E97" />
        </Container>
      </Section>

      <Section>
        <Container>
          <RelatedLinks
            title="Keep exploring"
            links={[
              { name: "All pricing", href: "/pricing", desc: "Bootcamp, workshops, corporate & advisory." },
              { name: "All services", href: "/services", desc: "Workshops, bootcamps, advisory, automation." },
              { name: "AI Readiness Tool", href: "/tools/ai-readiness", desc: "Score your team before you start." },
            ]}
            accent="#FF2E97"
          />
        </Container>
      </Section>

      <Container style={{ paddingTop: 20, paddingBottom: 90 }}>
        <CTABlock
          heading={`Book the 3-Day AI Bootcamp — ${bootcamp.priceLabel}`}
          sub="Reserve your seat, or ask about a private bootcamp for your team or college."
        />
      </Container>
    </PageShell>
  );
}

function pill(color: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10.5,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color,
    border: `1px solid ${color}44`,
    background: `${color}12`,
    padding: "5px 11px",
  };
}

const ctaBtn: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "15px 26px",
  color: "#0A0A12",
  background: "#FF2E97",
  clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
  boxShadow: "0 0 26px rgba(255,46,151,0.4)",
};
