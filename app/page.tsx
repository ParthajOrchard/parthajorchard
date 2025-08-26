import HomePage from '@/components/HomePage'
import { products } from "@/lib/data";

export default function Home() {

  const featuredProducts = products.slice(0, 3).map(p => ({ ...p }));
  return (
    <div>

      <HomePage featuredProducts={featuredProducts} />
    </div>
  )
}