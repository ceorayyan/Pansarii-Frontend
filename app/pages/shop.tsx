"use client";

import ProductCard from "@components/ProductCard";

export default function Shop() {
  // 20 Products data
  const allProducts = [
    { 
      img: '/images/product.png', 
      nameEn: 'Organic Lavender Essential Oil', 
      nameUr: 'روغن باکان بيد', 
      description: 'Natural DHT Blocker | With Saw...', 
      rating: 4.7, 
      reviews: 406, 
      price: 1149, 
      oldPrice: 1499, 
      sale: '20% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Green Tea Extract', 
      nameUr: 'گرین ٹی کا عرق', 
      description: 'Boosts metabolism...', 
      rating: 4.6, 
      reviews: 320, 
      price: 999, 
      oldPrice: 1299 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Chamomile Essential Oil', 
      nameUr: 'کیمومائل تیل', 
      description: 'Relaxing & soothing oil...', 
      rating: 4.8, 
      reviews: 210, 
      price: 1199, 
      oldPrice: 1399, 
      sale: '15% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Mint Herbal Oil', 
      nameUr: 'پودینے کا تیل', 
      description: 'Refreshing oil...', 
      rating: 4.5, 
      reviews: 180, 
      price: 899, 
      oldPrice: 1099 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Rosehip Oil', 
      nameUr: 'گلاب ہپ تیل', 
      description: 'Anti-aging...', 
      rating: 4.6, 
      reviews: 220, 
      price: 1099, 
      oldPrice: 1399, 
      sale: '15% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Argan Oil', 
      nameUr: 'ارگن کا تیل', 
      description: 'Hair & skin care...', 
      rating: 4.7, 
      reviews: 150, 
      price: 1299, 
      oldPrice: 1599 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Jojoba Oil', 
      nameUr: 'جوجوبا تیل', 
      description: 'Moisturizing...', 
      rating: 4.5, 
      reviews: 180, 
      price: 999, 
      oldPrice: 1299, 
      sale: '22% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Tea Tree Oil', 
      nameUr: 'ٹی ٹری آئل', 
      description: 'Acne control...', 
      rating: 4.6, 
      reviews: 210, 
      price: 1199, 
      oldPrice: 1499 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Almond Oil', 
      nameUr: 'بادام کا تیل', 
      description: 'Cold pressed almond oil...', 
      rating: 4.7, 
      reviews: 190, 
      price: 899, 
      oldPrice: 1199, 
      sale: '25% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Coconut Oil', 
      nameUr: 'ناریل کا تیل', 
      description: 'Virgin coconut oil...', 
      rating: 4.8, 
      reviews: 310, 
      price: 749, 
      oldPrice: 999 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Black Seed Oil', 
      nameUr: 'کلونجی کا تیل', 
      description: 'Cold pressed black seed...', 
      rating: 4.9, 
      reviews: 420, 
      price: 1299, 
      oldPrice: 1699, 
      sale: '24% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Olive Oil', 
      nameUr: 'زیتون کا تیل', 
      description: 'Extra virgin olive oil...', 
      rating: 4.6, 
      reviews: 180, 
      price: 1099, 
      oldPrice: 1399 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Castor Oil', 
      nameUr: 'ارنڈی کا تیل', 
      description: 'For hair growth...', 
      rating: 4.5, 
      reviews: 160, 
      price: 699, 
      oldPrice: 899, 
      sale: '22% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Sesame Oil', 
      nameUr: 'تل کا تیل', 
      description: 'Cold pressed sesame...', 
      rating: 4.4, 
      reviews: 140, 
      price: 799, 
      oldPrice: 999 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Mustard Oil', 
      nameUr: 'سرسوں کا تیل', 
      description: 'Pure mustard oil...', 
      rating: 4.7, 
      reviews: 220, 
      price: 649, 
      oldPrice: 849, 
      sale: '24% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Eucalyptus Oil', 
      nameUr: 'یوکالیپٹس آئل', 
      description: 'For cold & cough...', 
      rating: 4.8, 
      reviews: 190, 
      price: 899, 
      oldPrice: 1199 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Peppermint Oil', 
      nameUr: 'پودینہ آئل', 
      description: 'For digestion...', 
      rating: 4.5, 
      reviews: 170, 
      price: 799, 
      oldPrice: 999, 
      sale: '20% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Lemon Oil', 
      nameUr: 'لیموں کا تیل', 
      description: 'For skin cleansing...', 
      rating: 4.6, 
      reviews: 150, 
      price: 699, 
      oldPrice: 899 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Orange Oil', 
      nameUr: 'مالٹے کا تیل', 
      description: 'Refreshing citrus oil...', 
      rating: 4.7, 
      reviews: 210, 
      price: 899, 
      oldPrice: 1199, 
      sale: '25% OFF' 
    },
    { 
      img: '/images/product.png', 
      nameEn: 'Ginger Oil', 
      nameUr: 'ادرک کا تیل', 
      description: 'For pain relief...', 
      rating: 4.5, 
      reviews: 180, 
      price: 799, 
      oldPrice: 1099 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-[4%] py-6">
          <h1 className="text-3xl font-bold text-gray-900">Shop Products</h1>
        </div>
      </div>

      {/* Responsive Product Grid with PROPER spacing */}
      <div className="mx-[4%] py-8">
        {/* 
          Responsive grid with LARGER gaps: 
          - gap-8 on larger screens (2rem = 32px)
          - gap-6 on medium screens (1.5rem = 24px)
          - gap-4 on small screens (1rem = 16px)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {allProducts.map((product, index) => (
            <div key={index} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}