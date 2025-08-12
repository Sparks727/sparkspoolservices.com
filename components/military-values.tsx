import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users, Target, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We do what's right, even when no one is watching. Our word is our bond, and we stand behind every service call.",
    militaryConnection: "Army Value: Integrity - Do what's right, legally and morally.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail, from chemical balance to equipment maintenance.",
    militaryConnection: "Army Value: Excellence - Be all you can be in everything you do.",
  },
  {
    icon: Users,
    title: "Selfless Service",
    description: "Your pool's health comes before our profit. We recommend only what you need, when you need it.",
    militaryConnection: "Army Value: Selfless Service - Put the welfare of others before your own.",
  },
  {
    icon: Clock,
    title: "Duty",
    description: "We show up on time, every time. Rain or shine, we fulfill our commitment to your pool.",
    militaryConnection: "Army Value: Duty - Fulfill your obligations and responsibilities.",
  },
  {
    icon: Target,
    title: "Mission Focus",
    description: "Every pool service is a mission. We don't stop until the objective is complete and you're satisfied.",
    militaryConnection: "Military Principle: Mission accomplishment through attention to detail.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "We take full responsibility for our work and stand ready to make things right if they go wrong.",
    militaryConnection: "Military Principle: Leaders are accountable for their actions and decisions.",
  },
]

export function MilitaryValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Military Values, Civilian Service</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              The same values that guided David's military service now drive our commitment to exceptional pool care.
              These aren't just words - they're the principles we live by every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-cyan-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900">{value.title}</h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4">{value.description}</p>

                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-sm text-slate-500 italic">{value.militaryConnection}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center text-white">
            <h3 className="font-serif text-3xl font-bold mb-4">Supporting Our Veterans</h3>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
              As a veteran-owned business, we're proud to offer special discounts to active military, veterans, and
              their families. It's our way of giving back to those who've served.
            </p>
            <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold">
              <Shield className="w-5 h-5" />
              15% Military Discount Available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
