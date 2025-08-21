import { Navigation } from "@/components/navigation"
import { ResidentialHero } from "@/components/residential-hero"
import { ResidentialServices } from "@/components/residential-services"
import { ResidentialPricing } from "@/components/residential-pricing"
import { EmergencyCleaning } from "@/components/emergency-cleaning"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Residential Pool Cleaning Services Pinellas County | Weekly & Monthly Pool Maintenance",
  description:
    "Professional residential pool cleaning services in Pinellas County, Florida. Weekly, bi-weekly, and monthly pool maintenance plans. Free quotes, licensed & insured. Call today!",
}

export default function ResidentialPage() {
  return (
    <main id="main-content">
      <Navigation />
      <ResidentialHero />
      <ResidentialServices />
      <ResidentialPricing />
      <EmergencyCleaning />
      <Footer />
    </main>
  )
}
