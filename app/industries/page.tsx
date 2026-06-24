import type { Metadata } from "next";
import Link from "next/link";
import { industries, services } from "../lib/catalog";
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
  title: "AI Solutions by Industry",
  description:
    "How kenai applies AI training and automation across industries — HR, education, startups and L&D. Practical, responsible AI by Shishir Babu.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "AI Solutions by Industry — kenai",
    description:
      "AI training and automation for HR, education, startups and L&D. By Shishir Babu.",
    url: absoluteUrl("/industries"),
  },
};

export default function IndustriesIndex() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Breadcrumbs
          items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]}
        />
        <Eyebrow color="#A855F7">Industries</Eyebrow>
        <PageTitle accent="#A855F7">
          AI that fits{" "}
          <span style={{ color: "#A855F7", textShadow: "0 0 22px rgba(168,85,247,.5)" }}>
            how you work.
          </span>
        </PageTitle>
        <Lead>
          The same hands-on philosophy, tuned to your world. See how kenai helps
          teams in HR, education, startups and L&amp;D turn AI into real,
          everyday capability.
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
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="ind-card"
              style={{
                display: "block",
                textDecoration: "none",
                padding: "26px 24px",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))",
                border: `1px solid ${i.accent}26`,
                transition: "transform .2s, border-color .2s",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  marginBottom: 10,
                  color: "#E5E7EB",
                }}
              >
                {i.name}
              </h2>
              <p style={{ color: "#9aa0b3", fontSize: "0.98rem", lineHeight: 1.6, marginBottom: 14 }}>
                {i.tagline}
              </p>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: i.accent }}>
                Explore →
              </span>
            </Link>
          ))}
        </div>
        <style>{`.ind-card:hover{transform:translateY(-4px)}`}</style>
      </Container>

      <Container style={{ paddingBottom: 50 }}>
        <RelatedLinks
          title="Explore services"
          links={services.slice(0, 6).map((s) => ({
            name: s.name,
            href: `/services/${s.slug}`,
            desc: s.tagline,
          }))}
        />
      </Container>

      <Container style={{ paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}
