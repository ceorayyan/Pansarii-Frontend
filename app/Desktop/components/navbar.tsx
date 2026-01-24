// app/Desktop/components/navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SearchBarWrapper from './navbar/SearchBarWrapper';
import { useCart } from '../../context/CartContext';

// Import React Icons
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaWhatsapp,
  FaShoppingCart,
  FaUser,
  FaTruck,
  FaBars,
  FaLeaf,
  FaGift,
  FaChevronDown
} from 'react-icons/fa';

// Import all products from data
import { allProducts } from '@/app/Desktop/data/products';

// Categories data - dynamically generated from products
const getCategoriesFromProducts = () => {
  const categoriesSet = new Set<string>();
  allProducts.forEach(product => {
    if (product.category) {
      categoriesSet.add(product.category);
    }
  });
  
  // Convert to array and sort alphabetically
  return Array.from(categoriesSet)
    .sort()
    .map(category => ({
      name: category,
      slug: category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    }));
};

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

export default function Navbar() {
  const pathname = usePathname();
  const { getCartCount, getCartTotal } = useCart();
  
  // Get categories from products
  const categories = getCategoriesFromProducts();
  
  // Format mock products for search suggestions - FIXED: Changed product.bestSeller to product.isBestSeller
  const mockProducts = allProducts.map(product => ({
    id: product.id.toString(),
    name: product.nameEn,
    slug: product.nameEn.toLowerCase().replace(/\s+/g, '-'),
    price: product.price,
    salePrice: product.oldPrice || undefined,
    image: product.img,
    category: product.category,
    rating: product.rating,
    isBestSeller: product.isBestSeller || false, // Fixed: changed from product.bestSeller to product.isBestSeller
    description: product.description,
  }));

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

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
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/pansariin.pk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/pansariin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/pansariin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>

            {/* Center - Text */}
            <div className="hidden md:block">
              <p className="text-sm font-semibold flex items-center gap-2">
                <FaLeaf className="w-4 h-4" />
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
              <FaWhatsapp className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">+92 300 1234567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Removed border and shadow */}
      <div className="bg-white">
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
                <FaTruck className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition">Track Order</span>
              </Link>

              {/* Sign In */}
              <Link 
                href="/login" 
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition group"
                aria-label="Sign In"
              >
                <FaUser className="w-5 h-5" />
                <span className="hidden lg:block text-sm font-medium text-gray-700 group-hover:text-green-700 transition">Sign In</span>
              </Link>

              {/* Cart */}
              <Link 
                href="/cart" 
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition group relative"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <FaShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span 
                      className="absolute -top-2 -right-2 w-5 h-5 bg-green-700 text-white text-xs rounded-full flex items-center justify-center font-bold"
                      aria-label={`${cartCount} items in cart`}
                    >
                      {cartCount > 9 ? '9+' : cartCount}
                    </span>
                  )}
                </div>
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition">Cart</span>
                  {cartCount > 0 && (
                    <span className="text-xs text-gray-500">
                      PKR {cartTotal.toLocaleString()}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Navbar - Removed border-top */}
        <div>
          <div className="mx-[4%] py-3">
            <div className="flex items-center justify-between">
              {/* Left - Categories Dropdown */}
              <div className="group relative">
                <Link 
                  href="/categories" 
                  className="flex items-center gap-3 px-6 py-2.5 bg-green-700 text-white rounded-full hover:bg-green-600 transition font-medium group"
                  aria-label="Browse Categories"
                >
                  <FaBars className="w-4 h-4" />
                  <span>Categories</span>
                  <FaChevronDown className="w-4 h-4" />
                </Link>
                
                {/* Categories Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {categories.slice(0, 8).map((category) => (
                    <Link 
                      key={category.slug}
                      href={`/shop?category=${category.slug}`}
                      className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium group"
                    >
                      <FaLeaf className="w-4 h-4" />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2">
                    <Link 
                      href="/categories"
                      className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold text-green-700 hover:text-green-800 hover:bg-green-50 transition"
                    >
                      View All Categories ({categories.length})
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
                <FaGift className="w-4 h-4" />
                Become an Affiliate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Removed border */}
      <div className="lg:hidden bg-white px-4 py-3">
        <SearchBarWrapper 
          placeholder="Search for products..."
          variant="mobile"
          mockProducts={mockProducts}
          className="w-full"
        />
      </div>

      {/* Simple Mobile Navigation - Removed border */}
      <div className="lg:hidden bg-white">
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

      {/* Announcement Bar - Removed border */}
      <div className="bg-green-50">
        <div className="mx-[4%] py-2">
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <FaTruck className="w-5 h-5" />
              <span>Free shipping on orders over PKR 2000</span>
            </div>
            <span className="hidden md:inline text-gray-400">•</span>
            <div className="hidden md:flex items-center gap-2 text-green-700">
              <FaGift className="w-4 h-4" />
              <span>Earn rewards on every purchase</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}