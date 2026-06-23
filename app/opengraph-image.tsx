import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "./lib/og";

export const alt = "kenai — The way of AI. AI training by Shishir Babu";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "AI consulting · training · automation",
    title: "Don't just use AI. Master it.",
  });
}
