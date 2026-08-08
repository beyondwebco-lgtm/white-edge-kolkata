"use client";

import { SITE_CONFIG } from "@/config/site";
import { MessageSquare, Search, Compass, Hammer, ShieldCheck, LifeBuoy } from "lucide-react";

export default function ProcessSection() {
  const iconList = [MessageSquare, Search, Compass, Hammer, ShieldCheck, LifeBuoy];

  return (
    <section id="process" className="py-24 bg-[#0a0b0d] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[#EF2028]/30">
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              How We Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            From Idea To <span className="text-[#EF2028]">Installation</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            Our structured 6-step project execution workflow ensures precise engineering, zero site surprises, and seamless turnkey completion.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Progress Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#111214] -translate-y-1/2 z-0" />
          <div className="hidden lg:block absolute top-1/2 left-0 w-3/4 h-1 bg-gradient-to-r from-[#EF2028] via-[#EF2028] to-transparent -translate-y-1/2 z-0 shadow-[0_0_10px_#EF2028]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {SITE_CONFIG.processSteps.map((step, index) => {
              const IconComponent = iconList[index] || MessageSquare;
              return (
                <div
                  key={step.step}
                  className="group rounded-2xl bg-[#111214] border border-white/10 hover:border-[#EF2028] p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-extrabold text-[#EF2028]">
                        {step.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#050505] border border-[#EF2028]/30 text-[#EF2028] group-hover:bg-[#EF2028] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white uppercase group-hover:text-[#EF2028] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#A7A7A7] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-[#EF2028] font-semibold flex items-center gap-1">
                    <span>Phase 0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
