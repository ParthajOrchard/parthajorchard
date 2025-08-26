"use client"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const [contentBgColor, setContentBgColor] = useState<string>('transparent')
    const pathname = usePathname()
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        
        handleScroll() // Set initial scroll position
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Detect background color of content below header
    useEffect(() => {
        const detectContentBackground = () => {
            if (!headerRef.current) return
            
            const headerRect = headerRef.current.getBoundingClientRect()
            const elementBelow = document.elementFromPoint(
                window.innerWidth / 2,
                headerRect.bottom + 1
            )
            
            if (elementBelow) {
                const computedStyle = window.getComputedStyle(elementBelow)
                let bgColor = computedStyle.backgroundColor
                
                // Walk up the DOM tree to find a non-transparent background
                let currentElement: HTMLElement | null = elementBelow as HTMLElement
                while (currentElement && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent')) {
                    currentElement = currentElement.parentElement
                    if (currentElement) {
                        bgColor = window.getComputedStyle(currentElement).backgroundColor
                    }
                }
                
                // Check if it's effectively white/light background
                const isLightBackground = bgColor.includes('255, 255, 255') || 
                                        bgColor === 'white' || 
                                        bgColor === 'rgb(255, 255, 255)' ||
                                        bgColor.includes('248, 250, 252') || // slate-50
                                        bgColor.includes('249, 250, 251') || // gray-50
                                        bgColor === 'transparent'
                
                setContentBgColor(isLightBackground ? 'light' : 'dark')
            }
        }
        
        // Detect on mount and route changes
        detectContentBackground()
        
        // Small delay to ensure content is rendered
        const timeoutId = setTimeout(detectContentBackground, 100)
        
        return () => clearTimeout(timeoutId)
    }, [pathname])

    // Calculate opacity based on scroll position (0 to 1 over 100px scroll)
    const backgroundOpacity = Math.min(scrollY / 100, 1)
    
    // Determine text color based on scroll and content background
    const shouldUseDarkText = backgroundOpacity > 0.5 || (backgroundOpacity === 0 && contentBgColor === 'light')

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About Us", href: "/about" },
        { name: "Certificates", href: "/certificates" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header 
            ref={headerRef}
            className="shadow-sm border-b sticky top-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
                borderBottomColor: `rgba(229, 231, 235, ${backgroundOpacity})`
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <Image 
                                src="/logo.png" 
                                alt="PARTHAJ ORCHARD Logo" 
                                width={120} 
                                height={80} 
                                priority 
                            />
                            <span className={`hidden sm:inline text-xl font-bold transition-colors duration-300 ${
                                shouldUseDarkText ? "text-green-700" : "text-white"
                            }`}>
                                PARTHAJ ORCHARD
                            </span>
                        </Link>
                    </div>
                    
                    <nav className="hidden lg:flex items-center space-x-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                                        isActive
                                            ? shouldUseDarkText 
                                                ? "bg-green-100 text-green-700" 
                                                : "bg-white/20 text-white"
                                            : shouldUseDarkText
                                                ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                                : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                    
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <SearchBar />
                        </div>
                        <div className="lg:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle mobile menu"
                                className={`transition-colors duration-300 ${
                                    shouldUseDarkText 
                                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                                        : "text-white hover:text-white hover:bg-white/10"
                                }`}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-screen border-t" : "max-h-0 border-transparent"
                }`}
                style={{
                    borderTopColor: isMenuOpen ? `rgba(229, 231, 235, ${Math.max(backgroundOpacity, 0.1)})` : 'transparent'
                }}
            >
                <div className="px-4 pt-4 pb-6 space-y-4">
                    <SearchBar />
                    <nav className="flex flex-col space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                                        isActive
                                            ? shouldUseDarkText 
                                                ? "bg-green-100 text-green-700" 
                                                : "bg-white/20 text-white"
                                            : shouldUseDarkText
                                                ? "text-gray-600 hover:bg-gray-100"
                                                : "text-white/90 hover:bg-white/10"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </header>
    )
}