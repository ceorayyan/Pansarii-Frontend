import { FilterOptions, Product } from "../../utils/filterProducts";
import SearchFilterBar from "../../components/SearchFilterBar";

import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

interface ShopContentProps {
  categories: string[];
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  filteredProducts: Product[];
  currentProducts: Product[];
  currentPage: number;
  totalPages: number;
  indexOfFirstProduct: number;
  indexOfLastProduct: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function ShopContent({
  categories,
  filters,
  setFilters,
  filteredProducts,
  currentProducts,
  currentPage,
  totalPages,
  indexOfFirstProduct,
  indexOfLastProduct,
  productsPerPage,
  onPageChange
}: ShopContentProps) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Search and Filter Bar */}
      <SearchFilterBar
        onFilterChange={setFilters}
        productCount={filteredProducts.length}
        categories={categories}
      />

      {/* Results Info */}
      <div className="my-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Showing {filteredProducts.length} products
          </h2>
          {filters.searchQuery && (
            <p className="text-sm text-gray-600 mt-1">
              Results for "<span className="font-medium">{filters.searchQuery}</span>"
            </p>
          )}
        </div>
        {filters.sortBy !== 'default' && (
          <div className="text-sm text-gray-600">
            Sorted by: <span className="font-medium">
              {filters.sortBy === 'price-low-high' ? 'Price: Low to High' :
               filters.sortBy === 'price-high-low' ? 'Price: High to Low' :
               filters.sortBy === 'rating' ? 'Highest Rated' : 'Name (A-Z)'}
            </span>
          </div>
        )}
      </div>

      {/* Product Grid */}
      <ProductGrid products={currentProducts} />

      {/* No Results State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your filters or search term to find what you're looking for.
          </p>
          <button
            onClick={() => setFilters({
              searchQuery: '',
              minPrice: 0,
              maxPrice: 2000,
              categories: [],
              sortBy: 'default',
              showOnSale: false,
              showInStock: true,
            })}
            className="mt-4 px-4 py-2 bg-[#197B33] text-white rounded-lg hover:bg-[#156529] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          filteredProducts={filteredProducts}
          indexOfFirstProduct={indexOfFirstProduct}
          indexOfLastProduct={indexOfLastProduct}
          productsPerPage={productsPerPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}