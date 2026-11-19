import type { MetadataRoute } from "next";

// Update this when the page content changes meaningfully.
const LAST_UPDATED = new Date("2026-11-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rfqm.me",
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
