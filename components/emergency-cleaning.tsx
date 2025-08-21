import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function EmergencyCleaning() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Phone className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h2 className="font-serif text-3xl font-bold mb-6">
          Emergency Cleaning
        </h2>
        
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Need immediate pool cleaning? We provide emergency pool services for urgent situations. 
          Don't let pool problems ruin your day - call us today for fast, reliable service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center space-x-2 text-white/80">
            <Clock className="h-5 w-5" />
            <span>24/7 Emergency Response</span>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <Shield className="h-5 w-5" />
            <span>Licensed & Insured</span>
          </div>
        </div>
        
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
        >
          <Link href="tel:727-234-4023">Call Today</Link>
        </Button>
      </div>
    </section>
  )
}
