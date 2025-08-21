import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function CommercialHero() {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-6 bg-white/80 border-primary/20 text-primary">
              <Building2 className="h-4 w-4 mr-2" />
              Commercial Services
            </Badge>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Professional <span className="text-primary">Commercial Pool Cleaning</span> Services
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your business reputation depends on pristine facilities. Our commercial pool services deliver consistent,
              reliable maintenance that keeps your guests happy and your operations compliant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="#pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>24/7 Emergency Response</span>
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
              <picture>
                <source srcSet="/commercial.webp?v=2" type="image/webp" />
                <img
                  src="/commercial.webp?v=2"
                  alt="Professional commercial pool facility with pristine maintenance"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Commercial</div>
                <div className="text-sm text-muted-foreground">Pool Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
