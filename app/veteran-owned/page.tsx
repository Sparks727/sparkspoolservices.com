import { Navigation } from "@/components/navigation"
import { VeteranHero } from "@/components/veteran-hero"
import { VeteranStory } from "@/components/veteran-story"
import { MilitaryValues } from "@/components/military-values"
import { VeteranTestimonials } from "@/components/veteran-testimonials"
import { VeteranCTA } from "@/components/veteran-cta"

export default function VeteranOwnedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <VeteranHero />
      <VeteranStory />
      <MilitaryValues />
      <VeteranTestimonials />
      <VeteranCTA />
    </div>
  )
}
