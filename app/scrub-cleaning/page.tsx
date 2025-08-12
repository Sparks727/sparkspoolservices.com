import { ScrubCleaningHero } from "@/components/scrub-cleaning-hero"
import { ScrubCleaningProcess } from "@/components/scrub-cleaning-process"
import { ScrubCleaningBenefits } from "@/components/scrub-cleaning-benefits"
import { ScrubCleaningPricing } from "@/components/scrub-cleaning-pricing"
import { Navigation } from "@/components/navigation"

export default function ScrubCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrubCleaningHero />
      <ScrubCleaningProcess />
      <ScrubCleaningBenefits />
      <ScrubCleaningPricing />
    </div>
  )
}
