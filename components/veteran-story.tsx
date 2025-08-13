import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Target } from "lucide-react"

export function VeteranStory() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Our Founder's Journey
            </Badge>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">From Service to Service</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              David Sparks' journey from defending our nation to serving our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-slate-900">Military Foundation</h3>
              <p className="text-slate-600 leading-relaxed">
                David Sparks proudly served in the United States Army where he developed the core
                values that define our business today: integrity, excellence, and selfless service.
              </p>
              <p className="text-slate-600 leading-relaxed">
                His military experience taught him the importance of attention to detail, following protocols, and never
                leaving a job half-finished. These principles became the foundation of Sparks Pool Services.
              </p>

              <div className="grid grid-cols-2 gap-4">

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span>Leadership Roles</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Target className="w-5 h-5 text-cyan-600" />
                  <span>Mission-Focused</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/army-soldier-professional-photo.png"
                alt="David Sparks in Military Uniform"
                className="w-full rounded-lg shadow-lg"
              />

            </div>
          </div>

          <Card className="bg-white border-l-4 border-l-cyan-600">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3">Transition to Civilian Service</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    After completing his military service with an honorable discharge, David wanted to continue serving
                    his community in a meaningful way. He saw an opportunity to bring military-grade reliability and
                    professionalism to the pool service industry.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    "In the Army, we had a saying: 'Mission first, people always.' That's exactly how we approach every
                    pool service call. The mission is to keep your pool perfect, but our people - our customers - always
                    come first."
                  </p>
                  <div className="mt-4 text-sm text-slate-500 italic">- David Sparks, Founder & Army Veteran</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
