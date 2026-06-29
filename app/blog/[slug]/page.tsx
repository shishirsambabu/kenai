import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost, sortedPosts, type Block } from "../../lib/blog";
import { absoluteUrl, founder } from "../../lib/site";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  H2,
  CheckList,
  FAQList,
  RelatedLinks,
  CTABlock,
  Section,
} from "../../components/page-ui";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.description,
      url: absoluteUrl(`/blog/${p.slug}`),
      publishedTime: p.date,
      authors: [founder.name],
    },
  };
}

function BlockView({ block, color }: { block: Block; color: string }) {
  if ("h2" in block) return <H2 accent={color}>{block.h2}</H2>;
  if ("ul" in block) return <div style={{ margin: "4px 0 8px" }}><CheckList items={block.ul} accent={color} /></div>;
  if ("quote" in block)
    return (
      <blockquote
        style={{
          borderLeft: `3px solid ${color}`,
          background: `${color}0d`,
          padding: "16px 22px",
          margin: "8px 0",
          fontFamily: "'Chakra Petch', sans-serif",
          fontSize: "1.22rem",
          color: "#E5E7EB",
          lineHeight: 1.5,
        }}
      >
        {block.quote}
      </blockquote>
    );
  return <p style={{ color: "#c4c8d6", fontSize: "1.1rem", lineHeight: 1.78, margin: "0 0 18px" }}>{block.p}</p>;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const color = p.tagColor;

  const related = p.related
    .map((path) => {
      const post = posts.find((x) => `/blog/${x.slug}` === path);
      return { name: post ? post.title : prettyPath(path), href: path };
    });

  const more = sortedPosts().filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <PageShell>
      <JsonLd
        data={blogPostingSchema({
          slug: p.slug,
          title: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.updated,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path: `/blog/${p.slug}` },
        ])}
      />
      {p.faqs && p.faqs.length > 0 && <JsonLd data={faqSchema(p.faqs)} />}

      <Container width={820} style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: p.tag, path: `/blog/${p.slug}` },
          ]}
        />
        <Eyebrow color={color}>{p.tag}</Eyebrow>
        <PageTitle accent={color}>{p.title}</PageTitle>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#7a7f93", marginBottom: 8, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <span>By {founder.name}</span>
          <span style={{ color: color }}>·</span>
          <span>{fmtDate(p.date)}</span>
          <span style={{ color: color }}>·</span>
          <span>{p.readMins} min read</span>
        </div>
      </Container>

      <Section style={{ paddingTop: 18 }}>
        <Container width={820}>
          <article>
            {p.body.map((block, i) => (
              <BlockView key={i} block={block} color={color} />
            ))}
          </article>
        </Container>
      </Section>

      {p.faqs && p.faqs.length > 0 && (
        <Section>
          <Container width={820}>
            <H2 accent={color}>FAQ</H2>
            <FAQList faqs={p.faqs} accent={color} />
          </Container>
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <Container width={820}>
            <RelatedLinks title="Go deeper" links={related} accent={color} />
          </Container>
        </Section>
      )}

      <Section>
        <Container width={820}>
          <RelatedLinks
            title="More from the blog"
            links={more.map((m) => ({ name: m.title, href: `/blog/${m.slug}`, desc: m.excerpt }))}
            accent={color}
          />
        </Container>
      </Section>

      <Container width={820} style={{ paddingTop: 10, paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function prettyPath(path: string) {
  const seg = path.split("/").filter(Boolean).pop() ?? path;
  return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
