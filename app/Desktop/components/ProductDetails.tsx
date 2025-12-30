// app/Desktop/components/ProductDetails.tsx
"use client";

import { useState } from "react";
import { FaStar, FaCheckCircle, FaShoppingCart } from "react-icons/fa";

interface FeatureItem {
  text: string;
  icon?: string;
  hasCheck?: boolean;
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
    features?: FeatureItem[];
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
    <div className="max-w-7xl mx-auto py-4 px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        
        {/* Left Column - Images - Optimized for screen */}
        <div className="lg:w-2/5">
          <div className="w-full h-[45vh] sm:h-[50vh] lg:h-[55vh] rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.nameEn}
              className="w-full h-full object-cover"
            />
          </div>

          {additionalImages.length > 0 && (
            <div className="flex gap-2 mt-2 sm:mt-3 overflow-x-auto pb-1">
              {[product.img, ...additionalImages].map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border ${
                    selectedImage === image ? 'border-[#197B33] border-2' : 'border-gray-300'
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

        {/* Right Column - Product Info - Optimized layout */}
        <div className="lg:w-3/5">
          <div className="h-full flex flex-col">
            {/* Top Content */}
            <div className="flex-grow space-y-3 sm:space-y-4">
              {/* Product Names */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{product.nameEn}</h1>
                <p className="text-sm sm:text-base text-gray-700 mt-1">{product.nameUr}</p>
              </div>
              
              {/* Benefits - Compact */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="text-gray-600 text-xs sm:text-sm flex flex-wrap items-center gap-x-1">
                  {product.benefits.map((benefit, index) => (
                    <span key={index} className="text-xs sm:text-sm">
                      {benefit}
                      {index < product.benefits!.length - 1 && (
                        <span className="mx-1 sm:mx-2 text-gray-400">|</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* Rating & Reviews - Compact */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{product.rating}</span>
                </div>
                
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span className="text-gray-700 text-xs sm:text-sm">{product.reviews} Reviews</span>
                </div>
              </div>

              {/* Price - Compact */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">PKR {product.price}</span>
                  {product.oldPrice && (
                    <span className="text-base sm:text-lg text-gray-500 line-through">PKR {product.oldPrice}</span>
                  )}
                  {product.sale && (
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-medium">
                      {product.sale}
                    </span>
                  )}
                </div>
              </div>

              {/* Ayurvedic Info Section - Compact */}
              {product.infoLines && product.infoLines.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-2">
                    {product.infoLines.map((line, index) => (
                      <div 
                        key={index} 
                        className="text-gray-800 text-xs sm:text-sm border border-[#5F5F5F] rounded-lg px-3 py-2 bg-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features - Grid with better spacing */}
              {product.features && product.features.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                          className="rounded-lg p-2 flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors"
                        >
                          {/* Left side - Icon */}
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {feature.icon ? (
                              <img 
                                src={feature.icon} 
                                alt={featureText}
                                className="w-5 h-5 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = hasCheck ? 
                                    '<div class="text-green-600 font-bold text-sm sm:text-base">✓</div>' : 
                                    '<div class="text-gray-400 font-bold text-sm sm:text-base">○</div>';
                                }}
                              />
                            ) : (
                              hasCheck ? (
                                <div className="text-green-600 font-bold text-sm sm:text-base">✓</div>
                              ) : (
                                <div className="text-gray-400 font-bold text-sm sm:text-base">○</div>
                              )
                            )}
                          </div>
                          
                          {/* Right side - Text */}
                          <span className="text-gray-700 text-xs sm:text-sm font-medium flex-1">
                            {featureText}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pansari Points - Compact */}
              {product.points && (
                <div>
                  <div className="bg-[#6464641A] rounded-lg p-2 sm:p-3 flex items-center justify-between">
                    <span className="text-gray-800 text-xs sm:text-sm">
                      Earn Upto {product.points} Pansari Inn Points On This Purchase
                    </span>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#646464] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Size Selection - Compact */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition-all ${
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

              {/* Quantity - Compact */}
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Quantity</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 border-x border-gray-300 min-w-[50px] sm:min-w-[60px] text-center font-semibold text-sm sm:text-base">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons - Always visible */}
            <div className="mt-4 sm:mt-6 pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 me-bgcolor-g text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base">
                  <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add to cart
                </button>
                <button className="flex-1 flex items-center justify-center me-bgcolor-y text-gray-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base">
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