// Desktop/components/navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineClose, AiOutlineShoppingCart, AiOutlineHeart, AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cart');

  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Cold Pressed Almond Oil',
      price: 899,
      quantity: 2,
      image: '/images/product.png',
      slug: 'almond-oil'
    },
    {
      id: 2,
      name: 'Organic Coconut Oil',
      price: 749,
      quantity: 1,
      image: '/images/product.png',
      slug: 'coconut-oil'
    }
  ]);

  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 3,
      name: 'Black Seed Oil',
      price: 1299,
      image: '/images/product.png',
      slug: 'black-seed-oil'
    },
    {
      id: 4,
      name: 'Argan Oil',
      price: 1399,
      image: '/images/product.png',
      slug: 'argan-oil'
    }
  ]);

  // Suggested products
  const suggestedProducts = [
    {
      id: 5,
      name: 'Sesame Oil',
      price: 699,
      image: '/images/product.png',
      slug: 'sesame-oil'
    },
    {
      id: 6,
      name: 'Mustard Oil',
      price: 799,
      image: '/images/product.png',
      slug: 'mustard-oil'
    },
    {
      id: 7,
      name: 'Olive Oil',
      price: 1499,
      image: '/images/product.png',
      slug: 'olive-oil'
    }
  ];

  const isActive = (path: string) => pathname === path;

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (item: any) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    removeFromWishlist(item.id);
  };

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckout = () => {
    setIsSidebarOpen(false);
    router.push('/checkout');
  };

  const goToProductDetails = (slug: string) => {
    setIsSidebarOpen(false);
    router.push(`/productdetails?slug=${slug}`);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="mx-[4%]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-green-700">
                Pansari Inn
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`text-base font-medium transition-colors ${
                  isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/shop" 
                className={`text-base font-medium transition-colors ${
                  isActive('/shop') ? 'text-green-700 font-semibold' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Shop
              </Link>

              <Link 
                href="/blog" 
                className={`text-base font-medium transition-colors ${
                  isActive('/blog') ? 'text-green-700 font-semibold' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Blog
              </Link>

              <Link 
                href="/aboutus" 
                className={`text-base font-medium transition-colors ${
                  isActive('/aboutus') ? 'text-green-700 font-semibold' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                About Us
              </Link>

              <Link 
                href="/contact" 
                className={`text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-green-700 font-semibold' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Icon */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist Icon */}
              <button 
                onClick={() => {
                  setIsSidebarOpen(true);
                  setActiveTab('wishlist');
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition relative"
              >
                <AiOutlineHeart size={24} className="text-gray-700" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button 
                onClick={() => {
                  setIsSidebarOpen(true);
                  setActiveTab('cart');
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition relative"
              >
                <AiOutlineShoppingCart size={24} className="text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Icon */}
              <Link href="/login" className="p-2 hover:bg-gray-100 rounded-full transition">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive('/') ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive('/shop') ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Shop
              </Link>

              <Link 
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive('/blog') ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Blog
              </Link>

              <Link 
                href="/aboutus"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive('/aboutus') ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                About Us
              </Link>

              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive('/contact') ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contact
              </Link>

              <div className="border-t pt-2 mt-2">
                <Link 
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Login
                </Link>
                
                <Link 
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="bg-green-700 text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Pansari Inn</h2>
            <p className="text-xs text-green-100">Natural & Organic Products</p>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="hover:bg-green-600 p-2 rounded-full transition"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('cart')}
            className={`flex-1 py-3 font-semibold transition ${
              activeTab === 'cart'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <AiOutlineShoppingCart size={20} />
              Cart ({cartCount})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-3 font-semibold transition ${
              activeTab === 'wishlist'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <AiOutlineHeart size={20} />
              Wishlist ({wishlistItems.length})
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ height: 'calc(100vh - 280px)' }}>
          <div className="p-4">
            {activeTab === 'cart' ? (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <AiOutlineShoppingCart size={64} className="mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-medium">Your cart is empty</p>
                    <p className="text-sm mt-2">Add items to get started</p>
                    <button 
                      onClick={() => {
                        setIsSidebarOpen(false);
                        router.push('/shop');
                      }}
                      className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded cursor-pointer"
                          onClick={() => goToProductDetails(item.slug)}
                        />
                        <div className="flex-1">
                          <h3 
                            className="font-semibold text-sm mb-1 text-gray-900 cursor-pointer hover:text-green-700 transition"
                            onClick={() => goToProductDetails(item.slug)}
                          >
                            {item.name}
                          </h3>
                          <p className="text-green-700 font-bold text-lg">Rs. {item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="bg-gray-200 p-1 rounded hover:bg-gray-300 transition"
                            >
                              <AiOutlineMinus size={16} />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="bg-gray-200 p-1 rounded hover:bg-gray-300 transition"
                            >
                              <AiOutlinePlus size={16} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-600 hover:bg-red-50 p-1 rounded transition"
                            >
                              <AiOutlineDelete size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Suggested Products */}
                {cartItems.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">You May Also Like</h3>
                    <div className="space-y-3">
                      {suggestedProducts.map(product => (
                        <div key={product.id} className="flex gap-3 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded cursor-pointer"
                            onClick={() => goToProductDetails(product.slug)}
                          />
                          <div className="flex-1">
                            <h4 
                              className="font-semibold text-sm cursor-pointer hover:text-green-700 transition"
                              onClick={() => goToProductDetails(product.slug)}
                            >
                              {product.name}
                            </h4>
                            <p className="text-green-700 font-bold">Rs. {product.price.toLocaleString()}</p>
                            <button
                              onClick={() => addToCart(product)}
                              className="mt-1 text-xs bg-green-700 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {wishlistItems.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <AiOutlineHeart size={64} className="mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-medium">Your wishlist is empty</p>
                    <p className="text-sm mt-2">Save your favorite items here</p>
                    <button 
                      onClick={() => {
                        setIsSidebarOpen(false);
                        router.push('/shop');
                      }}
                      className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {wishlistItems.map(item => (
                      <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded cursor-pointer"
                          onClick={() => goToProductDetails(item.slug)}
                        />
                        <div className="flex-1">
                          <h3 
                            className="font-semibold text-sm mb-1 text-gray-900 cursor-pointer hover:text-green-700 transition"
                            onClick={() => goToProductDetails(item.slug)}
                          >
                            {item.name}
                          </h3>
                          <p className="text-green-700 font-bold text-lg mb-2">Rs. {item.price.toLocaleString()}</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => moveToCart(item)}
                              className="bg-green-700 text-white text-xs px-3 py-1.5 rounded hover:bg-green-600 transition flex items-center gap-1"
                            >
                              <AiOutlineShoppingCart size={14} />
                              Add to Cart
                            </button>
                            <button
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-red-600 hover:bg-red-50 p-1.5 rounded transition"
                            >
                              <AiOutlineDelete size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Footer - Checkout Section */}
        {activeTab === 'cart' && cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-green-700">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md hover:shadow-lg"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-gray-500">
              Free shipping on orders above Rs. 5000
            </p>
          </div>
        )}
      </div>
    </>
  );
}