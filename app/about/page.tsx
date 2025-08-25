import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Globe, Award, Leaf, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Leading Agricultural Export Company",
  description:
    "Learn about PARTHAJ ORCHARD Pvt. Ltd., a leading exporter of premium agricultural products from India. Our mission, values, and commitment to quality.",
  keywords: ["about us", "agricultural export", "company history", "mission", "values", "quality commitment"],
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest quality standards through rigorous testing and certification processes.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to sustainable farming practices and environmental responsibility in all our operations.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term relationships with our clients through exceptional service and reliability.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with efficient logistics and international trade expertise.",
    },
  ]

  const achievements = [
    { number: "25+", label: "Countries Served" },
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Product Varieties" },
  ]

  const certifications = [
    "FSSAI Certified",
    "APEDA Registered",
    "ISO 22000:2018",
    "HACCP Certified",
    "Organic Certified",
    "Fair Trade Certified",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About PARTHAJ ORCHARD Pvt. Ltd.</h1>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                For over 15 years, PARTHAJ ORCHARD Pvt. Ltd. has been at the forefront of agricultural exports from India,
                connecting premium quality products with global markets. We specialize in millets, spices, grains, and
                organic produce, ensuring that every shipment meets the highest international standards.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner for
                importers worldwide, serving over 25 countries across six continents.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="PARTHAJ ORCHARD Pvt. Ltd. Facility"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-green-700 leading-relaxed text-sm sm:text-base">
                  To bridge the gap between Indian farmers and global markets by providing premium quality agricultural
                  products while ensuring fair trade practices, sustainable farming, and exceptional customer service.
                  We strive to be the most trusted name in agricultural exports.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                  To become the leading global platform for premium Indian agricultural products, promoting sustainable
                  agriculture, supporting farming communities, and contributing to food security worldwide while
                  maintaining the highest standards of quality and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These fundamental principles guide every aspect of our business and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Quality Control Process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 2009 by a team of agricultural experts and international trade professionals, AgriExport
                  Pro began with a simple vision: to showcase the finest agricultural products that India has to offer
                  to the global market.
                </p>
                <p>
                  Starting with just a handful of products and a small team, we have grown into one of India's most
                  trusted agricultural export companies. Our success is built on strong relationships with farmers,
                  rigorous quality control, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we work directly with over 200 farmers and cooperatives across India, ensuring fair prices for
                  producers while delivering exceptional quality to our international clients. Our state-of-the-art
                  processing and packaging facilities ensure that every product meets international food safety
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Certifications & Compliance</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We maintain the highest standards of quality and compliance through various national and international
              certifications.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 p-3 sm:p-4 rounded-lg mb-2">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto" />
                </div>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  {cert}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Quality Commitment</h2>
            <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Every product that leaves our facility undergoes rigorous quality checks to ensure it meets international
              standards and exceeds customer expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Source Verification</h3>
              <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                Direct partnerships with verified farmers and cooperatives ensuring traceability from farm to export.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                Comprehensive testing for pesticide residues, heavy metals, and microbiological contamination.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">International Standards</h3>
              <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                Compliance with FDA, EU, and other international food safety and quality regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
