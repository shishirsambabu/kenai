import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import CaseStudiesIndex from "../components/CaseStudiesIndex";
import { CASE_STUDIES } from "../lib/caseStudies";
import { SITE } from "../lib/services";

const url = `${SITE.url}/case-studies`;
const title = "AI Case Studies — Real Outcomes | kenai";
const description =
  "Real kenai case studies: how HR teams, businesses and colleges went from AI-curious to genuinely capable — with the approach, results and lessons from each engagement.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "AI Case Studies",
        description,
        url,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "ItemList",
        itemListElement: CASE_STUDIES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.title,
          url: `${SITE.url}/case-studies/${c.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudiesIndex />
    </PageShell>
  );
}
