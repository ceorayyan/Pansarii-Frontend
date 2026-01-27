// app/wishlist/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart, FaTrash, FaStar, FaBox } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

interface WishlistItem {
  id: string | number;
  img: string;
  nameEn: string;
  nameUr: string;
  price: number;
  oldPrice?: number;
  sale?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  category?: string;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setMounted(true);
    // Load wishlist from localStorage
    const saved = localStorage.getItem('pansari-wishlist');
    if (saved) {
      try {
        setWishlistItems(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading wishlist:', error);
      }
    }
  }, []);

  const removeFromWishlist = (id: string | number) => {
    const updated = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem('pansari-wishlist', JSON.stringify(updated));
  };

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      img: item.img,
      nameEn: item.nameEn,
      nameUr: item.nameUr,
      price: item.price,
      size: '15ml' // Default size
    });
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach(item => {
      if (item.inStock) {
        handleAddToCart(item);
      }
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem('pansari-wishlist');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-[4%] py-4">
          <p className="text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            {' '}/{' '}
            <span className="text-gray-900 font-medium">Wishlist</span>
          </p>
        </div>
      </div>

      <div className="mx-[4%] py-8">
        {wishlistItems.length === 0 ? (
          // Empty Wishlist
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-200">
            <div className="w-24 h-24 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
              <FaHeart className="w-12 h-12 text-red-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save your favorite products here!</p>
            <Link 
              href="/shop"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <FaHeart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
                    <p className="text-gray-600 text-sm mt-1">
                      {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddAllToCart}
                    className="px-6 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-600 transition flex items-center gap-2"
                  >
                    <FaShoppingCart className="w-4 h-4" />
                    Add All to Cart
                  </button>
                  <button
                    onClick={clearWishlist}
                    className="px-6 py-3 border border-red-300 text-red-600 rounded-full font-semibold hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <FaTrash className="w-4 h-4" />
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative aspect-square bg-gray-50">
                    <img
                      src={item.img}
                      alt={item.nameEn}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder-product.jpg';
                      }}
                    />
                    {item.sale && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
                          {item.sale}
                        </span>
                      </div>
                    )}
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors shadow-md"
                    >
                      <FiX className="w-5 h-5 text-red-600" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {item.nameEn}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{item.nameUr}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{item.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({item.reviews} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        PKR {item.price.toLocaleString()}
                      </span>
                      {item.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          PKR {item.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.inStock}
                        className={`flex-1 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                          item.inStock
                            ? 'bg-green-700 text-white hover:bg-green-600'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <FaShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="px-4 py-2.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-8 text-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-600 transition"
              >
                <FaBox className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}