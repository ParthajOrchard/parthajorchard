// components/sections/FeaturesSection.tsx
import { Shield, Globe, Truck } from 'lucide-react'

const features = [
    {
        icon: Shield,
        title: 'Quality Assured',
        description: 'All products are certified and tested to meet international quality standards including FSSAI, APEDA, and ISO certifications.'
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Exporting to over 25 countries worldwide with established logistics networks and reliable shipping partners.'
    },
    {
        icon: Truck,
        title: 'Reliable Logistics',
        description: 'Efficient supply chain management ensuring timely delivery with proper packaging and documentation.'
    }
    ]

    export function FeaturesSection() {
    return (
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose PARTHAJ ORCHARD?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are committed to delivering the highest quality agricultural products with complete transparency and reliability.
            </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                <div 
                    key={feature.title}
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 200}ms` }}
                >
                    <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {feature.description}
                    </p>
                </div>
                )
            })}
            </div>
        </div>
        </section>
    )
}