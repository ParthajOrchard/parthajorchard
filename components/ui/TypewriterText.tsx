// components/ui/TypewriterText.tsx
'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
    texts: string[]
    speed?: number
    deleteSpeed?: number
    delayBetweenTexts?: number
    className?: string
}

export function TypewriterText({ 
    texts, 
    speed = 100, 
    deleteSpeed = 50, 
    delayBetweenTexts = 2000,
    className = ''
    }: TypewriterTextProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentString = texts[currentTextIndex]
        
        const timeout = setTimeout(() => {
        if (!isDeleting) {
            // Typing
            if (charIndex < currentString.length) {
            setCurrentText(currentString.substring(0, charIndex + 1))
            setCharIndex(prev => prev + 1)
            } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenTexts)
            }
        } else {
            // Deleting
            if (charIndex > 0) {
            setCurrentText(currentString.substring(0, charIndex - 1))
            setCharIndex(prev => prev - 1)
            } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            }
        }
        }, isDeleting ? deleteSpeed : speed)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetweenTexts])

    return (
        <h1 className={className}>
        {currentText}
        <span className="animate-pulse">|</span>
        </h1>
    )
}