import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import IndustryContent from "../../components/IndustryContent";
import { INDUSTRIES, getIndustry } from "../../lib/industries";
import { SITE } from "../../lib/services";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  const url = `${SITE.url}/industries/${industry.slug}`;
  const title = `${industry.title} | kenai`;
  return {
    title,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: { title, description: industry.metaDescription, url, siteName: SITE.name, type: "website" },
    twitter: { card: "summary_large_image", title, description: industry.metaDescription },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();
  const url = `${SITE.url}/industries/${industry.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        name: industry.title,
        description: industry.metaDescription,
        url,
        about: industry.name,
        isPartOf: { "@id": `${SITE.url}/#website` },
        provider: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: industry.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE.url}/industries` },
          { "@type": "ListItem", position: 3, name: industry.name, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IndustryContent industry={industry} />
    </PageShell>
  );
}
