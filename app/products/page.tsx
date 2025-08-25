import { Suspense } from 'react'
import { ProductsContent } from './products-content'
import { ProductsLoading } from './loading'

export const metadata = {
  title: 'Premium Agricultural Products for Export',
  description: 'Browse our comprehensive range of premium agricultural products including millets, spices, grains, and organic produce for export.',
  keywords: ['agricultural products', 'export', 'millets', 'spices', 'grains', 'organic products', 'India export'],
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  )
}
