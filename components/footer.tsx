import Link from "next/link"
import { Shield, Phone, Mail, MapPin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Sparks Pool Services Logo" 
                className="h-8 w-8 object-contain"
              />
              <div>
                <h3 className="font-serif font-bold text-xl">Sparks Pool Services</h3>
                <p className="text-sm text-gray-400">Veteran-Owned</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Veteran-owned pool service company delivering crystal clear pools with military precision and integrity.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Veteran-Owned & Operated</span>
            </div>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/residential" className="hover:text-primary transition-colors">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="hover:text-primary transition-colors">
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link href="/scrub-cleaning" className="hover:text-primary transition-colors">
                  Deep Scrub Cleaning
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-primary transition-colors">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(727) 234-4023</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>sparkspoolservices1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Serving Pinellas County</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Business Hours:</p>
              <p className="text-sm">Mon-Fri: 7AM-6PM</p>
              <p className="text-sm">Sat: 8AM-4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© 2025 Sparks Pool Services. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Veteran-Owned Business</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Created by{" "}
              <a
                href="https://alex-sparks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                alex-sparks.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
