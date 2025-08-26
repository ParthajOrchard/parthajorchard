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
            <style jsx global>{`
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
                                className="group hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden border-gray-200 shadow-lg"
                                style={{ 
                                    animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`, 
                                    opacity: 0 
                                }}
                            >
                                <div className="relative overflow-hidden h-64">
                                    <Image
                                        src={product.images?.cover || `https://source.unsplash.com/400x300/?${encodeURIComponent(product.name)}`}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-1 border-0">
                                        {product.category}
                                    </Badge>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                                
                                <CardContent className="p-6 flex flex-col">
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300 flex-grow">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between gap-3 mt-4">
                                        <div className="text-sm text-gray-500 font-medium">
                                            Origin: {product.origin?.region || 'Unknown'}
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
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            <Link href="/products">
                                View All Products <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}