import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import Eyebrow from "../components/Eyebrow";
import { LOCATIONS } from "../lib/locations";
import { SITE } from "../lib/services";

const url = `${SITE.url}/locations`;
const title = "AI Training in India — Locations We Serve | kenai";
const description =
  "kenai delivers AI training, workshops, consulting and automation across India — Kerala (Kochi, Trivandrum, Kozhikode, Thrissur), Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune and more. On-site and online.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function LocationsPage() {
  const country = LOCATIONS.filter((l) => l.type === "country");
  const states = LOCATIONS.filter((l) => l.type === "state");
  const cities = LOCATIONS.filter((l) => l.type === "city");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "AI Training Locations",
        description,
        url,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "ItemList",
        itemListElement: LOCATIONS.map((l, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `AI Training in ${l.name}`,
          url: `${url}/${l.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Locations", item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header style={{ position: "relative", padding: "150px 0 40px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 620,
            height: 460,
            borderRadius: "50%",
            filter: "blur(110px)",
            background: "radial-gradient(circle, rgba(0,240,255,0.22), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: "min(1100px,92vw)", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#7a7f93", marginBottom: 22, display: "flex", gap: 8 }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>home</Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>locations</span>
          </nav>
          <Eyebrow>Where we work</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem,6.5vw,4.4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            AI training,{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>near you.</span>
          </h1>
          <p style={{ color: "#aeb3c4", fontSize: "clamp(1.05rem,1.8vw,1.3rem)", maxWidth: "62ch", lineHeight: 1.6 }}>
            kenai delivers hands-on AI training, workshops, consulting and automation across India —
            on-site and online. Find your city or region.
          </p>
        </div>
      </header>

      <section style={{ padding: "30px 0 90px" }}>
        <div style={{ width: "min(1100px,92vw)", margin: "0 auto", display: "flex", flexDirection: "column", gap: 44 }}>
          <Group title="Nationwide" items={country} />
          <Group title="States & regions" items={states} />
          <Group title="Cities" items={cities} />
        </div>
      </section>
    </PageShell>
  );
}

function Group({ title, items }: { title: string; items: typeof LOCATIONS }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FF2E97",
          marginBottom: 18,
        }}
      >
        // {title}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="loc-grid">
        {items.map((l) => (
          <Link
            key={l.slug}
            href={`/locations/${l.slug}`}
            style={{
              display: "block",
              padding: "20px 22px",
              border: "1px solid rgba(0,240,255,0.14)",
              background: "#0d0d18",
              textDecoration: "none",
              transition: "border-color .2s",
            }}
          >
            <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#E5E7EB", marginBottom: 6 }}>
              AI Training in {l.name}
            </h3>
            <p style={{ color: "#9aa0b3", fontSize: "0.95rem", lineHeight: 1.45 }}>{l.blurb}</p>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#00F0FF", marginTop: 12, display: "inline-block" }}>explore &gt;_</span>
          </Link>
        ))}
      </div>
      <style>{`@media(max-width:820px){.loc-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:540px){.loc-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
