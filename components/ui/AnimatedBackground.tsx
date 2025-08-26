'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Corrected: Added a leading slash "/" to each image path
const images = [
    '/slider-images-hero-page/bg-image (1).jpeg',
    '/slider-images-hero-page/bg-image (2).jpeg',
    '/slider-images-hero-page/bg-image (3).jpeg',
    '/slider-images-hero-page/bg-image (4).jpeg',
    '/slider-images-hero-page/bg-image (5).jpeg',
]

export function AnimatedBackground() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        // Set up an interval to change the image every 5 seconds (5000 milliseconds)
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
        <div className="absolute inset-0 -z-10">
            {images.map((src, index) => (
            <Image
                key={src}
                src={src}
                alt="Cycling background image"
                fill
                sizes="100vw"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                // Preload the first image for better initial performance
                priority={index === 0}
                // Provide a fallback in case an image fails to load
                onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1920x1080/000000/FFFFFF?text=Image+Not+Found`
                }}
            />
            ))}
        </div>

        {/* Dark overlay for better text readability over the images */}
        <div className="absolute inset-0 -z-10 bg-black/40" />
        </>
    )
    }
