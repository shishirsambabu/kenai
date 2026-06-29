import type { Metadata } from "next";
import Link from "next/link";
import { audiences } from "../lib/audiences";
import { absoluteUrl } from "../lib/site";
import { breadcrumbSchema } from "../lib/schema";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import { Container, Breadcrumbs, Eyebrow, PageTitle, Lead, CTABlock } from "../components/page-ui";

export const metadata: Metadata = {
  title: "AI Training by Role — Recruiters, HR, Founders, Marketers & More",
  description:
    "Role-specific AI training by kenai — for recruiters, HR managers, founders, marketers, teachers and students. Practical, hands-on, by Shishir Babu.",
  alternates: { canonical: "/ai-for" },
  openGraph: {
    title: "AI Training by Role — kenai",
    description: "Role-specific AI training for recruiters, HR, founders, marketers and more.",
    url: absoluteUrl("/ai-for"),
  },
};

export default function AiForIndex() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI For", path: "/ai-for" },
        ])}
      />
      <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "AI For", path: "/ai-for" }]} />
        <Eyebrow color="#A855F7">AI by role</Eyebrow>
        <PageTitle accent="#A855F7">
          AI training,{" "}
          <span style={{ color: "#A855F7", textShadow: "0 0 22px rgba(168,85,247,.5)" }}>
            for your role.
          </span>
        </PageTitle>
        <Lead>
          The same hands-on approach, tuned to what you actually do. Pick your role
          and see exactly how kenai helps you put AI to work.
        </Lead>
      </Container>

      <Container style={{ paddingBottom: 50 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {audiences.map((a) => (
            <Link
              key={a.slug}
              href={`/ai-for/${a.slug}`}
              className="aud-card"
              style={{
                display: "block",
                textDecoration: "none",
                padding: "24px 22px",
                border: `1px solid ${a.accent}30`,
                background: "rgba(255,255,255,0.015)",
                transition: "transform .2s, border-color .2s",
              }}
            >
              <div style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#E5E7EB", marginBottom: 8 }}>
                {a.name}
              </div>
              <p style={{ color: "#9aa0b3", fontSize: "0.95rem", lineHeight: 1.55 }}>{a.tagline}</p>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: a.accent }}>Explore →</span>
            </Link>
          ))}
        </div>
        <style>{`.aud-card:hover{transform:translateY(-3px)}`}</style>
      </Container>

      <Container style={{ paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}
