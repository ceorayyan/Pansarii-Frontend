// app/pages/productdetails.tsx
"use client";

import ProductDetails from "../Desktop/components/ProductDetails";
import ProductDetailsSection from "../Desktop/Sections/ProductDetailsSection";

export default function ProductDetailsPage() {
  // Dynamic product data with feature icons
  const product = {
    img: '/images/product.png',
    additionalImages: [
      '/images/category.png',
      '/images/Skincare.png',
      '/images/whisk.png',
    ],
    nameEn: "Apricot Oil",
    nameUr: "خوبانی کا تیل",
    description: "Pure cold-pressed apricot oil for skin and hair care",
    rating: 4.7,
    reviews: 406,
    price: 1149,
    oldPrice: 1499,
    sale: "20% OFF",
    benefits: [
      "Helps in hormonal balance in women",
      "Helps improve digestion & metabolism", 
      "Helps improve hair and skin health"
    ],
    // Features with icons
    features: [
      {
        text: "Acts as an anti-tan agent",
        icon: "/icons/sun-protection.svg", // Custom icon
        hasCheck: true
      },
      {
        text: "Healthy and glowing Skin",
        icon: "/icons/glowing-skin.svg", // Custom icon
        hasCheck: true
      },
      {
        text: "Improving Hair & Skin Health",
        icon: "/icons/hair-care.svg", // Custom icon
        hasCheck: false
      },
      {
        text: "Regulates blemishes & rashes",
        icon: "/icons/skin-treatment.svg", // Custom icon
        hasCheck: true
      },
      {
        text: "Improves hormonal balance",
        icon: "/icons/balance.svg", // Custom icon
        hasCheck: true
      },
      {
        text: "Boosts digestion",
        icon: "/icons/digestion.svg", // Custom icon
        hasCheck: true
      }
    ],
    sizes: ["15ml", "30ml", "60ml", "120ml", "150ml"],
    points: 14,
    infoLines: [
      "100% Ayurvedic & Herbal Product",
      "GST Revised Lower prices are LIVE NOW !!",
      "Free Delivery On All Orders Above ₹399"
    ]
  };

  // For backward compatibility with ProductDetailsSection
  const legacyProduct = {
    ...product,
    features: product.features.map(f => 
      f.hasCheck ? `✓ ${f.text}` : `○ ${f.text}`
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Details Component - Dynamic with icons */}
      <ProductDetails product={product} />

      {/* Product Details Section - Using legacy format */}
      <ProductDetailsSection product={legacyProduct} />

    
    </div>
  );
}