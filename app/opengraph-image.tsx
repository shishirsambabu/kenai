import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "./lib/ogImage";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "kenai — The way of AI.";

export default function Image() {
  return renderOgImage({
    eyebrow: "AI consulting · training",
    title: "Don't just use AI. Master it.",
    accent: "cyan",
  });
}
