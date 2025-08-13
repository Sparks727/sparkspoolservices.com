import { Brush, Droplets, Sparkles, TestTube } from "lucide-react"

export function ScrubCleaningProcess() {
  const steps = [
    {
      icon: TestTube,
      title: "Pool Assessment",
      description:
        "Complete water and surface analysis to determine the extent of cleaning needed and chemical requirements.",
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Shock treatment and chemical balancing to kill algae and bacteria before physical cleaning begins.",
    },
    {
      icon: Brush,
      title: "Professional Scrub Gear & Scuba Cleaning",
      description:
        "Our technicians don professional scrub gear and scuba equipment to access every surface of your pool. This hands-on approach ensures we reach areas that automated systems miss, providing the most thorough cleaning possible.",
    },
    {
      icon: Sparkles,
      title: "Filtration & Polish",
      description: "Complete filtration system cleaning and final water polishing for crystal clear results.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Detailed 4-Step Scrub Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans">
            The most comprehensive pool cleaning method available. Our technicians use professional scrub gear and scuba equipment to ensure every inch of your pool receives attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold font-sans">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 font-sans leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2 font-serif">24-48hrs</div>
              <div className="text-slate-600 font-sans">Complete Transformation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2 font-serif">100%</div>
              <div className="text-slate-600 font-sans">Surface Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2 font-serif">30-Day</div>
              <div className="text-slate-600 font-sans">Service Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
