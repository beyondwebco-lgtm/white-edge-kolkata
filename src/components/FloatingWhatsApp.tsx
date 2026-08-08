"use client";

import { SITE_CONFIG } from "@/config/site";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=Hello%20White%20Edge%20Signages,%20I%20would%20like%20to%20inquire%20about%20your%20signage%20and%20branding%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-emerald-950/50"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow Pulse */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        <MessageSquare className="w-7 h-7 relative z-10" />

        {/* Tooltip on Hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:block bg-[#111214] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30 whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
