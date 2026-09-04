"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function QualityStatement() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#050505] border-y border-[#EF2028]/30">
      {/* Background Architectural Project Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img28.jpg"
          alt="White Edge Architectural Signage Quality"
          fill
          className="object-cover object-center brightness-30 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EF2028]/20 border border-[#EF2028]/40 backdrop-blur-md">
          <Award className="w-4 h-4 text-[#EF2028]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#F5F5F3] font-bold">
            Uncompromising Quality Guarantee
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
          Crafted with Precision. Built to Last.{" "}
          <span className="text-[#EF2028] red-text-glow">Designed to Be Remembered.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#F5F5F3]/90 font-light leading-relaxed max-w-3xl mx-auto">
          Every White Edge project is created by combining thoughtful design, reliable engineering, premium materials, and professional execution. The result is signage that performs beautifully and represents your brand with confidence.
        </p>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#EF2028] text-sm font-bold uppercase tracking-wider text-white shadow-2xl shadow-[#EF2028]/30 hover:bg-[#B9131B] hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            Start Your Signage Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
