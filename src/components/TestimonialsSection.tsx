"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SITE_CONFIG.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + SITE_CONFIG.testimonials.length) % SITE_CONFIG.testimonials.length
    );
  };

  const currentItem = SITE_CONFIG.testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[#EF2028]/30">
            <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
              Client Feedback
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            What Our <span className="text-[#EF2028]">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl bg-[#111214] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
          <Quote className="w-12 h-12 text-[#EF2028]/30 absolute top-8 right-8" />

          {/* Stars */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: currentItem.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#EF2028] text-[#EF2028]" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="text-lg sm:text-2xl text-white font-light leading-relaxed italic">
            "{currentItem.quote}"
          </blockquote>

          {/* Author Details & Slider Nav */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-lg font-heading font-bold text-white uppercase">
                {currentItem.author}
              </p>
              <p className="text-xs font-semibold text-[#EF2028]">
                {currentItem.title} — <span className="text-[#A7A7A7]">{currentItem.company}</span>
              </p>
            </div>

            {/* Slider Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#050505] border border-white/10 text-white hover:border-[#EF2028] hover:text-[#EF2028] transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#A7A7A7]">
                0{currentIndex + 1} / 0{SITE_CONFIG.testimonials.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#050505] border border-white/10 text-white hover:border-[#EF2028] hover:text-[#EF2028] transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
