import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function ScrubCleaningPricing() {
  const packages = [
    {
      name: "One Time Clean",
      price: "$300",
      description: "Perfect for immediate pool issues or special events",
      features: [
        "Complete pool assessment",
        "Manual surface scrubbing",
        "Basic chemical treatment",
        "Debris removal",
        "Water testing & balancing",
        "1-week follow-up",
      ],
      popular: false,
    },
    {
      name: "Bi-Weekly Clean",
      price: "$400",
      description: "Twice a month cleaning service",
      features: [
        "Complete pool assessment",
        "Manual surface scrubbing",
        "Basic chemical treatment",
        "Debris removal",
        "Water testing & balancing",
        "Intensive algae treatment",
        "Filter system cleaning",
        "Stain removal treatment",
        "Equipment inspection",
        "2-week follow-up",
        "30-day service guarantee",
      ],
      popular: true,
    },
    {
      name: "Monthly Service",
      price: "$600",
      description: "Weekly cleanings throughout the month",
      features: [
        "Complete pool assessment",
        "Manual surface scrubbing",
        "Basic chemical treatment",
        "Debris removal",
        "Water testing & balancing",
        "Intensive algae treatment",
        "Filter system cleaning",
        "Stain removal treatment",
        "Equipment inspection",
        "Multiple treatment sessions",
        "Acid washing (if needed)",
        "Equipment repairs/replacement",
        "Complete system overhaul",
        "Monthly maintenance plan",
        "60-day service guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Scrub Cleaning Service Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans">
            Choose the service frequency that works best for your pool's needs. All services include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${pkg.popular ? "ring-2 ring-cyan-600 scale-105" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 font-sans">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2 font-serif">{pkg.price}</div>
                <p className="text-slate-600 font-sans">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 font-sans ${
                  pkg.popular
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4 font-sans">
            Not sure which package you need? We offer free pool assessments to recommend the right service level.
          </p>
          <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-sans bg-transparent">
            Schedule Free Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}
