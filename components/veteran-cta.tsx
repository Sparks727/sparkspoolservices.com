import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function VeteranCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5" />
              Veteran-Owned & Operated
            </div>

            <h2 className="font-serif text-4xl font-bold mb-6">Ready to Serve Your Pool</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Experience the difference that military precision and integrity make. Contact us today for reliable,
              professional pool service you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Call for Service</h3>
                <p className="text-slate-300 mb-4">Speak directly with David</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  asChild
                >
                  <Link href="tel:727-234-4023">(727) 234-4023</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Email Quote</h3>
                <p className="text-slate-300 mb-4">Get a detailed estimate</p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  asChild
                >
                  <Link href="tel:727-234-4023">Call Us Today</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400">
            <MapPin className="w-5 h-5" />
            <span>Proudly serving the Pinellas County area</span>
          </div>
        </div>
      </div>
    </section>
  )
}
