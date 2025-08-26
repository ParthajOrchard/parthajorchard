"use client"

import { useState, useMemo, useEffect, useCallback, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { products, getAllCategories, getProductsByCategory } from "@/lib/data"

// Type definitions
interface Product {
  id: string;
  name: string;
  hsCode: string;
  category: string;
  summary: string;
  notes?: string;
  shelfLife: string;
  storage: string;
  certifications: string[];
  origin: {
    country: string;
    region: string;
  };
  specs: {
    grade: string;
    compliance: {
      marketMRLs: string[];
      gmo: string;
      allergens: string;
    };
  };
  packaging: {
    options: string[];
    containerLoadability: {
      "20ft": number | string;
      "40ft": number | string;
    };
  };
  trade: {
    moq: string;
    leadTime: string;
    incoterms: string[];
  };
  // Methods from the class instance
  getStructuredData: () => object;
  getMainImage: () => string | null;
  getGalleryImages: () => string[];
  getKeySpecs: () => { label: string; value: string }[];
  getDisplayPrice: () => string;
}

interface ProductCardProps {
  product: Product
  priority?: boolean
}

interface CategorySectionProps {
  category: string
  products: Product[]
  isExpanded: boolean
  onToggle: () => void
  searchQuery: string
}

// Product Card Component with Lazy Loading
const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300">
      <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
        {!imageLoaded && !imageError && (
          <Skeleton className="w-full h-48 sm:h-56 lg:h-64" />
        )}
        <Image
          src={product.getMainImage() || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className={`w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500 ${
            !imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {imageError && (
          <div className="w-full h-48 sm:h-56 lg:h-64 flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">Image unavailable</span>
          </div>
        )}
        <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-700 text-xs font-medium shadow-sm">
          {product.category}
        </Badge>
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 line-clamp-2 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-mono">HSN: {product.hsCode}</p>
          </div>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
            {product.summary}
          </p>

          <div className="grid grid-cols-2 gap-3 py-2 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500">Origin</p>
              <p className="text-sm font-medium text-gray-900">{product.origin.region}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">MOQ</p>
              <p className="text-sm font-medium text-gray-900">{product.trade.moq}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
            <div className="text-green-600 font-semibold text-base sm:text-lg">
              {product.getDisplayPrice()}
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full sm:w-auto hover:bg-gray-50 border-gray-300"
            >
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Category Section Component
const CategorySection: React.FC<CategorySectionProps> = ({ category, products, isExpanded, onToggle, searchQuery }) => {
  const [displayCount, setDisplayCount] = useState(3)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products
    return products.filter(
      (product: Product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.hsCode.includes(searchQuery)
    )
  }, [products, searchQuery])

  const displayedProducts = filteredProducts.slice(0, displayCount)
  const hasMore = filteredProducts.length > displayCount

  const handleShowMore = () => {
    if (displayCount === 3) {
      setDisplayCount(6)
    } else {
      setDisplayCount(filteredProducts.length)
    }
  }

  const handleShowLess = () => {
    setDisplayCount(3)
    // Smooth scroll to section top
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest' 
    })
  }

  if (filteredProducts.length === 0) return null

  return (
    <section ref={sectionRef} className="mb-12 sm:mb-16">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 capitalize">
            {category}
          </h2>
          <Badge variant="secondary" className="text-sm font-medium">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </Badge>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-gray-600 hover:text-gray-900"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 ml-2" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-2" />
          )}
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>

      {/* Products Grid */}
      {isExpanded && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayedProducts.map((product: Product, index: number) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                priority={index < 3} // Prioritize first 3 images
              />
            ))}
          </div>

          {/* Show More/Less Buttons */}
          {(hasMore || displayCount > 3) && (
            <div className="flex justify-center gap-3 pt-4">
              {hasMore && (
                <Button
                  onClick={handleShowMore}
                  variant="outline"
                  className="px-6 py-2 hover:bg-gray-50"
                >
                  {displayCount === 3 ? 'Show More' : 'Show All Products'}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              )}
              
              {displayCount > 3 && (
                <Button
                  onClick={handleShowLess}
                  variant="ghost"
                  className="px-6 py-2 text-gray-600 hover:text-gray-900"
                >
                  Show Less
                  <ChevronUp className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

// Loading Skeleton Component
const CategorySkeleton: React.FC = () => (
  <section className="mb-12 sm:mb-16">
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-6 w-20" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="w-full h-48 sm:h-56 lg:h-64" />
          <CardContent className="p-4 sm:p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-24" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
)

// Main Component
export function ProductsContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [expandedCategories, setExpandedCategories] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [deferredSearchQuery, setDeferredSearchQuery] = useState("")

  // Initialize from URL params
  useEffect(() => {
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category")
    
    setSearchQuery(search)
    setDeferredSearchQuery(search)
    
    if (category && category !== "all") {
      setExpandedCategories(new Set([category]))
    } else {
      // Expand first 2 categories by default
      const categories = getAllCategories()
      setExpandedCategories(new Set(categories.slice(0, 2)))
    }
    
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 500)
  }, [searchParams])

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeferredSearchQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const categories = getAllCategories()

  const categorizedProducts = useMemo(() => {
    const grouped: Record<string, Product[]> = {}
    
    categories.forEach((category: string) => {
      const categoryProducts = getProductsByCategory(category)
      
      // Sort products
      categoryProducts.sort((a: Product, b: Product) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name)
          case "category":
            return a.category.localeCompare(b.category)
          default:
            return 0
        }
      })
      
      grouped[category] = categoryProducts
    })
    
    return grouped
    }, [sortBy, categories])

  const totalProducts = useMemo(() => {
    if (!deferredSearchQuery) return products.length
    
    return Object.values(categorizedProducts).flat().filter((product: Product) =>
      product.name.toLowerCase().includes(deferredSearchQuery.toLowerCase()) ||
      product.summary.toLowerCase().includes(deferredSearchQuery.toLowerCase()) ||
      product.hsCode.includes(deferredSearchQuery)
    ).length
  }, [categorizedProducts, deferredSearchQuery])

  const handleCategoryToggle = useCallback((category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }, [])

  const handleExpandAll = () => {
    setExpandedCategories(new Set(categories))
  }

  const handleCollapseAll = () => {
    setExpandedCategories(new Set())
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setDeferredSearchQuery("")
    setSortBy("name")
    setExpandedCategories(new Set(categories.slice(0, 2)))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(249,250,251)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-6 w-96 mb-8" />
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Skeleton className="h-10 sm:col-span-2" />
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
            </div>
          </div>
          {Array.from({ length: 2 }).map((_, i) => (
            <CategorySkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Explore our comprehensive range of premium agricultural products for export, 
            organized by category for easy browsing.
          </p>
        </header>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 mb-4">
            {/* Search */}
            <div className="sm:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products, categories, or HSN codes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-sm sm:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Sort */}
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="text-sm sm:text-base border-gray-300">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Controls */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExpandAll}
                className="flex-1 text-xs sm:text-sm"
              >
                Expand All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCollapseAll}
                className="flex-1 text-xs sm:text-sm"
              >
                Collapse All
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{totalProducts}</span> products found
              {deferredSearchQuery && (
                <span> for <span className="font-medium">&quot;{deferredSearchQuery}&quot;</span></span>
              )}
              <span className="text-gray-400 ml-2">
                • {expandedCategories.size} of {categories.length} categories expanded
              </span>
            </div>
            
            {(deferredSearchQuery || sortBy !== "name") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className="text-gray-600 hover:text-gray-900"
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </div>

        {/* Category Sections */}
        <main>
          {categories.map((category: string) => (
            <CategorySection
              key={category}
              category={category}
              products={categorizedProducts[category] || []}
              isExpanded={expandedCategories.has(category)}
              onToggle={() => handleCategoryToggle(category)}
              searchQuery={deferredSearchQuery}
            />
          ))}

          {/* No Results */}
          {totalProducts === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-6">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                No products found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn&apos;t find any products matching your search criteria. 
                Try adjusting your filters or search terms.
              </p>
              <Button onClick={handleClearFilters} size="lg">
                Clear All Filters
              </Button>
            </div>
          )}
        </main>

        {/* Back to Top */}
        <div className="fixed bottom-6 right-6">
          <Button
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full shadow-lg"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}