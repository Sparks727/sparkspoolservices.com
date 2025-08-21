import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Sparks Pool Services | Get Free Quote Pinellas County FL",
  description: "Contact Sparks Pool Services for professional pool cleaning in Pinellas County, Florida. Get your free quote today! Call (727) 234-4023 or fill out our contact form.",
  keywords: "contact pool cleaning, pool service quote, pool cleaning estimate, pool maintenance contact, sparks pool services contact",
  openGraph: {
    title: "Contact Sparks Pool Services | Get Free Quote Pinellas County FL",
    description: "Contact Sparks Pool Services for professional pool cleaning in Pinellas County, Florida. Get your free quote today!",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content">
        <ContactHero />
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
