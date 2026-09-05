"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  X,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ServicePoster {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  aspect: string;
  orientation: "landscape" | "portrait";
  highlights: string[];
}

const SERVICE_POSTERS: ServicePoster[] = [
  {
    id: "services-landscape",
    title: "Signage That Speaks – Landscape Edition",
    subtitle: "Complete Signage Solutions & Fabrication Showcase",
    image: "/assets/services-1.jpeg",
    aspect: "3 / 2",
    orientation: "landscape",
    highlights: [
      "LED Illuminated Sign Boards",
      "Acrylic & 3D Letter Signages",
      "Flex Face & Light Box Signages",
      "ACP & Metal Sign Boards",
      "Custom Architectural Signage",
    ],
  },
  {
    id: "services-portrait",
    title: "Signage That Speaks – Portrait Edition",
    subtitle: "Detailed Capabilities & Installation Overview",
    image: "/assets/services-2.jpeg",
    aspect: "2 / 3",
    orientation: "portrait",
    highlights: [
      "Premium Quality Grade Materials",
      "Modern & Creative Engineering",
      "Expert Turnkey Craftsmanship",
      "Timely Delivery & Safe Rigging",
      "Direct Factory-Backed Support",
    ],
  },
];

export default function ServicesSection() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveModalIndex(index);
  };

  const closeLightbox = () => {
    setActiveModalIndex(null);
  };

  const nextPoster = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % SERVICE_POSTERS.length);
    }
  };

  const prevPoster = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        (activeModalIndex - 1 + SERVICE_POSTERS.length) % SERVICE_POSTERS.length
      );
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0b0d] relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EF2028]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[#EF2028]/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#EF2028]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Complete Signage &{" "}
            <span className="text-[#EF2028] red-text-glow">Branding Solutions</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            From concept to installation, we create stunning signage that enhances visibility, strengthens brand identity, and leaves a lasting impression.
          </p>
        </div>

        {/* 2-Column Responsive Posters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Landscape Edition (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#111214] border border-white/10 hover:border-[#EF2028]/60 transition-all duration-500 overflow-hidden shadow-2xl group">
            {/* Interactive Image Frame */}
            <div
              onClick={() => openLightbox(0)}
              className="relative w-full overflow-hidden cursor-pointer bg-[#0e1014] aspect-[16/10] sm:aspect-[3/2] flex items-center justify-center"
            >
              <Image
                src={SERVICE_POSTERS[0].image}
                alt={SERVICE_POSTERS[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-2 sm:p-3 group-hover:scale-[1.03] transition-transform duration-500 select-none"
                priority
              />

              {/* Hover Fullscreen Badge */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-full bg-black/85 text-white text-xs font-bold uppercase tracking-wider border border-[#EF2028]/50 flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <Maximize2 className="w-4 h-4 text-[#EF2028]" /> Click to Inspect in Full HD
                </span>
              </div>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  Services Overview
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-[#111214] to-[#0d0e10]">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wide group-hover:text-[#EF2028] transition-colors">
                  {SERVICE_POSTERS[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  High-brightness LED illuminated signboards, 3D channel letters, flex lightboxes, and turnkey commercial ACP branding manufactured with surgical precision.
                </p>

                {/* Key Solutions List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {SERVICE_POSTERS[0].highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E5E5E5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EF2028] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openLightbox(0)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF2028] hover:text-white transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> View High-Res Poster
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#EF2028] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#B9131B] transition-all duration-300 shadow-lg shadow-[#EF2028]/20"
                >
                  Enquire Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Portrait Edition (Takes 5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#111214] border border-white/10 hover:border-[#EF2028]/60 transition-all duration-500 overflow-hidden shadow-2xl group">
            {/* Interactive Image Frame */}
            <div
              onClick={() => openLightbox(1)}
              className="relative w-full overflow-hidden cursor-pointer bg-[#0e1014] aspect-[3/4] sm:aspect-[2/3] max-h-[520px] flex items-center justify-center"
            >
              <Image
                src={SERVICE_POSTERS[1].image}
                alt={SERVICE_POSTERS[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-2 sm:p-3 group-hover:scale-[1.03] transition-transform duration-500 select-none"
              />

              {/* Hover Fullscreen Badge */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-full bg-black/85 text-white text-xs font-bold uppercase tracking-wider border border-[#EF2028]/50 flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <Maximize2 className="w-4 h-4 text-[#EF2028]" /> Click to Inspect in Full HD
                </span>
              </div>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  Comprehensive Guide
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-[#111214] to-[#0d0e10]">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wide group-hover:text-[#EF2028] transition-colors">
                  {SERVICE_POSTERS[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  End-to-end design, fabrication, and installation workflow backed by high-grade weather-resistant materials and certified riggers.
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  {SERVICE_POSTERS[1].highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E5E5E5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EF2028] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openLightbox(1)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF2028] hover:text-white transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> View High-Res Poster
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#EF2028] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#B9131B] transition-all duration-300 shadow-lg shadow-[#EF2028]/20"
                >
                  Get a Free Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#111214] via-[#16181c] to-[#111214] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-white uppercase">
              Looking for a Custom Signage Solution for Your Brand?
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A7A7]">
              We handle on-site survey, 3D design mockups, CNC fabrication, and certified installation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-[#EF2028]" /> WhatsApp Enquiry
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#EF2028] hover:bg-[#B9131B] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#EF2028]/25 hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl max-h-[95vh] bg-[#0e1014] border border-[#EF2028]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header Bar */}
            <div className="p-4 sm:px-6 bg-[#111214] border-b border-white/10 flex items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-3 truncate">
                <span className="text-xs font-mono font-bold text-[#EF2028] uppercase px-2.5 py-1 rounded bg-black border border-[#EF2028]/30">
                  Poster {activeModalIndex + 1} of {SERVICE_POSTERS.length}
                </span>
                <h3 className="text-sm sm:text-base font-heading font-bold text-white uppercase truncate">
                  {SERVICE_POSTERS[activeModalIndex].title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  onClick={closeLightbox}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#EF2028] text-xs font-bold uppercase text-white hover:bg-[#B9131B] transition-colors"
                >
                  Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#EF2028] text-white transition-colors"
                  aria-label="Close Fullscreen View"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster Image Container */}
            <div className="relative flex-grow min-h-[60vh] max-h-[80vh] w-full p-2 sm:p-4 flex items-center justify-center bg-[#07080a] overflow-hidden">
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  aspectRatio:
                    SERVICE_POSTERS[activeModalIndex].orientation === "landscape"
                      ? "3 / 2"
                      : "2 / 3",
                }}
              >
                <Image
                  src={SERVICE_POSTERS[activeModalIndex].image}
                  alt={SERVICE_POSTERS[activeModalIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Prev / Next Navigation */}
              <button
                onClick={prevPoster}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-[#EF2028] text-white border border-white/20 transition-all shadow-xl hover:scale-110 z-30"
                aria-label="Previous Poster"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPoster}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-[#EF2028] text-white border border-white/20 transition-all shadow-xl hover:scale-110 z-30"
                aria-label="Next Poster"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Switcher Bar */}
            <div className="p-3 sm:p-4 bg-[#111214] border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {SERVICE_POSTERS.map((poster, pIdx) => (
                  <button
                    key={poster.id}
                    onClick={() => setActiveModalIndex(pIdx)}
                    className={`text-xs px-3 py-1.5 rounded-md font-mono font-bold uppercase transition-all ${
                      activeModalIndex === pIdx
                        ? "bg-[#EF2028] text-white shadow-md"
                        : "bg-white/5 text-[#A7A7A7] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {pIdx === 0 ? "Landscape Poster" : "Portrait Poster"}
                  </button>
                ))}
              </div>

              <span className="text-[11px] font-mono text-[#A7A7A7] hidden md:inline-block">
                Press Esc or click backdrop to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
