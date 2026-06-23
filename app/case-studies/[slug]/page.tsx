import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import CaseStudyContent from "../../components/CaseStudyContent";
import { CASE_STUDIES, getCaseStudy } from "../../lib/caseStudies";
import { SITE } from "../../lib/services";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  const url = `${SITE.url}/case-studies/${study.slug}`;
  const title = `${study.title} | kenai case study`;
  return {
    title,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: { title, description: study.metaDescription, url, siteName: SITE.name, type: "article" },
    twitter: { card: "summary_large_image", title, description: study.metaDescription },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  const url = `${SITE.url}/case-studies/${study.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.title,
        description: study.metaDescription,
        url,
        articleSection: "Case Study",
        about: study.sector,
        author: { "@id": `${SITE.url}/#organization` },
        publisher: { "@id": `${SITE.url}/#organization` },
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE.url}/case-studies` },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudyContent study={study} />
    </PageShell>
  );
}
