import type { Metadata } from "next";
import Link from "next/link";
import { locations, getLocation } from "../../lib/locations";
import { services } from "../../lib/catalog";
import { absoluteUrl, siteConfig } from "../../lib/site";
import { breadcrumbSchema, faqSchema, ORG_ID } from "../../lib/schema";
import type { FAQ } from "../../lib/catalog";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Lead,
  Prose,
  H2,
  CheckList,
  FAQList,
  RelatedLinks,
  CTABlock,
  Section,
} from "../../components/page-ui";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const loc = getLocation(params.city);
  if (!loc) return {};
  return {
    title: `AI Training in ${loc.city} — Workshops, Bootcamps & Corporate Programs`,
    description: `Hands-on AI training in ${loc.city} by Shishir Babu / kenai. Workshops, the 3-day AI bootcamp, corporate training and advisory — for teams, businesses and colleges.`,
    alternates: { canonical: `/ai-training/${loc.slug}` },
    openGraph: {
      title: `AI Training in ${loc.city} — kenai`,
      description: `Hands-on AI workshops, bootcamps and corporate training in ${loc.city}. By Shishir Babu.`,
      url: absoluteUrl(`/ai-training/${loc.slug}`),
    },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) return null;

  const isOnline = loc.slug === "online";
  const faqs: FAQ[] = [
    {
      q: `Do you offer AI training in ${loc.city}?`,
      a: `Yes. kenai runs hands-on AI training for ${loc.city} — workshops, the 3-day AI bootcamp, corporate rollouts and advisory — delivered ${isOnline ? "live online" : `on-site in ${loc.city} or live online`}. Email hello@kenai.in to plan a session.`,
    },
    {
      q: `Is the 3-day AI bootcamp available in ${loc.city}?`,
      a: `Yes. The ₹6,999 3-Day AI Bootcamp (Claude architecture, Claude Cowork & Code, and automation with Codex) is available to learners in ${loc.city} as live online cohorts${isOnline ? "" : " and on-site for teams"}.`,
    },
    {
      q: `Who delivers the training?`,
      a: `All programs are led by Shishir Babu (Sam), founder of kenai, AI trainer and L&D consultant, and winner of the Indywood HR Excellence Award 2026.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `AI Training in ${loc.city}`,
    description: `Hands-on AI training, workshops and bootcamps in ${loc.city} by kenai.`,
    url: absoluteUrl(`/ai-training/${loc.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: `${loc.city}${loc.region ? ", " + loc.region : ""}` },
  };

  const otherCities = locations.filter((l) => l.slug !== loc.slug).slice(0, 6);

  return (
    <PageShell>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI Training", path: "/ai-training" },
          { name: loc.city, path: `/ai-training/${loc.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Container style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "AI Training", path: "/ai-training" },
            { name: loc.city, path: `/ai-training/${loc.slug}` },
          ]}
        />
        <Eyebrow>AI Training · {loc.region}</Eyebrow>
        <PageTitle>
          AI Training in{" "}
          <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
            {loc.city}
          </span>
        </PageTitle>
        <Lead>
          Hands-on AI workshops, bootcamps and corporate training for teams,
          businesses and colleges in {loc.city} — {loc.blurb}. Learn by doing, the
          way of AI.
        </Lead>
      </Container>

      <Section>
        <Container>
          <Prose
            paragraphs={[
              `kenai brings practical, hands-on AI training to ${loc.city}. Whether you're an HR team, a business, or a college, your people build with AI on real work${isOnline ? " in live, interactive online sessions" : ` — on-site in ${loc.city} or live online`}. No slides-and-leave; just real capability your team keeps.`,
              `Programs are led by Shishir Babu (Sam), an AI trainer and L&D consultant recognised with the Indywood HR Excellence Award 2026, who has trained 100+ professionals across 15+ organisations and colleges.`,
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Formats available in {loc.city}</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
            <FormatCard href="/bootcamp" title="3-Day AI Bootcamp" note="₹6,999 · flagship" accent="#FF2E97" />
            {services.slice(3, 7).map((s) => (
              <FormatCard key={s.slug} href={`/services/${s.slug}`} title={s.shortName} note={s.eyebrow} accent={s.accent} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Why teams in {loc.city} choose kenai</H2>
          <CheckList
            items={[
              "Hands-on from the first hour — real work, not slides",
              "Role-specific use cases for HR, business and colleges",
              "Responsible-use guardrails built in",
              `${isOnline ? "Live, interactive online delivery worldwide" : `On-site delivery in ${loc.city} plus live online`}`,
              "Take-home prompt and automation kit",
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container width={860}>
          <H2>AI training in {loc.city} — FAQ</H2>
          <FAQList faqs={faqs} />
        </Container>
      </Section>

      <Section>
        <Container>
          <RelatedLinks
            title="AI training in other cities"
            links={otherCities.map((c) => ({ name: `AI Training in ${c.city}`, href: `/ai-training/${c.slug}` }))}
            accent="#A855F7"
          />
        </Container>
      </Section>

      <Container style={{ paddingTop: 20, paddingBottom: 90 }}>
        <CTABlock heading={`Bring kenai to ${loc.city}`} />
      </Container>
    </PageShell>
  );
}

function FormatCard({ href, title, note, accent }: { href: string; title: string; note: string; accent: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        padding: "20px 18px",
        border: `1px solid ${accent}30`,
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>
        {note}
      </div>
      <div style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#E5E7EB" }}>
        {title} <span style={{ color: accent }}>→</span>
      </div>
    </Link>
  );
}
