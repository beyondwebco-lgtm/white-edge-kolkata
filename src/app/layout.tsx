import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const oswald = Oswald({
  variable: "--font-heading-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Premium Signage & Architectural Branding Solutions`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Signage company",
    "Custom signage solutions",
    "LED sign boards",
    "3D letter signage",
    "ACP cladding signage",
    "Glow sign boards",
    "Commercial signage",
    "Retail signage",
    "Pylon signage",
    "Signage installation",
    "Signage maintenance",
    "Frosted glass film",
    "Interior branding",
    "Wayfinding signage",
    "Architectural branding",
    "White Edge Signages",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Premium Signage & Architectural Branding`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/assets/img14.jpg",
        width: 1200,
        height: 630,
        alt: "White Edge Signages Showcase",
      },
    ],
  },
  icons: {
    icon: "/assets/logo-cropped.png",
    shortcut: "/assets/logo-cropped.png",
    apple: "/assets/logo-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white text-[#111214] font-sans antialiased selection:bg-[#EF2028] selection:text-white flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
