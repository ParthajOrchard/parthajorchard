import HomePage from '@/components/HomePage'
import productsData from '@/data/products.json'

export default function Home() {

  const featuredProducts = productsData.slice(0, 3)
  
  return (
    <div className="-mt-20">
      <HomePage featuredProducts={featuredProducts} />
    </div>
    )
}
