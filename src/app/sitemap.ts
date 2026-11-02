import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/logo-completa-dark.png`,
        `${baseUrl}/projetos/sobei-cover.webp`,
      ],
    },
    {
      url: `${baseUrl}/projetos/sobei`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${baseUrl}/projetos/sobei-cover.webp`,
        `${baseUrl}/projetos/sobei-responsive-showcase.webp`,
      ],
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
