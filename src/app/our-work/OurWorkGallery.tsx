"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { urlForImage } from "@/sanity/image";
import type { SanityProject, SanityCategory } from "@/sanity/types";
import { 
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
  Wrench,
  Lightbulb,
  Eye,
  Images,
  ExternalLink
} from "lucide-react";
import { PortableText } from "@/components/PortableText";

interface OurWorkGalleryProps {
  initialProjects: SanityProject[];
  categories: SanityCategory[];
}

export default function OurWorkGallery({ initialProjects, categories }: OurWorkGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // Active modal project index (in filtered list)
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  // Current active image index within the modal
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  // Per-card slideshow active image indices: { [projectId]: activeImageIndex }
  const [cardImageIndices, setCardImageIndices] = useState<Record<string, number>>({});

  // Filter projects by active category
  const filteredProjects = activeCategory === "all"
    ? initialProjects
    : initialProjects.filter((p) => p.category?.slug?.current === activeCategory || p.category?.name === activeCategory);

  const activeProject: SanityProject | null =
    activeModalIndex !== null ? filteredProjects[activeModalIndex] : null;

  // Helper to extract image URLs for a project (mainImage + gallery)
  const getProjectImages = (project: SanityProject): { url: string; alt: string }[] => {
    const list: { url: string; alt: string }[] = [];
    if (project.mainImage) {
      const mainUrl = urlForImage(project.mainImage)?.width(1400).url();
      if (mainUrl) {
        list.push({ url: mainUrl, alt: project.mainImage.alt || project.title });
      }
    }
    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach((g) => {
        const gUrl = urlForImage(g)?.width(1400).url();
        if (gUrl) {
          list.push({ url: gUrl, alt: g.alt || project.title });
        }
      });
    }
    return list;
  };

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
    const projectId = filteredProjects[index]._id;
    setModalImageIndex(cardImageIndices[projectId] || 0);
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null && filteredProjects.length > 0) {
      const prevIdx = (activeModalIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setActiveModalIndex(prevIdx);
      setModalImageIndex(0);
    }
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null && filteredProjects.length > 0) {
      const nextIdx = (activeModalIndex + 1) % filteredProjects.length;
      setActiveModalIndex(nextIdx);
      setModalImageIndex(0);
    }
  };

  const handleCardPrevSlide = (e: React.MouseEvent, projectId: string, totalImages: number) => {
    e.stopPropagation();
    setCardImageIndices((prev) => {
      const current = prev[projectId] || 0;
      return { ...prev, [projectId]: (current - 1 + totalImages) % totalImages };
    });
  };

  const handleCardNextSlide = (e: React.MouseEvent, projectId: string, totalImages: number) => {
    e.stopPropagation();
    setCardImageIndices((prev) => {
      const current = prev[projectId] || 0;
      return { ...prev, [projectId]: (current + 1) % totalImages };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#EF2028] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <span className="text-xs font-mono text-gray-500 uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EF2028] animate-pulse"></span>
          {initialProjects.length} Completed Projects
        </span>
      </div>

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#EF2028]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
            Real Signage Portfolio
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase tracking-tight text-[#111214] leading-tight">
          Our Work & <span className="text-[#EF2028]">Signage Installations</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
          Explore our completed portfolio of bespoke 3D channel letters, ACP façade claddings, high-impact rooftop installations, and illuminated brand identities.
        </p>
      </div>

      {/* Category Filter Tabs */}
      {categories.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => {
              setActiveCategory("all");
              setActiveModalIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#EF2028] text-white shadow-md shadow-red-500/20 scale-105"
                : "bg-gray-100 border border-gray-200 text-gray-700 hover:text-[#111214] hover:border-[#EF2028]"
            }`}
          >
            All Projects
          </button>
          {categories.map((cat) => {
            const catSlug = cat.slug?.current || cat.name;
            const isSelected = activeCategory === catSlug || activeCategory === cat.name;
            return (
              <button
                key={cat._id}
                onClick={() => {
                  setActiveCategory(catSlug);
                  setActiveModalIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-[#EF2028] text-white shadow-md shadow-red-500/20 scale-105"
                    : "bg-gray-100 border border-gray-200 text-gray-700 hover:text-[#111214] hover:border-[#EF2028]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-sm">No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => {
            const projectImages = getProjectImages(project);
            const totalImages = projectImages.length;
            const currentSlide = cardImageIndices[project._id] || 0;
            const currentImage = projectImages[currentSlide] || projectImages[0];
            const hasMultipleImages = totalImages > 1;

            return (
              <div
                key={project._id}
                onClick={() => handleOpenModal(idx)}
                className="group relative bg-[#0E0F12] rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#EF2028] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden flex items-center justify-center bg-[#090A0D]">
                  {currentImage && (
                    <>
                      {/* Ambient Blurred Background */}
                      <Image
                        src={currentImage.url}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover blur-2xl opacity-35 scale-125 transition-transform duration-700 group-hover:scale-135"
                        aria-hidden="true"
                      />

                      {/* Main Signage Image */}
                      <div className="relative w-full h-full p-2.5 flex items-center justify-center z-10">
                        <Image
                          src={currentImage.url}
                          alt={currentImage.alt || project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-contain p-1.5 group-hover:scale-105 transition-all duration-500 drop-shadow-xl"
                        />
                      </div>
                    </>
                  )}

                  {/* Top Client & Multi-Image Badge */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-white border border-white/20 shadow-md truncate">
                      {project.clientName}
                    </span>

                    {hasMultipleImages && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase bg-black/80 backdrop-blur-md text-white border border-white/20 shadow flex items-center gap-1">
                        <Images className="w-2.5 h-2.5 text-[#EF2028]" />
                        {currentSlide + 1}/{totalImages}
                      </span>
                    )}
                  </div>

                  {/* In-Card Slideshow Navigation Controls */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => handleCardPrevSlide(e, project._id, totalImages)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/70 hover:bg-[#EF2028] text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => handleCardNextSlide(e, project._id, totalImages)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/70 hover:bg-[#EF2028] text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-md"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Slideshow Dot Indicators */}
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                        {projectImages.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              currentSlide === dotIdx ? "bg-[#EF2028] w-2.5" : "bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 z-10 pointer-events-none">
                    <div className="flex items-center justify-between w-full text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 text-red-400">
                        <Maximize2 className="w-3 h-3 text-[#EF2028]" /> View Details & Quote
                      </span>
                      <span className="p-1 rounded-full bg-white/20 backdrop-blur-md text-white">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="p-4 bg-white flex-grow flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold">
                      <span className="text-[#EF2028] font-bold uppercase tracking-wider text-[10px]">
                        {project.category?.name || "Signage"}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-heading font-bold text-[#111214] group-hover:text-[#EF2028] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Materials & Action Footer */}
                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.materials && project.materials.length > 0 && (
                        <>
                          {project.materials.slice(0, 2).map((mat, mIdx) => (
                            <span
                              key={mIdx}
                              className="px-1.5 py-0.5 rounded bg-gray-100 text-[10px] font-medium text-gray-600 truncate max-w-[100px]"
                            >
                              {mat}
                            </span>
                          ))}
                          {project.materials.length > 2 && (
                            <span className="px-1 py-0.5 text-[9px] text-gray-400">
                              +{project.materials.length - 2}
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    <span className="text-xs font-bold text-[#EF2028] group-hover:translate-x-1 transition-transform flex items-center gap-0.5 shrink-0">
                      View
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox / Detail Modal */}
      {activeProject && activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-200 flex flex-col lg:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-[#EF2028] text-white transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Slideshow Column */}
            {(() => {
              const activeImages = getProjectImages(activeProject);
              const totalActiveImages = activeImages.length;
              const activeDisplayImg = activeImages[modalImageIndex] || activeImages[0];

              return (
                <div className="relative lg:w-3/5 bg-[#090A0D] min-h-[360px] sm:min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
                  {activeDisplayImg && (
                    <>
                      <Image
                        src={activeDisplayImg.url}
                        alt=""
                        fill
                        className="object-cover blur-3xl opacity-30 scale-125"
                        aria-hidden="true"
                      />

                      <div className="relative w-full h-full min-h-[360px] sm:min-h-[480px] md:min-h-[560px] p-4 sm:p-6 flex items-center justify-center z-10">
                        <Image
                          src={activeDisplayImg.url}
                          alt={activeDisplayImg.alt || activeProject.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-contain drop-shadow-2xl select-none"
                          priority
                        />
                      </div>
                    </>
                  )}

                  {/* Project Prev/Next Switchers */}
                  <button
                    onClick={handlePrevProject}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-[#111214] shadow-xl transition-transform hover:scale-110 z-20"
                    aria-label="Previous project"
                    title="Previous Project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextProject}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-[#111214] shadow-xl transition-transform hover:scale-110 z-20"
                    aria-label="Next project"
                    title="Next Project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Slideshow Thumbnails / Dots */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between">
                    <div className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-mono border border-white/20">
                      Project {activeModalIndex + 1} of {filteredProjects.length}
                    </div>

                    {totalActiveImages > 1 && (
                      <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        {activeImages.map((_, iIdx) => (
                          <button
                            key={iIdx}
                            onClick={() => setModalImageIndex(iIdx)}
                            className={`text-xs px-2 py-0.5 rounded font-mono font-bold transition-all ${
                              modalImageIndex === iIdx
                                ? "bg-[#EF2028] text-white shadow"
                                : "text-white/70 hover:text-white"
                            }`}
                          >
                            Photo {iIdx + 1}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* Right Details Column */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#EF2028] text-xs font-mono font-bold uppercase tracking-wider">
                    {activeProject.clientName}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold uppercase">
                    {activeProject.category?.name}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase text-[#111214] leading-tight">
                  {activeProject.title}
                </h2>

                {activeProject.location && (
                  <div className="text-xs text-gray-500 font-mono flex items-center gap-1.5">
                    <span className="text-[#EF2028]">📍</span> {activeProject.location}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  {activeProject.shortDescription}
                </p>

                {activeProject.description && (
                  <div className="pt-2 text-xs text-gray-600 border-t border-gray-100">
                    <PortableText value={activeProject.description} />
                  </div>
                )}

                {/* Engineering Highlights */}
                {activeProject.engineeringSpecs && activeProject.engineeringSpecs.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EF2028]" /> Engineering & Specs
                    </h4>
                    <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      {activeProject.engineeringSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex justify-between py-0.5 border-b border-gray-200/50 last:border-0">
                          <span className="font-semibold text-gray-700">{spec.label}:</span>
                          <span className="text-right text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Framework / Structure */}
                {activeProject.frameworkStructure && (
                  <div className="space-y-1 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-[#EF2028]" /> Framework / Structure
                    </h4>
                    <div className="text-xs text-gray-600 pl-5">
                      <PortableText value={activeProject.frameworkStructure} />
                    </div>
                  </div>
                )}

                {/* Lighting Details */}
                {activeProject.lightingPower && (
                  <div className="space-y-1 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Lighting & Power
                    </h4>
                    <div className="text-xs text-gray-600 pl-5">
                      <PortableText value={activeProject.lightingPower} />
                    </div>
                  </div>
                )}

                {/* Materials & Components */}
                {activeProject.materials && activeProject.materials.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#EF2028]" /> Materials Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 rounded bg-gray-100 text-xs font-medium text-gray-700 border border-gray-200/60"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2.5">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    `Hi White Edge Signages, I saw your completed work for "${activeProject.title}" (Client: ${activeProject.clientName}). I am looking for a similar signage solution. Please share details and a quotation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Get WhatsApp Quote for this Sign
                </a>

                {activeProject.slug?.current && (
                  <Link
                    href={`/our-work/${activeProject.slug.current}`}
                    className="w-full py-2.5 px-4 rounded-xl border border-gray-300 hover:border-[#EF2028] text-gray-800 hover:text-[#EF2028] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Dedicated Project Page
                  </Link>
                )}

                <Link
                  href="/contact"
                  onClick={() => setActiveModalIndex(null)}
                  className="w-full py-3 px-4 rounded-xl bg-[#111214] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Book Free Site Inspection & Measurement
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
            Custom Fabrication & Turnkey Installation
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight">
            Need Custom Signage for Your Business?
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            From design and 3D architectural mockups to structural fabrication and on-site crane installation, White Edge Signages delivers end-to-end turnkey excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
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
