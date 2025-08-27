import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, Award, Leaf, Shield } from "lucide-react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - PARTHAJ ORCHARD Pvt. Ltd.",
  description:
    "Learn about PARTHAJ ORCHARD Pvt. Ltd., an emerging exporter of premium agricultural products from India. Discover our mission, values, and commitment to quality.",
  keywords: ["about us", "agricultural export", "parthaj orchard", "mission", "values", "quality commitment", "indian exports"],
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We are committed to the highest quality standards, ensuring every product meets rigorous international benchmarks.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We champion sustainable farming practices to ensure environmental responsibility and long-term agricultural health.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our goal is to build lasting relationships with our clients through exceptional service, reliability, and transparency.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Leveraging our expertise in international trade, we efficiently connect Indian farms to markets worldwide.",
    },
  ]

  const achievements = [
    { number: "10+", label: "Product Categories" },
    { number: "2024", label: "Year Founded" },
    { number: "100%", label: "Compliance Focus" },
    { number: "Global", label: "Market Ambition" },
  ]

  const certifications = [
    "GST Registered",
    "APEDA Registered",
    "Importer-Exporter Code (IEC)",
    "Certificate of Incorporation",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About PARTHAJ ORCHARD Pvt. Ltd.</h1>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                PARTHAJ ORCHARD Pvt. Ltd. is a newly established agricultural export company from India, founded in 2024. We are poised to connect global markets with premium quality products sourced directly from Indian farms.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our expertise spans a wide range of products including Fruits & Vegetables, Cereals, Honey, Dairy Products, and Cashews. Our commitment to quality, sustainability, and customer satisfaction positions us to become a trusted partner for importers worldwide.
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
                  src="/logo.png"
                  alt="PARTHAJ ORCHARD Pvt. Ltd. Operations"
                  width="600"
                  height="500"
                  className={"rounded-lg shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover "}
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-green-700 leading-relaxed text-sm sm:text-base">
                  To bridge the gap between Indian farmers and global markets by providing premium quality agricultural products, while ensuring fair practices, sustainability, and exceptional customer service.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                  To become a leading global platform for premium Indian agricultural products, promoting sustainable agriculture and supporting farming communities while upholding the highest standards of quality and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-2">
              <Image
                src="/logo.png"
                alt="Quality Control Process"
                width="500"
                height="400"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 2024 by directors Rajendra Manchu Jadhav and Parth Rajendra Jadhav, PARTHAJ ORCHARD Pvt. Ltd. was born from a vision to showcase the finest agricultural products of India to the world.
                </p>
                <p>
                  Though young, our company is built on a strong foundation of expertise in agriculture and international trade. We are dedicated to establishing robust relationships with farmers to ensure quality control from the ground up and deliver on our promise of excellence to every client.
                </p>
                <p>
                  Our journey has just begun, and we are excited to grow into one of India&apos;s most trusted agricultural export companies, driven by our commitment to quality, integrity, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Certifications & Compliance</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We operate with full transparency and are compliant with all necessary national regulations for export.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm sm:text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
          <div className="text-center mt-8">
             <a href="/certificates">
                <Button>View All Certificates</Button>
             </a>
          </div>
        </div>
      </section>
    </div>
  )
}
