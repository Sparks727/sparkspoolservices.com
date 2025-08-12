import { Shield, Clock, Droplets, Award, Wrench, Heart } from "lucide-react"

export function ScrubCleaningBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Algae Elimination",
      description: "Remove all types of algae including stubborn black algae that regular cleaning can't handle.",
    },
    {
      icon: Droplets,
      title: "Surface Restoration",
      description: "Restore original pool surface appearance by removing stains, scale, and mineral deposits.",
    },
    {
      icon: Clock,
      title: "Time-Saving Solution",
      description: "Avoid months of DIY attempts - we'll have your pool swim-ready in 24-48 hours.",
    },
    {
      icon: Award,
      title: "Professional Equipment",
      description: "Industrial-grade brushes, pumps, and cleaning agents not available to consumers.",
    },
    {
      icon: Wrench,
      title: "Equipment Inspection",
      description: "Complete system check to identify and address any equipment issues during cleaning.",
    },
    {
      icon: Heart,
      title: "Health & Safety",
      description: "Eliminate harmful bacteria and create a safe swimming environment for your family.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Professional Scrub Cleaning?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans">
            Don't waste time and money on DIY solutions that don't work. Our professional scrub cleaning delivers
            guaranteed results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 font-sans leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Emergency Pool Recovery Available</h3>
          <p className="text-cyan-100 mb-6 font-sans">
            Pool turned green overnight? We offer same-day emergency scrub cleaning for urgent situations.
          </p>
          <a
            href="tel:727-234-4023"
            className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors font-sans"
          >
            Call for Emergency Service
          </a>
        </div>
      </div>
    </section>
  )
}
