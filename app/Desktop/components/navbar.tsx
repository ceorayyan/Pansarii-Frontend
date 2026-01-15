// Desktop/components/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaWhatsapp,
  FaShoppingCart,
  FaUser,
  FaTruck,
  FaSearch,
  FaBars
} from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full">
      {/* Top Header - Green Background */}
      <div className="me-bgcolor-g text-white py-2">
        <div className="mx-[4%]">
          <div className="flex items-center justify-between">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>

            {/* Center - Text */}
            <div className="hidden md:block">
              <p className="text-sm font-semibold">100% Ayurvedic & Herbal Products</p>
            </div>

            {/* Right - WhatsApp */}
            <a 
              href="https://wa.me/923001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <FaWhatsapp className="w-5 h-5" />
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
            {/* Left - Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-green-700">
                Pansari Inn
              </div>
            </Link>

            {/* Center - Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-6 py-3 pr-12 border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-700 transition"
                />
               
              </div>
            </div>

            {/* Right - Cart, Sign In, Track Order */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <Link 
                href="/cart" 
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition relative"
              >
                <FaShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="hidden lg:block text-sm font-medium text-gray-700">Cart</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-700 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </Link>

              {/* Sign In */}
              <Link 
                href="/login" 
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                <FaUser className="w-5 h-5 text-gray-700" />
                <span className="hidden lg:block text-sm font-medium text-gray-700">Sign In</span>
              </Link>

              {/* Track Order */}
              <Link 
                href="/track-order" 
                className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                <FaTruck className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Track Order</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Navbar */}
        <div className="border-t">
          <div className="mx-[4%] py-3">
            <div className="flex items-center justify-between">
              {/* Left - Categories Button */}
              <div className="relative">
                <button 
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center gap-3 px-6 py-2.5 bg-green-700 text-white rounded-full hover:bg-green-600 transition font-medium"
                >
                  <FaBars className="w-4 h-4" />
                  <span>Categories</span>
                </button>

                {/* Categories Dropdown */}
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link href="/shop?category=oils" className="block px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium">
                      Oils & Ghee
                    </Link>
                    <Link href="/shop?category=herbs" className="block px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium">
                      Herbs & Spices
                    </Link>
                    <Link href="/shop?category=supplements" className="block px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium">
                      Supplements
                    </Link>
                    <Link href="/shop?category=beauty" className="block px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium">
                      Beauty & Skincare
                    </Link>
                    <Link href="/shop?category=tea" className="block px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium">
                      Tea & Beverages
                    </Link>
                    <Link href="/shop?category=honey" className="block px-6 py-3 hover:bg-gray-100 transition text-gray-700 font-medium">
                      Honey & Natural Sweeteners
                    </Link>
                  </div>
                )}
              </div>

              {/* Center - Navigation Links */}
              <nav className="hidden lg:flex items-center gap-8">
                <Link 
                  href="/" 
                  className={`text-sm font-medium transition ${
                    isActive('/') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/shop" 
                  className={`text-sm font-medium transition ${
                    isActive('/shop') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  Shop
                </Link>
                <Link 
                  href="/concern" 
                  className={`text-sm font-medium transition ${
                    isActive('/concern') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  By Concern
                </Link>
                <Link 
                  href="/category" 
                  className={`text-sm font-medium transition ${
                    isActive('/category') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  Category
                </Link>
                <Link 
                  href="/offers" 
                  className={`text-sm font-medium transition ${
                    isActive('/offers') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  Offers
                </Link>
                <Link 
                  href="/rewards" 
                  className={`text-sm font-medium transition ${
                    isActive('/rewards') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  Rewards
                </Link>
                <Link 
                  href="/blog" 
                  className={`text-sm font-medium transition ${
                    isActive('/blog') 
                      ? 'text-green-700' 
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  Blog
                </Link>
              </nav>

              {/* Right - Become Affiliate Button */}
              <Link 
                href="/affiliate" 
                className="hidden lg:block px-6 py-2.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition font-semibold text-sm shadow-md hover:shadow-lg"
              >
                Become an Affiliate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden bg-white border-b px-4 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2.5 pr-10 border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-700 transition text-sm"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-green-700 rounded-full flex items-center justify-center text-white">
            <FaSearch className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Click outside to close categories */}
      {isCategoriesOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsCategoriesOpen(false)}
        />
      )}
    </header>
  );
}