import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";

export const alt = "Free AI Readiness Assessment — kenai";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Free tool · 2 minutes",
    title: "How AI-ready is your team?",
    accent: "#00F0FF",
  });
}
