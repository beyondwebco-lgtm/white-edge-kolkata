import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/config/site";
import { getProjectBySlug, getAllProjectSlugs } from "@/sanity/api";
import { urlForImage } from "@/sanity/image";
import { PortableText } from "@/components/PortableText";
import { 
  ArrowLeft, 
  MapPin, 
  CheckCircle2, 
  Wrench, 
  Lightbulb, 
  Layers, 
  MessageSquare, 
  PhoneCall, 
  Sparkles
} from "lucide-react";

export const revalidate = 60; // ISR

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for known project slugs
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | White Edge Signages",
    };
  }

  const title = project.seoTitle || `${project.title} | White Edge Signages Portfolio`;
  const description = project.seoDescription || project.shortDescription;
  const ogImageUrl = project.mainImage ? urlForImage(project.mainImage)?.width(1200).height(630).url() : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/our-work/${project.slug.current}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/our-work/${project.slug.current}`,
      type: "article",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const mainImageUrl = project.mainImage ? urlForImage(project.mainImage)?.width(1400).url() : null;

  return (
    <article className="pt-24 pb-20 bg-[#FDFDFD] text-[#111214] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-between">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#EF2028] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Our Work
          </Link>

          {project.category && (
            <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#EF2028] text-xs font-mono font-bold uppercase">
              {project.category.name}
            </span>
          )}
        </nav>

        {/* Header / Title Section */}
        <header className="mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
            <span className="font-bold text-[#EF2028]">Client:</span>
            <span>{project.clientName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-[#111214] leading-tight">
            {project.title}
          </h1>

          {project.location && (
            <p className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
              <MapPin className="w-4 h-4 text-[#EF2028]" />
              {project.location}
            </p>
          )}

          <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed max-w-4xl pt-2">
            {project.shortDescription}
          </p>
        </header>

        {/* Primary Main Image Hero */}
        {mainImageUrl && (
          <div className="relative w-full h-[360px] sm:h-[500px] md:h-[620px] rounded-3xl overflow-hidden bg-[#0A0B0E] mb-12 shadow-2xl border border-gray-200">
            {/* Background Blur */}
            <Image
              src={mainImageUrl}
              alt=""
              fill
              className="object-cover blur-2xl opacity-40 scale-110"
              aria-hidden="true"
              priority
            />
            {/* Main Showcase Image */}
            <div className="relative w-full h-full p-4 sm:p-8 flex items-center justify-center z-10">
              <Image
                src={mainImageUrl}
                alt={project.mainImage.alt || project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        )}

        {/* Detailed Grid: Specs + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 mb-16">
          {/* Main Story Content */}
          <div className="lg:col-span-7 space-y-8">
            {project.description && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase text-[#111214] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#EF2028]" /> Project Overview & Scope
                </h2>
                <div className="prose prose-red max-w-none text-gray-700">
                  <PortableText value={project.description} />
                </div>
              </section>
            )}

            {/* Framework & Lighting details */}
            {(project.frameworkStructure || project.lightingPower) && (
              <div className="space-y-6">
                {project.frameworkStructure && (
                  <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-heading font-bold uppercase text-[#111214] mb-3 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#EF2028]" /> Structural Engineering & Framework
                    </h3>
                    <div className="text-sm text-gray-600">
                      <PortableText value={project.frameworkStructure} />
                    </div>
                  </section>
                )}

                {project.lightingPower && (
                  <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-heading font-bold uppercase text-[#111214] mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" /> Illumination & Electrical Architecture
                    </h3>
                    <div className="text-sm text-gray-600">
                      <PortableText value={project.lightingPower} />
                    </div>
                  </section>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar: Engineering Specs & Materials */}
          <aside className="lg:col-span-5 space-y-8">
            {/* Engineering Specifications Card */}
            {project.engineeringSpecs && project.engineeringSpecs.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111214] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EF2028]" /> Technical Specifications
                </h3>
                <dl className="divide-y divide-gray-100">
                  {project.engineeringSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="py-2.5 flex justify-between gap-4 text-xs sm:text-sm">
                      <dt className="font-semibold text-gray-700">{spec.label}</dt>
                      <dd className="text-gray-900 text-right font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Materials Used */}
            {project.materials && project.materials.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111214] mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#EF2028]" /> Materials & Components
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Consultation / Quotation Box */}
            <div className="bg-[#111214] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#EF2028] font-bold">
                Get Similar Signage
              </span>
              <h4 className="text-xl font-heading font-extrabold uppercase leading-tight">
                Want this signage built for your business?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Contact our engineering team with your dimensions and site details for a free design mockup and quotation.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    `Hi White Edge Signages, I am looking for a signage solution similar to "${project.title}" (Client: ${project.clientName}). Please share details and pricing.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Book Site Measurement
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery Section (if extra photos exist) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase font-bold text-[#EF2028] tracking-widest">
                Installation Views
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase text-[#111214] mt-1">
                Project Gallery ({project.gallery.length} Photographs)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, gIdx) => {
                const imgUrl = urlForImage(img)?.width(1000).url();
                if (!imgUrl) return null;

                return (
                  <div
                    key={gIdx}
                    className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#0A0B0E] border border-gray-200 group shadow-md"
                  >
                    <Image
                      src={imgUrl}
                      alt={img.alt || `${project.title} photo ${gIdx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {img.caption && (
                      <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm p-3 text-white text-xs">
                        {img.caption}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
