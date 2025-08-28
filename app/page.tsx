'use client'

import HomePage from '@/components/HomePage'
import { products } from "@/lib/data";
import { useHeader } from "@/app/contexts/HeaderContext"
import { useEffect } from "react"

export default function Home() {
    const { setIsOverBackgroundImage } = useHeader()

  useEffect(() => {
    // Tell the header it's over an image when this page mounts
    setIsOverBackgroundImage(true)
    // Clean up when the page unmounts
    return () => setIsOverBackgroundImage(false)
  }, [setIsOverBackgroundImage])

  const featuredProducts = products.slice(0, 3).map(p => ({ ...p }));
  return (
    <div>

      <HomePage featuredProducts={featuredProducts} />
    </div>
  )
}