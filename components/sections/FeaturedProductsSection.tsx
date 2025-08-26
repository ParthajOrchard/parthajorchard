import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import type { IProduct } from '@/lib/types'

interface FeaturedProductsSectionProps {
    products: IProduct[]
}

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
    console.log("FeaturedProductsSection rendering with products:", products);
    
    if (!products || products.length === 0) {
        return (
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center">No Products Available</h2>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Global styles for the fadeInUp animation */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Featured Products
                        </h2>
                        <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover our most popular and premium agricultural products, carefully selected for their exceptional quality.
                        </p>
                    </div>
                    
                    {/* Responsive grid for product cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {products.map((product, index) => (
                            <Card 
                                key={product.id} 
                                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-gray-200 shadow-lg rounded-lg flex flex-col"
                                // Staggered animation for each card
                                style={{ 
                                    animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`, 
                                    opacity: 0 
                                }}
                            >
                                <div className="relative overflow-hidden h-60 sm:h-64">
                                    <img
                                        src={product.images?.cover || `https://placehold.co/400x300/22c55e/ffffff?text=${encodeURIComponent(product.name)}`}
                                        alt={product.name}
                                        className="absolute h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => { e.currentTarget.src = `https://placehold.co/400x300/cccccc/ffffff?text=Image+Not+Found`; }}
                                    />
                                    <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-full border-0">
                                        {product.category}
                                    </Badge>
                                    {/* Gradient overlay for better text readability on the image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                                </div>
                                
                                <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300 min-h-[3.5rem]">
                                        {product.name}
                                    </h3>
                                    <div className="flex-grow"></div> {/* Pushes content below to the bottom */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                                        <div className="text-sm text-gray-500 font-medium">
                                            Origin: {product.origin?.region || 'N/A'}
                                        </div>
                                        <a href={`/products/${product.id}`} className="w-full sm:w-auto">
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                className="w-full hover:bg-green-600 hover:text-white border-gray-300 hover:border-green-600 transition-all duration-300 rounded-md"
                                            >
                                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12 sm:mt-16">
                        <a href="/products">
                            <Button 
                                size="lg" 
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg"
                            >
                                View All Products <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}