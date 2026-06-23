import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import LocationHubContent from "../../components/LocationHubContent";
import { SERVICES, SITE } from "../../lib/services";
import { LOCATIONS, LOCALIZED_SERVICE_SLUGS, getLocation, locationParent } from "../../lib/locations";
import { locationHubTitle, locationHubMeta } from "../../lib/localContent";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

export function generateMetadata({ params }: { params: { location: string } }): Metadata {
  const loc = getLocation(params.location);
  if (!loc) return {};
  const url = `${SITE.url}/locations/${loc.slug}`;
  const title = `${locationHubTitle(loc)} | kenai`;
  const description = locationHubMeta(loc);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE.name, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function LocationHubPage({ params }: { params: { location: string } }) {
  const loc = getLocation(params.location);
  if (!loc) notFound();

  const url = `${SITE.url}/locations/${loc.slug}`;
  const parent = locationParent(loc);
  const localizedServices = SERVICES.filter((s) => LOCALIZED_SERVICE_SLUGS.includes(s.slug));
  const childLocations = LOCATIONS.filter((l) => l.parent === loc.slug).map((l) => ({
    slug: l.slug,
    name: l.name,
  }));

  const areaServed: Record<string, unknown> = { "@type": loc.schemaType, name: loc.name };
  if (parent) areaServed.containedInPlace = { "@type": parent.schemaType, name: parent.name };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: locationHubTitle(loc),
        serviceType: "AI training and consulting",
        description: locationHubMeta(loc),
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `AI services in ${loc.name}`,
          itemListElement: localizedServices.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${s.name} in ${loc.name}`,
              url: `${url}/${s.slug}`,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE.url}/locations` },
          { "@type": "ListItem", position: 3, name: loc.name, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationHubContent location={loc} localizedServices={localizedServices} childLocations={childLocations} />
    </PageShell>
  );
}
