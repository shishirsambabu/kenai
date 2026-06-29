import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { audiences, getAudience } from "../../lib/audiences";
import { getService } from "../../lib/catalog";
import { absoluteUrl } from "../../lib/site";
import { breadcrumbSchema, faqSchema, ORG_ID } from "../../lib/schema";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Lead,
  Prose,
  H2,
  CheckList,
  Panel,
  FAQList,
  RelatedLinks,
  CTABlock,
  Section,
} from "../../components/page-ui";

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getAudience(params.slug);
  if (!a) return {};
  return {
    title: a.name,
    description: a.summary,
    alternates: { canonical: `/ai-for/${a.slug}` },
    openGraph: { title: `${a.name} — kenai`, description: a.summary, url: absoluteUrl(`/ai-for/${a.slug}`) },
  };
}

export default function AudiencePage({ params }: { params: { slug: string } }) {
  const a = getAudience(params.slug);
  if (!a) notFound();

  const related = a.relatedServices
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((s) => ({ name: s!.name, href: `/services/${s!.slug}`, desc: s!.tagline }));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: a.name,
    description: a.summary,
    url: absoluteUrl(`/ai-for/${a.slug}`),
    provider: { "@id": ORG_ID },
    audience: { "@type": "Audience", audienceType: a.role },
  };

  return (
    <PageShell>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI For", path: "/ai-for" },
          { name: a.name.replace("AI for ", ""), path: `/ai-for/${a.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(a.faqs)} />

      <Container style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "AI For", path: "/ai-for" },
            { name: a.name.replace("AI for ", ""), path: `/ai-for/${a.slug}` },
          ]}
        />
        <Eyebrow color={a.accent}>For {a.role}</Eyebrow>
        <PageTitle accent={a.accent}>{a.name}</PageTitle>
        <Lead>{a.tagline}</Lead>
      </Container>

      <Section>
        <Container>
          <Prose paragraphs={a.intro} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} className="aud-two">
            <Panel accent={a.accent}>
              <H2 accent={a.accent}>Where it hurts</H2>
              <CheckList items={a.painPoints} accent={a.accent} />
            </Panel>
            <Panel accent={a.accent}>
              <H2 accent={a.accent}>What you&apos;ll do with AI</H2>
              <CheckList items={a.useCases} accent={a.accent} />
            </Panel>
          </div>
          <style>{`@media(max-width:760px){.aud-two{grid-template-columns:1fr!important}}`}</style>
        </Container>
      </Section>

      <Section>
        <Container width={860}>
          <H2 accent={a.accent}>FAQ</H2>
          <FAQList faqs={a.faqs} accent={a.accent} />
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container>
            <RelatedLinks title="Recommended programs" links={related} accent={a.accent} />
          </Container>
        </Section>
      )}

      <Container style={{ paddingTop: 20, paddingBottom: 90 }}>
        <CTABlock heading={`${a.name} — let's build it`} />
      </Container>
    </PageShell>
  );
}
