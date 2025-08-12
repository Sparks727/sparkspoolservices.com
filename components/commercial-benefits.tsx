import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Clock, Users, Award, Headphones } from "lucide-react"

export function CommercialBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Operating Costs",
      description: "Preventive maintenance and efficient chemical management reduce long-term expenses.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and liability protection for your business and guests.",
    },
    {
      icon: Clock,
      title: "Minimize Downtime",
      description: "Proactive maintenance prevents costly closures and keeps your facilities operational.",
    },
    {
      icon: Users,
      title: "Guest Satisfaction",
      description: "Pristine pool conditions enhance guest experience and encourage positive reviews.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Veteran-owned business with military discipline and commercial pool specialization.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Direct access to your service team and management for immediate assistance.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">Why Businesses Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges of commercial pool management. Our services are designed to protect your
            investment and enhance your business operations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="font-serif text-3xl text-gray-900 mb-4">Ready to Partner With Us?</h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Sparks Pool Services for their commercial pool maintenance
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Request Proposal
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
