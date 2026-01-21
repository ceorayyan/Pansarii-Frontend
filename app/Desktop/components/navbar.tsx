// components/navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { headers } from 'next/headers';
import SearchBarWrapper from './navbar/SearchBarWrapper';

// 🔽 MOCK PRODUCTS DATA 🔽
const mockProducts = [
  {
    id: '1',
    name: 'Pure Honey - 100% Natural',
    slug: 'pure-honey-natural',
    price: 1200,
    salePrice: 999,
    image: '/products/honey.jpg',
    category: 'Honey & Natural Sweeteners',
    rating: 4.8,
    isBestSeller: true,
    description: 'Pure, unprocessed honey from Himalayan flowers'
  },
  {
    id: '2',
    name: 'Herbal Green Tea',
    slug: 'herbal-green-tea',
    price: 500,
    image: '/products/green-tea.jpg',
    category: 'Tea & Beverages',
    rating: 4.5,
    isBestSeller: false,
    description: 'Antioxidant-rich green tea with herbs'
  },
  {
    id: '3',
    name: 'Extra Virgin Coconut Oil',
    slug: 'coconut-oil-virgin',
    price: 800,
    salePrice: 699,
    image: '/products/coconut-oil.jpg',
    category: 'Oils & Ghee',
    rating: 4.7,
    isBestSeller: true,
    description: 'Cold-pressed virgin coconut oil for cooking & hair'
  },
  {
    id: '4',
    name: 'Organic Turmeric Powder',
    slug: 'turmeric-powder-organic',
    price: 300,
    image: '/products/turmeric.jpg',
    category: 'Herbs & Spices',
    rating: 4.6,
    isBestSeller: false,
    description: 'Pure turmeric powder for cooking and health'
  },
  {
    id: '5',
    name: 'Aloe Vera Gel',
    slug: 'aloe-vera-gel',
    price: 600,
    image: '/products/aloe-vera.jpg',
    category: 'Beauty & Skincare',
    rating: 4.4,
    isBestSeller: false,
    description: '100% pure aloe vera gel for skin & hair'
  },
  {
    id: '6',
    name: 'Desi Ghee (Pure)',
    slug: 'desi-ghee-pure',
    price: 1500,
    salePrice: 1299,
    image: '/products/ghee.jpg',
    category: 'Oils & Ghee',
    rating: 4.9,
    isBestSeller: true,
    description: 'Traditional homemade desi ghee'
  },
];

// SVG icons as server components
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.25 5.25h-2.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zm-5 0h-5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25zm5 7.5h-2.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M20 3.894a8.218 8.218 0 01-2.356.646 4.115 4.115 0 001.804-2.27 8.193 8.193 0 01-2.605.996A4.104 4.104 0 009.85 6.573 11.648 11.648 0 012.8 2.538a4.104 4.104 0 001.27 5.477A4.075 4.075 0 01.8 7.343v.052a4.104 4.104 0 003.292 4.022 4.105 4.105 0 01-1.853.07 4.104 4.104 0 003.833 2.85 8.23 8.23 0 01-5.095 1.756c-.33 0-.656-.02-.976-.057a11.595 11.595 0 006.29 1.843c7.547 0 11.674-6.253 11.674-11.675 0-.178 0-.355-.012-.531A8.349 8.349 0 0020 3.894z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.293 7.087a.75.75 0 01.403.655v4.516a.75.75 0 01-1.184.614l-3.6-2.258a.75.75 0 010-1.228l3.6-2.258a.75.75 0 01.781-.039z" clipRule="evenodd" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 1.873.488 3.627 1.343 5.15L0 20l4.85-1.343A9.953 9.953 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5 13.5c-.18.32-.43.61-.74.85-.31.24-.66.43-1.03.57a5.5 5.5 0 01-2.23.38c-1.5 0-2.97-.48-4.2-1.37C5.22 13.02 4 11.1 4 8.88c0-1.38.51-2.68 1.44-3.66A5.38 5.38 0 019.5 4c1.5 0 2.97.48 4.2 1.37C14.78 6.98 16 8.9 16 11.12c0 .57-.11 1.13-.33 1.66-.22.53-.54 1.02-.97 1.45l.3 1.77-1.77-.3z" clipRule="evenodd" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
  </svg>
);

const GiftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Categories data
const categories = [
  { name: 'Oils & Ghee', slug: 'oils' },
  { name: 'Herbs & Spices', slug: 'herbs' },
  { name: 'Supplements', slug: 'supplements' },
  { name: 'Beauty & Skincare', slug: 'beauty' },
  { name: 'Tea & Beverages', slug: 'tea' },
  { name: 'Honey & Natural Sweeteners', slug: 'honey' },
];

// Navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'By Concern', href: '/concern' },
  { name: 'Category', href: '/category' },
  { name: 'Offers', href: '/offers' },
  { name: 'Rewards', href: '/rewards' },
  { name: 'Blog', href: '/blog' },
];

// Fetch cart data on server
async function getCartData() {
  // Use mock products for cart items
  const cartItems = [
    mockProducts[0], // Pure Honey
    mockProducts[2], // Coconut Oil
    mockProducts[5], // Desi Ghee
  ].map(product => ({
    id: product.id,
    name: product.name,
    quantity: Math.floor(Math.random() * 3) + 1,
    price: product.salePrice || product.price,
  }));

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    count,
    items: cartItems,
    total,
  };
}

export default async function Navbar() {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '/';
  
  // Fetch cart data on server
  const cartData = await getCartData();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full">
      {/* Top Header - Green Background */}
      <div className="bg-green-700 text-white py-2">
        <div className="mx-[4%]">
          <div className="flex items-center justify-between">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com/pansariin.pk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://instagram.com/pansariin.pk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://twitter.com/pansariin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a 
                href="https://youtube.com/pansariin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>

            {/* Center - Text */}
            <div className="hidden md:block">
              <p className="text-sm font-semibold flex items-center gap-2">
                <LeafIcon />
                100% Ayurvedic & Herbal Products
              </p>
            </div>

            {/* Right - WhatsApp */}
            <a 
              href="https://wa.me/923001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition group"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
              <span className="text-sm font-medium hidden sm:block">+92 300 1234567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b shadow-sm">
        {/* Upper Navbar */}
        <div className="mx-[4%] py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Pansariin.pk Home">
       
<div className="relative w-48 h-12">
  <Image
    src="/images/logo.png"
    alt="Pansariin.pk Logo"
    fill
    className="object-contain"
    priority
    sizes="192px"
    // Remove the onError handler
  />
</div>
            </Link>

            {/* Desktop Search Bar */}
            <div className="flex-1 max-w-2xl hidden lg:block">
              <SearchBarWrapper 
                placeholder="Search for products..."
                variant="desktop"
                mockProducts={mockProducts}
                className="w-full"
              />
            </div>

            {/* Right - Cart, Sign In, Track Order */}
            <div className="flex items-center gap-4">
              {/* Track Order */}
              <Link 
                href="/track-order" 
                className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition group"
                aria-label="Track Order"
              >
                <TruckIcon />
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition">Track Order</span>
              </Link>

              {/* Sign In */}
              <Link 
                href="/login" 
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition group"
                aria-label="Sign In"
              >
                <UserIcon />
                <span className="hidden lg:block text-sm font-medium text-gray-700 group-hover:text-green-700 transition">Sign In</span>
              </Link>

              {/* Cart */}
              <Link 
                href="/cart" 
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition group relative"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingCartIcon />
                  {cartData.count > 0 && (
                    <span 
                      className="absolute -top-2 -right-2 w-5 h-5 bg-green-700 text-white text-xs rounded-full flex items-center justify-center font-bold"
                      aria-label={`${cartData.count} items in cart`}
                    >
                      {cartData.count > 9 ? '9+' : cartData.count}
                    </span>
                  )}
                </div>
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition">Cart</span>
                  {cartData.items.length > 0 && (
                    <span className="text-xs text-gray-500">
                      PKR {cartData.total.toLocaleString()}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Navbar */}
        <div className="border-t">
          <div className="mx-[4%] py-3">
            <div className="flex items-center justify-between">
              {/* Left - Categories Dropdown */}
              <div className="group relative">
                <Link 
                  href="/categories" 
                  className="flex items-center gap-3 px-6 py-2.5 bg-green-700 text-white rounded-full hover:bg-green-600 transition font-medium group"
                  aria-label="Browse Categories"
                >
                  <MenuIcon />
                  <span>Categories</span>
                  <ChevronDownIcon />
                </Link>
                
                {/* Categories Dropdown - Hidden until hover on desktop */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {categories.map((category) => (
                    <Link 
                      key={category.slug}
                      href={`/shop?category=${category.slug}`}
                      className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium group"
                    >
                      <LeafIcon />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <Link 
                      href="/categories"
                      className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold text-green-700 hover:text-green-800 hover:bg-green-50 transition"
                    >
                      View All Categories
                    </Link>
                  </div>
                </div>
              </div>

              {/* Center - Navigation Links */}
              <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`text-sm font-medium transition ${
                      isActive(link.href) 
                        ? 'text-green-700 font-semibold' 
                        : 'text-gray-700 hover:text-green-700'
                    }`}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Right - Become Affiliate Button */}
              <Link 
                href="/affiliate" 
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition font-semibold text-sm shadow-md hover:shadow-lg group"
                aria-label="Become an Affiliate"
              >
                <GiftIcon />
                Become an Affiliate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden bg-white border-b px-4 py-3">
        <SearchBarWrapper 
          placeholder="Search for products..."
          variant="mobile"
          mockProducts={mockProducts}
          className="w-full"
        />
      </div>

      {/* Simple Mobile Navigation */}
      <div className="lg:hidden bg-white border-t">
        <div className="mx-[4%] py-2">
          <nav className="flex items-center justify-around" aria-label="Mobile navigation">
            {navLinks.slice(0, 4).map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-xs font-medium transition px-2 py-1 ${
                  isActive(link.href) 
                    ? 'text-green-700' 
                    : 'text-gray-700 hover:text-green-700'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="mx-[4%] py-2">
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <TruckIcon />
              <span>Free shipping on orders over PKR 2000</span>
            </div>
            <span className="hidden md:inline text-gray-400">•</span>
            <div className="hidden md:flex items-center gap-2 text-green-700">
              <GiftIcon />
              <span>Earn rewards on every purchase</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}