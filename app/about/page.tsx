import type { Metadata } from "next";
import Link from "next/link";
import { founder, siteConfig, absoluteUrl, contact } from "../lib/site";
import { personSchema, breadcrumbSchema, PERSON_ID } from "../lib/schema";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  Prose,
  H2,
  CheckList,
  Panel,
  CTABlock,
  Section,
} from "../components/page-ui";

export const metadata: Metadata = {
  title: "About Shishir Babu — Founder of kenai, AI Trainer & L&D Consultant",
  description:
    "Shishir Babu (Sam) is the founder of kenai — an AI trainer and L&D consultant based in India, winner of the Indywood HR Excellence Award 2026. He has trained 100+ professionals across 15+ organisations.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    title: "About Shishir Babu — Founder of kenai",
    description:
      "AI trainer and L&D consultant. Indywood HR Excellence Award 2026. 100+ professionals trained. The way of AI.",
    url: absoluteUrl("/about"),
  },
};

const STATS = [
  { val: "100+", label: "Professionals trained" },
  { val: "40+", label: "Workshops delivered" },
  { val: "15+", label: "Orgs & colleges" },
  { val: "2026", label: "Indywood award" },
];

const METHODOLOGY = [
  "Learn by doing — every session is hands-on, on real work, not slides",
  "Role-specific use cases, so people apply AI to their actual job the same day",
  "Responsible-use guardrails built in from the first session",
  "Capability transfer — your team keeps the prompts, workflows and judgment",
  "India-first context, globally relevant practice",
];

export default function AboutPage() {
  // ProfilePage wrapping the canonical Person node (strong EEAT signal).
  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
    url: absoluteUrl("/about"),
    name: "About Shishir Babu — Founder of kenai",
  };

  return (
    <PageShell>
      <JsonLd data={personSchema()} />
      <JsonLd data={profilePage} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <Container style={{ paddingTop: 40 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      </Container>

      {/* Hero: photo + identity */}
      <Container style={{ paddingBottom: 20 }}>
        <div
          className="about-hero"
          style={{ display: "grid", gridTemplateColumns: ".75fr 1.25fr", gap: 44, alignItems: "center" }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              border: "1px solid rgba(0,240,255,0.22)",
              overflow: "hidden",
              clipPath:
                "polygon(0 0,100% 0,100% calc(100% - 26px),calc(100% - 26px) 100%,0 100%)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,240,255,0.08)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sam.jpg"
              alt="Shishir Babu (Sam), founder of kenai — AI trainer and L&D consultant"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,10,18,0.85), transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(255,46,151,0.14)",
                border: "1px solid rgba(255,46,151,0.45)",
                padding: "4px 10px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FF2E97",
              }}
            >
              ★ Indywood 2026
            </div>
          </div>

          <div>
            <Eyebrow>Founder · {founder.role}</Eyebrow>
            <h1
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem,5.4vw,3.6rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.01em",
                margin: "0 0 12px",
              }}
            >
              {founder.name}{" "}
              <span style={{ color: "#7a7f93", fontSize: "0.5em", fontWeight: 600 }}>(Sam)</span>
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#00F0FF",
                fontSize: 14,
                letterSpacing: "0.06em",
                marginBottom: 22,
              }}
            >
              {founder.jobTitle} · Founder of kenai · India
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#E5E7EB",
                padding: "12px 16px",
                border: "1px solid rgba(255,46,151,.4)",
                background: "rgba(255,46,151,.06)",
              }}
            >
              <span style={{ color: "#FF2E97", fontSize: 16 }}>★</span>
              Indywood HR Excellence Award <b style={{ color: "#FF2E97" }}>2026</b>
              {" "}— Excellence in Digital HR Transformation
            </div>
          </div>
        </div>
        <style>{`@media(max-width:820px){.about-hero{grid-template-columns:1fr!important;gap:30px!important}}`}</style>
      </Container>

      {/* Stats */}
      <Container style={{ paddingTop: 30, paddingBottom: 20 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
          className="about-stats"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                padding: 20,
                border: "1px solid rgba(0,240,255,0.14)",
                background: "rgba(255,255,255,0.015)",
                textAlign: "center",
              }}
            >
              <b
                style={{
                  display: "block",
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#00F0FF",
                  textShadow: "0 0 18px rgba(0,240,255,.4)",
                }}
              >
                {s.val}
              </b>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#7a7f93",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.about-stats{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </Container>

      {/* Story */}
      <Section>
        <Container width={860}>
          <H2>Built by a practitioner, not a vendor</H2>
          <Prose
            paragraphs={[
              founder.bio,
              "Sam doesn't teach AI from a deck. He builds with it daily — for HR, L&D, automation and content — and teaches what actually works in the real world, with the judgment to know where AI helps and where a human must stay in the loop.",
              "The mission is simple: make AI a skill your team owns, not a subscription they fear. Practical, India-first, and globally relevant.",
            ]}
          />
        </Container>
      </Section>

      {/* Methodology */}
      <Section>
        <Container width={860}>
          <Panel>
            <H2>The kenai method</H2>
            <CheckList items={METHODOLOGY} />
          </Panel>
        </Container>
      </Section>

      {/* Expertise */}
      <Section>
        <Container width={860}>
          <H2 accent="#A855F7">Areas of expertise</H2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {founder.knowsAbout.map((k) => (
              <span
                key={k}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12.5,
                  color: "#c4c8d6",
                  border: "1px solid rgba(168,85,247,0.3)",
                  background: "rgba(168,85,247,0.06)",
                  padding: "8px 14px",
                }}
              >
                {k}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Connect */}
      <Section>
        <Container width={860}>
          <H2 accent="#FF2E97">Work with Shishir</H2>
          <Prose
            paragraphs={[
              "Whether you're an HR leader, a business owner, or a college, kenai can design the path from curious to genuinely capable with AI.",
            ]}
          />
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5 }}>
            <a href={`mailto:${contact.email}`} style={{ color: "#00F0FF", textDecoration: "none" }}>
              &gt; {contact.email}
            </a>
            <a href={contact.store} target="_blank" rel="noopener noreferrer" style={{ color: "#00F0FF", textDecoration: "none" }}>
              &gt; Products on Gumroad ↗
            </a>
            <Link href="/services" style={{ color: "#00F0FF", textDecoration: "none" }}>
              &gt; View services
            </Link>
          </div>
        </Container>
      </Section>

      <Container width={860} style={{ paddingTop: 24, paddingBottom: 90 }}>
        <CTABlock heading="Bring kenai to your team." />
      </Container>
    </PageShell>
  );
}
