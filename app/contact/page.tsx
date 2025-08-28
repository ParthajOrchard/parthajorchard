"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

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
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setShowSuccess(true)
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

    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[rgb(249,250,251)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to source premium agricultural products from India? Get in touch with our export specialists for personalized assistance and competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Registered Office</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Kasliwal Classic Phase-1, Flat No. 11,
                      <br />
                      Tapdiyanagar, Aurangabad,
                      <br />
                      Maharashtra - 431001, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 99213 20091</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">parthajorchardpvtltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Business Hours</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Monday - Saturday: 10:00 AM - 7:00 PM IST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send us an Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="text-center p-8 bg-green-50 rounded-lg">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Inquiry Sent Successfully!</h3>
                    <p className="text-gray-600 mt-2">Thank you for your message. We will get back to you within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" type="text" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your full name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your.email@company.com" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" type="text" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Your company name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input id="country" type="text" required value={formData.country} onChange={(e) => handleChange("country", e.target.value)} placeholder="Your country" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="productInterest">Product Interest</Label>
                      <Select value={formData.productInterest} onValueChange={(value) => handleChange("productInterest", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fruits">Fruits</SelectItem>
                          <SelectItem value="grains">Grains (Rice, Wheat, etc.)</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="oilseeds">Oilseeds (Sunflower Seeds, Mustard Seeds, Peanuts, Soybean, etc)</SelectItem>
                          <SelectItem value="spices">Spices</SelectItem>
                          <SelectItem value="multiple">Multiple Categories</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" type="text" required value={formData.subject} onChange={(e) => handleChange("subject", e.target.value)} placeholder="Brief subject of your inquiry" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required rows={6} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Please provide details about your requirements, quantities, destination port, and any specific questions..." className="mt-1" />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Send Inquiry</>}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
