// Desktop/components/ProductDetailsModal.tsx
"use client";

import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaShoppingCart, FaTimes } from "react-icons/fa";

interface ProductDetailsModalProps {
  product: any;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const [selectedImage, setSelectedImage] = useState(product.img);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '15ml');
  const [quantity, setQuantity] = useState(1);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const additionalImages = product.additionalImages || [];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { product, quantity, selectedSize });
    onClose();
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log('Buy now:', { product, quantity, selectedSize });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[95vw] h-[95vh] max-w-7xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="w-5 h-5 text-gray-700" />
        </button>

        {/* Content Container */}
        <div className="h-full flex flex-col lg:flex-row gap-6 p-6">
          
          {/* Left Column - Images */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {/* Main Image */}
            <div className="flex-1 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={selectedImage}
                alt={product.nameEn}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            {additionalImages.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[product.img, ...additionalImages].map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(image)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === image 
                        ? 'border-[#197B33] shadow-md' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.nameEn} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:w-1/2 flex flex-col overflow-y-auto">
            <div className="space-y-4">
              {/* Product Names */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  {product.nameEn}
                </h1>
                <p className="text-xl text-gray-600 mt-1">{product.nameUr}</p>
                {product.description && (
                  <p className="text-sm text-[#197B33] mt-2">{product.description}</p>
                )}
              </div>
              
              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              )}

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-gray-900 text-lg">{product.rating}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{product.reviews} Reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  PKR {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    PKR {product.oldPrice}
                  </span>
                )}
                {product.sale && (
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                    {product.sale}
                  </span>
                )}
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Info Lines */}
              {product.infoLines && product.infoLines.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.infoLines.map((line, index) => (
                    <div 
                      key={index} 
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-gray-50"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => {
                      const hasCheck = feature.hasCheck !== undefined 
                        ? feature.hasCheck 
                        : feature.text?.startsWith('✓');
                      
                      const featureText = feature.hasCheck !== undefined
                        ? feature.text
                        : feature.text?.replace('✓', '').trim();
                      
                      return (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                            {feature.icon ? (
                              <img 
                                src={feature.icon} 
                                alt={featureText}
                                className="w-6 h-6 object-contain"
                              />
                            ) : hasCheck ? (
                              <div className="text-green-600 font-bold text-lg">✓</div>
                            ) : (
                              <div className="text-gray-400 font-bold text-lg">○</div>
                            )}
                          </div>
                          
                          {/* Text */}
                          <span className="text-gray-700 text-sm font-medium flex-1">
                            {featureText}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pansari Points */}
              {product.points && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">★</span>
                    </div>
                    <span className="text-gray-800 font-medium">
                      Earn up to {product.points} Pansari Inn Points
                    </span>
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-full border-2 font-medium transition-all ${
                          selectedSize === size
                            ? 'bg-[#197B33] text-white border-[#197B33] shadow-md'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#197B33]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
                    <button
                      onClick={decreaseQuantity}
                      className="px-6 py-3 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-8 py-3 border-x-2 border-gray-300 min-w-[80px] text-center font-bold text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="px-6 py-3 text-gray-600 hover:bg-gray-100 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Subtotal: <span className="font-bold text-gray-900">PKR {(product.price * quantity).toLocaleString()}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="mt-6 pt-6 border-t flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-[#197B33] text-white font-bold py-4 px-6 rounded-full hover:bg-[#146128] transition-all shadow-lg hover:shadow-xl"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 flex items-center justify-center gap-3 bg-amber-500 text-gray-900 font-bold py-4 px-6 rounded-full hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Buy it Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}