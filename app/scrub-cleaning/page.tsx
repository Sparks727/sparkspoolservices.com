import { Navigation } from "@/components/navigation"
import { ScrubCleaningHero } from "@/components/scrub-cleaning-hero"
import { ScrubCleaningServices } from "@/components/scrub-cleaning-services"
import { ScrubCleaningPricing } from "@/components/scrub-cleaning-pricing"
import { EmergencyCleaning } from "@/components/emergency-cleaning"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Deep Pool Restoration Services Pinellas County | Professional Scrub Cleaning",
  description:
    "Professional deep pool restoration and scrub cleaning services in Pinellas County, Florida. Remove algae, scale, and years of buildup with scuba cleaning. Complete pool transformation guaranteed.",
}

export default function ScrubCleaningPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ScrubCleaningHero />
      <ScrubCleaningServices />
      <ScrubCleaningPricing />
      <EmergencyCleaning />
      <Footer />
    </main>
  )
}
