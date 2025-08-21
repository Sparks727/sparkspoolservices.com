import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Building2 } from "lucide-react"
import Link from "next/link"

export function CommercialPricing() {
  const plans = [
    {
      name: "One Time Clean",
      description: "Perfect for special events or immediate pool issues",
      price: "$200",
      period: "one time",
      popular: false,
      features: [
        "Complete water testing & balancing",
        "Skimming & vacuuming",
        "Filter cleaning",
        "Equipment inspection",
        "Chemical adjustments included",
        "Detailed service report",
        "Emergency response available",
      ],
    },
    {
      name: "Bi-Weekly Clean",
      description: "Twice a month cleaning service",
      price: "$300",
      period: "per month",
      popular: true,
      features: [
        "Complete water testing & balancing",
        "Skimming & vacuuming",
        "Filter cleaning",
        "Equipment inspection",
        "Chemical adjustments included",
        "Detailed service report",
        "Extended equipment checks",
        "Algae prevention treatment",
        "Tile line cleaning",
        "Priority emergency response",
        "Compliance reporting",
      ],
    },
    {
      name: "Monthly Service",
      description: "Weekly cleanings throughout the month",
      price: "$500",
      period: "per month",
      popular: false,
      features: [
        "Comprehensive water analysis",
        "Deep cleaning service",
        "Full equipment inspection",
        "Chemical rebalancing",
        "Minor repair identification",
        "Maintenance recommendations",
        "24/7 emergency support",
        "Extended equipment checks",
        "Seasonal maintenance reminders",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Commercial Pool Service Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Flexible service options designed for commercial facilities. Choose the frequency that matches your operational needs and budget.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "ring-2 ring-primary shadow-xl" : "shadow-md"} border-0`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">Request Proposal</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="font-serif text-2xl text-gray-900 mb-4">Need a Custom Commercial Plan?</h3>
          <p className="text-muted-foreground mb-6">
            Every commercial facility is unique. We'll create a maintenance plan that fits your specific operational needs and budget.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
