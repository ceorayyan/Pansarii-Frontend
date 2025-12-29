"use client";
import { useRef } from 'react';
import VideoProductCard from '@components/VideoProductCard';

export default function VideoProducts() {
  const carouselRef = useRef(null);

  // Define image and video constants
  const skincareImg = '/images/Skincare.png';
  const productImg = '/images/product.png';
  const productVideo = '/videos/product-video.mp4'; // Add your video path here

  const videoProducts = [
    { 
      topImage: skincareImg,        // Image for top section
      productImage: productImg,     // Image for thumbnail
      video: productVideo,          // Video for playing
      nameEn: 'Orange Oil', 
      nameUr: 'نارنجی کا تیل', 
      views: 860, 
      sale: '20% OFF', 
      price: 1149, 
      oldPrice: 1299 
    },
    { 
      topImage: skincareImg,
      productImage: productImg,
      video: productVideo,
      nameEn: 'Green Oil', 
      nameUr: 'سبز تیل', 
      views: 920, 
      sale: '15% OFF', 
      price: 999, 
      oldPrice: 1200 
    },
    { 
      topImage: skincareImg,
      productImage: productImg,
      video: productVideo,
      nameEn: 'Black Oil', 
      nameUr: 'کالی تیل', 
      views: 780, 
      sale: '10% OFF', 
      price: 1099, 
      oldPrice: 1299 
    },
    { 
      topImage: skincareImg,
      productImage: productImg,
      video: productVideo,
      nameEn: 'Chamomile Oil', 
      nameUr: 'کملی تیل', 
      views: 650, 
      sale: '25% OFF', 
      price: 899, 
      oldPrice: 1199 
    },
    { 
      topImage: skincareImg,
      productImage: productImg,
      video: productVideo,
      nameEn: 'Lavender Oil', 
      nameUr: 'لیونڈر تیل', 
      views: 500, 
      sale: '30% OFF', 
      price: 1249, 
      oldPrice: 1499 
    },
    // Add more products as needed...
  ];

  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="my-12 mx-[4%]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold font-poppins">
          Video <span className="text-[#197B33]">Products</span>
        </h2>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videoProducts.map((product, index) => (
          <div key={index} className="flex-shrink-0">
            <VideoProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}