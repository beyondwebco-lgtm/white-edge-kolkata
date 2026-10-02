import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  alt?: string;
  caption?: string;
}

export interface SanityCategory {
  _id: string;
  _type: "category";
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  displayOrder?: number;
  active?: boolean;
}

export interface SanityEngineeringSpec {
  _key?: string;
  label: string;
  value: string;
}

export interface SanityProject {
  _id: string;
  _type: "project";
  title: string;
  slug: {
    current: string;
  };
  clientName: string;
  category?: {
    _id: string;
    name: string;
    slug?: {
      current: string;
    };
  };
  location?: string;
  shortDescription: string;
  description?: PortableTextBlock[];
  mainImage: SanityImage;
  gallery?: SanityImage[];
  engineeringSpecs?: SanityEngineeringSpec[];
  frameworkStructure?: PortableTextBlock[];
  lightingPower?: PortableTextBlock[];
  materials?: string[];
  featured?: boolean;
  displayOrder?: number;
  published?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}
