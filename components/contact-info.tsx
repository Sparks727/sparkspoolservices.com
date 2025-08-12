import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Shield, Award, CheckCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-gray-900 flex items-center">
            <Shield className="h-6 w-6 text-primary mr-2" />
            Why Choose Sparks Pool Services?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Veteran-Owned Excellence</h4>
              <p className="text-gray-600 text-sm">Military precision and integrity in every service</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
              <p className="text-gray-600 text-sm">Fully certified with comprehensive coverage</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Reliable Service</h4>
              <p className="text-gray-600 text-sm">Consistent, on-time service you can count on</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-gray-900">Service Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            We proudly serve residential and commercial clients throughout Pinellas County.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Residential pool cleaning and maintenance</li>
            <li>• Commercial facility pool services</li>
            <li>• Emergency pool cleaning and repairs</li>
            <li>• Seasonal pool opening and closing</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-gray-900">Business Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday:</span>
              <span className="font-medium">7:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday:</span>
              <span className="font-medium">8:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday:</span>
              <span className="font-medium">Emergency Only</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">* Emergency services available 24/7 for existing customers</p>
        </CardContent>
      </Card>
    </div>
  )
}
