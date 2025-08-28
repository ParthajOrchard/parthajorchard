import type { MetadataRoute } from "next"
import { products, getAllCategories } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://localhost:3000"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]

  // Product pages
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: `${baseUrl}/products?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...categoryPages]
}
