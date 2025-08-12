import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Colonel (Ret.) Michael Johnson",
    branch: "U.S. Army",
    location: "Fort Worth, TX",
    text: "David brings the same level of professionalism and attention to detail to pool service that I remember from our military days. You can trust him completely.",
    rating: 5,
    image: "/retired-army-colonel-headshot.png",
  },
  {
    name: "Sarah Martinez",
    branch: "Military Spouse",
    location: "Arlington, TX",
    text: "As a military family, we appreciate David's reliability and integrity. He understands our lifestyle and always accommodates our deployment schedules.",
    rating: 5,
    image: "/placeholder-a4d90.png",
  },
  {
    name: "Sergeant First Class Tony Rodriguez",
    branch: "U.S. Army Active Duty",
    location: "Killeen, TX",
    text: "David's military discount and flexible scheduling make it possible for us to maintain our pool even with my unpredictable duty schedule. Outstanding service!",
    rating: 5,
    image: "/army-sergeant-headshot-uniform.png",
  },
]

export function VeteranTestimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Trusted by Military Families</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              See what our military community has to say about our service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-cyan-200 absolute -top-2 -left-2" />
                    <p className="text-slate-600 leading-relaxed pl-6">{testimonial.text}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.branch}</div>
                      <div className="text-sm text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
