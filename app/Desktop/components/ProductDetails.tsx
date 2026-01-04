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
    <div className="h-screen max-h-screen overflow-hidden">
      <div className="h-full max-h-full flex flex-col lg:flex-row gap-2 lg:gap-3 p-2">
        
        {/* Left Column - Images */}
        <div className="lg:w-2/5 h-full flex flex-col">
          <div className="h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.nameEn}
              className="w-full h-full object-cover"
            />
          </div>

          {additionalImages.length > 0 && (
            <div className="flex gap-1 mt-1 overflow-x-auto pb-1 flex-shrink-0">
              {[product.img, ...additionalImages].map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border ${
                    selectedImage === image ? 'border-[#197B33] border-2' : 'border-gray-200'
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
        <div className="lg:w-3/5 h-full overflow-y-auto">
          <div className="h-full flex flex-col">
            {/* Top Content */}
            <div className="flex-grow space-y-1.5">
              {/* Product Names */}
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-tight">{product.nameEn}</h1>
                <p className="text-xs text-gray-700 mt-0.5">{product.nameUr}</p>
              </div>
              
              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="text-gray-600 text-[10px] flex flex-wrap items-center gap-x-1">
                  {product.benefits.map((benefit, index) => (
                    <span key={index}>
                      {benefit}
                      {index < product.benefits!.length - 1 && (
                        <span className="mx-1 text-gray-300">|</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <FaStar className="w-3 h-3 text-yellow-400" />
                  <span className="font-semibold text-gray-900 text-xs">{product.rating}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-gray-700 text-[10px]">{product.reviews} Reviews</span>
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="text-lg font-bold text-gray-900">PKR {product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">PKR {product.oldPrice}</span>
                  )}
                  {product.sale && (
                    <span className="px-1.5 py-0.5 bg-red-100 text-red-600 rounded-full text-[10px] font-medium">
                      {product.sale}
                    </span>
                  )}
                </div>
              </div>

              {/* Ayurvedic Info Section */}
              {product.infoLines && product.infoLines.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-1">
                    {product.infoLines.map((line, index) => (
                      <div 
                        key={index} 
                        className="text-gray-800 text-[10px] border border-[#5F5F5F] rounded px-2 py-1 bg-white"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <div className="grid grid-cols-2 gap-1">
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
                          className="rounded p-1 flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors"
                        >
                          {/* Left side - Icon */}
                          <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {feature.icon ? (
                              <img 
                                src={feature.icon} 
                                alt={featureText}
                                className="w-3 h-3 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = hasCheck ? 
                                    '<div class="text-green-600 font-bold text-xs">✓</div>' : 
                                    '<div class="text-gray-400 font-bold text-xs">○</div>';
                                }}
                              />
                            ) : (
                              hasCheck ? (
                                <div className="text-green-600 font-bold text-xs">✓</div>
                              ) : (
                                <div className="text-gray-400 font-bold text-xs">○</div>
                              )
                            )}
                          </div>
                          
                          {/* Right side - Text */}
                          <span className="text-gray-700 text-[10px] font-medium flex-1 leading-tight">
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
                <div>
                  <div className="bg-[#6464641A] rounded p-1.5 flex items-center justify-between">
                    <span className="text-gray-800 text-[10px]">
                      Earn Upto {product.points} Pansari Inn Points On This Purchase
                    </span>
                    <div className="w-3 h-3 rounded-full bg-[#646464] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[8px] font-bold">!</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 text-xs mb-1">Size</h3>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-2 py-0.5 rounded-full border text-[10px] font-medium transition-all ${
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
              <div>
                <h3 className="font-semibold text-gray-900 text-xs mb-1">Quantity</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={decreaseQuantity}
                      className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-2 py-0.5 border-x border-gray-300 min-w-[40px] text-center font-semibold text-xs">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className=" pt-2 border-t flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-1.5">
                <button className="flex-1 flex items-center justify-center gap-1 me-bgcolor-g text-white font-semibold py-2 px-3 rounded-full hover:opacity-90 transition-opacity text-xs">
                  <FaShoppingCart className="w-3 h-3" />
                  Add to cart
                </button>
                <button className="flex-1 flex items-center justify-center me-bgcolor-y text-gray-900 font-semibold py-2 px-3 rounded-full hover:opacity-90 transition-opacity text-xs">
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