"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Eye, MapPin, X, ArrowRight, ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [activeModalProject, setActiveModalProject] = useState<(typeof SITE_CONFIG.projects)[0] | null>(null);

  const filters = [
    "All Projects",
    "LED Signage",
    "3D Letters",
    "Storefronts",
    "Façade Branding",
    "Pylon Signs",
    "Internal Branding",
    "Glass Films",
    "Commercial Graphics",
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? SITE_CONFIG.projects
      : SITE_CONFIG.projects.filter(
          (p) => p.category === activeFilter || p.tags.includes(activeFilter)
        );

  return (
    <section id="projects" className="py-24 bg-white text-[#111214] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200">
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111214]">
            Signs That Speak For The <span className="text-[#EF2028]">Brands Behind Them</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Browse our portfolio of completed storefronts, illuminated LED 3D letters, fuel station canopies, corporate glass branding, and internal branding murals.
          </p>
        </div>

        {/* Portfolio Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#EF2028] text-white shadow-md shadow-red-500/20 scale-105"
                  : "bg-gray-100 border border-gray-200 text-gray-700 hover:text-[#111214] hover:border-[#EF2028]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#EF2028] hover:shadow-xl"
            >
              {/* Project Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Animated Red Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EF2028] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-white bg-black/75 px-2.5 py-1 rounded backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-[#EF2028] text-white shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Overlay Sliding Up */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-[#EF2028] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide group-hover:text-[#EF2028] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed opacity-90">
                    {project.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project Lightbox</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EF2028]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Gallery CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#111214] hover:bg-[#EF2028] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Explore All Completed Signage Projects in Our Work Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-100 text-[#111214] hover:bg-[#EF2028] hover:text-white transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[450px] bg-black">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Right Info */}
            <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between space-y-6 bg-gray-50 text-[#111214]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-[#EF2028] text-xs font-bold uppercase tracking-wider">
                  {activeModalProject.category}
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#111214] uppercase leading-tight">
                  {activeModalProject.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                  <MapPin className="w-4 h-4 text-[#EF2028]" />
                  <span>{activeModalProject.location}</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {activeModalProject.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs uppercase font-mono text-gray-500 font-semibold">Signage Scope:</p>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold bg-white border border-gray-200 px-2.5 py-1 rounded text-[#111214] shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setActiveModalProject(null)}
                  className="w-full py-3.5 px-4 rounded-md bg-[#EF2028] text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#B9131B] flex items-center justify-center gap-2"
                >
                  Request Similar Project Signage Quote
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
