import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons, getComparison } from "../../lib/comparisons";
import { absoluteUrl } from "../../lib/site";
import { articleSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Prose,
  H2,
  FAQList,
  RelatedLinks,
  CTABlock,
  Section,
} from "../../components/page-ui";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getComparison(params.slug);
  if (!c) return {};
  return {
    title: `${c.title}: Which Should You Use? (2026)`,
    description: c.summary,
    alternates: { canonical: `/compare/${c.slug}` },
    openGraph: { title: `${c.title} — kenai`, description: c.summary, url: absoluteUrl(`/compare/${c.slug}`) },
  };
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const c = getComparison(params.slug);
  if (!c) notFound();

  return (
    <PageShell>
      <JsonLd data={articleSchema({ headline: `${c.title}: Which Should You Use?`, description: c.summary, path: `/compare/${c.slug}` })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare/claude-vs-chatgpt" },
          { name: c.title, path: `/compare/${c.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(c.faqs)} />

      <Container width={920} style={{ paddingTop: 40 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: c.title, path: `/compare/${c.slug}` }]} />
        <Eyebrow color="#A855F7">Comparison · 2026</Eyebrow>
        <PageTitle accent="#A855F7">{c.title}: which should you use?</PageTitle>
        <div style={{ borderLeft: "3px solid #A855F7", background: "rgba(168,85,247,0.06)", padding: "20px 24px", margin: "8px 0 28px" }}>
          <p style={{ fontSize: "1.18rem", lineHeight: 1.6, color: "#E5E7EB", margin: 0, fontWeight: 500 }}>{c.definition}</p>
        </div>
      </Container>

      <Section style={{ paddingTop: 0 }}>
        <Container width={920}>
          <Prose paragraphs={c.intro} />
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <H2 accent="#A855F7">Side-by-side</H2>
          <div style={{ overflowX: "auto", border: "1px solid rgba(168,85,247,0.2)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.98rem", minWidth: 640 }}>
              <thead>
                <tr style={{ background: "rgba(168,85,247,0.1)" }}>
                  <th style={th}>Dimension</th>
                  <th style={{ ...th, color: "#00F0FF" }}>{c.aName} ({c.aMaker})</th>
                  <th style={{ ...th, color: "#FF2E97" }}>{c.bName} ({c.bMaker})</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r, idx) => (
                  <tr key={r.dim} style={{ background: idx % 2 ? "rgba(255,255,255,0.012)" : "transparent" }}>
                    <td style={{ ...td, color: "#9aa0b3", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem" }}>{r.dim}</td>
                    <td style={td}>{r.a}</td>
                    <td style={td}>{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <H2 accent="#A855F7">How to choose</H2>
          <Prose paragraphs={c.guidance} />
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <H2 accent="#A855F7">FAQ</H2>
          <FAQList faqs={c.faqs} accent="#A855F7" />
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <RelatedLinks title="Keep exploring" links={c.related} accent="#A855F7" />
        </Container>
      </Section>

      <Container width={920} style={{ paddingTop: 24, paddingBottom: 90 }}>
        <CTABlock heading="Master the tool — not just pick one." />
      </Container>
    </PageShell>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "14px 16px",
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "0.95rem",
  borderBottom: "1px solid rgba(168,85,247,0.25)",
};

const td: React.CSSProperties = {
  padding: "14px 16px",
  color: "#c4c8d6",
  lineHeight: 1.55,
  verticalAlign: "top",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};
