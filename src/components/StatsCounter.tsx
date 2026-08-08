"use client";

import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/config/site";

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(SITE_CONFIG.stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          SITE_CONFIG.stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / (end || 1)));
            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.min(start, end);
                return next;
              });
              if (start >= end) clearInterval(timer);
            }, Math.max(stepTime, 20));
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-white text-[#111214] border-t border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONFIG.stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#EF2028] hover:bg-white shadow-sm transition-all text-center space-y-2 group"
            >
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#EF2028]">
                {counts[index]}
                {stat.suffix}
              </div>

              <h3 className="text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-[#111214] group-hover:text-[#EF2028] transition-colors">
                {stat.label}
              </h3>

              <p className="text-xs text-gray-600 font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
