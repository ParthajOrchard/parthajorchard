"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useHeader } from "@/app/contexts/HeaderContext"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const pathname = usePathname()
    const { isOverBackgroundImage } = useHeader()

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const shouldUseDarkText = scrollY > 0 || !isOverBackgroundImage
    const isTransparentMode = isOverBackgroundImage && scrollY === 0

    const headerStyle: React.CSSProperties = {
        backgroundColor: isTransparentMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isTransparentMode ? 'blur(8px)' : 'none',
        borderBottomColor: isTransparentMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(229, 231, 235, 1)',
        boxShadow: isTransparentMode ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    }

    const navigation = [
        { name: "Home", href: "/" }, { name: "Products", href: "/products" },
        { name: "About Us", href: "/about" }, { name: "Certificates", href: "/certificates" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header
            className="shadow-sm border-b sticky top-0 z-50 transition-all duration-300"
            style={headerStyle}
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
                                className="transition-all duration-300 w-auto h-12"
                            />
                            <span className={`hidden sm:inline text-xl font-bold transition-colors duration-300 ${
                                shouldUseDarkText ? "text-green-700" : "text-white drop-shadow-lg"
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
                                            ? "bg-green-100 text-green-700 border border-green-200"
                                            : shouldUseDarkText
                                                ? "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                                                : "text-white hover:bg-white/20 hover:text-white drop-shadow-lg"
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
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle mobile menu"
                                className={`transition-colors duration-300 p-2 rounded-md text-black bg-white `}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
             <div
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-screen border-t" : "max-h-0"
                }`}
                // FIX: The mobile dropdown now ALWAYS has a light background for readability.
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(8px)',
                    borderTopColor: 'rgba(229, 231, 235, 1)',
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
                                    // FIX: Text in the mobile menu is ALWAYS dark.
                                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                                        isActive
                                            ? "bg-green-100 text-green-700 border border-green-200"
                                            : "text-gray-800 hover:bg-gray-100"
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