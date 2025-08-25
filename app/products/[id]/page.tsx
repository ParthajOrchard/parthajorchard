import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Shield, Truck, Package, Award } from "lucide-react"
import { getProductById, products } from "@/lib/data"
import { generateProductMetadata } from "@/lib/seo"
import type { Metadata } from "next"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return generateProductMetadata(product)
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const structuredData = product.getStructuredData()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/products" className="text-gray-500 hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href={`/products?category=${product.category}`} className="text-gray-500 hover:text-gray-700">
                  {product.category}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
                <Image
                  src={product.getMainImage() || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={500}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                <Badge className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-green-600 text-xs sm:text-sm">
                  {product.category}
                </Badge>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {product.getGalleryImages().map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg bg-white shadow-sm">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Gallery Image ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-24 sm:h-32 object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                  <span className="font-medium">HSN Code:</span> {product.hsCode} |
                  <span className="font-medium"> Origin:</span> {product.origin.region}, {product.origin.country}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.summary}</p>
              </div>

              {/* Key Specifications */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Key Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between py-1">
                      <span className="text-xs sm:text-sm text-gray-600">Grade:</span>
                      <span className="font-medium text-xs sm:text-sm">{product.specs.grade}</span>
                    </div>
                    {product.getKeySpecs().map((spec, index) => (
                      <div key={index} className="flex justify-between py-1">
                        <span className="text-xs sm:text-sm text-gray-600">{spec.label}:</span>
                        <span className="font-medium text-xs sm:text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trade Information */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Trade Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">MOQ:</span>
                    <span className="font-medium">{product.trade.moq}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Lead Time:</span>
                    <span className="font-medium">{product.trade.leadTime}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Terms:</span>
                    <span className="font-medium">{product.trade.incoterms.join(", ")}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-green-600">{product.getDisplayPrice()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Packaging & Logistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Packaging & Logistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-gray-600 text-sm font-medium">Packaging Options:</span>
                  <ul className="mt-1 text-sm text-gray-700">
                    {product.packaging.options.map((option, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">20ft Container:</span>
                    <p className="font-medium">{product.packaging.containerLoadability["20ft"]} MT</p>
                  </div>
                  <div>
                    <span className="text-gray-600">40ft Container:</span>
                    <p className="font-medium">{product.packaging.containerLoadability["40ft"]} MT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {product.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-xs sm:text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-3" />
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Shelf Life:</span>
                    <p className="font-medium">{product.shelfLife}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Storage:</span>
                    <p className="font-medium text-xs leading-relaxed">{product.storage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance & Quality */}
            <Card className="lg:col-span-2 xl:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Compliance & Quality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-gray-600 text-sm font-medium">Market Compliance:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.specs.compliance.marketMRLs.map((market, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">GMO Status:</span>
                    <span className="font-medium text-green-600">{product.specs.compliance.gmo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Allergens:</span>
                    <span className="font-medium">{product.specs.compliance.allergens}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          {product.notes && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 leading-relaxed">{product.notes}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}
