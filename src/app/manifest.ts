import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.title,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    lang: "pt-BR",
    categories: ["business", "technology", "developer", "productivity"],
    icons: [
      {
        src: "/Favicon.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
      {
        src: "/logo-simplificada-dark.png",
        sizes: "264x143",
        type: "image/png",
      },
    ],
  };
}
