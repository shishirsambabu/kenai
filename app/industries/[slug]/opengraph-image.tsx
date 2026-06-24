import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { industries, getIndustry } from "../../lib/catalog";

export const alt = "kenai AI by industry";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const i = getIndustry(params.slug);
  return renderOgImage({
    eyebrow: "Industry",
    title: i?.name ?? "AI for your industry",
    accent: i?.accent ?? "#A855F7",
  });
}
