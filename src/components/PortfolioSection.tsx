import { getFeaturedProjects, getCategories, getProjects } from "@/sanity/api";
import PortfolioSectionClient from "./PortfolioSectionClient";
import type { SanityProject } from "@/sanity/types";

export default async function PortfolioSection() {
  const [featuredProjects, allProjects, categoriesData] = await Promise.all([
    getFeaturedProjects(),
    getProjects(),
    getCategories(),
  ]);

  // Fallback to all projects if no projects are marked as featured yet
  const displayProjects: SanityProject[] =
    featuredProjects.length > 0 ? featuredProjects : allProjects;

  const categoryNames = categoriesData.map((c) => c.name);

  return (
    <PortfolioSectionClient
      projects={displayProjects}
      categories={categoryNames}
    />
  );
}
