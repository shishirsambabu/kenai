import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import ServiceContent from "../../components/ServiceContent";
import { SERVICES, SITE, getService, getRelated } from "../../lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  const url = `${SITE.url}/services/${service.slug}`;
  const title = `${service.title} | kenai`;
  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.metaDescription,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const url = `${SITE.url}/services/${service.slug}`;
  const related = getRelated(service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.name,
        description: service.definition,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: ["IN", "Worldwide"],
        audience: { "@type": "Audience", audienceType: service.audience },
        ...(related.length
          ? {
              isRelatedTo: related.map((r) => ({
                "@type": "Service",
                name: r.title,
                url: `${SITE.url}/services/${r.slug}`,
              })),
            }
          : {}),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceContent service={service} />
    </PageShell>
  );
}
