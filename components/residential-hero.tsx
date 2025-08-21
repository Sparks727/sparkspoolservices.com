import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Heart, Shield } from "lucide-react"
import Link from "next/link"

export function ResidentialHero() {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-6 bg-white/80 border-primary/20 text-primary">
              <Home className="h-4 w-4 mr-2" />
              Residential Services
            </Badge>

                                <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                      Professional <span className="text-primary">Residential Pool Cleaning</span> Services
                    </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your family deserves a crystal-clear, safe pool every day. Our residential pool cleaning services bring
              military precision to your backyard oasis, so you can focus on making memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="#pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Family-Safe Chemicals</span>
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
                src="/residential.png?v=2"
                alt="Beautiful residential pool with family enjoying clean water"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Residential</div>
                <div className="text-sm text-muted-foreground">Pool Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
