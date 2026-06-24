import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry, getService } from "../../lib/catalog";
import { absoluteUrl } from "../../lib/site";
import { industryServiceSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";
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
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const i = getIndustry(params.slug);
  if (!i) return {};
  return {
    title: i.name,
    description: i.summary,
    alternates: { canonical: `/industries/${i.slug}` },
    openGraph: {
      title: `${i.name} — kenai`,
      description: i.summary,
      url: absoluteUrl(`/industries/${i.slug}`),
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const related = ind.relatedServices
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((r) => ({ name: r!.name, href: `/services/${r!.slug}`, desc: r!.tagline }));

  return (
    <PageShell>
      <JsonLd data={industryServiceSchema(ind)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.name.replace("AI for ", ""), path: `/industries/${ind.slug}` },
        ])}
      />
      {ind.faqs.length > 0 && <JsonLd data={faqSchema(ind.faqs)} />}

      <Container style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: ind.name.replace("AI for ", ""), path: `/industries/${ind.slug}` },
          ]}
        />
        <Eyebrow color={ind.accent}>Industry</Eyebrow>
        <PageTitle accent={ind.accent}>{ind.name}</PageTitle>
        <Lead>{ind.tagline}</Lead>
      </Container>

      <Section>
        <Container>
          <Prose paragraphs={ind.intro} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} className="ind-two">
            <Panel accent={ind.accent}>
              <H2 accent={ind.accent}>The challenges</H2>
              <CheckList items={ind.painPoints} accent={ind.accent} />
            </Panel>
            <Panel accent={ind.accent}>
              <H2 accent={ind.accent}>How kenai helps</H2>
              <CheckList items={ind.howWeHelp} accent={ind.accent} />
            </Panel>
          </div>
          <style>{`@media(max-width:760px){.ind-two{grid-template-columns:1fr!important}}`}</style>
        </Container>
      </Section>

      {ind.faqs.length > 0 && (
        <Section>
          <Container width={860}>
            <H2 accent={ind.accent}>Frequently asked questions</H2>
            <FAQList faqs={ind.faqs} accent={ind.accent} />
          </Container>
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <Container>
            <RelatedLinks title="Recommended services" links={related} accent={ind.accent} />
          </Container>
        </Section>
      )}

      <Container style={{ paddingTop: 30, paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}
