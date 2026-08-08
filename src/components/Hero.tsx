"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ArrowRight, MessageSquare, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const rotatingWords = ["Visible", "Memorable", "Trusted", "Impactful", "Timeless"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-white text-[#111214]">
      {/* Pure Clean White Background (No Grid, No Images, No Overlay Mesh) */}
      
      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 shadow-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#EF2028]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#111214] font-semibold">
            SIGNAGE • BRANDING • FABRICATION • INSTALLATION
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold uppercase tracking-tight text-[#111214] leading-none mb-4 max-w-5xl">
          Elevating Brands Through{" "}
          <span className="text-[#EF2028]">
            Exceptional Signage
          </span>
        </h1>

        {/* Rotating Words Badge */}
        <div className="h-10 my-3 flex items-center justify-center gap-2 text-xl sm:text-2xl font-heading font-medium tracking-wide">
          <span className="text-gray-600">Designing signs that are</span>
          <span
            key={currentWordIndex}
            className="px-3 py-0.5 rounded bg-red-50 border border-red-200 text-[#EF2028] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            {rotatingWords[currentWordIndex]}
          </span>
        </div>

        {/* Supporting Paragraph */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#4A5568] max-w-3xl font-normal leading-relaxed mb-10">
          We create premium signage and architectural branding solutions that make businesses visible, memorable, and impactful. From concept and fabrication to professional installation, we bring every brand to life with precision.
        </p>

        {/* CTA Buttons Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          {/* Primary CTA */}
          <Link
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#EF2028] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/20 hover:bg-[#B9131B] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#111214] text-sm font-bold uppercase tracking-wider text-white hover:bg-[#262626] transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
          >
            Request a Free Quote
          </Link>
        </div>

        {/* WhatsApp Quick CTA */}
        <div className="mt-6">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Chat directly on WhatsApp for Instant Quotation</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Scroll to discover</span>
        <ChevronDown className="w-5 h-5 text-[#EF2028] animate-bounce" />
      </div>
    </section>
  );
}
