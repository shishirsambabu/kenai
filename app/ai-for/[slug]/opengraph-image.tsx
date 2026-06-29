import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { audiences, getAudience } from "../../lib/audiences";

export const alt = "AI training by role — kenai";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const a = getAudience(params.slug);
  return renderOgImage({
    eyebrow: "AI Training · by role",
    title: a?.name ?? "AI for your role",
    accent: a?.accent ?? "#A855F7",
  });
}
