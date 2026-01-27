// app/offers/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaTag, 
  FaPercent, 
  FaFire, 
  FaClock,
  FaShoppingCart,
  FaStar,
  FaGift,
  FaBolt
} from 'react-icons/fa';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface Offer {
  id: string;
  type: 'discount' | 'bogo' | 'flash' | 'seasonal' | 'bundle';
  title: string;
  description: string;
  discount: string;
  code?: string;
  validUntil: string;
  minPurchase?: number;
  image: string;
  products?: string[];
  featured?: boolean;
}

const offers: Offer[] = [
  {
    id: '1',
    type: 'flash',
    title: 'Flash Sale: 40% OFF',
    description: 'Limited time offer on selected herbal products',
    discount: '40% OFF',
    code: 'FLASH40',
    validUntil: '2026-01-31',
    minPurchase: 2000,
    image: '/images/offers/flash-sale.jpg',
    featured: true
  },
  {
    id: '2',
    type: 'seasonal',
    title: 'Winter Wellness Sale',
    description: 'Get healthy this winter with special discounts',
    discount: '25% OFF',
    code: 'WINTER25',
    validUntil: '2026-02-28',
    minPurchase: 1500,
    image: '/images/offers/winter-sale.jpg',
    featured: true
  },
  {
    id: '3',
    type: 'bogo',
    title: 'Buy 1 Get 1 Free',
    description: 'On all honey products',
    discount: 'BOGO',
    code: 'HONEY2X',
    validUntil: '2026-02-15',
    image: '/images/offers/bogo.jpg'
  },
  {
    id: '4',
    type: 'discount',
    title: 'First Order Discount',
    description: 'New customers get 20% off their first purchase',
    discount: '20% OFF',
    code: 'NEW20',
    validUntil: '2026-12-31',
    minPurchase: 1000,
    image: '/images/offers/new-customer.jpg'
  },
  {
    id: '5',
    type: 'bundle',
    title: 'Skincare Bundle',
    description: 'Complete skincare routine at 30% off',
    discount: '30% OFF',
    code: 'SKIN30',
    validUntil: '2026-03-31',
    image: '/images/offers/bundle.jpg'
  },
  {
    id: '6',
    type: 'discount',
    title: 'Free Shipping',
    description: 'Free shipping on orders above PKR 5,000',
    discount: 'FREE SHIP',
    code: 'FREESHIP',
    validUntil: '2026-12-31',
    minPurchase: 5000,
    image: '/images/offers/free-shipping.jpg'
  }
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | Offer['type']>('all');

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getOfferIcon = (type: Offer['type']) => {
    switch (type) {
      case 'flash':
        return <FaBolt className="w-5 h-5" />;
      case 'seasonal':
        return <FaFire className="w-5 h-5" />;
      case 'bogo':
        return <FaGift className="w-5 h-5" />;
      case 'bundle':
        return <FaShoppingCart className="w-5 h-5" />;
      default:
        return <FaPercent className="w-5 h-5" />;
    }
  };

  const getOfferColor = (type: Offer['type']) => {
    switch (type) {
      case 'flash':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'seasonal':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'bogo':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'bundle':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  const filteredOffers = filter === 'all' 
    ? offers 
    : offers.filter(offer => offer.type === filter);

  const featuredOffers = offers.filter(offer => offer.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="mx-[4%] py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <FaTag className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold">Special Offers</h1>
          </div>
          <p className="text-green-100 text-lg max-w-2xl">
            Save big on your favorite products! Check out our latest deals and exclusive discounts.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-[4%] py-4">
          <p className="text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            {' '}/{' '}
            <span className="text-gray-900 font-medium">Offers</span>
          </p>
        </div>
      </div>

      <div className="mx-[4%] py-8">
        {/* Featured Offers Banner */}
        {featuredOffers.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaFire className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">Hot Deals</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="relative bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl overflow-hidden shadow-xl group"
                >
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="relative p-8 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaBolt className="w-5 h-5" />
                          <span className="text-sm font-semibold uppercase tracking-wide">
                            Featured Deal
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                        <p className="text-white/90">{offer.description}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <p className="text-2xl font-bold">{offer.discount}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-6">
                      {offer.code && (
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <span className="font-mono font-semibold">{offer.code}</span>
                          <button
                            onClick={() => copyCode(offer.code!)}
                            className="hover:scale-110 transition-transform"
                          >
                            {copiedCode === offer.code ? (
                              <FiCheck className="w-4 h-4" />
                            ) : (
                              <FiCopy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <FaClock className="w-4 h-4" />
                        <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              filter === 'all'
                ? 'bg-green-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All Offers
          </button>
          <button
            onClick={() => setFilter('flash')}
            className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              filter === 'flash'
                ? 'bg-red-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Flash Sales
          </button>
          <button
            onClick={() => setFilter('seasonal')}
            className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              filter === 'seasonal'
                ? 'bg-orange-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Seasonal
          </button>
          <button
            onClick={() => setFilter('bogo')}
            className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              filter === 'bogo'
                ? 'bg-purple-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            BOGO
          </button>
          <button
            onClick={() => setFilter('bundle')}
            className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
              filter === 'bundle'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Bundles
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="relative aspect-video bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getOfferColor(offer.type)}`}>
                      {getOfferIcon(offer.type)}
                      <span className="font-bold text-lg">{offer.discount}</span>
                    </div>
                  </div>
                </div>
                {offer.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <FaFire className="w-3 h-3" />
                      Hot
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-3 ${getOfferColor(offer.type)}`}>
                  {offer.type.toUpperCase()}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="w-4 h-4 text-gray-400" />
                    <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                  {offer.minPurchase && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaShoppingCart className="w-4 h-4 text-gray-400" />
                      <span>Min. purchase: PKR {offer.minPurchase.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Code */}
                {offer.code && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-600 mb-1">Promo Code</p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-green-700">{offer.code}</span>
                      <button
                        onClick={() => copyCode(offer.code!)}
                        className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-600 transition text-sm flex items-center gap-2"
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <FiCheck className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <FiCopy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href="/shop"
                  className="block w-full py-3 bg-green-700 text-white text-center rounded-lg hover:bg-green-600 transition font-semibold"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <FaTag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No offers found</h3>
            <p className="text-gray-600 mb-6">Try a different category</p>
            <button
              onClick={() => setFilter('all')}
              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition font-semibold"
            >
              View All Offers
            </button>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaStar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How to Use Promo Codes</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Add products to your cart</li>
                <li>Proceed to checkout</li>
                <li>Enter the promo code in the designated field</li>
                <li>Click "Apply" to see your discount</li>
                <li>Complete your purchase and enjoy your savings!</li>
              </ol>
              <p className="text-xs text-gray-500 mt-3">
                * Terms and conditions apply. Offers cannot be combined unless specified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}