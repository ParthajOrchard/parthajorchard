'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { CTASection } from '@/components/sections/CTASection'
import { IProduct  } from "@/lib/types" // Use the unified type

interface HomePageProps {
    featuredProducts: IProduct []
}

export default function HomePage({ featuredProducts }: HomePageProps) {
    return (
        <div className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <FeaturedProductsSection products={featuredProducts} />
        <CTASection />
        </div>
    )
}