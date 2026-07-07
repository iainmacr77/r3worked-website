import type { MetadataRoute } from "next";

const BASE_URL = "https://r3worked.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/book`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
