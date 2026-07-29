import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rfqm.xyz";
  const currentDate = new Date();

  const baseRoutes = [""];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add root redirect page
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1,
  });

  baseRoutes.forEach((route) => {
    const url = route === "" ? `${baseUrl}/` : `${baseUrl}${route}`;

    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    // Set different priorities and frequencies based on route
    if (route === "") {
      priority = 0.9;
      changeFrequency = "daily";
    } else {
      priority = 0.6;
      changeFrequency = "monthly";
    }

    sitemapEntries.push({
      url,
      lastModified: currentDate,
      changeFrequency,
      priority,
    });
  });

  return sitemapEntries;
}
