import { SITE_CONFIG } from "@/config/site";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Punchiry Building, Old Military Road, Payyanakkal",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673003",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    image: `${SITE_CONFIG.url}/assets/white-edge-logo.png`,
    priceRange: "$$",
    sameAs: [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.youtube,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Signage & Architectural Branding",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
    },
    areaServed: "India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Signage Services Catalog",
      itemListElement: SITE_CONFIG.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.fullDesc,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
