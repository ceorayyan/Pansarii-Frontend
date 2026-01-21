// app/new-arrivals/page.tsx

import ProductCard from '../Desktop/components/ProductCard';
// import ProductCard2 from '../Desktop/components/ProductCard2';

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
  oldPrice?: number | null; // Accepts number, null, or undefined
  sale?: string | null;
  category: string;
  isNew: boolean;
  isBestSeller: boolean;
  features: string[];
}

// Mock products data - In real app, fetch from database/API
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
    // Don't include oldPrice at all (undefined) instead of null
    // sale: undefined, // or don't include sale at all
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
    // Don't include oldPrice at all (undefined)
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
    // Don't include oldPrice at all (undefined)
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
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative mx-[4%] py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              New Arrivals
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
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
              <p className="text-gray-600 mt-1">
                Freshly added to our herbal collection
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-green-700">
                  <option>Sort by: Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === 'All Products'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid 1 - ProductCard Style */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Featured New Arrivals
            </h3>
            <span className="text-green-700 font-medium text-sm">
              Showing {newArrivalProducts.filter(p => p.isNew).length} products
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivalProducts
              .filter(product => product.isNew)
              .slice(0, 8)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="mb-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">🚀 Launch Special!</h3>
              <p className="text-green-100 mb-4">
                Get 20% OFF on all new arrivals + Free Shipping on orders above PKR 1500
              </p>
              <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                Shop Now & Save
              </button>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">20%</div>
              <div className="text-lg">OFF</div>
            </div>
          </div>
        </section>

        {/* Product Grid 2 - ProductCard2 Style */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Best Selling New Products
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">View as:</span>
              <div className="flex gap-1">
                <button className="p-2 bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button className="p-2 bg-green-100 text-green-700 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our New Arrivals?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '100% Pure & Natural',
                description: 'No chemicals, no preservatives',
                icon: '🌿'
              },
              {
                title: 'Lab Tested',
                description: 'Quality certified products',
                icon: '🔬'
              },
              {
                title: 'Made in Pakistan',
                description: 'Supporting local farmers',
                icon: '🇵🇰'
              },
              {
                title: 'Fast Delivery',
                description: 'Free shipping over PKR 2000',
                icon: '🚚'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-green-700 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Get Notified About New Arrivals
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Be the first to know about our latest herbal products and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
          <p className="text-green-200 text-sm mt-4">
            We respect your privacy. No spam ever.
          </p>
        </section>
      </main>
    </div>
  );
}