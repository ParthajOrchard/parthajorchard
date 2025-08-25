import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Shield, Truck } from "lucide-react"
import productsData from "@/data/products.json"

export default function HomePage() {
  const featuredProducts = productsData.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Premium Agricultural Products for Global Markets
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100 leading-relaxed">
                Exporting the finest millets, spices, grains, and organic produce from India to the world. Quality
                assured, sustainably sourced, globally delivered.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 w-full sm:w-auto bg-transparent"
                >
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Premium Agricultural Products"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose PARTHAJ ORCHARD Pvt. Ltd.?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are committed to delivering the highest quality agricultural products with complete transparency and
              reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                All products are certified and tested to meet international quality standards including FSSAI, APEDA,
                and ISO certifications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Exporting to over 25 countries worldwide with established logistics networks and reliable shipping
                partners.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Reliable Logistics</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Efficient supply chain management ensuring timely delivery with proper packaging and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Products</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our most popular and premium agricultural products, carefully selected for their exceptional
              quality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={`/placeholder.svg?height=250&width=400&query=${product.name} ${product.category}`}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-green-600 text-xs sm:text-sm">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">{product.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <div className="text-xs sm:text-sm text-gray-500">Origin: {product.origin.region}</div>
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Import Journey?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our export specialists to discuss your requirements and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full sm:w-auto">
              <Link href="/contact">Get Quote Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 w-full sm:w-auto bg-transparent"
            >
              <Link href="/gstin">View Certifications</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
