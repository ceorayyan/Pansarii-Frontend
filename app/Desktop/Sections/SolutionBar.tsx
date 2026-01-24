"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackwardArrow from "@components/BackwardArrow";
import ForwardArrow from "@components/ForwardArrow";
import { categories } from "@/app/Desktop/data/categories"; // Import from data file

// Define interface locally in this file
interface Category {
  title: string;
  category: string;
  offset: boolean;
}

export default function SolutionBar() {
  const router = useRouter();
  const pic = '/images/Skincare.png';
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const containerWidth = el.clientWidth;
    const cardsToShow = 5;
    const gap = 16;
    const totalGapWidth = gap * (cardsToShow - 1);
    const cardWidth = (containerWidth - totalGapWidth) / cardsToShow;
    const scrollAmount = cardWidth + gap;
    
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleCategoryClick = (category: string) => {
    // Navigate to shop page with category filter
    router.push(`/shop?category=${category}`);
  };

  return (
    <section className="SolutionBar mx-[4%] my-8">
      {/* Header - Your original UI */}
      <div className="top-solutionbar mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">
          Find your <span className="me-color-y">Solutions</span>
        </h2>

        <div className="flex gap-2">
          <BackwardArrow
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          />
          <ForwardArrow
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      {/* Cards Container - Your original UI */}
      <div
        ref={sliderRef}
        className="slide flex overflow-x-auto scroll-smooth no-scrollbar pb-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
        }}
      >
        {categories.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(card.category)}
            className={`card-solution relative flex flex-col justify-end shrink-0 rounded-lg p-4 text-white cursor-pointer transition-transform hover:scale-105 ${
              card.offset ? 'mt-8' : ''
            }`}
            style={{
              width: 'calc(19% - 12.8px)',
              marginRight: index === categories.length - 1 ? '0' : '16px',
              height: '270px',
              backgroundImage: `url(${pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Green gradient overlay */}
            <div
              className="absolute inset-0 rounded-lg z-10"
              style={{
                background:
                  "linear-gradient(184.89deg, rgba(0, 0, 0, 0) 58.68%, #197B33 96.06%)",
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
            {/* Card title */}
            <p className="relative z-10 mt-auto text-sm font-medium">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}