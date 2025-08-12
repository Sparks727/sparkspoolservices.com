import { Metadata } from "next"
import { Shield, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Cleaning Service Areas | Sparks Pool Services - Pinellas County, FL",
  description: "Professional pool cleaning services throughout Pinellas County, Florida. Serving Largo, Clearwater, Seminole, Pinellas Park, St. Petersburg, Indian Rocks Beach, and Clearwater Beach. Veteran-owned pool service company.",
  keywords: "pool cleaning service areas, pool service pinellas county, pool cleaning largo, pool cleaning clearwater, pool cleaning st petersburg, veteran owned pool service florida",
}

const serviceAreas = [
  {
    name: "Largo",
    url: "/service-areas/largo",
    description: "Professional pool cleaning services in Largo, Florida",
  },
  {
    name: "Clearwater",
    url: "/service-areas/clearwater",
    description: "Expert pool maintenance in Clearwater, Florida",
  },
  {
    name: "Seminole",
    url: "/service-areas/seminole",
    description: "Reliable pool services in Seminole, Florida",
  },
  {
    name: "Pinellas Park",
    url: "/service-areas/pinellas-park",
    description: "Quality pool cleaning in Pinellas Park, Florida",
  },
  {
    name: "St. Petersburg",
    url: "/service-areas/st-petersburg",
    description: "Comprehensive pool services in St. Petersburg, Florida",
  },
  {
    name: "Indian Rocks Beach",
    url: "/service-areas/indian-rocks-beach",
    description: "Coastal pool maintenance in Indian Rocks Beach, Florida",
  },
  {
    name: "Clearwater Beach",
    url: "/service-areas/clearwater-beach",
    description: "Beachfront pool services in Clearwater Beach, Florida",
  },
]

export default function ServiceAreasPage() {
  return (
    <main>
      <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pool Cleaning Service Areas
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Veteran-owned pool cleaning services throughout Pinellas County, Florida. Experience crystal clear pools with military precision and integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                <Link href="tel:727-234-4023">Call (727) 234-4023</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Serving Pinellas County Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our veteran-owned pool service company proudly serves residential and commercial clients throughout Pinellas County with reliable, professional pool cleaning and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Card key={area.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{area.name}</span>
                    <MapPin className="h-5 w-5 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={area.url} className="flex items-center justify-center">
                      Pool Cleaning in {area.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sparks Pool Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Veteran-Owned Excellence</h3>
                  <p className="text-gray-600">Military precision and integrity in every pool service we provide throughout Pinellas County.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Local Service</h3>
                  <p className="text-gray-600">Based in Pinellas County, we provide fast, reliable service to all local communities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Emergency Support</h3>
                  <p className="text-gray-600">Emergency pool services available for existing customers when you need us most.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Free Estimates</h3>
                  <p className="text-gray-600">No-obligation quotes for all pool cleaning services throughout Pinellas County.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully certified pool service company with comprehensive coverage for your peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Coverage</h3>
                  <p className="text-gray-600">Serving all major communities in Pinellas County with consistent, reliable service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready for Crystal Clear Pools in Your Area?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our satisfied customers throughout Pinellas County who trust Sparks Pool Services for their pool maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Link href="tel:727-234-4023">Call (727) 234-4023</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}
