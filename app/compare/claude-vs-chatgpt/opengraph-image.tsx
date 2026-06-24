import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";

export const alt = "Claude vs ChatGPT — kenai comparison";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Comparison · 2026",
    title: "Claude vs ChatGPT",
    accent: "#A855F7",
  });
}
