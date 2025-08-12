"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '79232413-c689-4c4c-8b77-32104355c108')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('service', formData.service || 'Not specified')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', `Pool Service Quote Request - ${formData.service || "General"}`)
      formDataToSend.append('from_name', 'Sparks Pool Services Website')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          })
          setSubmitStatus("idle")
        }, 3000)
      } else {
        console.error("Form submission error:", data)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-gray-900">Request Your Free Quote</CardTitle>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
        </p>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 font-semibold">Thank you! Your quote request has been sent successfully.</p>
            <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 hours with your personalized quote.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800">
              There was an error sending your request. Please try again or call us directly at (727) 234-4023.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(727) 234-4023"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
                              placeholder="your.email@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Pool Cleaning</option>
              <option value="commercial">Commercial Pool Services</option>
              <option value="scrub-cleaning">Deep Scrub Cleaning</option>
              <option value="maintenance">Regular Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your pool, any specific concerns, or questions you have..."
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Quote Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
