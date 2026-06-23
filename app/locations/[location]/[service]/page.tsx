import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import LocationServiceContent from "../../../components/LocationServiceContent";
import { SERVICES, SITE, getService } from "../../../lib/services";
import { LOCATIONS, LOCALIZED_SERVICE_SLUGS, getLocation, locationParent } from "../../../lib/locations";
import {
  serviceLocationTitle,
  serviceLocationMeta,
  serviceLocationFaqs,
} from "../../../lib/localContent";

export function generateStaticParams() {
  const params: { location: string; service: string }[] = [];
  for (const loc of LOCATIONS) {
    for (const svc of LOCALIZED_SERVICE_SLUGS) {
      params.push({ location: loc.slug, service: svc });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { location: string; service: string };
}): Metadata {
  const loc = getLocation(params.location);
  const svc = getService(params.service);
  if (!loc || !svc || !LOCALIZED_SERVICE_SLUGS.includes(svc.slug)) return {};
  const url = `${SITE.url}/locations/${loc.slug}/${svc.slug}`;
  const title = `${serviceLocationTitle(svc, loc)} | kenai`;
  const description = serviceLocationMeta(svc, loc);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE.name, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function LocationServicePage({
  params,
}: {
  params: { location: string; service: string };
}) {
  const loc = getLocation(params.location);
  const svc = getService(params.service);
  if (!loc || !svc || !LOCALIZED_SERVICE_SLUGS.includes(svc.slug)) notFound();

  const url = `${SITE.url}/locations/${loc.slug}/${svc.slug}`;
  const parent = locationParent(loc);
  const faqs = serviceLocationFaqs(svc, loc);

  const otherServices = SERVICES.filter(
    (s) => LOCALIZED_SERVICE_SLUGS.includes(s.slug) && s.slug !== svc.slug
  ).map((s) => ({ slug: s.slug, name: s.name, accent: s.accent }));

  const areaServed: Record<string, unknown> = {
    "@type": loc.schemaType,
    name: loc.name,
  };
  if (parent) {
    areaServed.containedInPlace = { "@type": parent.schemaType, name: parent.name };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${svc.name} in ${loc.name}`,
        serviceType: svc.name,
        description: serviceLocationMeta(svc, loc),
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed,
        audience: { "@type": "Audience", audienceType: svc.audience },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE.url}/locations` },
          { "@type": "ListItem", position: 3, name: loc.name, item: `${SITE.url}/locations/${loc.slug}` },
          { "@type": "ListItem", position: 4, name: `${svc.name} in ${loc.name}`, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationServiceContent service={svc} location={loc} otherServices={otherServices} />
    </PageShell>
  );
}
