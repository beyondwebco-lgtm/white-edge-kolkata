"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import {
  ShoppingBag,
  Building,
  Utensils,
  Hotel,
  Briefcase,
  Activity,
  GraduationCap,
  Fuel,
  ShoppingCart,
  Armchair,
  Car,
  Landmark,
  Home,
  Factory,
} from "lucide-react";

export default function IndustriesSection() {
  const iconMap: Record<string, React.ElementType> = {
    ShoppingBag,
    Building,
    Utensils,
    Hotel,
    Briefcase,
    Activity,
    GraduationCap,
    Fuel,
    ShoppingCart,
    Armchair,
    Car,
    Landmark,
    Home,
    Factory,
  };

  return (
    <section id="industries" className="py-24 bg-[#0a0b0d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[#EF2028]/30">
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              Sectors We Serve
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            Signage Solutions For <span className="text-[#EF2028]">Every Business Environment</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            We deliver tailored architectural branding, high-visibility storefront identity, and internal navigation across diverse commercial sectors.
          </p>
        </div>

        {/* 14 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.industries.map((ind, index) => {
            const IconComponent = iconMap[ind.icon] || Building;
            return (
              <div
                key={index}
                className="group relative rounded-xl bg-[#111214] border border-white/5 hover:border-[#EF2028]/40 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Background Image Accent */}
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-50 group-hover:brightness-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-[#050505]/90 border border-[#EF2028]/30 text-[#EF2028] shadow-md group-hover:bg-[#EF2028] group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-heading font-bold text-white uppercase group-hover:text-[#EF2028] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#A7A7A7] leading-relaxed line-clamp-3">
                    {ind.desc}
                  </p>
                </div>

                <div className="h-1 bg-[#111214] group-hover:bg-[#EF2028] transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
