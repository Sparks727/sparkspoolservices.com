import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Droplets, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Veteran Badge */}
          <div className="flex justify-center mb-6 pt-8 sm:pt-12">
            <Badge
              variant="outline"
              className="bg-white/10 border-white/20 text-white backdrop-blur-sm px-4 py-2 text-sm sm:text-base"
            >
              <Shield className="h-4 w-4 mr-2" />
              Proudly Veteran-Owned
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight tracking-wide">
            The Best <span className="text-primary">Pool Cleaning</span> Experience
          </h1>



          {/* Tagline */}
          <div className="flex items-center justify-center space-x-2 mb-10 px-4">
            <Droplets className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="text-sm sm:text-lg font-medium text-white tracking-wider">SERVING PINELLAS COUNTY • VETERAN OWNED • 5-STAR RATED</span>
            <Droplets className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto min-h-[48px]"
            >
              <Link href="tel:727-234-4023">Get Free Pool Cleaning Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto min-h-[48px]"
            >
              <Link href="/veteran-owned">Our Story</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80 px-4">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
              <span className="text-sm sm:text-base">5-Star Pool Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base">Serving Pinellas County</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base">Free Estimates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
