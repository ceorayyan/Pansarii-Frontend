'use client';

import { useState, useEffect } from 'react';
import { FilterOptions } from '../utils/filterProducts';

interface SearchFilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
  productCount?: number;
  categories?: string[];
}

export default function SearchFilterBar({
  onFilterChange,
  productCount = 0,
  categories = [],
}: SearchFilterBarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 2000,
    categories: [],
    sortBy: 'default',
    showOnSale: false,
    showInStock: true,
  });

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Alphabetically A-Z' },
  ];

  // Apply filters with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterChange(filters);
    }, 300);

    return () => clearTimeout(timer);
  }, [filters, onFilterChange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, minPrice: min, maxPrice: max }));
  };

  const handleSortChange = (sortBy: FilterOptions['sortBy']) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      minPrice: 0,
      maxPrice: 2000,
      categories: [],
      sortBy: 'default',
      showOnSale: false,
      showInStock: true,
    });
  };

  return (
    <div className="mb-6">
      {/* Main Search Input Container */}
      <div className="relative">
        {/* The main search input container */}
        <div className="flex items-center border border-[#E1E3E1] rounded-lg px-4 py-3 bg-white">
          {/* Left: Filter Button */}
          <div className="flex items-center gap-2 mr-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="hidden sm:inline text-sm font-medium">Filter</span>
            </button>
            
            {/* Results Count */}
            <span className="hidden md:inline text-sm text-gray-500 ml-2">
              {productCount} items
            </span>
          </div>

          {/* Center: Search Input */}
          <div className="flex-1 flex items-center">
            <svg
              className="w-5 h-5 text-gray-400 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
            
            {/* Clear Search Button */}
            {filters.searchQuery && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                className="ml-2 p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Right: View Mode and Sort */}
          <div className="flex items-center gap-4 ml-4">
            {/* View Mode Toggle - No background, no border */}
            <div className="flex items-center gap-2">
              {/* Bullet Points Icon (List View) - Comes first */}
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 ${viewMode === 'list' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
                title="List View"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              {/* Four Boxes Icon (Grid View) */}
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 ${viewMode === 'grid' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
                title="Grid View"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
              <select
                className="border-none outline-none bg-transparent text-sm text-gray-700 cursor-pointer focus:ring-0"
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value as FilterOptions['sortBy'])}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters (appears below the search bar) */}
        {(filters.searchQuery || filters.categories.length > 0 || filters.showOnSale || filters.minPrice > 0 || filters.maxPrice < 2000) && (
          <div className="mt-2 flex flex-wrap items-center gap-2 px-1">
            <span className="text-xs text-gray-500">Active:</span>
            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                "{filters.searchQuery}"
                <button
                  onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                  className="hover:text-blue-900"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {filters.categories.length > 0 && (
              <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                {filters.categories.length} cat
                <button
                  onClick={() => setFilters(prev => ({ ...prev, categories: [] }))}
                  className="hover:text-green-900"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {filters.showOnSale && (
              <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded text-xs">
                Sale
                <button
                  onClick={() => setFilters(prev => ({ ...prev, showOnSale: false }))}
                  className="hover:text-red-900"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            {(filters.minPrice > 0 || filters.maxPrice < 2000) && (
              <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">
                ${filters.minPrice}-${filters.maxPrice}
                <button
                  onClick={() => handlePriceChange(0, 2000)}
                  className="hover:text-purple-900"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 hover:bg-gray-100 rounded"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Filter Panel - Dropdown that appears below */}
        {isFilterOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 border border-[#E1E3E1] rounded-lg bg-white shadow-lg z-50">
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">${filters.minPrice}</span>
                      <span className="text-gray-600">${filters.maxPrice}</span>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        step="50"
                        value={filters.minPrice}
                        onChange={(e) => handlePriceChange(Number(e.target.value), filters.maxPrice)}
                        className="w-full h-1.5 bg-gray-300 rounded-full appearance-none cursor-pointer"
                      />
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        step="50"
                        value={filters.maxPrice}
                        onChange={(e) => handlePriceChange(filters.minPrice, Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-300 rounded-full appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Categories */}
                {categories.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categories
                    </label>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`cat-${category}`}
                            checked={filters.categories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor={`cat-${category}`} className="ml-2 text-sm text-gray-700">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="in-stock"
                        checked={filters.showInStock}
                        onChange={(e) => setFilters(prev => ({ ...prev, showInStock: e.target.checked }))}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
                        In Stock Only
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="on-sale"
                        checked={filters.showOnSale}
                        onChange={(e) => setFilters(prev => ({ ...prev, showOnSale: e.target.checked }))}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="on-sale" className="ml-2 text-sm text-gray-700">
                        On Sale Only
                      </label>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Rating
                  </label>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => {
                          handleSortChange('rating');
                          setIsFilterOpen(false);
                        }}
                        className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">& above</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-[#E1E3E1]">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-gray-600 border border-[#E1E3E1] rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}