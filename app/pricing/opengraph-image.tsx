import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../lib/og";

export const alt = "kenai pricing — AI training & bootcamps";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Pricing",
    title: "AI bootcamp Rs 6,999 · workshops & advisory",
    accent: "#FF2E97",
  });
}
