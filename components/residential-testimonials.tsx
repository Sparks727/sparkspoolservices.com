import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function ResidentialTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Riverside, CA",
      rating: 5,
      text: "Sparks Pool Services has been taking care of our pool for over two years. Their attention to detail is incredible, and our pool has never looked better. The kids can swim safely every day!",
      image: "/happy-middle-aged-woman-headshot.png",
    },
    {
      name: "Mike Rodriguez",
      location: "Corona, CA",
      rating: 5,
      text: "As a veteran myself, I appreciate their military precision and reliability. They show up when they say they will and do exactly what they promise. Highly recommend!",
      image: "/smiling-middle-aged-man-headshot.png",
    },
    {
      name: "Jennifer Chen",
      location: "Norco, CA",
      rating: 5,
      text: "We switched to Sparks Pool Services after bad experiences with other companies. The difference is night and day. Professional, thorough, and our pool chemistry is always perfect.",
      image: "/happy-asian-woman-headshot.png",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">What Families Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our residential customers have to say about our service.
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
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to join our family of satisfied customers?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="tel:(555) 123-4567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
