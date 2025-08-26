import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import type { IProduct } from '@/lib/types'

interface FeaturedProductsSectionProps {
    products: IProduct[]
    maxProducts?: number
    showViewAllButton?: boolean
    className?: string
}

export function FeaturedProductsSection({ 
    products, 
    maxProducts = 6,
    showViewAllButton = true,
    className = ""
}: FeaturedProductsSectionProps) {
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
    
    // Early return for no products
    if (!products || products.length === 0) {
        return (
            <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 ${className}`} aria-labelledby="no-products-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" aria-hidden="true" />
                    <h2 id="no-products-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                        No Products Available
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        We&apos;re currently updating our product catalog. Please check back soon.
                    </p>
                </div>
            </section>
        )
    }

    // Limit products if maxProducts is specified
    const displayProducts = products.slice(0, maxProducts)

    const handleImageError = (productId: string) => {
        setImageErrors(prev => new Set([...prev, productId]))
    }

    const getImageSrc = (product: IProduct) => {
        if (imageErrors.has(product.id)) {
            return `/api/placeholder/400/300?text=${encodeURIComponent(product.name)}`
        }
        
        // Get image from cover property or fallback to Unsplash
        return product.images?.cover || 
               `https://images.unsplash.com/400x300/?${encodeURIComponent(product.name + ' agriculture')}`
    }

    return (
        <section 
            className={`py-12 sm:py-16 lg:py-24 bg-white ${className}`}
            aria-labelledby="featured-products-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 
                        id="featured-products-heading" 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
                    >
                        Featured Products
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                        Discover our most popular and premium agricultural products, carefully selected for their exceptional quality and sustainability.
                    </p>
                </div>
                
                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
                    {displayProducts.map((product, index) => (
                        <Card 
                            key={product.id}
                            className="group hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden border border-gray-200 bg-white"
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                                <Image
                                    src={getImageSrc(product)}
                                    alt={`${product.name} - Premium agricultural product from ${product.origin?.region || 'various regions'}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    onError={() => handleImageError(product.id)}
                                    priority={index < 3} // Prioritize first 3 images
                                />
                                
                                {/* Category Badge */}
                                {product.category && (
                                    <Badge 
                                        className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 border-0 shadow-md"
                                        aria-label={`Product category: ${product.category}`}
                                    >
                                        {product.category}
                                    </Badge>
                                )}
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            {/* Card Content */}
                            <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                                <div className="flex-grow">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    
                                </div>
                                
                                {/* Bottom Section */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-center text-xs sm:text-sm text-gray-500 font-medium">
                                        <span className="mr-1" aria-hidden="true">📍</span>
                                        <span className="truncate">
                                            Origin: {product.origin?.region || product.origin?.country || 'Various regions'}
                                        </span>
                                    </div>
                                    
                                    <Button 
                                        asChild 
                                        variant="outline" 
                                        size="sm" 
                                        className="w-full sm:w-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 group/button"
                                        aria-label={`View details for ${product.name}`}
                                    >
                                        <Link href={`/products/${product.id}`} className="flex items-center justify-center">
                                            <span className="text-xs sm:text-sm">View Details</span>
                                            <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/button:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                {/* View All Products Button */}
                {showViewAllButton && products.length > maxProducts && (
                    <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                        <Button 
                            asChild 
                            size="lg" 
                            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                            aria-label="View all available products"
                        >
                            <Link href="/products" className="flex items-center">
                                View All Products
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
            
            {/* CSS Animation Styles */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .grid > * {
                    animation: fadeInUp 0.6s ease-out;
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .grid > *,
                    .hover\\:scale-105,
                    .hover\\:-translate-y-1,
                    .transition-transform {
                        animation: none !important;
                        transform: none !important;
                        transition: none !important;
                    }
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                @media (max-width: 640px) {
                    .grid {
                        gap: 1rem;
                    }
                }
            `}</style>
        </section>
    )
}