import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description:
        "Weekly, bi-weekly, and monthly pool maintenance for homeowners. Keep your family pool sparkling clean and safe.",
      features: ["Chemical balancing", "Skimming & vacuuming", "Filter cleaning", "Equipment inspection"],
      href: "/residential",
      cta: "Make Every Swim Sparkle",
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description: "Professional pool care for hotels, apartments, community centers, and commercial facilities.",
      features: ["High-volume maintenance", "Compliance reporting", "Emergency response", "Equipment servicing"],
      href: "/commercial",
      cta: "Professional Pool Care",
    },
    {
      icon: Sparkles,
      title: "Deep Scrub Cleaning",
      description:
        "Intensive cleaning service to restore your pool to pristine condition. Perfect for seasonal openings.",
      features: ["Algae removal", "Tile & grout cleaning", "Acid washing", "Equipment overhaul"],
      href: "/scrub-cleaning",
      cta: "Restore Your Pool",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">Our Pool Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to deep cleaning, we bring military precision to every pool we service. Choose the
            service that fits your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                    <Link href={service.href} className="flex items-center justify-center">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">Not sure which service you need? We're here to help.</p>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
