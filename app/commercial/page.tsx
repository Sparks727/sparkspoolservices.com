import { Navigation } from "@/components/navigation"
import { CommercialHero } from "@/components/commercial-hero"
import { CommercialServices } from "@/components/commercial-services"
import { CommercialPricing } from "@/components/commercial-pricing"
import { EmergencyCleaning } from "@/components/emergency-cleaning"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Commercial Pool Cleaning Services Pinellas County | Hotel & Facility Pool Maintenance",
  description:
    "Professional commercial pool cleaning services in Pinellas County, Florida. Hotel, apartment, and facility pool maintenance. Licensed, insured, 24/7 emergency response. Get proposal today!",
}

export default function CommercialPage() {
  return (
    <main id="main-content">
      <Navigation />
      <CommercialHero />
      <CommercialServices />
      <CommercialPricing />
      <EmergencyCleaning />
      <Footer />
    </main>
  )
}
