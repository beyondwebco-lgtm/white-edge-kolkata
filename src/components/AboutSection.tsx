"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Compass, Hammer } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white text-[#111214] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200">
              <span className="w-2 h-2 rounded-full bg-[#EF2028] animate-ping" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
                About White Edge Signages
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111214] leading-tight">
              We Build Signs That Make Brands{" "}
              <span className="text-[#EF2028] underline decoration-[#EF2028]/40 underline-offset-8">
                Impossible to Ignore
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3748] font-normal leading-relaxed">
              At <strong className="text-[#111214] font-semibold">White Edge Signages</strong>, we believe every brand deserves to be seen, remembered, and admired. We create premium signage and architectural branding solutions that transform spaces into powerful brand experiences.
            </p>

            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              From iconic storefronts and illuminated 3D letters to ACP cladding, pylon signs, wayfinding systems, glass branding, and custom fabrication, every project is designed with precision, built with premium materials, and installed to the highest standards of quality and durability.
            </p>

            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Our approach combines creativity, engineering, and craftsmanship to deliver signage that is visually striking, technically reliable, and built to perform for years.
            </p>

            {/* Highlighted Statement Box */}
            <div className="p-5 rounded-xl bg-gray-50 border-l-4 border-[#EF2028] shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[#EF2028] shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#111214]">
                    From concept and design to manufacturing and installation, we deliver complete branding solutions under one roof.
                  </p>
                  <p className="text-xs text-[#718096] mt-1">
                    Zero third-party compromises. Direct end-to-end quality control.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <Compass className="w-5 h-5 text-[#EF2028]" />
                <span className="text-xs font-bold text-[#111214]">Site Survey & Design</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <Hammer className="w-5 h-5 text-[#EF2028]" />
                <span className="text-xs font-bold text-[#111214]">Precision Fabrication</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#EF2028]" />
                <span className="text-xs font-bold text-[#111214]">Certified Installation</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#111214] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#EF2028] transition-all duration-300 group shadow-md"
              >
                Discover Our Full Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Image Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              {/* Main Editorial Image */}
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl group">
                <Image
                  src="/assets/img14.jpg"
                  alt="White Edge Signages Storefront Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-white/95 border border-gray-200 backdrop-blur-md">
                  <p className="text-xs font-heading font-bold text-[#111214] uppercase tracking-wider">
                    Storefront & Retail Signage
                  </p>
                  <p className="text-[11px] text-[#EF2028] font-mono">Precision Backlit 3D Lettering</p>
                </div>
              </div>

              {/* Grid of 2 Secondary Editorial Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[160px] rounded-xl overflow-hidden border border-gray-200 shadow-md group">
                  <Image
                    src="/assets/img28.jpg"
                    alt="White Edge Architectural Façade Signage"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/70 px-2 py-0.5 rounded">
                    Façade Cladding
                  </span>
                </div>

                <div className="relative h-[160px] rounded-xl overflow-hidden border border-gray-200 shadow-md group">
                  <Image
                    src="/assets/img34.jpg"
                    alt="White Edge Illuminated 3D Signage"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/70 px-2 py-0.5 rounded">
                    Back-lit 3D Letters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
