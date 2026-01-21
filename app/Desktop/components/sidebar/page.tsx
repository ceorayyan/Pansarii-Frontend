"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  AiOutlineClose, 
  AiOutlineShoppingCart, 
  AiOutlineHeart, 
  AiOutlinePlus, 
  AiOutlineMinus, 
  AiOutlineDelete 
} from 'react-icons/ai';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
}

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

const PansariinnSidebar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'cart' | 'wishlist'>('cart');
  
  // Sample cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Basmati Rice Premium',
      price: 2500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop',
      slug: 'basmati-rice-premium'
    },
    {
      id: 2,
      name: 'Red Chili Powder',
      price: 450,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1599909533730-f9fc62c4cd08?w=100&h=100&fit=crop',
      slug: 'red-chili-powder'
    }
  ]);
  
  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 3,
      name: 'Organic Turmeric',
      price: 350,
      image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=100&h=100&fit=crop',
      slug: 'organic-turmeric'
    },
    {
      id: 4,
      name: 'Black Pepper Whole',
      price: 800,
      image: 'https://images.unsplash.com/photo-1596040001253-3d36c8f5ad38?w=100&h=100&fit=crop',
      slug: 'black-pepper-whole'
    }
  ]);

  const updateQuantity = (id: number, change: number): void => {
    setCartItems(cartItems.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeFromCart = (id: number): void => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id: number): void => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (item: WishlistItem): void => {
    const cartItem: CartItem = {
      ...item,
      quantity: 1
    };
    setCartItems([...cartItems, cartItem]);
    removeFromWishlist(item.id);
  };

  const handleCheckout = (): void => {
    setIsSidebarOpen(false);
    router.push('/pages/checkout');
  };

  const goToProductDetails = (slug: string): void => {
    setIsSidebarOpen(false);
    router.push(`/pages/productdetails?slug=${slug}`);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 z-50">
      {/* Toggle Buttons */}
      <div className="fixed top-20 right-0 flex flex-col gap-2 z-50">
        <button
          onClick={() => {
            setIsSidebarOpen(true);
            setActiveTab('cart');
          }}
          className="bg-[#197B33] text-white p-3 rounded-l-lg shadow-lg hover:bg-[#156529] transition-all relative"
          aria-label="Open Cart"
        >
          <AiOutlineShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <button
          onClick={() => {
            setIsSidebarOpen(true);
            setActiveTab('wishlist');
          }}
          className="bg-red-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-red-700 transition-all relative"
          aria-label="Open Wishlist"
        >
          <AiOutlineHeart size={24} />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -left-2 bg-[#197B33] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
              {wishlistItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="bg-[#197B33] text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Pansari Inn</h2>
            <p className="text-xs text-green-100">Natural Herbs & Products</p>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="hover:bg-[#156529] p-2 rounded-full transition"
            aria-label="Close Sidebar"
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
                ? 'bg-green-50 text-[#197B33] border-b-2 border-[#197B33]'
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
        <div className="flex-1 overflow-y-auto h-[calc(100vh-220px)] p-4">
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
                      router.push('/pages/shop');
                    }}
                    className="mt-4 px-6 py-2 bg-[#197B33] text-white rounded-lg hover:bg-[#156529] transition"
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
                          className="font-semibold text-sm mb-1 text-gray-900 cursor-pointer hover:text-[#197B33] transition"
                          onClick={() => goToProductDetails(item.slug)}
                        >
                          {item.name}
                        </h3>
                        <p className="text-[#197B33] font-bold text-lg">Rs. {item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-200 p-1 rounded hover:bg-gray-300 transition"
                            aria-label="Decrease quantity"
                          >
                            <AiOutlineMinus size={16} />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-gray-200 p-1 rounded hover:bg-gray-300 transition"
                            aria-label="Increase quantity"
                          >
                            <AiOutlinePlus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-600 hover:bg-red-50 p-1 rounded transition"
                            aria-label="Remove from cart"
                          >
                            <AiOutlineDelete size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      router.push('/pages/shop');
                    }}
                    className="mt-4 px-6 py-2 bg-[#197B33] text-white rounded-lg hover:bg-[#156529] transition"
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
                          className="font-semibold text-sm mb-1 text-gray-900 cursor-pointer hover:text-[#197B33] transition"
                          onClick={() => goToProductDetails(item.slug)}
                        >
                          {item.name}
                        </h3>
                        <p className="text-[#197B33] font-bold text-lg mb-2">Rs. {item.price.toLocaleString()}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => moveToCart(item)}
                            className="bg-[#197B33] text-white text-xs px-3 py-1.5 rounded hover:bg-[#156529] transition flex items-center gap-1"
                          >
                            <AiOutlineShoppingCart size={14} />
                            Add to Cart
                          </button>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-red-600 hover:bg-red-50 p-1.5 rounded transition"
                            aria-label="Remove from wishlist"
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

        {/* Footer - Checkout Section */}
        {activeTab === 'cart' && cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-[#197B33]">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#197B33] text-white py-3 rounded-lg font-semibold hover:bg-[#156529] transition shadow-md hover:shadow-lg"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-gray-500">
              Free shipping on orders above Rs. 5000
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PansariinnSidebar;