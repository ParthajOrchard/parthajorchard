import Link from "next/link"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4">PARTHAJ ORCHARD Pvt. Ltd.</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Leading exporter of premium agricultural products including millets, spices, grains, and organic produce.
              We ensure quality from farm to global markets.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">123 Export Plaza, Mumbai, Maharashtra 400001, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">info@agriexportpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">www.agriexportpro.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gstin" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  GSTIN Certificate
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Categories</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/products?category=Grains"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Grains
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Millets"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Millets
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Spices"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Spices
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Organic"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Organic Products
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 PARTHAJ ORCHARD Pvt. Ltd.. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
