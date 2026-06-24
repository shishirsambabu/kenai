import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { glossary, getGlossaryTerm } from "../../lib/catalog";

export const alt = "kenai AI Glossary";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return glossary.map((g) => ({ slug: g.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const g = getGlossaryTerm(params.slug);
  const title = g ? (g.abbr ? `${g.term} (${g.abbr})` : g.term) : "AI Glossary";
  return renderOgImage({
    eyebrow: "AI Glossary · Definition",
    title,
    accent: "#00F0FF",
  });
}
