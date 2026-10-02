import { client } from "./client";
import {
  ALL_CATEGORIES_QUERY,
  ALL_PROJECTS_QUERY,
  FEATURED_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  ALL_PROJECT_SLUGS_QUERY,
} from "./queries";
import type { SanityCategory, SanityProject } from "./types";

// Revalidation time: 60 seconds (ISR)
export const REVALIDATE_TIME = 60;

export async function getCategories(): Promise<SanityCategory[]> {
  try {
    return await client.fetch<SanityCategory[]>(
      ALL_CATEGORIES_QUERY,
      {},
      { next: { revalidate: REVALIDATE_TIME } }
    );
  } catch (err) {
    console.error("Failed to fetch Sanity categories:", err);
    return [];
  }
}

export async function getProjects(): Promise<SanityProject[]> {
  try {
    return await client.fetch<SanityProject[]>(
      ALL_PROJECTS_QUERY,
      {},
      { next: { revalidate: REVALIDATE_TIME } }
    );
  } catch (err) {
    console.error("Failed to fetch Sanity projects:", err);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  try {
    return await client.fetch<SanityProject[]>(
      FEATURED_PROJECTS_QUERY,
      {},
      { next: { revalidate: REVALIDATE_TIME } }
    );
  } catch (err) {
    console.error("Failed to fetch featured projects:", err);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  try {
    return await client.fetch<SanityProject | null>(
      PROJECT_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: REVALIDATE_TIME } }
    );
  } catch (err) {
    console.error(`Failed to fetch project for slug "${slug}":`, err);
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<{ slug: string; _updatedAt: string }[]> {
  try {
    return await client.fetch<{ slug: string; _updatedAt: string }[]>(
      ALL_PROJECT_SLUGS_QUERY,
      {},
      { next: { revalidate: REVALIDATE_TIME } }
    );
  } catch (err) {
    console.error("Failed to fetch project slugs:", err);
    return [];
  }
}
