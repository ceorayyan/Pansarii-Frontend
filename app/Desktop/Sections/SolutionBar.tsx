"use client";

import { useRef, useState, useEffect } from "react";
import BackwardArrow from "@components/BackwardArrow";
import ForwardArrow from "@components/ForwardArrow";

export default function SolutionBar() {
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

    el.scrollBy({
      left: direction === "right" ? 200 : -200, // Smaller scroll amount for smaller cards
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);

    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Card data to reduce repetition
  const cards = [
    { title: "Skin care products", offset: false },
    { title: "Hair care products", offset: true },
    { title: "Mens health products", offset: false },
    { title: "Women health products", offset: true },
    { title: "Weight management products", offset: false },
    { title: "Natural supplements", offset: true },
    { title: "Ayurvedic products", offset: false },
    { title: "Herbal teas", offset: true },
    { title: "Essential oils", offset: false },
    { title: "Organic skincare", offset: true },
  ];

  return (
    <section className="SolutionBar mx-[4%] my-8">
      {/* Header */}
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

      {/* Cards Container */}
      <div
        ref={sliderRef}
        className="slide flex gap-3 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-solution relative flex flex-col justify-end shrink-0 rounded-lg p-4 text-white ${
              card.offset ? 'mt-8' : ''
            }`}
            style={{
              width: '180px', // Smaller width
              height: '230px', // Smaller height
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