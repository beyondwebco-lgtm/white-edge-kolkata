"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import {
  PenTool,
  Zap,
  Building2,
  Layers,
  Sun,
  Navigation2,
  Eye,
  Grid,
  Image as ImageIcon,
  Palette,
  Wrench,
  ShieldAlert,
  RotateCcw,
  Compass,
  FileText,
  MapPin,
  Store,
  ArrowRight,
  CheckCircle,
  X,
  Maximize2,
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<(typeof SITE_CONFIG.services)[0] | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    PenTool,
    Zap,
    Building2,
    Layers,
    Sun,
    Navigation2,
    Eye,
    Grid,
    Image: ImageIcon,
    Palette,
    Wrench,
    ShieldAlert,
    RotateCcw,
    Compass,
    FileText,
    MapPin,
    Store,
  };

  const categories = [
    "All",
    "Illuminated",
    "Architectural",
    "Façade",
    "Internal Branding",
    "Services",
    "Planning",
  ];

  const filteredServices =
    activeCategory === "All"
      ? SITE_CONFIG.services
      : SITE_CONFIG.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#0a0b0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[#EF2028]/30">
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            Complete Signage & <span className="text-[#EF2028]">Branding Solutions</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            From storefront identity to large-scale commercial branding, we provide end-to-end solutions tailored to your brand, building, location, and business objectives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#EF2028] text-white shadow-lg shadow-[#EF2028]/25 scale-105"
                  : "bg-[#111214] border border-white/10 text-[#A7A7A7] hover:text-white hover:border-[#EF2028]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (16 Services) - Scaled down with balanced 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start justify-center">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || PenTool;
            const imgWidth = service.width || 1024;
            const imgHeight = service.height || 1536;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#111214] border border-white/10 hover:border-[#EF2028]/60 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between w-full max-w-[320px] mx-auto"
              >
                {/* Image Box Perfectly Sized to Image Dimensions (Scaled Down, Zero Cropping, Zero Letterbox) */}
                <div 
                  onClick={() => setSelectedService(service)}
                  className="relative w-full overflow-hidden cursor-pointer bg-[#0e1014]"
                  style={{ aspectRatio: `${imgWidth} / ${imgHeight}` }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={imgWidth}
                    height={imgHeight}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block select-none"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md shadow-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Floating Icon Accent */}
                  <div className="absolute bottom-3 left-3 z-20 p-2.5 rounded-xl bg-black/80 border border-white/20 text-[#EF2028] shadow-lg backdrop-blur-md group-hover:bg-[#EF2028] group-hover:text-white group-hover:border-[#EF2028] transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-bold uppercase tracking-wider border border-white/20 flex items-center gap-1.5 shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5 text-[#EF2028]" /> Full View
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-[#111214]">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide group-hover:text-[#EF2028] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#C5C5C5] mt-2.5 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold uppercase tracking-wider text-[#EF2028] hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#111214] border border-[#EF2028]/40 rounded-2xl overflow-hidden shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/75 text-white hover:bg-[#EF2028] transition-colors shadow-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Whole Contained Modal Image Matching Aspect Ratio */}
            <div 
              className="relative w-full max-h-[48vh] max-w-lg mx-auto bg-transparent flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: `${selectedService.width || 1024} / ${selectedService.height || 1536}` }}
            >
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                width={selectedService.width || 1024}
                height={selectedService.height || 1536}
                className="w-full h-full object-contain"
                priority
              />
              <div className="absolute bottom-3 left-4 z-20">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white bg-[#EF2028] px-3 py-1 rounded shadow-md">
                  {selectedService.category}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 pt-0">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white uppercase drop-shadow-md">
                {selectedService.title}
              </h3>

              <p className="text-sm sm:text-base text-[#F5F5F3] leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="p-4 rounded-xl bg-[#0a0b0d] border border-white/10 space-y-2">
                <h4 className="text-xs uppercase font-mono font-bold text-[#EF2028]">
                  Key Service Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C5C5C5]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#EF2028]" />
                    <span>100% Weatherproof Fabrication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#EF2028]" />
                    <span>Energy-Efficient Components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#EF2028]" />
                    <span>Certified Technician Installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#EF2028]" />
                    <span>Warranty & After-Sales Support</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-md bg-white/10 text-xs font-bold uppercase text-white hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-md bg-[#EF2028] text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#B9131B] transition-colors"
                >
                  Request Quote for {selectedService.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
