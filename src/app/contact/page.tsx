import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation | White Edge Signages",
  description:
    "Get in touch with White Edge Signages for custom signage consultation, site surveys, 3D architectural mockups, and fabrication quotations across Kerala & South India.",
  openGraph: {
    title: "Contact White Edge Signages | Free Signage Consultation",
    description:
      "Ready to elevate your commercial storefront, 3D LED letters, or ACP façade? Request a free consultation, site survey, or quote today.",
    url: `${SITE_CONFIG.url}/contact`,
    images: [
      {
        url: "/assets/our-work/damro-furniture-1.jpeg",
        width: 1200,
        height: 630,
        alt: "White Edge Signages Contact & Consultation",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12 bg-[#050505] text-[#F5F5F3] min-h-screen">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#EF2028] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
}
