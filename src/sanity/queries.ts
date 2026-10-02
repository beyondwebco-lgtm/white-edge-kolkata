import { defineQuery } from "next-sanity";

// Query all active categories sorted by displayOrder
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && active != false] | order(displayOrder asc, name asc) {
    _id,
    _type,
    name,
    slug,
    description,
    displayOrder,
    active
  }
`);

// Query all published projects
export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && published != false && defined(slug.current)] | order(displayOrder asc, _createdAt desc) {
    _id,
    _type,
    title,
    slug,
    clientName,
    category->{
      _id,
      name,
      slug
    },
    location,
    shortDescription,
    description,
    mainImage,
    gallery,
    engineeringSpecs,
    frameworkStructure,
    lightingPower,
    materials,
    featured,
    displayOrder,
    published,
    seoTitle,
    seoDescription
  }
`);

// Query featured projects for Homepage
export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && published != false && featured == true && defined(slug.current)] | order(displayOrder asc, _createdAt desc) {
    _id,
    _type,
    title,
    slug,
    clientName,
    category->{
      _id,
      name,
      slug
    },
    location,
    shortDescription,
    mainImage,
    featured,
    displayOrder
  }
`);

// Query single project by slug
export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && published != false && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    clientName,
    category->{
      _id,
      name,
      slug
    },
    location,
    shortDescription,
    description,
    mainImage,
    gallery,
    engineeringSpecs,
    frameworkStructure,
    lightingPower,
    materials,
    featured,
    displayOrder,
    published,
    seoTitle,
    seoDescription
  }
`);

// Query all project slugs for sitemap and static generation
export const ALL_PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && published != false && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`);
