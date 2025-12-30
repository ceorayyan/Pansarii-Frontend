export interface Product {
  img: string;
  nameEn: string;
  nameUr: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  sale?: string;
  category?: string;
  inStock?: boolean;
}

export interface FilterOptions {
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  categories: string[];
  sortBy: 'default' | 'price-low-high' | 'price-high-low' | 'rating' | 'name';
  showOnSale: boolean;
  showInStock: boolean;
}

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  let filtered = [...products];

  // Search filter
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(product =>
      product.nameEn.toLowerCase().includes(query) ||
      product.nameUr.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }

  // Price filter
  filtered = filtered.filter(product =>
    product.price >= filters.minPrice && product.price <= filters.maxPrice
  );

  // Category filter
  if (filters.categories.length > 0) {
    filtered = filtered.filter(product =>
      product.category && filters.categories.includes(product.category)
    );
  }

  // On sale filter
  if (filters.showOnSale) {
    filtered = filtered.filter(product => product.sale);
  }

  // In stock filter
  if (filters.showInStock) {
    filtered = filtered.filter(product => product.inStock !== false);
  }

  // Sort products
  switch (filters.sortBy) {
    case 'price-low-high':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
      filtered.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
      break;
    default:
      // Keep original order
      break;
  }

  return filtered;
}

// Helper function to extract unique categories from products
export function getCategoriesFromProducts(products: Product[]): string[] {
  const categories = new Set<string>();
  products.forEach(product => {
    if (product.category) {
      categories.add(product.category);
    }
  });
  return Array.from(categories);
}