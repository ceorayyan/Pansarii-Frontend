// app/shop/ShopContent.tsx
'use client';

import { useState, memo } from 'react';
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
  initialSearchQuery?: string;
}

function ShopContent({
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
  onPageChange,
  initialSearchQuery = ''
}: ShopContentProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const clearAllFilters = () => {
    setFilters({
      searchQuery: '',
      minPrice: 0,
      maxPrice: 5000,
      categories: [],
      sortBy: 'default',
      showOnSale: false,
      showInStock: true,
      showNewArrivals: false,
      showBestSellers: false,
    });
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Search and Filter Bar */}
      <SearchFilterBar
        onFilterChange={setFilters}
        productCount={filteredProducts.length}
        categories={categories}
        onViewModeChange={handleViewModeChange}
        initialSearchQuery={initialSearchQuery}
      />

      {/* Results Info */}
      <div className="my-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
          </h2>
          {filters.searchQuery && (
            <p className="text-sm text-gray-600 mt-1">
              Results for "<span className="font-medium">{filters.searchQuery}</span>"
            </p>
          )}
          {(filters.categories.length > 0 || filters.showOnSale || filters.minPrice > 0 || filters.maxPrice < 5000) && (
            <p className="text-sm text-gray-500 mt-1">
              {filters.categories.length > 0 && `${filters.categories.length} categories selected • `}
              {filters.showOnSale && `On sale only • `}
              {(filters.minPrice > 0 || filters.maxPrice < 5000) && `Price: PKR ${filters.minPrice} - PKR ${filters.maxPrice}`}
            </p>
          )}
        </div>
        {filters.sortBy !== 'default' && (
          <div className="text-sm text-gray-600">
            Sorted by: <span className="font-medium">
              {/* FIXED: Updated to match the actual type values */}
              {filters.sortBy === 'price-low' ? 'Price: Low to High' :
               filters.sortBy === 'price-high' ? 'Price: High to Low' :
               filters.sortBy === 'rating' ? 'Highest Rated' : 'Name (A-Z)'}
            </span>
          </div>
        )}
      </div>

      {/* Product Grid */}
      <MemoizedProductGrid products={currentProducts} viewMode={viewMode} />

      {/* No Results State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">
            {filters.searchQuery 
              ? `No results found for "${filters.searchQuery}". Try adjusting your search term.`
              : 'Try adjusting your filters to find what you\'re looking for.'}
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 px-6 py-3 bg-[#197B33] text-white rounded-lg hover:bg-[#156529] transition-colors font-medium"
          >
            Clear All Filters & Search
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

const MemoizedProductGrid = memo(ProductGrid, (prevProps, nextProps) => {
  return (
    prevProps.products.length === nextProps.products.length &&
    prevProps.viewMode === nextProps.viewMode &&
    prevProps.products.every((product, index) => 
      product.id === nextProps.products[index]?.id
    )
  );
});

export default ShopContent;