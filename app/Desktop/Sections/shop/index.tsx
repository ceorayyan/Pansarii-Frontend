'use client';

import { useState, useMemo, useEffect } from 'react';
import { Product, FilterOptions, filterProducts, getCategoriesFromProducts } from "../../utils/filterProducts";
import ShopContent from "./ShopContent";
import Footer from "../Footer"; 

export default function Shop() {
  // 20 Products data with categories
  const allProducts: Product[] = [
    { 
      img: '/images/product.png', 
      nameEn: 'Organic Lavender Essential Oil', 
      nameUr: 'روغن باکان بید', 
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
    }
  ];

  const categories = useMemo(() => getCategoriesFromProducts(allProducts), [allProducts]);

  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 2000,
    categories: [],
    sortBy: 'default',
    showOnSale: false,
    showInStock: true,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = useMemo(() => 
    filterProducts(allProducts, filters),
    [allProducts, filters]
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Fixed: Changed useState to useEffect
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ShopContent
        categories={categories}
        filters={filters}
        setFilters={setFilters}
        filteredProducts={filteredProducts}
        currentProducts={currentProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        indexOfFirstProduct={indexOfFirstProduct}
        indexOfLastProduct={indexOfLastProduct}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}