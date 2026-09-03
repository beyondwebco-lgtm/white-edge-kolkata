"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  OUR_WORK_PROJECTS, 
  SignProjectItem 
} from "@/config/ourWorkData";
import { SITE_CONFIG } from "@/config/site";
import { 
  Search, 
  Maximize2, 
  ArrowLeft, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Layers,
  MapPin,
  SlidersHorizontal
} from "lucide-react";

export default function OurWorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "3D Letters",
    "LED Signage",
    "Storefronts",
    "Façade Branding",
    "Pylon Signs",
    "Internal Branding",
    "Commercial Signage",
  ];

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return OUR_WORK_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory || project.tags.includes(selectedCategory);
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.materials.some((m) => m.toLowerCase().includes(query)) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeProject = activeModalIndex !== null ? filteredProjects[activeModalIndex] : null;

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null && filteredProjects.length > 0) {
      setActiveModalIndex((activeModalIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null && filteredProjects.length > 0) {
      setActiveModalIndex((activeModalIndex + 1) % filteredProjects.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Return Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#EF2028] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <span className="text-xs font-mono text-gray-500 uppercase">
          {OUR_WORK_PROJECTS.length} Real Installations Showcased
        </span>
      </div>

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200">
          <Sparkles className="w-3.5 h-3.5 text-[#EF2028]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
            Real-World Project Showcase
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase tracking-tight text-[#111214] leading-tight">
          Our Work & <span className="text-[#EF2028]">Signage Installations</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
          Explore our extensive real-world portfolio of bespoke LED signboards, stainless steel 3D channel letters, ACP façade elevations, high-mast highway pylons, and architectural storefronts crafted for leading businesses.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="mb-10 space-y-4">
        {/* Search Input Bar */}
        <div className="max-w-xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by sign type, material (e.g. Acrylic, LED, Steel), or keyword..."
            className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EF2028] focus:ring-2 focus:ring-red-100 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-[#EF2028] text-white shadow-md shadow-red-500/20 scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filter Summary */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-b border-gray-200 pb-4">
          <span className="flex items-center gap-1.5 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#EF2028]" />
            Showing <strong className="text-gray-900">{filteredProjects.length}</strong> of {OUR_WORK_PROJECTS.length} signs
          </span>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-[#EF2028] font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Work Items */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8 space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-50 flex items-center justify-center text-[#EF2028]">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-heading font-bold text-gray-800">No matching signage projects found</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Try adjusting your search query or reset category filters to view all signs.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 rounded-lg bg-[#111214] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
          >
            Show All Signs
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalIndex(idx)}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container with Perfect Fit, Ambient Backdrop, Zoom and Badge */}
              <div className="relative h-72 sm:h-80 w-full bg-[#0E0F12] overflow-hidden flex items-center justify-center">
                {/* Ambient Blurred Background to harmonize card fill */}
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover blur-2xl opacity-35 scale-125"
                  aria-hidden="true"
                />

                {/* Main Sign Image - Perfectly Contained & Uncropped */}
                <div className="relative w-full h-full p-3.5 flex items-center justify-center z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                </div>

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-20">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#EF2028]" /> Click for Full View & Quote
                    </span>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-white border border-white/20 shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#EF2028]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#111214] group-hover:text-[#EF2028] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Material Tags & Action Button */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.materials.slice(0, 2).map((mat, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-gray-100 text-[10px] font-medium text-gray-600"
                      >
                        {mat}
                      </span>
                    ))}
                    {project.materials.length > 2 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-gray-400">
                        +{project.materials.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-[#EF2028] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Detail Modal */}
      {activeProject && activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 flex flex-col lg:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Top: Image Column with Ambient Background and Contained Fit */}
            <div className="relative lg:w-3/5 bg-[#090A0D] min-h-[380px] sm:min-h-[500px] md:min-h-[580px] flex items-center justify-center group/nav overflow-hidden">
              {/* Subtle ambient blurred background */}
              <Image
                src={activeProject.image}
                alt=""
                fill
                className="object-cover blur-3xl opacity-30 scale-125"
                aria-hidden="true"
              />

              {/* Main Full Fit Signage Image */}
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[500px] md:min-h-[580px] p-4 sm:p-6 flex items-center justify-center z-10">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain drop-shadow-2xl select-none"
                  priority
                />
              </div>

              {/* Prev Project Button */}
              <button
                onClick={handlePrevProject}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#111214] shadow-lg transition-transform hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Project Button */}
              <button
                onClick={handleNextProject}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#111214] shadow-lg transition-transform hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-mono">
                {activeModalIndex + 1} / {filteredProjects.length}
              </div>
            </div>

            {/* Right/Bottom: Details Column */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-[#EF2028] font-bold">
                    {activeProject.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-[#111214] leading-tight">
                  {activeProject.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Key Specifications */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EF2028]" /> Engineering Highlights
                  </h4>
                  <ul className="space-y-1 pl-5 list-disc text-xs text-gray-600">
                    {activeProject.specifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>

                {/* Materials Used */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#EF2028]" /> Materials & Components
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-gray-100 text-xs font-medium text-gray-700"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-2.5">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    `Hi White Edge Signages, I am interested in a signage solution similar to "${activeProject.title}" (Ref: ${activeProject.id}). Please share more details and a quotation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Request Quote for this Sign
                </a>

                <Link
                  href="/#contact"
                  onClick={() => setActiveModalIndex(null)}
                  className="w-full py-3 px-4 rounded-xl bg-[#111214] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Book a Free Site Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Consultation Banner */}
      <div className="mt-20 rounded-3xl bg-[#111214] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-[#EF2028]/20 border border-[#EF2028]/40 text-[#EF2028] text-xs font-mono font-bold tracking-widest uppercase">
            Custom Manufacturing & Turnkey Setup
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
            Have a Specific Sign Design in Mind?
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Our engineering team fabricates custom signboards matching exact architectural drawings, brand pantones, and building layouts. Get a photorealistic 3D rendering and price estimate today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#EF2028] hover:bg-[#B9131B] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105"
            >
              Get a Free Consultation
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                "Hi White Edge Signages, I would like to discuss a custom signage project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
