import ProductCard from "../../components/ProductCard";
import { Product } from "../../utils/filterProducts";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 
                   md:grid-cols-4 
                   lg:grid-cols-4 
                   xl:grid-cols-6
                   2xl:grid-cols-7
                   gap-4 sm:gap-6">
      {products.map((product, index) => (
        <div key={index} className="w-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}