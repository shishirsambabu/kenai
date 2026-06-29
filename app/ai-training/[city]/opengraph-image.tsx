import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { locations, getLocation } from "../../lib/locations";

export const alt = "AI Training by kenai";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export default function Image({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  return renderOgImage({
    eyebrow: "AI Training · Workshops & Bootcamps",
    title: `AI Training in ${loc?.city ?? "India"}`,
    accent: "#00F0FF",
  });
}
