"use client";

import { FaStar, FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full sm:w-[260px] md:w-[280px] lg:w-[296px] rounded-[18px] overflow-hidden flex flex-col bg-white cursor-pointer transition-all duration-300"
      style={{ 
        border: isHovered ? '2px solid #197B33' : '2px solid #E5E7EB'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Image Section */}
      <div className="relative w-full h-[240px]">
        <img
          src={product.img}
          alt={product.nameEn}
          className="w-full h-full object-cover"
        />

        {/* Sale Badge */}
        {product.sale && (
          <div className="absolute top-3 right-3 w-[68px] h-[23px] rounded-[60px] bg-[#F83A3A] text-white text-xs flex items-center justify-center font-medium">
            {product.sale}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 bg-[#F3F3F3] p-4 flex flex-col justify-between">
        
        {/* Text Content */}
        <div>
          <p className="text-[17px] font-medium truncate">{product.nameEn}</p>
          <p className="text-[17px] font-medium truncate">{product.nameUr}</p>
          <p className="text-sm text-[#197B33] truncate">{product.description}</p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-4 mt-1 text-sm font-medium flex-wrap">
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar /> <span>{product.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <FaCheckCircle /> <span>{product.reviews} Reviews</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <p className="text-[17px] font-bold">PKR {product.price}</p>
            {product.oldPrice && (
              <p className="text-sm text-gray-500 line-through">PKR {product.oldPrice}</p>
            )}
          </div>
        </div>

        {/* Quick Add Button - Remains unchanged */}
        <button className="w-full sm:w-auto h-[50px] mt-3 rounded-[57px] border border-gray-300 bg-[#197B33] text-white flex items-center justify-between px-6 font-medium">
          Quick Add
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}