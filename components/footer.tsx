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
              An emerging exporter of premium Indian agricultural products, connecting local farms to global markets with a commitment to quality and sustainability.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Kasliwal Classic Phase-1, Flat 11, Tapdiyanagar, Aurangabad, MH 431001, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">info@parthajorchard.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">www.parthajorchard.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/certifications" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Categories</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="/products?category=Fruits-Vegetables" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Fruits & Vegetables
                </a>
              </li>
              <li>
                <a href="/products?category=Cereals" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Cereals
                </a>
              </li>
               <li>
                <a href="/products?category=Honey" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Honey
                </a>
              </li>
              <li>
                <a href="/products?category=Dairy" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Dairy Products
                </a>
              </li>
              <li>
                <a href="/products?category=Cashew" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Cashew
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 PARTHAJ ORCHARD Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
