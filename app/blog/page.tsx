import type { Metadata } from "next";
import Link from "next/link";
import { sortedPosts } from "../lib/blog";
import { absoluteUrl } from "../lib/site";
import { breadcrumbSchema } from "../lib/schema";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import { Container, Breadcrumbs, Eyebrow, PageTitle, Lead, CTABlock } from "../components/page-ui";

export const metadata: Metadata = {
  title: "Blog — Practical Notes on AI, HR & Automation",
  description:
    "Practical, no-hype writing on AI adoption, HR, automation and prompting — patterns from real consulting and training work. By Shishir Babu / kenai.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "kenai Blog — practical notes on AI",
    description: "No-hype writing on AI, HR, automation and prompting. By Shishir Babu.",
    url: absoluteUrl("/blog"),
  },
};

export default function BlogIndex() {
  const all = sortedPosts();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "kenai Blog",
    url: absoluteUrl("/blog"),
    description: metadata.description,
    blogPost: all.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.date,
    })),
  };

  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <JsonLd data={blogSchema} />

      <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
        <Eyebrow>Blog</Eyebrow>
        <PageTitle>
          Notes from the edge of{" "}
          <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
            AI adoption.
          </span>
        </PageTitle>
        <Lead>
          No hype, no doomism — just patterns from the field, frameworks that work,
          and things worth knowing about putting AI to work.
        </Lead>
      </Container>

      <Container style={{ paddingBottom: 70 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
          {all.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="blog-card"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                padding: "26px 24px",
                border: "1px solid rgba(0,240,255,0.12)",
                background: "linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.005))",
                position: "relative",
                overflow: "hidden",
                transition: "transform .2s, border-color .2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: p.tagColor,
                    border: `1px solid ${p.tagColor}44`,
                    background: `${p.tagColor}12`,
                    padding: "3px 10px",
                  }}
                >
                  {p.tag}
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#7a7f93" }}>
                  {p.readMins} min
                </span>
              </div>
              <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.25, color: "#E5E7EB", marginBottom: 10 }}>
                {p.title}
              </h2>
              <p style={{ color: "#9aa0b3", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                {p.excerpt}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#7a7f93" }}>
                <span>{fmtDate(p.date)}</span>
                <span style={{ color: p.tagColor, fontWeight: 700 }}>Read →</span>
              </div>
            </Link>
          ))}
        </div>
        <style>{`.blog-card:hover{transform:translateY(-4px);border-color:rgba(0,240,255,0.4)!important}`}</style>
      </Container>

      <Container style={{ paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
