"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+1 ", country: "CA", flag: "🇨🇦" },
  { code: "+1-242", country: "BS", flag: "🇧🇸" }, // Bahamas
  { code: "+1-246", country: "BB", flag: "🇧🇧" }, // Barbados
  { code: "+1-264", country: "AI", flag: "🇦🇮" }, // Anguilla
  { code: "+1-268", country: "AG", flag: "🇦🇬" }, // Antigua and Barbuda
  { code: "+1-284", country: "VG", flag: "🇻🇬" }, // British Virgin Islands
  { code: "+1-340", country: "VI", flag: "🇻🇮" }, // US Virgin Islands
  { code: "+1-345", country: "KY", flag: "🇰🇾" }, // Cayman Islands
  { code: "+1-441", country: "BM", flag: "🇧🇲" }, // Bermuda
  { code: "+1-473", country: "GD", flag: "🇬🇩" }, // Grenada
  { code: "+1-649", country: "TC", flag: "🇹🇨" }, // Turks and Caicos Islands
  { code: "+1-664", country: "MS", flag: "🇲🇸" }, // Montserrat
  { code: "+1-670", country: "MP", flag: "🇲🇵" }, // Northern Mariana Islands
  { code: "+1-671", country: "GU", flag: "🇬🇺" }, // Guam
  { code: "+1-684", country: "AS", flag: "🇦🇸" }, // American Samoa
  { code: "+1-721", country: "SX", flag: "🇸🇽" }, // Sint Maarten
  { code: "+1-758", country: "LC", flag: "🇱🇨" }, // Saint Lucia
  { code: "+1-767", country: "DM", flag: "🇩🇲" }, // Dominica
  { code: "+1-784", country: "VC", flag: "🇻🇨" }, // Saint Vincent and the Grenadines
  { code: "+1-809", country: "DO", flag: "🇩🇴" }, // Dominican Republic
  { code: "+1-868", country: "TT", flag: "🇹🇹" }, // Trinidad and Tobago
  { code: "+1-869", country: "KN", flag: "🇰🇳" }, // Saint Kitts and Nevis
  { code: "+1-876", country: "JM", flag: "🇯🇲" }, // Jamaica
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+7", country: "RU", flag: "🇷🇺" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+20", country: "EG", flag: "🇪🇬" },
  { code: "+234", country: "NG", flag: "🇳🇬" },
  { code: "+254", country: "KE", flag: "🇰🇪" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
  { code: "+60", country: "MY", flag: "🇲🇾" },
  { code: "+66", country: "TH", flag: "🇹🇭" },
  { code: "+84", country: "VN", flag: "🇻🇳" },
  { code: "+62", country: "ID", flag: "🇮🇩" },
  { code: "+63", country: "PH", flag: "🇵🇭" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+94", country: "LK", flag: "🇱🇰" },
  { code: "+977", country: "NP", flag: "🇳🇵" },
  { code: "+90", country: "TR", flag: "🇹🇷" },
  { code: "+98", country: "IR", flag: "🇮🇷" },
  { code: "+972", country: "IL", flag: "🇮🇱" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+32", country: "BE", flag: "🇧🇪" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+43", country: "AT", flag: "🇦🇹" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+47", country: "NO", flag: "🇳🇴" },
  { code: "+45", country: "DK", flag: "🇩🇰" },
  { code: "+358", country: "FI", flag: "🇫🇮" },
  { code: "+48", country: "PL", flag: "🇵🇱" },
  { code: "+351", country: "PT", flag: "🇵🇹" },
  { code: "+30", country: "GR", flag: "🇬🇷" },
  { code: "+420", country: "CZ", flag: "🇨🇿" },
  { code: "+36", country: "HU", flag: "🇭🇺" },
  { code: "+40", country: "RO", flag: "🇷🇴" },
  { code: "+359", country: "BG", flag: "🇧🇬" },
  { code: "+385", country: "HR", flag: "🇭🇷" },
  { code: "+381", country: "RS", flag: "🇷🇸" },
  { code: "+54", country: "AR", flag: "🇦🇷" },
  { code: "+56", country: "CL", flag: "🇨🇱" },
  { code: "+57", country: "CO", flag: "🇨🇴" },
  { code: "+51", country: "PE", flag: "🇵🇪" },
  { code: "+58", country: "VE", flag: "🇻🇪" },
  { code: "+593", country: "EC", flag: "🇪🇨" },
  { code: "+502", country: "GT", flag: "🇬🇹" },
  { code: "+506", country: "CR", flag: "🇨🇷" },
  { code: "+507", country: "PA", flag: "🇵🇦" },
  { code: "+93", country: "AF", flag: "🇦🇫" }, // Afghanistan
  { code: "+355", country: "AL", flag: "🇦🇱" }, // Albania
  { code: "+213", country: "DZ", flag: "🇩🇿" }, // Algeria
  { code: "+376", country: "AD", flag: "🇦🇩" }, // Andorra
  { code: "+244", country: "AO", flag: "🇦🇴" }, // Angola
  { code: "+591", country: "BO", flag: "🇧🇴" }, // Bolivia
  { code: "+387", country: "BA", flag: "🇧🇦" }, // Bosnia and Herzegovina
  { code: "+267", country: "BW", flag: "🇧🇼" }, // Botswana
  { code: "+353", country: "IE", flag: "🇮🇪" }, // Ireland
  { code: "+354", country: "IS", flag: "🇮🇸" }, // Iceland
  { code: "+370", country: "LT", flag: "🇱🇹" }, // Lithuania
  { code: "+371", country: "LV", flag: "🇱🇻" }, // Latvia
  { code: "+380", country: "UA", flag: "🇺🇦" }, // Ukraine
  { code: "+598", country: "UY", flag: "🇺🇾" }, // Uruguay
  { code: "+998", country: "UZ", flag: "🇺🇿" }, // Uzbekistan
  { code: "+212", country: "MA", flag: "🇲🇦" }, // Morocco
  { code: "+233", country: "GH", flag: "🇬🇭" }, // Ghana
  { code: "+251", country: "ET", flag: "🇪🇹" }, // Ethiopia
  { code: "+256", country: "UG", flag: "🇺🇬" }, // Uganda
  { code: "+263", country: "ZW", flag: "🇿🇼" }, // Zimbabwe
];
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    message: "",
    productInterest: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          country: "",
          countryCode: "+91",
          phone: "",
          subject: "",
          message: "",
          productInterest: "",
        })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setShowError(true)
        setErrorMessage(result.message || 'Failed to send inquiry. Please try again.')
        setTimeout(() => setShowError(false), 5000)
      }
    } catch (error) {
      setShowError(true)
      setErrorMessage('Failed to send inquiry. Please check your connection and try again.')
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
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
                    <p className="text-gray-600 text-xs sm:text-sm">+91 87664 18291</p>
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
                ) : showError ? (
                  <div className="text-center p-8 bg-red-50 rounded-lg mb-6">
                    <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Error Sending Inquiry</h3>
                    <p className="text-gray-600 mt-2">{errorMessage}</p>
                  </div>
                ) : null}
                
                {!showSuccess && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          required 
                          value={formData.name} 
                          onChange={(e) => handleChange("name", e.target.value)} 
                          placeholder="Your full name" 
                          className="mt-1" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          value={formData.email} 
                          onChange={(e) => handleChange("email", e.target.value)} 
                          placeholder="your.email@company.com" 
                          className="mt-1" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input 
                          id="company" 
                          type="text" 
                          value={formData.company} 
                          onChange={(e) => handleChange("company", e.target.value)} 
                          placeholder="Your company name" 
                          className="mt-1" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input 
                          id="country" 
                          type="text" 
                          required 
                          value={formData.country} 
                          onChange={(e) => handleChange("country", e.target.value)} 
                          placeholder="Your country" 
                          className="mt-1" 
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex mt-1 space-x-2">
                        <Select value={formData.countryCode} onValueChange={(value) => handleChange("countryCode", value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((item) => (
                              <SelectItem key={`${item.code}-${item.country}`} value={item.code}>
                                <span className="flex items-center space-x-2">
                                  <span>{item.flag}</span>
                                  <span>{item.code}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input 
                          id="phone" 
                          type="tel" 
                          required 
                          value={formData.phone} 
                          onChange={(e) => handleChange("phone", e.target.value)} 
                          placeholder="Your phone number" 
                          className="flex-1" 
                        />
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
                      <Input 
                        id="subject" 
                        type="text" 
                        required 
                        value={formData.subject} 
                        onChange={(e) => handleChange("subject", e.target.value)} 
                        placeholder="Brief subject of your inquiry" 
                        className="mt-1" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        rows={6} 
                        value={formData.message} 
                        onChange={(e) => handleChange("message", e.target.value)} 
                        placeholder="Please provide details about your requirements, quantities, destination port, and any specific questions..." 
                        className="mt-1" 
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="h-4 w-4 mr-2" /> 
                          Send Inquiry
                        </>
                      )}
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