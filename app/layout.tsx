import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { defaultMetadata } from "@/lib/seo"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { HeaderProvider } from "@/app/contexts/HeaderContext" // 1. IMPORT

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderProvider> {/* 2. WRAP */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </HeaderProvider> {/* 3. END WRAP */}
        </Suspense>
      </body>
    </html>
  )
}