import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers, bootcamp } from "../lib/programs";
import { absoluteUrl } from "../lib/site";
import { breadcrumbSchema, offerCatalogSchema, faqSchema } from "../lib/schema";
import type { FAQ } from "../lib/catalog";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Lead,
  H2,
  FAQList,
  CTABlock,
  Section,
} from "../components/page-ui";

export const metadata: Metadata = {
  title: "Pricing — AI Training, Bootcamps & Consulting",
  description:
    "kenai pricing: the 3-Day AI Bootcamp is ₹6,999; team workshops, corporate training and AI advisory are custom-quoted. Hands-on AI training by Shishir Babu.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "kenai Pricing — AI training & bootcamps",
    description:
      "3-Day AI Bootcamp ₹6,999 · workshops, corporate training & advisory custom-quoted.",
    url: absoluteUrl("/pricing"),
  },
};

const PRICING_FAQS: FAQ[] = [
  {
    q: "How much does kenai's AI bootcamp cost?",
    a: "The kenai 3-Day AI Bootcamp is ₹6,999 per seat and includes all three days, a capstone project, a certificate and a take-home kit.",
  },
  {
    q: "Why are workshops and corporate training custom-priced?",
    a: "Because they're tailored — session length, team size, on-site vs online, and curriculum all change the scope. Tell us what you need and we'll send a clear quote.",
  },
  {
    q: "Do you offer pricing for colleges?",
    a: "Yes. We offer special programs and pricing for colleges and student cohorts. Email hello@kenai.in to discuss.",
  },
  {
    q: "Are there any free options?",
    a: "Yes — the AI Readiness assessment, the AI glossary and several Gumroad resources are free. They're a great way to start before booking paid training.",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd
        data={offerCatalogSchema([
          { name: bootcamp.name, price: String(bootcamp.priceINR), url: "/bootcamp" },
        ])}
      />
      <JsonLd data={faqSchema(PRICING_FAQS)} />

      <Container style={{ paddingTop: 40, paddingBottom: 10 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
        <Eyebrow color="#FF2E97">Pricing</Eyebrow>
        <PageTitle accent="#FF2E97">
          Simple pricing.{" "}
          <span style={{ color: "#FF2E97", textShadow: "0 0 22px rgba(255,46,151,.5)" }}>
            Real outcomes.
          </span>
        </PageTitle>
        <Lead>
          Start with the ₹6,999 bootcamp, or get a tailored quote for team
          workshops, org-wide corporate training and AI advisory. No fluff — every
          format is hands-on and outcome-led.
        </Lead>
      </Container>

      <Container style={{ paddingBottom: 40 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 18,
          }}
        >
          {pricingTiers.map((t) => (
            <div
              key={t.slug}
              style={{
                position: "relative",
                border: `1px solid ${t.accent}${t.highlight ? "66" : "26"}`,
                background: t.highlight
                  ? "linear-gradient(180deg,rgba(255,46,151,0.08),rgba(13,13,24,0.9))"
                  : "linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.005))",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {t.highlight && (
                <span
                  style={{
                    position: "absolute",
                    top: -11,
                    left: 24,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#0A0A12",
                    background: t.accent,
                    padding: "3px 10px",
                  }}
                >
                  ★ Most popular
                </span>
              )}
              <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: 10 }}>
                {t.name}
              </h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <span
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 700,
                    fontSize: "2.2rem",
                    color: t.accent,
                    textShadow: `0 0 18px ${t.accent}55`,
                  }}
                >
                  {t.price}
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7a7f93" }}>
                  {t.priceNote}
                </span>
              </div>
              <p style={{ color: "#9aa0b3", fontSize: "0.95rem", lineHeight: 1.6, margin: "10px 0 16px" }}>
                {t.description}
              </p>
              <ul style={{ listStyle: "none", display: "grid", gap: 8, margin: "0 0 22px", padding: 0, flex: 1 }}>
                {t.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "#b9bdce",
                      display: "flex",
                      gap: 9,
                    }}
                  >
                    <span style={{ color: t.accent, fontWeight: 700 }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={t.cta.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                  padding: "13px 18px",
                  color: t.highlight ? "#0A0A12" : t.accent,
                  background: t.highlight ? t.accent : "transparent",
                  boxShadow: t.highlight ? `0 0 22px ${t.accent}44` : `inset 0 0 0 1px ${t.accent}66`,
                  clipPath:
                    "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)",
                }}
              >
                {t.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </Container>

      <Container style={{ paddingBottom: 30 }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: "#7a7f93", lineHeight: 1.8 }}>
          &gt; Free to start: the{" "}
          <Link href="/tools/ai-readiness" style={{ color: "#00F0FF", textDecoration: "none" }}>
            AI Readiness assessment
          </Link>
          , the{" "}
          <Link href="/glossary" style={{ color: "#00F0FF", textDecoration: "none" }}>
            AI glossary
          </Link>
          , and{" "}
          <a href="https://shishirbabu.gumroad.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00F0FF", textDecoration: "none" }}>
            free resources on Gumroad ↗
          </a>
          .
        </p>
      </Container>

      <Section>
        <Container width={860}>
          <H2 accent="#FF2E97">Pricing FAQ</H2>
          <FAQList faqs={PRICING_FAQS} accent="#FF2E97" />
        </Container>
      </Section>

      <Container style={{ paddingTop: 20, paddingBottom: 90 }}>
        <CTABlock heading="Not sure which fits? Let's talk." sub="Tell us your team, goals and timeline — we'll recommend the right format and quote it clearly." />
      </Container>
    </PageShell>
  );
}
