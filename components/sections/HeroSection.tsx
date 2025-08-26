// components/sections/HeroSection.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { AnimatedStats } from '@/components/ui/AnimatedStats'

export function HeroSection() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const texts = [
        'Premium Agricultural Products for Global Markets',
        'Quality Millets & Grains Worldwide',
        'Sustainable Farming, Global Excellence',
        'From Indian Fields to World Tables'
    ]

    return (
        <div>
            <AnimatedBackground />
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="relative mt-16 sm:mt-20 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <div className="mb-4 min-h-[80px] sm:min-h-[96px] md:min-h-[128px]">
                                {mounted && (
                                    <TypewriterText
                                        texts={texts}
                                        className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg"
                                        speed={100}
                                        deleteSpeed={50}
                                        delayBetweenTexts={3000}
                                    />
                                )}
                            </div>
                            
                            <p className="text-base md:text-lg mb-6 sm:mb-8 text-white/90 leading-relaxed drop-shadow max-w-2xl mx-auto lg:mx-0">
                                Exporting the finest millets, spices, grains, and organic produce from India to the world. 
                                Quality assured, sustainably sourced, globally delivered.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <Button 
                                    asChild 
                                    size="lg" 
                                    className="bg-white/95 text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto backdrop-blur-sm"
                                >
                                    <a href="/products">
                                        Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white/80 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto bg-transparent backdrop-blur-sm"
                                >
                                    <a href="/contact">Request Quote</a>
                                </Button>
                            </div>
                        </div>
                        
                        <AnimatedStats />
                    </div>
                </div>
            </section>
        </div>
    )
}
