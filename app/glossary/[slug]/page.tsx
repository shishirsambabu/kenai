import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { glossary, getGlossaryTerm } from "../../lib/catalog";
import { absoluteUrl } from "../../lib/site";
import { definedTermSchema, breadcrumbSchema } from "../../lib/schema";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Prose,
  RelatedLinks,
  CTABlock,
  Section,
} from "../../components/page-ui";

export function generateStaticParams() {
  return glossary.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGlossaryTerm(params.slug);
  if (!g) return {};
  const title = g.abbr ? `What is ${g.term} (${g.abbr})?` : `What is ${g.term}?`;
  return {
    title,
    description: g.definition,
    alternates: { canonical: `/glossary/${g.slug}` },
    openGraph: {
      title: `${title} — kenai AI Glossary`,
      description: g.definition,
      url: absoluteUrl(`/glossary/${g.slug}`),
    },
  };
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const g = getGlossaryTerm(params.slug);
  if (!g) notFound();

  const related = g.related
    .map((slug) => getGlossaryTerm(slug))
    .filter(Boolean)
    .map((r) => ({
      name: r!.abbr ? `${r!.term} (${r!.abbr})` : r!.term,
      href: `/glossary/${r!.slug}`,
      desc: r!.definition,
    }));

  const heading = g.abbr ? `What is ${g.term} (${g.abbr})?` : `What is ${g.term}?`;

  return (
    <PageShell>
      <JsonLd data={definedTermSchema(g)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
          { name: g.term, path: `/glossary/${g.slug}` },
        ])}
      />

      <Container width={860} style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
            { name: g.term, path: `/glossary/${g.slug}` },
          ]}
        />
        <Eyebrow>{g.category}</Eyebrow>
        <PageTitle>{heading}</PageTitle>

        {/* Definition-first answer block (GEO / featured snippet target) */}
        <div
          style={{
            borderLeft: "3px solid #00F0FF",
            background: "rgba(0,240,255,0.05)",
            padding: "20px 24px",
            margin: "8px 0 28px",
          }}
        >
          <p
            style={{
              fontSize: "1.22rem",
              lineHeight: 1.6,
              color: "#E5E7EB",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {g.definition}
          </p>
        </div>
      </Container>

      <Section style={{ paddingTop: 0 }}>
        <Container width={860}>
          <Prose paragraphs={g.body} />
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container width={860}>
            <RelatedLinks title="Related terms" links={related} />
          </Container>
        </Section>
      )}

      <Container width={860} style={{ paddingTop: 20, paddingBottom: 90 }}>
        <CTABlock heading="Learn to use this — hands-on." sub="kenai workshops and bootcamps turn AI theory into team capability." />
      </Container>
    </PageShell>
  );
}
