import type { Metadata } from "next";
import Link from "next/link";
import { services, industries, getService } from "../lib/catalog";
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
  title: "AI Training, Consulting & Building Services",
  description:
    "kenai's AI services — training for HR, business and colleges, plus Forward Deployed Engineering and AI-native building. We don't just teach AI, we build it with you. By Shishir Babu.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Training, Consulting & Building Services — kenai",
    description:
      "Workshops, bootcamps, advisory, automation — plus Forward Deployed Engineering and AI-native building. By Shishir Babu.",
    url: absoluteUrl("/services"),
  },
};

export default function ServicesIndex() {
  const BUILD_SLUGS = ["forward-deployed-engineering", "ai-native-building"];
  const buildServices = BUILD_SLUGS.map(getService).filter(Boolean);
  const trainingServices = services.filter((s) => !BUILD_SLUGS.includes(s.slug));

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
          Every kenai engagement is hands-on and outcome-led. Learn by doing with a
          workshop, bootcamp, rollout or advisory — or skip ahead and have us{" "}
          <strong style={{ color: "#FF2E97" }}>build the AI with you</strong> and ship it to production.
        </Lead>
      </Container>

      {/* Featured: Build with kenai */}
      <Container id="build" style={{ paddingBottom: 46, scrollMarginTop: 90 }}>
        <div
          style={{
            border: "1px solid rgba(255,46,151,0.3)",
            background: "linear-gradient(135deg,rgba(255,46,151,0.07),rgba(13,13,24,0.9) 55%,rgba(0,240,255,0.06))",
            padding: "30px 28px",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF2E97",
              marginBottom: 8,
            }}
          >
            ★ Build with kenai — our highest-impact work
          </div>
          <h2
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem,3.4vw,2.2rem)",
              marginBottom: 8,
            }}
          >
            Beyond training: we build AI <span style={{ color: "#FF2E97" }}>in production</span>, with you.
          </h2>
          <p style={{ color: "#aeb3c4", fontSize: "1.04rem", maxWidth: "70ch", marginBottom: 22, lineHeight: 1.6 }}>
            Most trainers stop at the slides. kenai embeds with your team and ships the
            working system — the real differentiator.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="build-feat">
            {buildServices.map((s) => (
              <Link
                key={s!.slug}
                href={`/services/${s!.slug}`}
                className="svc-card"
                style={{
                  display: "block",
                  textDecoration: "none",
                  padding: "24px 22px",
                  background: "rgba(10,10,18,0.5)",
                  border: `1px solid ${s!.accent}44`,
                  transition: "transform .2s, border-color .2s",
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: s!.accent, marginBottom: 10 }}>
                  {s!.eyebrow}
                </div>
                <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.45rem", color: "#E5E7EB", marginBottom: 8 }}>
                  {s!.name}
                </h3>
                <p style={{ color: "#9aa0b3", fontSize: "0.98rem", lineHeight: 1.6, marginBottom: 12 }}>{s!.tagline}</p>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: s!.accent }}>Explore →</span>
              </Link>
            ))}
          </div>
          <style>{`@media(max-width:700px){.build-feat{grid-template-columns:1fr!important}}`}</style>
        </div>
      </Container>

      <Container style={{ paddingBottom: 50 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 18,
          }}
        >
          {trainingServices.map((s) => (
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
