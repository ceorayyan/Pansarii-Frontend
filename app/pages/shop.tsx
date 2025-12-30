'use client';

import { useState, useMemo } from 'react';
import ProductCard from "../Desktop/components/ProductCard";
import SearchFilterBar from "../Desktop/components/SearchFilterBar";
import { Product, FilterOptions, filterProducts, getCategoriesFromProducts } from "../Desktop/utils/filterProducts";
import Footer from "../Desktop/Sections/Footer";


export default function Shop() {
  // 20 Products data with categories
  const allProducts: Product[] = [
    { 
      img: '/images/product.png', 
      nameEn: 'Organic Lavender Essential Oil', 
      nameUr: 'روغن باکان بيد', 
      description: 'Natural DHT Blocker | With Saw Palmetto', 
      rating: 4.7, 
      reviews: 406, 
      price: 1149, 
      oldPrice: 1499, 
      sale: '20% OFF',
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Green Tea Extract', 
      nameUr: 'گرین ٹی کا عرق', 
      description: 'Boosts metabolism & fat burning', 
      rating: 4.6, 
      reviews: 320, 
      price: 999, 
      oldPrice: 1299,
      category: 'Extracts',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Chamomile Essential Oil', 
      nameUr: 'کیمومائل تیل', 
      description: 'Relaxing & soothing oil for stress relief', 
      rating: 4.8, 
      reviews: 210, 
      price: 1199, 
      oldPrice: 1399, 
      sale: '15% OFF',
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Mint Herbal Oil', 
      nameUr: 'پودینے کا تیل', 
      description: 'Refreshing oil for digestion', 
      rating: 4.5, 
      reviews: 180, 
      price: 899, 
      oldPrice: 1099,
      category: 'Herbal Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Rosehip Oil', 
      nameUr: 'گلاب ہپ تیل', 
      description: 'Anti-aging & skin regeneration', 
      rating: 4.6, 
      reviews: 220, 
      price: 1099, 
      oldPrice: 1399, 
      sale: '15% OFF',
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Argan Oil', 
      nameUr: 'ارگن کا تیل', 
      description: 'Hair & skin care Moroccan oil', 
      rating: 4.7, 
      reviews: 150, 
      price: 1299, 
      oldPrice: 1599,
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Jojoba Oil', 
      nameUr: 'جوجوبا تیل', 
      description: 'Moisturizing face & body oil', 
      rating: 4.5, 
      reviews: 180, 
      price: 999, 
      oldPrice: 1299, 
      sale: '22% OFF',
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Tea Tree Oil', 
      nameUr: 'ٹی ٹری آئل', 
      description: 'Acne control & skin cleansing', 
      rating: 4.6, 
      reviews: 210, 
      price: 1199, 
      oldPrice: 1499,
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Almond Oil', 
      nameUr: 'بادام کا تیل', 
      description: 'Cold pressed almond oil for hair', 
      rating: 4.7, 
      reviews: 190, 
      price: 899, 
      oldPrice: 1199, 
      sale: '25% OFF',
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Coconut Oil', 
      nameUr: 'ناریل کا تیل', 
      description: 'Virgin coconut oil cooking & hair', 
      rating: 4.8, 
      reviews: 310, 
      price: 749, 
      oldPrice: 999,
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Black Seed Oil', 
      nameUr: 'کلونجی کا تیل', 
      description: 'Cold pressed black seed for immunity', 
      rating: 4.9, 
      reviews: 420, 
      price: 1299, 
      oldPrice: 1699, 
      sale: '24% OFF',
      category: 'Herbal Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Olive Oil', 
      nameUr: 'زیتون کا تیل', 
      description: 'Extra virgin olive oil for cooking', 
      rating: 4.6, 
      reviews: 180, 
      price: 1099, 
      oldPrice: 1399,
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Castor Oil', 
      nameUr: 'ارنڈی کا تیل', 
      description: 'For hair growth & eyelashes', 
      rating: 4.5, 
      reviews: 160, 
      price: 699, 
      oldPrice: 899, 
      sale: '22% OFF',
      category: 'Herbal Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Sesame Oil', 
      nameUr: 'تل کا تیل', 
      description: 'Cold pressed sesame for massage', 
      rating: 4.4, 
      reviews: 140, 
      price: 799, 
      oldPrice: 999,
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Mustard Oil', 
      nameUr: 'سرسوں کا تیل', 
      description: 'Pure mustard oil for cooking', 
      rating: 4.7, 
      reviews: 220, 
      price: 649, 
      oldPrice: 849, 
      sale: '24% OFF',
      category: 'Carrier Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Eucalyptus Oil', 
      nameUr: 'یوکالیپٹس آئل', 
      description: 'For cold & cough relief', 
      rating: 4.8, 
      reviews: 190, 
      price: 899, 
      oldPrice: 1199,
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Peppermint Oil', 
      nameUr: 'پودینہ آئل', 
      description: 'For digestion & headache relief', 
      rating: 4.5, 
      reviews: 170, 
      price: 799, 
      oldPrice: 999, 
      sale: '20% OFF',
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Lemon Oil', 
      nameUr: 'لیموں کا تیل', 
      description: 'For skin cleansing & detox', 
      rating: 4.6, 
      reviews: 150, 
      price: 699, 
      oldPrice: 899,
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Orange Oil', 
      nameUr: 'مالٹے کا تیل', 
      description: 'Refreshing citrus oil for mood', 
      rating: 4.7, 
      reviews: 210, 
      price: 899, 
      oldPrice: 1199, 
      sale: '25% OFF',
      category: 'Essential Oils',
      inStock: true
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Ginger Oil', 
      nameUr: 'ادرک کا تیل', 
      description: 'For pain relief & circulation', 
      rating: 4.5, 
      reviews: 180, 
      price: 799, 
      oldPrice: 1099,
      category: 'Herbal Oils',
      inStock: true
    },
  ];

  const categories = useMemo(() => getCategoriesFromProducts(allProducts), []);

  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 2000,
    categories: [],
    sortBy: 'default',
    showOnSale: false,
    showInStock: true,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Show 12 products per page

  const filteredProducts = useMemo(() => 
    filterProducts(allProducts, filters),
    [allProducts, filters]
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset to page 1 when filters change
  useState(() => {
    setCurrentPage(1);
  }, [filters]);

  // Pagination functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop Products</h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Discover our premium collection of natural oils and extracts
          </p>
        </div>
      </div>

      {/* Main Content */}
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
        <div className="grid grid-cols-1 
                       sm:grid-cols-2 
                       lg:grid-cols-3 
                       xl:grid-cols-4 
                       gap-4 sm:gap-6">
          
          {currentProducts.map((product, index) => (
            <div key={index} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

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
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Page info */}
            <div className="text-sm text-gray-600">
              Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </div>
            
            {/* Pagination buttons */}
            <div className="flex items-center gap-2">
              {/* Previous button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Previous
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium ${
                        currentPage === pageNum
                          ? 'bg-[#197B33] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Ellipsis for many pages */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <span className="px-2 text-gray-500">...</span>
                )}

                {/* Last page button */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <button
                    onClick={() => goToPage(totalPages)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium ${
                      currentPage === totalPages
                        ? 'bg-[#197B33] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
              </div>

              {/* Next button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
              </button>
            </div>

            {/* Items per page selector (optional) */}
            <div className="text-sm text-gray-600">
              <span className="mr-2">Show:</span>
              <select 
                value={productsPerPage}
                onChange={(e) => {
                  // You can make this dynamic if needed
                  console.log("Items per page changed to:", e.target.value);
                }}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
 
  );
  <Footer />
}