import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import IndustriesIndex from "../components/IndustriesIndex";
import { INDUSTRIES } from "../lib/industries";
import { SITE } from "../lib/services";

const url = `${SITE.url}/industries`;
const title = "AI by Industry — HR, Sales, Ops, Startups & More | kenai";
const description =
  "How AI applies to your function. kenai's industry pages cover HR, recruitment, L&D, consulting, coaching, marketing, sales, operations, SMEs and startups — use cases, workflows and outcomes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "AI by Industry",
        description,
        url,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "ItemList",
        itemListElement: INDUSTRIES.map((ind, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: ind.title,
          url: `${SITE.url}/industries/${ind.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Industries", item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IndustriesIndex />
    </PageShell>
  );
}
