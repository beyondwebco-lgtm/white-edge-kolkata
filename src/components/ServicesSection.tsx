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

        {/* Services Grid (17 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || PenTool;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#111214] border border-white/5 hover:border-[#EF2028]/50 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image Backdrop Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/50 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#050505]/80 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {service.category}
                  </span>

                  {/* Icon Accent */}
                  <div className="absolute bottom-3 left-4 p-3 rounded-xl bg-[#050505] border border-[#EF2028]/40 text-[#EF2028] shadow-lg group-hover:bg-[#EF2028] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide group-hover:text-[#EF2028] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#A7A7A7] mt-2 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold uppercase tracking-wider text-[#EF2028] hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                      href="#contact"
                      className="text-[11px] font-semibold text-[#A7A7A7] hover:text-[#F5F5F3]"
                    >
                      Enquire
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111214] border border-[#EF2028]/40 rounded-2xl overflow-hidden shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[#EF2028] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 w-full">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/60 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF2028] bg-black/70 px-3 py-1 rounded">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white uppercase mt-2">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 pt-0">
              <p className="text-sm sm:text-base text-[#F5F5F3] leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2">
                <h4 className="text-xs uppercase font-mono font-bold text-[#EF2028]">
                  Key Service Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A7A7A7]">
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
                  className="px-5 py-2.5 rounded-md bg-white/10 text-xs font-bold uppercase text-white hover:bg-white/20"
                >
                  Close
                </button>
                <Link
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-md bg-[#EF2028] text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#B9131B]"
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
