import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../lib/og";

export const alt = "kenai 3-Day AI Bootcamp — Rs 6,999";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Flagship · 3 days · Rs 6,999",
    title: "3-Day AI Bootcamp: Claude, Code & Automation",
    accent: "#FF2E97",
  });
}
