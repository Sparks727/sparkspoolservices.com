import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sparks Pool Services | Professional Pool Cleaning Pinellas County FL",
  description: "Veteran-owned pool cleaning services in Pinellas County, Florida. Residential & commercial pool maintenance, deep scrub cleaning. Licensed, insured, 24/7 emergency response. Free quotes!",
  keywords: "pool cleaning pinellas county, pool service florida, veteran owned pool service, residential pool cleaning, commercial pool maintenance, deep scrub cleaning, pool cleaning largo, pool cleaning clearwater, pool cleaning st petersburg",
  openGraph: {
    title: "Sparks Pool Services | Professional Pool Cleaning Pinellas County FL",
    description: "Veteran-owned pool cleaning services in Pinellas County, Florida. Residential & commercial pool maintenance, deep scrub cleaning. Licensed, insured, 24/7 emergency response.",
    type: "website",
    locale: "en_US",
    url: "https://sparkspoolservices.com",
    siteName: "Sparks Pool Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparks Pool Services | Professional Pool Cleaning Pinellas County FL",
    description: "Veteran-owned pool cleaning services in Pinellas County, Florida. Licensed, insured, 24/7 emergency response.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
}

export default function HomePage() {
  return (
    <main id="main-content">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <Footer />
    </main>
  )
}
