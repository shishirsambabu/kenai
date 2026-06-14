import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import GlossaryContent from "../../components/GlossaryContent";
import { GLOSSARY, getTerm } from "../../lib/glossary";
import { SITE } from "../../lib/services";

export function generateStaticParams() {
  return GLOSSARY.map((t) => ({ term: t.slug }));
}

export function generateMetadata({ params }: { params: { term: string } }): Metadata {
  const t = getTerm(params.term);
  if (!t) return {};
  const url = `${SITE.url}/glossary/${t.slug}`;
  const title = `What is ${t.term}? Definition & Examples | kenai`;
  return {
    title,
    description: t.definition,
    alternates: { canonical: url },
    openGraph: { title, description: t.definition, url, siteName: SITE.name, type: "article" },
    twitter: { card: "summary_large_image", title, description: t.definition },
  };
}

export default function GlossaryTermPage({ params }: { params: { term: string } }) {
  const t = getTerm(params.term);
  if (!t) notFound();
  const url = `${SITE.url}/glossary/${t.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `${url}#term`,
        name: t.term,
        description: t.definition,
        url,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "kenai AI Glossary",
          url: `${SITE.url}/glossary`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: [
          { "@type": "Question", name: `What is ${t.term}?`, acceptedAnswer: { "@type": "Answer", text: t.definition } },
          { "@type": "Question", name: `Why does ${t.term} matter?`, acceptedAnswer: { "@type": "Answer", text: t.whyItMatters } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE.url}/glossary` },
          { "@type": "ListItem", position: 3, name: t.term, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlossaryContent term={t} />
    </PageShell>
  );
}
