import { Navigation } from "@/components/navigation"
import { CommercialHero } from "@/components/commercial-hero"
import { CommercialServices } from "@/components/commercial-services"
import { CommercialBenefits } from "@/components/commercial-benefits"
import { CommercialTestimonials } from "@/components/commercial-testimonials"

export const metadata = {
  title: "Commercial Pool Services - Sparks Pool Services",
  description:
    "Professional commercial pool maintenance for hotels, apartments, community centers, and facilities. High-volume pool care with compliance reporting and emergency response.",
}

export default function CommercialPage() {
  return (
    <main>
      <Navigation />
      <CommercialHero />
      <CommercialServices />
      <CommercialBenefits />
      <CommercialTestimonials />
    </main>
  )
}
