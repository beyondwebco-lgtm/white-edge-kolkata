"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { Palette, ShieldCheck, Cpu, Wrench, CheckCircle2, Award } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ElementType> = {
    Palette,
    ShieldCheck,
    Cpu,
    Wrench,
  };

  return (
    <section id="why-us" className="py-24 bg-white text-[#111214] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200">
                <Award className="w-4 h-4 text-[#EF2028]" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
                  The White Edge Edge
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111214]">
                Precision At <span className="text-[#EF2028]">Every Stage</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                We combine architectural creativity, precision engineering, heavy-duty material sourcing, and certified installation to deliver signage that lasts for years.
              </p>
            </div>

            {/* 4 Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SITE_CONFIG.whyChooseUs.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Palette;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#EF2028] hover:bg-white shadow-sm transition-all duration-300 group space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-white border border-gray-200 text-[#EF2028] group-hover:bg-[#EF2028] group-hover:text-white transition-colors shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-gray-500 font-bold">0{index + 1}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-[#111214] uppercase group-hover:text-[#EF2028] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Supporting Benefits Checklist */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#EF2028]">
                Additional Value-Added Advantages:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#111214] font-medium">
                {SITE_CONFIG.additionalBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EF2028] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Material Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl space-y-4 p-4 bg-gray-50">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden group">
                <Image
                  src="/assets/img34.jpg"
                  alt="White Edge Precision Backlit 3D Letter Fabrication"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 border border-gray-200 backdrop-blur-md">
                  <p className="text-xs font-heading font-bold text-[#111214] uppercase">
                    Grade-304 Stainless Steel & Acrylic CNC Cut
                  </p>
                  <p className="text-[11px] text-gray-600">Laser precision edges & anti-fade UV illumination</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-32 rounded-xl overflow-hidden group border border-gray-200">
                  <Image
                    src="/assets/img48.jpg"
                    alt="White Edge Frosted Glass Branding Installation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden group border border-gray-200">
                  <Image
                    src="/assets/img46.jpg"
                    alt="White Edge Corporate Wall Mural"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
