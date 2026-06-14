import type { MetadataRoute } from "next";
import { SITE } from "./lib/services";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "kenai — The way of AI.",
    short_name: "kenai",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A12",
    theme_color: "#00F0FF",
  };
}
