export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sparks Pool Services",
    "description": "Veteran-owned pool cleaning services in Pinellas County, Florida. Professional residential & commercial pool maintenance, deep scrub cleaning.",
    "url": "https://sparkspoolservices.com",
    "telephone": "+1-727-234-4023",
    "email": "sparkspoolservices1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Florida",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.9506",
      "longitude": "-82.4572"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "27.9506",
        "longitude": "-82.4572"
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Pinellas County, Florida"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Pool Cleaning",
            "description": "Professional residential pool cleaning and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Pool Cleaning",
            "description": "Commercial pool maintenance for hotels, apartments, and facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Scrub Cleaning",
            "description": "Professional deep pool restoration and scrub cleaning services"
          }
        }
      ]
    },
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Veteran-Owned Business"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://www.facebook.com/sparkspoolservices"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
