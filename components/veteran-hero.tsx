import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award } from "lucide-react"
import Link from "next/link"

export function VeteranHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/american-flag-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-red-600 text-white hover:bg-red-700 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Veteran-Owned Business
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight">
                Service, Honor,
                <span className="text-cyan-400"> Excellence</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Founded by Army veteran David Sparks, our company brings military precision, integrity, and unwavering
                commitment to every pool we service.
              </p>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>10+ Years Military Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span>Honorable Discharge</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                <Link href="tel:727-234-4023">Call Us Today</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/army-veteran-david-sparks-portrait-professional.png"
                alt="David Sparks - Army Veteran and Founder"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
