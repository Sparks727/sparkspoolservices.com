import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Droplets, Filter, Wrench, TestTube, Leaf } from "lucide-react"

export function ResidentialServices() {
  const services = [
    {
      icon: Droplets,
      title: "Water Testing & Chemical Balancing",
      description:
        "Professional water analysis and precise chemical adjustments to keep your pool safe and comfortable.",
      features: [
        "pH and chlorine testing",
        "Alkalinity balancing",
        "Calcium hardness adjustment",
        "Sanitizer optimization",
      ],
    },
    {
      icon: Filter,
      title: "Skimming & Vacuuming",
      description: "Thorough cleaning of pool surfaces and debris removal to maintain crystal-clear water.",
      features: ["Surface skimming", "Bottom vacuuming", "Brush walls and steps", "Tile line cleaning"],
    },
    {
      icon: Wrench,
      title: "Equipment Inspection",
      description: "Regular maintenance checks to ensure your pool equipment runs efficiently and lasts longer.",
      features: ["Filter cleaning/replacement", "Pump inspection", "Heater maintenance", "Automation system check"],
    },
    {
      icon: TestTube,
      title: "Algae Prevention & Treatment",
      description: "Proactive measures to prevent algae growth and quick treatment if issues arise.",
      features: [
        "Algae prevention protocols",
        "Early detection systems",
        "Targeted treatments",
        "Water circulation optimization",
      ],
    },
    {
      icon: Leaf,
      title: "Seasonal Services",
      description: "Specialized care for pool opening, closing, and seasonal maintenance needs.",
      features: ["Spring pool opening", "Winterization service", "Equipment startup", "Seasonal chemical adjustment"],
    },
    {
      icon: CheckCircle,
      title: "Emergency Response",
      description: "Quick response for urgent pool issues to get your family back to swimming safely.",
      features: [
        "24/7 emergency hotline",
        "Rapid problem diagnosis",
        "Same-day service available",
        "Equipment repair coordination",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Complete Residential Pool Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every service is performed with military precision and attention to detail. We treat your pool like it's our
            own family's.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
