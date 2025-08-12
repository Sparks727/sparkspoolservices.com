import { Navigation } from "@/components/navigation"
import { ResidentialHero } from "@/components/residential-hero"
import { ResidentialServices } from "@/components/residential-services"
import { ResidentialPricing } from "@/components/residential-pricing"
import { ResidentialTestimonials } from "@/components/residential-testimonials"

export const metadata = {
  title: "Residential Pool Cleaning Services - Sparks Pool Services",
  description:
    "Professional residential pool cleaning and maintenance services. Weekly, bi-weekly, and monthly plans for homeowners. Keep your family pool sparkling clean and safe.",
}

export default function ResidentialPage() {
  return (
    <main>
      <Navigation />
      <ResidentialHero />
      <ResidentialServices />
      <ResidentialPricing />
      <ResidentialTestimonials />
    </main>
  )
}
