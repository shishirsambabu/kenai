import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "../lib/locations";
import { absoluteUrl } from "../lib/site";
import { breadcrumbSchema } from "../lib/schema";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import { Container, Breadcrumbs, Eyebrow, PageTitle, Lead, CTABlock } from "../components/page-ui";

export const metadata: Metadata = {
  title: "AI Training in India — Workshops & Bootcamps by City",
  description:
    "Hands-on AI training across India — Bangalore, Mumbai, Delhi, Hyderabad, Chennai, Pune and more, plus live online. Workshops, bootcamps & corporate programs by Shishir Babu.",
  alternates: { canonical: "/ai-training" },
  openGraph: {
    title: "AI Training across India — kenai",
    description: "AI workshops, bootcamps and corporate training by city. By Shishir Babu.",
    url: absoluteUrl("/ai-training"),
  },
};

export default function AiTrainingIndex() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI Training", path: "/ai-training" },
        ])}
      />
      <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "AI Training", path: "/ai-training" }]} />
        <Eyebrow>AI Training by location</Eyebrow>
        <PageTitle>
          Hands-on AI training,{" "}
          <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
            near you.
          </span>
        </PageTitle>
        <Lead>
          kenai delivers AI workshops, the 3-day bootcamp, corporate training and
          advisory on-site across India and live online worldwide. Pick your city.
        </Lead>
      </Container>

      <Container style={{ paddingBottom: 50 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/ai-training/${l.slug}`}
              className="loc-card"
              style={{
                display: "block",
                textDecoration: "none",
                padding: "22px 20px",
                border: "1px solid rgba(0,240,255,0.14)",
                background: "rgba(255,255,255,0.015)",
                transition: "transform .2s, border-color .2s",
              }}
            >
              <div style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#E5E7EB", marginBottom: 4 }}>
                AI Training in {l.city}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7a7f93" }}>
                {l.region} · {l.blurb}
              </div>
            </Link>
          ))}
        </div>
        <style>{`.loc-card:hover{transform:translateY(-3px);border-color:rgba(0,240,255,0.4)!important}`}</style>
      </Container>

      <Container style={{ paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}
