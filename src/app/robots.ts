import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rfqm.xyz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "*",
      },
      {
        userAgent: "Googlebot",
        allow: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
