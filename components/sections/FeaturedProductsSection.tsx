// components/sections/FeaturedProductsSection.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

interface Product {
    id: string
    name: string
    category: string
    description: string
    origin: {
        region: string
    }
    }

    interface FeaturedProductsSectionProps {
    products: Product[]
    }

    export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
    return (
        <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Featured Products
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our most popular and premium agricultural products, carefully selected for their exceptional quality.
            </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 overflow-hidden border-0 shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
                >
                <div className="relative overflow-hidden">
                    <Image
                    src={`/api/placeholder/400/300?text=${encodeURIComponent(product.name)}`}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-1">
                    {product.category}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="text-sm text-gray-500 font-medium">
                        Origin: {product.origin.region}
                    </div>
                    <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full sm:w-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
                    >
                        <Link href={`/products/${product.id}`}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
            
            <div className="text-center mt-12 sm:mt-16">
            <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 hover:transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
                <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            </div>
        </div>
        </section>
    )
}