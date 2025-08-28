"use client"

import React, { createContext, useState, useContext, ReactNode } from "react"

interface HeaderContextType {
    isOverBackgroundImage: boolean
    setIsOverBackgroundImage: (isOver: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: { children: ReactNode }) {
    const [isOverBackgroundImage, setIsOverBackgroundImage] = useState(false)

    return (
        <HeaderContext.Provider value={{ isOverBackgroundImage, setIsOverBackgroundImage }}>
        {children}
        </HeaderContext.Provider>
    )
}

export function useHeader() {
    const context = useContext(HeaderContext)
    if (context === undefined) {
        throw new Error("useHeader must be used within a HeaderProvider")
    }
    return context
}