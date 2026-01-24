// app/new-arrivals/page.tsx

import ProductCard from '../Desktop/components/ProductCard';

// Define the product type that matches what ProductCard expects
interface NewArrivalProduct {
  id: string;
  img: string;
  nameEn: string;
  nameUr: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number | null;
  sale?: string | null;
  category: string;
  isNew: boolean;
  isBestSeller: boolean;
  features: string[];
}

// Mock products data
const newArrivalProducts: NewArrivalProduct[] = [
  {
    id: '1',
    img: '/images/products/apricot-oil.jpg',
    nameEn: "Pure Apricot Oil",
    nameUr: "خالص خوبانی تیل",
    description: "Cold-pressed for skin & hair",
    rating: 4.7,
    reviews: 406,
    price: 1149,
    oldPrice: 1499,
    sale: "23% OFF",
    category: 'Oils & Ghee',
    isNew: true,
    isBestSeller: true,
    features: [
      'Acts as anti-tan agent',
      'Healthy glowing skin',
      'Improves hair health'
    ]
  },
  {
    id: '2',
    img: '/images/products/turmeric.jpg',
    nameEn: "Organic Turmeric Powder",
    nameUr: "نامیاتی ہلدی پاؤڈر",
    description: "Pure organic for cooking & health",
    rating: 4.5,
    reviews: 289,
    price: 299,
    oldPrice: 399,
    sale: "25% OFF",
    category: 'Herbs & Spices',
    isNew: true,
    isBestSeller: false,
    features: [
      'Boosts immunity',
      'Anti-inflammatory',
      'Natural antioxidant'
    ]
  },
  {
    id: '3',
    img: '/images/products/honey.jpg',
    nameEn: "Himalayan Honey",
    nameUr: "ہمالیائی شہد",
    description: "Pure from Himalayan flowers",
    rating: 4.8,
    reviews: 512,
    price: 899,
    category: 'Honey & Sweeteners',
    isNew: true,
    isBestSeller: true,
    features: [
      '100% Natural',
      'Rich in antioxidants',
      'Energy booster'
    ]
  },
  {
    id: '4',
    img: '/images/products/face-wash.jpg',
    nameEn: "Herbal Face Wash",
    nameUr: "ہربل فیس واش",
    description: "Natural for glowing skin",
    rating: 4.3,
    reviews: 187,
    price: 549,
    oldPrice: 699,
    sale: "21% OFF",
    category: 'Beauty & Skincare',
    isNew: true,
    isBestSeller: false,
    features: [
      'Removes impurities',
      'Non-drying formula',
      'Suitable for all skin'
    ]
  },
  {
    id: '5',
    img: '/images/products/ashwagandha.jpg',
    nameEn: "Ashwagandha Capsules",
    nameUr: "اشواگنڈھا کیپسول",
    description: "Pure for stress relief",
    rating: 4.6,
    reviews: 324,
    price: 799,
    category: 'Supplements',
    isNew: true,
    isBestSeller: true,
    features: [
      'Reduces stress',
      'Improves sleep',
      'Boosts immunity'
    ]
  },
  {
    id: '6',
    img: '/images/products/green-tea.jpg',
    nameEn: "Green Tea Leaves",
    nameUr: "گرین ٹی پتیاں",
    description: "Premium with antioxidants",
    rating: 4.4,
    reviews: 213,
    price: 449,
    oldPrice: 599,
    sale: "25% OFF",
    category: 'Tea & Beverages',
    isNew: true,
    isBestSeller: false,
    features: [
      'Weight management',
      'Rich in antioxidants',
      'Boosts metabolism'
    ]
  },
  {
    id: '7',
    img: '/images/products/coconut-oil.jpg',
    nameEn: "Coconut Oil Extra Virgin",
    nameUr: "ناریل کا تیل ورجن",
    description: "Cold-pressed for cooking & hair",
    rating: 4.7,
    reviews: 467,
    price: 699,
    oldPrice: 899,
    sale: "22% OFF",
    category: 'Oils & Ghee',
    isNew: false,
    isBestSeller: true,
    features: [
      'For cooking & hair',
      'Moisturizes skin',
      'High in MCTs'
    ]
  },
  {
    id: '8',
    img: '/images/products/aloe-vera.jpg',
    nameEn: "Aloe Vera Gel",
    nameUr: "ایلوویرا جیل",
    description: "100% pure for skin care",
    rating: 4.2,
    reviews: 156,
    price: 399,
    category: 'Beauty & Skincare',
    isNew: false,
    isBestSeller: false,
    features: [
      'Soothes skin',
      'Hydrating',
      'Sunburn relief'
    ]
  },
];

// Categories for filter
const categories = [
  'All Products',
  'Oils & Ghee',
  'Herbs & Spices',
  'Beauty & Skincare',
  'Honey & Sweeteners',
  'Tea & Beverages',
  'Supplements'
];

export default function NewArrivalsPage() {
  const featuredProducts = newArrivalProducts.filter(product => product.isNew).slice(0, 8);
  const bestSellingProducts = newArrivalProducts.filter(product => product.isBestSeller && product.isNew);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="relative mx-[4%] py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              New Arrivals
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-6">
              Discover our latest collection of 100% Ayurvedic & Herbal products
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium">
                🚀 Just Launched
              </span>
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium">
                ⭐ Premium Quality
              </span>
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium">
                📦 Free Shipping
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-[4%] py-8 md:py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Products
              </h2>
              <p className="text-gray-700 mt-1">
                Freshly added to our herbal collection
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600">
                  <option className="text-gray-800">Sort by: Newest First</option>
                  <option className="text-gray-800">Price: Low to High</option>
                  <option className="text-gray-800">Price: High to Low</option>
                  <option className="text-gray-800">Most Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  category === 'All Products'
                    ? 'bg-green-700 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - Featured New Arrivals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Featured New Arrivals
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Handpicked premium quality products
              </p>
            </div>
            <span className="text-green-800 font-semibold text-sm bg-green-50 px-3 py-1.5 rounded-lg">
              {featuredProducts.length} products
            </span>
          </div>
          
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">No Featured Products</h4>
              <p className="text-gray-600">Check back soon for new arrivals!</p>
            </div>
          )}
        </section>

        {/* Special Offer Banner */}
        <section className="mb-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">🚀 LAUNCH OFFER</span>
                <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">LIMITED TIME</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Launch Special!</h3>
              <p className="text-green-100 mb-4">
                Get 20% OFF on all new arrivals + Free Shipping on orders above PKR 1500
              </p>
              <button className="px-6 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md">
                Shop Now & Save
              </button>
            </div>
            <div className="text-center bg-white/10 p-6 rounded-xl">
              <div className="text-5xl font-bold text-white">20%</div>
              <div className="text-lg text-green-100 font-medium">OFF</div>
              <p className="text-green-200 text-sm mt-2">New Arrivals</p>
            </div>
          </div>
        </section>

        {/* Best Selling New Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Best Selling New Products
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Most popular among our customers
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 text-sm font-medium">View:</span>
              <div className="flex gap-2">
                <button className="p-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button className="p-2.5 bg-green-100 text-green-800 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {bestSellingProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellingProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">No Best Sellers Yet</h4>
              <p className="text-gray-600">These products are new. Be the first to review!</p>
            </div>
          )}
        </section>

        {/* Benefits Section */}
        <section className="mb-12 bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our New Arrivals?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '100% Pure & Natural',
                description: 'No chemicals, no preservatives',
                icon: '🌿',
                color: 'text-green-700'
              },
              {
                title: 'Lab Tested',
                description: 'Quality certified products',
                icon: '🔬',
                color: 'text-blue-700'
              },
              {
                title: 'Made in Pakistan',
                description: 'Supporting local farmers',
                icon: '🇵🇰',
                color: 'text-amber-700'
              },
              {
                title: 'Fast Delivery',
                description: 'Free shipping over PKR 2000',
                icon: '🚚',
                color: 'text-emerald-700'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
                <div className={`text-3xl mb-3 ${benefit.color}`}>{benefit.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-green-800 to-emerald-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Get Notified About New Arrivals
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Be the first to know about our latest herbal products and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow">
              Subscribe
            </button>
          </div>
          <p className="text-green-200 text-sm mt-4">
            We respect your privacy. No spam ever.
          </p>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-800">{newArrivalProducts.length}</div>
            <div className="text-sm text-gray-700">New Products</div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-emerald-800">
              {newArrivalProducts.filter(p => p.isBestSeller).length}
            </div>
            <div className="text-sm text-gray-700">Best Sellers</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-800">
              {Math.round(newArrivalProducts.reduce((acc, p) => acc + p.rating, 0) / newArrivalProducts.length * 10) / 10}
            </div>
            <div className="text-sm text-gray-700">Avg Rating</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-amber-800">20%</div>
            <div className="text-sm text-gray-700">Launch Discount</div>
          </div>
        </div>
      </main>
    </div>
  );
}