import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/ogImage";
import { SERVICES, getService } from "../../lib/services";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "kenai service";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  return renderOgImage({
    eyebrow: "AI service",
    title: service?.title ?? "AI Services",
    accent: service?.accent ?? "cyan",
  });
}
