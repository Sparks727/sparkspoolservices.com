import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <Footer />
    </main>
  )
}
