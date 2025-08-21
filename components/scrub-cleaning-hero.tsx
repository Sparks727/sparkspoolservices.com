import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Droplets, Shield } from "lucide-react"
import Link from "next/link"

export function ScrubCleaningHero() {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-6 bg-white/80 border-primary/20 text-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              Deep Pool Restoration
            </Badge>

                                <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                      Professional <span className="text-primary">Deep Pool Restoration</span> Services
                    </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The most detailed way to clean your pool. Our technicians use professional scrub gear and scuba equipment to reach every inch of your pool, ensuring complete removal of algae, scale, and years of buildup that regular cleaning can't touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Get Free Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="#pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-primary" />
                <span>Pool Restoration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Fully Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                                   <img
                src="/scuba-clean.png"
                alt="Professional pool scrub cleaning in progress"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Professional</div>
                <div className="text-sm text-muted-foreground">Scrub Cleaning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
