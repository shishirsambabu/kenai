import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { comparisons, getComparison } from "../../lib/comparisons";

export const alt = "AI comparison — kenai";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const c = getComparison(params.slug);
  return renderOgImage({
    eyebrow: "Comparison · 2026",
    title: c?.title ?? "AI comparison",
    accent: "#A855F7",
  });
}
