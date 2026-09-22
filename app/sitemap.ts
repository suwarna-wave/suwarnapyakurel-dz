import type { MetadataRoute } from "next"

import profile from "@/content/profile.json"
const siteUrl = profile.siteUrl

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
