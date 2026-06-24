import type { Metadata } from "next";
import Link from "next/link";
import { glossary } from "../lib/catalog";
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
  CTABlock,
} from "../components/page-ui";

export const metadata: Metadata = {
  title: "AI Glossary — Key AI Terms Explained Simply",
  description:
    "A plain-English AI glossary: LLM, prompt engineering, RAG, AI agents, hallucination and more — defined clearly for professionals. By kenai / Shishir Babu.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "AI Glossary — kenai",
    description:
      "Plain-English definitions of the AI terms that matter at work. By Shishir Babu.",
    url: absoluteUrl("/glossary"),
  },
};

export default function GlossaryIndex() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "kenai AI Glossary",
    description:
      "Plain-English definitions of essential AI terms for professionals.",
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: glossary.map((g) => ({
      "@type": "DefinedTerm",
      name: g.abbr ? `${g.term} (${g.abbr})` : g.term,
      description: g.definition,
      url: absoluteUrl(`/glossary/${g.slug}`),
    })),
  };

  // Group by category for scannability
  const categories = Array.from(new Set(glossary.map((g) => g.category)));

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />
      <JsonLd data={definedTermSet} />

      <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }]} />
        <Eyebrow>AI Glossary</Eyebrow>
        <PageTitle>
          The AI terms that{" "}
          <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
            actually matter.
          </span>
        </PageTitle>
        <Lead>
          No jargon, no hype — just clear, quotable definitions of the AI concepts
          you&apos;ll meet at work, each with a short explanation and links to learn
          more.
        </Lead>
      </Container>

      {categories.map((cat) => (
        <Container key={cat} style={{ paddingBottom: 36 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF2E97",
              marginBottom: 16,
            }}
          >
            // {cat}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 16,
            }}
          >
            {glossary
              .filter((g) => g.category === cat)
              .map((g) => (
                <Link
                  key={g.slug}
                  href={`/glossary/${g.slug}`}
                  className="gl-card"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    padding: "22px 20px",
                    background:
                      "linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.005))",
                    border: "1px solid rgba(0,240,255,0.14)",
                    transition: "transform .2s, border-color .2s",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Chakra Petch', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.18rem",
                      marginBottom: 8,
                      color: "#E5E7EB",
                    }}
                  >
                    {g.term}
                    {g.abbr ? (
                      <span style={{ color: "#00F0FF", fontWeight: 600 }}> · {g.abbr}</span>
                    ) : null}
                  </h2>
                  <p style={{ color: "#9aa0b3", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {g.definition}
                  </p>
                </Link>
              ))}
          </div>
        </Container>
      ))}
      <style>{`.gl-card:hover{transform:translateY(-3px);border-color:rgba(0,240,255,0.4)!important}`}</style>

      <Container style={{ paddingTop: 30, paddingBottom: 90 }}>
        <CTABlock heading="Want your team fluent in all of this?" />
      </Container>
    </PageShell>
  );
}
