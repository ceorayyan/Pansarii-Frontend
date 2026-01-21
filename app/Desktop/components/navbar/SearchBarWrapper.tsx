// components/navbar/SearchBarWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const SearchBar = dynamic(() => import('./searchbar'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full">
      <input
        type="search"
        placeholder="Search for products..."
        className="w-full px-6 py-3 pr-12 border-2 border-gray-200 rounded-full bg-gray-50 animate-pulse"
        disabled
      />
    </div>
  ),
});

interface SearchBarWrapperProps {
  placeholder?: string;
  variant?: 'desktop' | 'mobile';
  mockProducts?: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    salePrice?: number;
    image?: string;
    category?: string;
    rating?: number;
    isBestSeller?: boolean;
  }>;
  className?: string;
}

export default function SearchBarWrapper({
  placeholder = "Search for products...",
  variant = 'desktop',
  mockProducts = [],
  className = ""
}: SearchBarWrapperProps) {
  return (
    <SearchBar 
      placeholder={placeholder}
      variant={variant}
      mockProducts={mockProducts}
      className={className}
    />
  );
}