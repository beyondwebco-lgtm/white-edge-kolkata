import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { getAllProjectSlugs } from "@/sanity/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_CONFIG.url}/our-work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  try {
    const projectSlugs = await getAllProjectSlugs();
    const dynamicRoutes: MetadataRoute.Sitemap = projectSlugs.map((item) => ({
      url: `${SITE_CONFIG.url}/our-work/${item.slug}`,
      lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch (err) {
    console.error("Failed to generate dynamic sitemap entries:", err);
    return staticRoutes;
  }
}
