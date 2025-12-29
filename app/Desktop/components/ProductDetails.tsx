// app/Desktop/components/ProductDetails.tsx
"use client";

import { useState } from "react";
import { FaStar, FaCheckCircle, FaShoppingCart, FaHeart } from "react-icons/fa";

interface FeatureItem {
  text: string;
  icon?: string; // Optional icon URL
  hasCheck?: boolean; // Optional check status
}

interface ProductDetailsProps {
  product: {
    img: string;
    additionalImages?: string[];
    nameEn: string;
    nameUr: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    sale?: string;
    features?: FeatureItem[]; // Updated to use FeatureItem interface
    sizes?: string[];
    points?: number;
    benefits?: string[];
    infoLines?: string[];
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(product.img);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '15ml');
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Images - Bigger Size */}
        <div className="lg:w-2/5">
          <div className="w-full h-[500px] rounded-lg overflow-hidden mb-4">
            <img
              src={selectedImage}
              alt={product.nameEn}
              className="w-full h-full object-cover"
            />
          </div>

          {additionalImages.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[product.img, ...additionalImages].map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === image ? 'border-[#197B33]' : 'border-gray-300'
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

        {/* Right Column - Product Info - Adjusted for height */}
        <div className="lg:w-3/5">
          <div className="h-full flex flex-col">
            {/* Top Content */}
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">{product.nameEn}</h1>
              <p className="text-lg text-gray-700 mb-2">{product.nameUr}</p>
              
              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="text-gray-600 text-sm mb-4 flex flex-wrap items-center gap-x-1">
                  {product.benefits.map((benefit, index) => (
                    <span key={index} className="text-sm">
                      {benefit}
                      {index < product.benefits!.length - 1 && (
                        <span className="mx-2 text-gray-400">|</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{product.rating}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">{product.reviews} Reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">PKR {product.price}</span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-500 line-through">PKR {product.oldPrice}</span>
                  )}
                  {product.sale && (
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                      {product.sale}
                    </span>
                  )}
                </div>
              </div>

              {/* Ayurvedic Info Section */}
              {product.infoLines && product.infoLines.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3">
                    {product.infoLines.map((line, index) => (
                      <div 
                        key={index} 
                        className="text-gray-800 text-sm border border-[#5F5F5F] rounded-lg px-4 py-3 bg-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features - Dynamic with icons */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => {
                      const hasCheck = feature.hasCheck !== undefined 
                        ? feature.hasCheck 
                        : feature.text.startsWith('✓');
                      
                      const featureText = feature.hasCheck !== undefined
                        ? feature.text
                        : feature.text.replace('✓', '').trim();
                      
                      return (
                        <div 
                          key={index} 
                          className="rounded-lg p-3 flex items-center gap-3 bg-white hover:bg-gray-50 transition-colors"
                        >
                          {/* Left side - Dynamic Image/Icon */}
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {feature.icon ? (
                              <img 
                                src={feature.icon} 
                                alt={featureText}
                                className="w-6 h-6 object-contain"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = hasCheck ? 
                                    '<div class="text-green-600 font-bold text-lg">✓</div>' : 
                                    '<div class="text-gray-400 font-bold text-lg">○</div>';
                                }}
                              />
                            ) : (
                              hasCheck ? (
                                <div className="text-green-600 font-bold text-lg">✓</div>
                              ) : (
                                <div className="text-gray-400 font-bold text-lg">○</div>
                              )
                            )}
                          </div>
                          
                          {/* Right side - Text */}
                          <span className="text-gray-700 text-sm font-medium">
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
                <div className="mb-6">
                  <div className="bg-[#6464641A] rounded-lg p-3 flex items-center justify-between">
                    <span className="text-gray-800 text-sm">
                      Earn Upto {product.points} Pansari Inn Points On This Purchase
                    </span>
                    <div className="w-5 h-5 rounded-full bg-[#646464] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Size Selection - More compact */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                          selectedSize === size
                            ? 'bg-[#197B33] text-white border-[#197B33]'
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
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons - Fixed at bottom of column */}
            <div className="mt-auto pt-6 border-t">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 me-bgcolor-g text-white font-semibold py-4 px-6 rounded-full hover:opacity-90 transition-opacity">
                  <FaShoppingCart />
                  Add to cart
                </button>
                <button className="flex-1 flex items-center justify-center me-bgcolor-y text-gray-900 font-semibold py-4 px-6 rounded-full hover:opacity-90 transition-opacity">
                  Buy it now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}