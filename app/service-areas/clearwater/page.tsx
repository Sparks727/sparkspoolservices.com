import { Metadata } from "next"
import { Shield, Phone, Mail, MapPin, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Cleaning in Clearwater, FL | Sparks Pool Services - Veteran Owned",
  description: "Professional pool cleaning services in Clearwater, FL. Veteran-owned pool service company serving Clearwater with crystal clear pools and military precision. Call (727) 234-4023 for a free quote.",
  keywords: "pool cleaning clearwater fl, pool service clearwater florida, pool maintenance clearwater, veteran owned pool service clearwater, crystal clear pools clearwater",
}

export default function ClearwaterPage() {
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
              Pool Cleaning in Clearwater, FL
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Veteran-owned pool cleaning services in Clearwater, Florida. Experience crystal clear pools with military precision and integrity.
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

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Professional Pool Services in Clearwater
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving Clearwater, Florida with comprehensive pool cleaning and maintenance services. Our veteran-owned company brings military discipline to every job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  Weekly Pool Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular maintenance including skimming, vacuuming, and chemical balancing to keep your Clearwater pool crystal clear year-round.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  Deep Scrub Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thorough cleaning of pool surfaces, tiles, and equipment to remove algae and buildup common in Florida's coastal climate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  Chemical Balancing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert water chemistry management to ensure safe, clear, and properly balanced pool water in Clearwater's unique coastal environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  Equipment Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular inspection and maintenance of pumps, filters, and other pool equipment to prevent costly repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  Seasonal Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pool opening and closing services, winterization, and preparation for Florida's year-round swimming season.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  Emergency Repairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quick response emergency pool services for Clearwater residents when unexpected issues arise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sparks Pool Services in Clearwater?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Veteran-Owned Excellence</h3>
                  <p className="text-gray-600">Military precision and integrity in every pool service we provide to Clearwater residents.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">5-Star Service</h3>
                  <p className="text-gray-600">Consistently rated 5-stars by our satisfied Clearwater customers for quality and reliability.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully certified pool service company with comprehensive coverage for your peace of mind.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Local Clearwater Service</h3>
                  <p className="text-gray-600">Based in Pinellas County, we provide fast, reliable service to all Clearwater neighborhoods.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Emergency Support</h3>
                  <p className="text-gray-600">Emergency pool services available for existing customers when you need us most.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Free Estimates</h3>
                  <p className="text-gray-600">No-obligation quotes for all pool cleaning services in Clearwater, Florida.</p>
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
            Ready for Crystal Clear Pools in Clearwater?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our satisfied Clearwater customers who trust Sparks Pool Services for their pool maintenance needs.
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
