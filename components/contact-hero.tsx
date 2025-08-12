import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Pool Service Quote
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to experience crystal clear pools with veteran-strong service? Contact Sparks Pool Services today for
            your personalized quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">(727) 234-4023</p>
                <p className="text-sm text-gray-600">Call or Text</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">sparkspoolservices@gmail.com</p>
                <p className="text-sm text-gray-600">Email Us</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Local Service</p>
                <p className="text-sm text-gray-600">Your Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
