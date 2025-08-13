import { Button } from "@/components/ui/button"
import { Sparkles, Droplets, Shield } from "lucide-react"

export function ScrubCleaningHero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-cyan-600" />
              <span className="text-cyan-600 font-semibold font-sans">Deep Pool Restoration</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Professional Scrub Cleaning Services
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-sans">
              The most detailed way to clean your pool. Our technicians use professional scrub gear and scuba equipment to reach every inch of your pool, ensuring complete removal of algae, scale, and years of buildup that regular cleaning can't touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 font-sans">
                Get Free Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 font-sans bg-transparent"
              >
                View Before & After
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600 font-sans">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-cyan-600" />
                <span>Algae Removal</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-600" />
                <span>Surface Restoration</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/pool-scrub-cleaning.png"
              alt="Professional pool scrub cleaning in progress"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-cyan-600 font-serif">100%</div>
              <div className="text-sm text-slate-600 font-sans">Algae Removal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
