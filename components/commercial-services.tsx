import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Building, Users, FileText, Wrench, Phone, Calendar } from "lucide-react"

export function CommercialServices() {
  const services = [
    {
      icon: Building,
      title: "Multi-Property Management",
      description: "Comprehensive pool maintenance across multiple locations with centralized reporting and billing.",
      features: [
        "Coordinated service schedules",
        "Centralized billing system",
        "Multi-location reporting",
        "Standardized service protocols",
      ],
    },
    {
      icon: Users,
      title: "High-Volume Pool Care",
      description: "Specialized maintenance for pools with heavy usage, ensuring optimal water quality at all times.",
      features: [
        "Frequent water testing",
        "Heavy-duty filtration maintenance",
        "Increased chemical monitoring",
        "Usage-based service adjustments",
      ],
    },
    {
      icon: FileText,
      title: "Compliance & Documentation",
      description: "Detailed reporting and documentation to meet health department and insurance requirements.",
      features: [
        "Health department compliance",
        "Detailed service logs",
        "Chemical usage reports",
        "Safety inspection records",
      ],
    },
    {
      icon: Wrench,
      title: "Equipment Servicing",
      description: "Professional maintenance and repair of commercial-grade pool equipment and systems.",
      features: [
        "Commercial pump servicing",
        "Filtration system maintenance",
        "Heater and chiller service",
        "Automation system support",
      ],
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description: "24/7 emergency support to address urgent issues that could impact your business operations.",
      features: [
        "24/7 emergency hotline",
        "Rapid response guarantee",
        "Equipment failure support",
        "Water quality emergencies",
      ],
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Service schedules designed around your business hours and guest usage patterns.",
      features: [
        "Off-peak service times",
        "Holiday scheduling",
        "Event-based adjustments",
        "Seasonal service modifications",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Enterprise-Grade Pool Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From hotels to apartment complexes, we provide the reliability and professionalism your business demands.
            Every service is backed by military precision and commercial expertise.
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
