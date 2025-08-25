"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    subject: "",
    message: "",
    productInterest: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your inquiry! We will get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      subject: "",
      message: "",
      productInterest: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your import journey? Get in touch with our export specialists for personalized assistance and
            competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Head Office</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      123 Export Plaza
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 22 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">info@agriexportpro.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Business Hours</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                      <br />
                      Saturday: 9:00 AM - 2:00 PM IST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Export Departments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <div>
                  <p className="font-medium text-xs sm:text-sm">Grains & Millets</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">grains@agriexportpro.com</p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm">Spices & Herbs</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">spices@agriexportpro.com</p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm">Organic Products</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">organic@agriexportpro.com</p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm">Quality Assurance</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">quality@agriexportpro.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm sm:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm sm:text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-sm sm:text-base">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-sm sm:text-base">
                        Country *
                      </Label>
                      <Input
                        id="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => handleChange("country", e.target.value)}
                        placeholder="Your country"
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="productInterest" className="text-sm sm:text-base">
                      Product Interest
                    </Label>
                    <Select
                      value={formData.productInterest}
                      onValueChange={(value) => handleChange("productInterest", value)}
                    >
                      <SelectTrigger className="mt-1 text-sm sm:text-base">
                        <SelectValue placeholder="Select product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grains">Grains & Rice</SelectItem>
                        <SelectItem value="millets">Millets</SelectItem>
                        <SelectItem value="spices">Spices & Herbs</SelectItem>
                        <SelectItem value="organic">Organic Products</SelectItem>
                        <SelectItem value="multiple">Multiple Categories</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm sm:text-base">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Brief subject of your inquiry"
                      className="mt-1 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please provide details about your requirements, quantities, destination country, and any specific questions you may have..."
                      className="mt-1 text-sm sm:text-base"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 sm:mt-16 bg-green-50 rounded-lg p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Us for Your Import Needs?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="font-bold text-sm sm:text-base">24h</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Quick Response</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We respond to all inquiries within 24 hours with detailed information and competitive quotes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="font-bold text-sm sm:text-base">✓</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Quality Guaranteed</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                All products come with quality certificates and meet international food safety standards.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-green-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="font-bold text-sm sm:text-base">🌍</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Global Shipping</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Reliable logistics network ensuring safe and timely delivery to your destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
