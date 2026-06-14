import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/ogImage";
import { INDUSTRIES, getIndustry } from "../../lib/industries";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "kenai industry";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  return renderOgImage({
    eyebrow: "AI by industry",
    title: industry?.title ?? "AI by Industry",
    accent: industry?.accent ?? "violet",
  });
}
