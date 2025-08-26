"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const trimmedQuery = searchQuery.trim()
        if (trimmedQuery) {
        router.push(`/products?search=${encodeURIComponent(trimmedQuery)}`)
        setSearchQuery("")
        }
    }

    return (
        <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
            <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 h-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
            aria-label="Search products"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        </form>
    )
}
