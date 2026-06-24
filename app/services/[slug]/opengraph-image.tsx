import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { services, getService } from "../../lib/catalog";

export const alt = "kenai AI service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  return renderOgImage({
    eyebrow: s?.eyebrow ?? "Service",
    title: s?.name ?? "AI training & consulting",
    accent: s?.accent ?? "#00F0FF",
  });
}
