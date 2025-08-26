// components/HomePage.tsx
'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { CTASection } from '@/components/sections/CTASection'

interface Product {
    id: string
    name: string
    category: string
    description: string
    origin: {
        region: string
    }
}

interface HomePageProps {
    featuredProducts: Product[]
}

export default function HomePage({ featuredProducts }: HomePageProps) {
    return (
        <div className="min-h-screen ">
        <HeroSection />
        <FeaturesSection />
        <FeaturedProductsSection products={featuredProducts} />
        <CTASection />
        </div>
    )
}