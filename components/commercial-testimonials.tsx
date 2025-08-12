import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Building } from "lucide-react"

export function CommercialTestimonials() {
  const testimonials = [
    {
      name: "David Martinez",
      title: "Property Manager",
      company: "Riverside Resort & Spa",
      rating: 5,
      text: "Sparks Pool Services has been maintaining our resort pools for three years. Their reliability and attention to detail is unmatched. Our guests consistently compliment the pool conditions.",
      image: "/professional-man-headshot.png",
    },
    {
      name: "Lisa Thompson",
      title: "Facilities Director",
      company: "Sunset Apartment Complex",
      rating: 5,
      text: "Managing 4 pools across our property was a nightmare until we found Sparks Pool Services. Their coordinated service and detailed reporting makes my job so much easier.",
      image: "/professional-woman-headshot.png",
    },
    {
      name: "Robert Chen",
      title: "General Manager",
      company: "Corona Community Center",
      rating: 5,
      text: "As a veteran-owned facility, we appreciate working with another veteran-owned business. Their military precision shows in every aspect of their service.",
      image: "/professional-asian-man-headshot.png",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what property managers, facility directors, and business owners are saying about our commercial pool
            services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-primary flex items-center">
                      <Building className="h-3 w-3 mr-1" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the same level of professional service?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Get Commercial Quote
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
