"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowUp,
  Map,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-[#F5F5F3] border-t border-white/10 relative overflow-hidden">
      {/* Top Footer Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#EF2028] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#hero" className="inline-block group">
              <div className="relative h-12 w-48 bg-white/95 rounded-lg p-1.5 shadow-lg group-hover:shadow-[#EF2028]/30 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/assets/white-edge-logo.png"
                  alt="White Edge Signages Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
            </Link>

            <p className="text-xs text-[#A7A7A7] leading-relaxed max-w-sm">
              White Edge Signages is a premier end-to-end architectural branding, illuminated signage, metal fabrication, and certified installation enterprise. We transform commercial spaces into powerful visual landmarks.
            </p>

            <div className="space-y-1">
              <p className="text-sm font-heading font-bold text-[#EF2028] uppercase tracking-wider">
                Good Signs. Great Impressions.
              </p>
              <p className="text-[11px] font-mono text-[#A7A7A7]">
                Designed for visibility. Built for impact.
              </p>
            </div>

            {/* Social Channels (Custom Clean SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111214] border border-white/10 text-[#A7A7A7] hover:text-[#EF2028] hover:border-[#EF2028]/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111214] border border-white/10 text-[#A7A7A7] hover:text-[#EF2028] hover:border-[#EF2028]/40 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111214] border border-white/10 text-[#A7A7A7] hover:text-[#EF2028] hover:border-[#EF2028]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111214] border border-white/10 text-[#A7A7A7] hover:text-[#EF2028] hover:border-[#EF2028]/40 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#hero" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="#industries" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#A7A7A7] hover:text-[#EF2028] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Signage Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Signage Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#A7A7A7]">
              {SITE_CONFIG.services.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link href="#services" className="hover:text-[#EF2028] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-[#A7A7A7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EF2028] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EF2028] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-white">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: {SITE_CONFIG.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EF2028] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white break-all">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111214] border border-white/10 text-[11px] font-bold text-white hover:border-[#EF2028]"
                >
                  <Map className="w-3.5 h-3.5 text-[#EF2028]" />
                  Open on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A7A7]">
          <p>© 2026 White Edge Signages. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#A7A7A7] hover:text-[#EF2028] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
