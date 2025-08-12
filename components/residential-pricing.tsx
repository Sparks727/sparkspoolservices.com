import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export function ResidentialPricing() {
  const plans = [
    {
      name: "Weekly Service",
      description: "Perfect for families who use their pool frequently",
      price: "$120",
      period: "per visit",
      popular: false,
      features: [
        "Complete water testing & balancing",
        "Skimming & vacuuming",
        "Filter cleaning",
        "Equipment inspection",
        "Chemical adjustments included",
        "Detailed service report",
      ],
    },
    {
      name: "Bi-Weekly Service",
      description: "Great balance of maintenance and value",
      price: "$140",
      period: "per visit",
      popular: true,
      features: [
        "Everything in Weekly Service",
        "Extended equipment checks",
        "Algae prevention treatment",
        "Tile line cleaning",
        "Priority emergency response",
        "Seasonal maintenance reminders",
      ],
    },
    {
      name: "Monthly Service",
      description: "Basic maintenance for occasional pool users",
      price: "$180",
      period: "per visit",
      popular: false,
      features: [
        "Comprehensive water analysis",
        "Deep cleaning service",
        "Full equipment inspection",
        "Chemical rebalancing",
        "Minor repair identification",
        "Maintenance recommendations",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Transparent Pricing for Every Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No hidden fees, no surprises. Choose the service frequency that works best for your family's pool usage and
            budget.
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
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="font-serif text-2xl text-gray-900 mb-4">Need a Custom Plan?</h3>
          <p className="text-muted-foreground mb-6">
            Every pool is unique. We'll create a maintenance plan that fits your specific needs and budget.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
