import type { Metadata } from "next";
import OurWorkGallery from "./OurWorkGallery";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Work & Signage Portfolio | Real-World Completed Projects",
  description:
    "Explore White Edge Signages' real-world completed projects across LED sign boards, 3D acrylic & stainless steel letters, ACP façade cladding, storefront branding, and highway pylon signs.",
  openGraph: {
    title: "Our Work & Signage Projects | White Edge Signages",
    description:
      "Browse our portfolio of custom fabricated signs, LED 3D letters, ACP claddings, and retail storefronts.",
    url: `${SITE_CONFIG.url}/our-work`,
    images: [
      {
        url: "/assets/our-work/work-01.jpeg",
        width: 1200,
        height: 630,
        alt: "White Edge Signages Completed Work",
      },
    ],
  },
};

export default function OurWorkPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FDFDFD] text-[#111214] min-h-screen">
      <OurWorkGallery />
    </div>
  );
}
