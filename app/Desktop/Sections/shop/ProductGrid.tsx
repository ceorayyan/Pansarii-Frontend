import { Product } from "../../utils/filterProducts";
import ProductCard from "../../components/ProductCard";

interface ProductGridProps {
  products: Product[];
  viewMode?: 'grid' | 'list';
}

export default function ProductGrid({ products, viewMode = 'grid' }: ProductGridProps) {
  if (viewMode === 'list') {
    // List View - Full width cards
    return (
      <div className="space-y-4">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-4"
          >
            <div className="flex gap-6">
              {/* Product Image */}
              <div className="w-48 h-48 flex-shrink-0">
                <img 
                  src={product.img}
                  alt={product.nameEn}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.nameEn}
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">{product.nameUr}</p>
                  <p className="text-sm text-green-700 mb-4">{product.description}</p>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{product.reviews} Reviews</span>
                    </div>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      PKR {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        PKR {product.oldPrice}
                      </span>
                    )}
                    {product.sale && (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                        {product.sale}
                      </span>
                    )}
                  </div>

                  <button className="px-8 py-3 bg-green-700 text-white rounded-full hover:bg-green-600 transition font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Grid View - Default
  return (
    <div className="grid grid-cols-2 
                   md:grid-cols-2 
                   lg:grid-cols-3 
                   xl:grid-cols-4
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