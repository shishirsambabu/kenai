import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A12",
    theme_color: "#0A0A12",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
    ],
  };
}
