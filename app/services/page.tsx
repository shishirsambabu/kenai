import type { Metadata } from "next";
import Link from "next/link";
import { services, industries } from "../lib/catalog";
import { absoluteUrl } from "../lib/site";
import { breadcrumbSchema } from "../lib/schema";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Lead,
  RelatedLinks,
  CTABlock,
} from "../components/page-ui";

export const metadata: Metadata = {
  title: "AI Training & Consulting Services",
  description:
    "kenai's AI training and consulting services — for HR, business and colleges. Workshops, bootcamps, corporate training, advisory and automation. By Shishir Babu.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Training & Consulting Services — kenai",
    description:
      "Workshops, bootcamps, corporate training, advisory and automation. Hands-on AI capability by Shishir Babu.",
    url: absoluteUrl("/services"),
  },
};

export default function ServicesIndex() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "kenai AI services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: absoluteUrl(`/services/${s.slug}`),
    })),
  };

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd data={itemList} />

      <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
        <Eyebrow>Services</Eyebrow>
        <PageTitle>
          AI training &amp; consulting,{" "}
          <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
            built into your team.
          </span>
        </PageTitle>
        <Lead>
          Every kenai engagement is hands-on and outcome-led — your people build
          with AI on real work, not slides. Pick the path that fits: a single
          workshop, a multi-week bootcamp, an org-wide rollout, or strategic
          advisory.
        </Lead>
      </Container>

      <Container style={{ paddingBottom: 50 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 18,
          }}
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="svc-card"
              style={{
                display: "block",
                textDecoration: "none",
                padding: "26px 24px",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))",
                border: `1px solid ${s.accent}26`,
                position: "relative",
                overflow: "hidden",
                transition: "transform .2s, border-color .2s",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10.5,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: s.accent,
                  marginBottom: 12,
                }}
              >
                {s.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  marginBottom: 10,
                  color: "#E5E7EB",
                }}
              >
                {s.name}
              </h2>
              <p style={{ color: "#9aa0b3", fontSize: "0.98rem", lineHeight: 1.6, marginBottom: 14 }}>
                {s.tagline}
              </p>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: s.accent,
                }}
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>
        <style>{`.svc-card:hover{transform:translateY(-4px)}`}</style>
      </Container>

      <Container style={{ paddingBottom: 50 }}>
        <RelatedLinks
          title="By industry"
          links={industries.map((i) => ({
            name: i.name,
            href: `/industries/${i.slug}`,
            desc: i.tagline,
          }))}
          accent="#A855F7"
        />
      </Container>

      <Container style={{ paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}
