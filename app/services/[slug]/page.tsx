import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "../../lib/catalog";
import { absoluteUrl } from "../../lib/site";
import { serviceSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";
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
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.name} — kenai`,
      description: s.summary,
      url: absoluteUrl(`/services/${s.slug}`),
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = s.related
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((r) => ({
      name: r!.name,
      href: `/services/${r!.slug}`,
      desc: r!.tagline,
    }));

  return (
    <PageShell>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.shortName, path: `/services/${s.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(s.faqs)} />

      <Container style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.shortName, path: `/services/${s.slug}` },
          ]}
        />
        <Eyebrow color={s.accent}>{s.eyebrow}</Eyebrow>
        <PageTitle accent={s.accent}>{s.name}</PageTitle>
        <Lead>{s.tagline}</Lead>
      </Container>

      <Section>
        <Container>
          <Prose paragraphs={s.intro} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 26,
            }}
            className="svc-two"
          >
            <Panel accent={s.accent}>
              <H2 accent={s.accent}>Who it&apos;s for</H2>
              <CheckList items={s.forWho} accent={s.accent} />
            </Panel>
            <Panel accent={s.accent}>
              <H2 accent={s.accent}>What you walk away with</H2>
              <CheckList items={s.outcomes} accent={s.accent} />
            </Panel>
          </div>
          <style>{`@media(max-width:760px){.svc-two{grid-template-columns:1fr!important}}`}</style>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2 accent={s.accent}>What&apos;s included</H2>
          <CheckList items={s.includes} accent={s.accent} />
        </Container>
      </Section>

      <Section>
        <Container width={860}>
          <H2 accent={s.accent}>Frequently asked questions</H2>
          <FAQList faqs={s.faqs} accent={s.accent} />
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container>
            <RelatedLinks title="Related services" links={related} accent={s.accent} />
          </Container>
        </Section>
      )}

      <Container style={{ paddingTop: 30, paddingBottom: 90 }}>
        <CTABlock />
      </Container>
    </PageShell>
  );
}
