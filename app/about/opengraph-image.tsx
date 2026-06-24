import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../lib/og";

export const alt = "About Shishir Babu — Founder of kenai";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Founder · AI Trainer · Indywood 2026",
    title: "Shishir Babu — founder of kenai",
    accent: "#FF2E97",
  });
}
