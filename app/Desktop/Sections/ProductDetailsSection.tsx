"use client";

import { useState, useEffect } from "react";
import VideoProductsSection from "./ProductDetails/VideoProductsSection";
import InfiniteScrollingReviews from "./ProductDetails/InfiniteScrollingReviews";
import RecommendedProductsSection from "./ProductDetails/RecommendedProductsSection";
import DirectionToUse from "../components/directiontouse";
import Footer from "./Footer";

interface ProductDetailsSectionProps {
  product?: any;
}

export default function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  // Define banner image paths as constants inside the component
  const productDetailsBanner1 = '/images/productdetailsbanner1.png';
  const productDetailsBanner2 = '/images/productdetailsbanner2.png';
  
  // State to track scroll position
  const [showBottomBar, setShowBottomBar] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show bottom bar after scrolling 300px or adjust as needed
      if (window.scrollY > 300) {
        setShowBottomBar(true);
      } else {
        setShowBottomBar(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-white relative">
      <VideoProductsSection />
      
      {/* First Banner - Product Details Banner 1 */}
      <div className="w-full">
        <img 
          src={productDetailsBanner1} 
          alt="Product Details Banner 1" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src={productDetailsBanner2} 
          alt="Product Details Banner 2" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <DirectionToUse/>
      <InfiniteScrollingReviews />
      <RecommendedProductsSection />
      <Footer />
      
      {/* Fixed Bottom Bar */}
      {showBottomBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Product Info */}
            <div className="flex items-center space-x-4">
              {/* Product Image */}
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img 
                  src={product?.image || "/images/default-product.jpg"} 
                  alt={product?.name || "Product"} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Details */}
              <div>
                <h3 className="font-semibold text-gray-800">{product?.name || "Product Name"}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product?.price || "29.99"}
                  </span>
                  {product?.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">(4.5 • 120 reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
                Add to Cart
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}