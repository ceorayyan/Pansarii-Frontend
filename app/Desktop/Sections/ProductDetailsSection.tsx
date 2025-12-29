// app/Desktop/Sections/ProductDetailsSection.tsx
"use client";

import { useRef, useEffect } from 'react';
import VideoProductCard from "../components/VideoProductCard";
import ReviewCard from "../components/ReviewCard";
import ProductCard from "../components/ProductCard";
import Footer from "../Sections/Footer";

interface ProductDetailsSectionProps {
  product: any;
}

export default function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // Sample video products data
  const videoProducts = [
    {
      id: 1,
      video: "/videos/product1.mp4",
      topImage: "/images/product1.jpg",
      views: "1.2K",
      productImage: "/images/product-thumb1.jpg",
      sale: "20% OFF",
      nameEn: "Organic Honey",
      nameUr: "شہد",
      price: 1299,
      oldPrice: 1599
    },
    {
      id: 2,
      video: "/videos/product2.mp4",
      topImage: "/images/product2.jpg",
      views: "890",
      productImage: "/images/product-thumb2.jpg",
      sale: "15% OFF",
      nameEn: "Aloe Vera Gel",
      nameUr: "ایلوویرا جیل",
      price: 899,
      oldPrice: 1099
    },
    {
      id: 3,
      video: "/videos/product3.mp4",
      topImage: "/images/product3.jpg",
      views: "2.4K",
      productImage: "/images/product-thumb3.jpg",
      sale: "30% OFF",
      nameEn: "Coconut Oil",
      nameUr: "ناریل کا تیل",
      price: 1499,
      oldPrice: 1999
    },
    {
      id: 4,
      video: "/videos/product4.mp4",
      topImage: "/images/product4.jpg",
      views: "1.5K",
      productImage: "/images/product-thumb4.jpg",
      sale: "25% OFF",
      nameEn: "Argan Oil",
      nameUr: "ارگان آئل",
      price: 1799,
      oldPrice: 2299
    }
  ];

  // Sample reviews data - can be dynamic based on product.reviews
  const reviews = [
    {
      id: 1,
      title: "Amazing Product Quality",
      text: "This apricot oil has transformed my skin completely. I've been using it for a month and my skin feels so hydrated and glowing.",
      name: "Sarah Khan",
      designation: "Beauty Blogger",
      img: "/images/reviewer1.jpg",
      rating: 5.0
    },
    {
      id: 2,
      title: "Best Purchase Ever",
      text: "The quality is outstanding. It's pure and natural just as described. Will definitely repurchase and recommend to friends.",
      name: "Ali Ahmed",
      designation: "Regular Customer",
      img: "/images/reviewer2.jpg",
      rating: 5.0
    },
    {
      id: 3,
      title: "Value for Money",
      text: "Compared to other brands, this one is much better in quality and price. My hair has become so smooth and shiny.",
      name: "Fatima Noor",
      designation: "Salon Owner",
      img: "/images/reviewer3.jpg",
      rating: 5.0
    },
    {
      id: 4,
      title: "Excellent Results",
      text: "I had dry skin issues which are completely resolved now. The oil absorbs quickly without feeling greasy.",
      name: "Hamza Riaz",
      designation: "Fitness Trainer",
      img: "/images/reviewer4.jpg",
      rating: 5.0
    },
    {
      id: 5,
      title: "Perfect for Sensitive Skin",
      text: "My skin is very sensitive but this oil didn't cause any irritation. It's gentle and effective.",
      name: "Zainab Ali",
      designation: "Dermatologist",
      img: "/images/reviewer5.jpg",
      rating: 5.0
    },
    {
      id: 6,
      title: "Natural and Pure",
      text: "You can feel the purity in this product. No artificial smell, just pure apricot goodness.",
      name: "Omar Hassan",
      designation: "Natural Products Enthusiast",
      img: "/images/reviewer6.jpg",
      rating: 5.0
    },
    {
      id: 7,
      title: "Great for Hair",
      text: "Applied it to my dry hair ends and they're now soft and manageable. Excellent product!",
      name: "Laila Ahmed",
      designation: "Hair Stylist",
      img: "/images/reviewer7.jpg",
      rating: 5.0
    },
    {
      id: 8,
      title: "Quick Delivery",
      text: "Product arrived quickly and was well packaged. Quality exceeded my expectations.",
      name: "Raza Shah",
      designation: "Online Shopper",
      img: "/images/reviewer8.jpg",
      rating: 5.0
    }
  ];

  // Sample recommended products
  const recommendedProducts = [
    {
      id: 1,
      img: "/images/recommended1.jpg",
      nameEn: "Jojoba Oil",
      nameUr: "جوجوبا آئل",
      description: "For skin & hair care",
      rating: 4.8,
      reviews: 342,
      price: 1399,
      oldPrice: 1799,
      sale: "22% OFF"
    },
    {
      id: 2,
      img: "/images/recommended2.jpg",
      nameEn: "Rose Water",
      nameUr: "گلاب کا عرق",
      description: "Natural toner & refresher",
      rating: 4.7,
      reviews: 289,
      price: 699,
      oldPrice: 899,
      sale: "18% OFF"
    },
    {
      id: 3,
      img: "/images/recommended3.jpg",
      nameEn: "Almond Oil",
      nameUr: "بادام کا تیل",
      description: "For hair growth",
      rating: 4.9,
      reviews: 421,
      price: 1599,
      oldPrice: 1999,
      sale: "20% OFF"
    },
    {
      id: 4,
      img: "/images/recommended4.jpg",
      nameEn: "Castor Oil",
      nameUr: "ارنڈی کا تیل",
      description: "For eyelashes & brows",
      rating: 4.6,
      reviews: 198,
      price: 899,
      oldPrice: 1199,
      sale: "25% OFF"
    }
  ];

  // Function to create infinite scrolling effect
  useEffect(() => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    if (!firstRow || !secondRow) return;

    // Clone reviews for seamless scrolling
    const firstRowContent = firstRow.innerHTML;
    const secondRowContent = secondRow.innerHTML;

    firstRow.innerHTML = firstRowContent + firstRowContent;
    secondRow.innerHTML = secondRowContent + secondRowContent;

    // Animation variables
    let firstRowAnimation: number;
    let secondRowAnimation: number;
    let firstRowPosition = 0;
    let secondRowPosition = 0;
    const speed = 0.5; // Adjust speed here (pixels per frame)

    // Animation function for first row (left to right)
    const animateFirstRow = () => {
      firstRowPosition -= speed;
      
      // Reset position when half of content has scrolled
      if (firstRowPosition <= -firstRow.scrollWidth / 2) {
        firstRowPosition = 0;
      }
      
      firstRow.style.transform = `translateX(${firstRowPosition}px)`;
      firstRowAnimation = requestAnimationFrame(animateFirstRow);
    };

    // Animation function for second row (right to left)
    const animateSecondRow = () => {
      secondRowPosition += speed;
      
      // Reset position when half of content has scrolled
      if (secondRowPosition >= secondRow.scrollWidth / 2) {
        secondRowPosition = 0;
      }
      
      secondRow.style.transform = `translateX(${secondRowPosition}px)`;
      secondRowAnimation = requestAnimationFrame(animateSecondRow);
    };

    // Start animations
    firstRowAnimation = requestAnimationFrame(animateFirstRow);
    secondRowAnimation = requestAnimationFrame(animateSecondRow);

    // Cleanup
    return () => {
      cancelAnimationFrame(firstRowAnimation);
      cancelAnimationFrame(secondRowAnimation);
    };
  }, []);

  // Split reviews into two rows
  const firstRowReviews = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRowReviews = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="w-full bg-white">
      {/* Video Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoProducts.map((videoProduct) => (
            <VideoProductCard key={videoProduct.id} product={videoProduct} />
          ))}
        </div>
      </div>

      {/* Reviews Section with Animation */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
        
        {/* Reviews Container with Gradient Background */}
        <div 
          className="relative overflow-hidden py-8"
          style={{
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 16.67%, #FFFFFF 33.33%, #FFFFFF 50%, #FFFFFF 66.67%, #FFFFFF 83.33%, rgba(255, 255, 255, 0) 100%)'
          }}
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* First Row - Scrolls left to right */}
          <div className="mb-6 overflow-hidden">
            <div 
              ref={firstRowRef}
              className="flex gap-6 w-max"
              style={{ willChange: 'transform' }}
            >
              {firstRowReviews.concat(firstRowReviews).map((review, index) => (
                <div 
                  key={`first-${review.id}-${index}`}
                  className="flex-shrink-0 w-[412px]"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolls right to left (alternate direction) */}
          <div className="overflow-hidden">
            <div 
              ref={secondRowRef}
              className="flex gap-6 w-max"
              style={{ willChange: 'transform' }}
            >
              {secondRowReviews.concat(secondRowReviews).map((review, index) => (
                <div 
                  key={`second-${review.id}-${index}`}
                  className="flex-shrink-0 w-[412px]"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <span className="text-gray-600 text-sm">
            Showing {reviews.length} customer reviews
          </span>
          <button 
            className="px-4 py-2 bg-[#197B33] text-white rounded-lg hover:bg-[#156529] transition-colors"
            onClick={() => {
              // Add functionality to view all reviews
              console.log('View all reviews clicked');
            }}
          >
            View All Reviews
          </button>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((recommendedProduct) => (
            <ProductCard key={recommendedProduct.id} product={recommendedProduct} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}