"use client";

import { SITE_CONFIG } from "@/config/site";
import { SunMedium, Sparkles, ShieldCheck, TrendingUp, Award } from "lucide-react";

export default function BrandValueStrip() {
  const iconMap: Record<string, React.ElementType> = {
    SunMedium: SunMedium,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
    Award: Award,
  };

  return (
    <section className="relative z-20 bg-[#050505] border-y border-[#EF2028]/20 shadow-2xl py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0 snap-x snap-mandatory">
          {SITE_CONFIG.valueStrip.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="flex-none w-[220px] sm:w-auto snap-start p-4 rounded-xl bg-[#111214]/80 border border-white/5 hover:border-[#EF2028]/40 hover:bg-[#111214] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-[#050505] border border-[#EF2028]/20 text-[#EF2028] group-hover:scale-110 group-hover:bg-[#EF2028] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#A7A7A7] group-hover:text-[#EF2028] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-[#F5F5F3] group-hover:text-[#EF2028] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#EF2028] mb-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#A7A7A7] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#EF2028]/20 to-transparent group-hover:via-[#EF2028] transition-all mt-3" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
