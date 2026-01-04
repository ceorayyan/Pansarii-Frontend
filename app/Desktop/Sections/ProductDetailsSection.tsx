// app/Desktop/Sections/ProductDetailsSection.tsx
"use client";

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
  
  return (
    <div className="w-full bg-white">
      <VideoProductsSection />
      
      {/* First Banner - Product Details Banner 1 */}
      <div className="w-full ">
        <img 
          src={productDetailsBanner1} 
          alt="Product Details Banner 1" 
          className="w-full h-auto object-cover"
        />
      </div>
  <div className="w-full ">
        <img 
          src={productDetailsBanner2} 
          alt="Product Details Banner 2" 
          className="w-full h-auto object-cover"
        />
      </div>
      <DirectionToUse/>
      <InfiniteScrollingReviews />
      
      {/* Second Banner - Product Details Banner 2 */}
    

      <RecommendedProductsSection />
      <Footer />
    </div>
  );
}