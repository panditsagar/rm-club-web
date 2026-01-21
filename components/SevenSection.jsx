"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

const insights = [
  {
    id: 1,
    tag: "Venture Update",
    title: "Jansanket: Strengthening Local Voices",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 2,
    tag: "Venture Story",
    title: "City View Restaurant: Hospitality as Community",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/68af1b2d6542fc97e4e73b5a_Untitled%20design%20-%202025-08-27T103924.097.avif",
    link: "#",
  },
  {
    id: 3,
    tag: "Ecosystem Insight",
    title: "Building Across Sectors: Lessons from RM Club",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 4,
    tag: "Venture Update",
    title: "RM Trek: Curated Experiences and a New Way to Explore",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 5,
    tag: "Venture Story",
    title: "Beatz of Melody: A Home for Independent Sound and Creativity",
    image:
      "https://cdn.prod.website-files.com/66c71da082e3d64d93782c96/680a2e3b0307cfadb0273229_Untitled%20design%20-%202025-04-24T082723.304.avif",
    link: "#",
  },
  {
    id: 6,
    tag: "Venture Update",
    title: "Reparkle: Real Estate Initiatives Built for Long-Term Value",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
];

const loopedInsights = [...insights, ...insights];
const CARD_WIDTH = 450;
const GAP = 38;
const TOTAL_WIDTH = CARD_WIDTH + GAP;

function InsightCard({ item }) {
  return (
    // UPDATED: Width is fluid on mobile (85vw), fixed on desktop (450px)
    <div className="group flex flex-col cursor-pointer shrink-0 w-[85vw] md:w-[400px] lg:w-[450px] relative">
      <div className="relative flex flex-col h-full border border-white/20 p-4 bg-[#080618] transition-colors duration-300">
        
        {/* Blue Corner Markers */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* IMAGE AREA */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 mb-6">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
          />
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-col flex-grow">
          {/* Tag */}
          <div className="mb-4 lg:mb-6">
            <span className="bg-[#101426] text-[#002FFF] px-3 py-2 text-xs lg:text-sm font-normal font-author uppercase tracking-wider">
              {item.tag}
            </span>
          </div>

          {/* Title - UPDATED: Responsive font size */}
          <h3 className="text-2xl md:text-3xl lg:text-[2.45rem] leading-[1.1] lg:leading-[0.9] font-normal text-white font-author mb-4 lg:mb-6 line-clamp-3">
            {item.title}
          </h3>

          <div className="mt-auto">
            <span className="relative pb-0.5 inline-block font-author text-base lg:text-lg font-medium text-gray-400 cursor-pointer">
              Read more
              <span
                className="
                  absolute left-0 bottom-1
                  w-full h-px bg-white
                  transform scale-x-0
                  group-hover:scale-x-100
                  transition-transform duration-300
                  origin-left  
                "
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SevenSection() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const isTransitioning = useRef(false);
  
  // State to track if we are on desktop
  const [isDesktop, setIsDesktop] = useState(true);

  // Effect to handle responsive checks
  useEffect(() => {
    const checkIsDesktop = () => {
      // 1024px is the standard 'lg' breakpoint in Tailwind
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Check on mount
    checkIsDesktop();
    
    // Check on resize
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const slideTo = useCallback(
    async (newIndex) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      await controls.start({
        x: -newIndex * TOTAL_WIDTH,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      });

      let finalIndex = newIndex;

      if (newIndex >= insights.length) {
        finalIndex = 0;
        await controls.set({ x: 0 });
      } else if (newIndex < 0) {
        finalIndex = insights.length - 1;
        await controls.set({ x: -finalIndex * TOTAL_WIDTH });
      }

      setIndex(finalIndex);
      isTransitioning.current = false;
    },
    [controls]
  );

  return (
    <section className="relative w-full z-30 bg-[#080618] py-10 pb-30 text-white overflow-hidden">
    
      {/* HEADER SECTION */}
      <div
        // UPDATED: Only apply fixed max-width on Desktop
        style={isDesktop ? { maxWidth: `${CARD_WIDTH * 3 + GAP * 2}px` } : {}}
        className="mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-end mb-8 lg:mb-16 px-4 w-full"
      >
        {/* UPDATED: Responsive font size */}
        <h2 className="text-start text-4xl md:text-5xl lg:text-[4.0rem] tracking-tight leading-[1.1] font-jakarta font-medium max-w-xl mb-6 lg:mb-0">
          Updates from the RM Club Ecosystem
        </h2>

        {/* UPDATED: Arrows hidden on mobile (user swipes instead) */}
        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => slideTo(index - 1)}
            className="group relative cursor-pointer overflow-hidden w-12 h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm z-50"
          >
            <span className="absolute inset-0 bg-[#002FFF]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <IoIosArrowBack size={24} className="relative z-10" />
          </button>
          <button
            onClick={() => slideTo(index + 1)}
            className="group relative cursor-pointer overflow-hidden w-12 h-12 flex items-center justify-center border border-[#002FFF]/20 text-[#002FFF] rounded-sm z-50"
          >
            <span className="absolute inset-0 bg-[#002FFF]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <IoIosArrowForward size={24} className="relative z-10" />
          </button>
        </div>
      </div>

      {/* CAROUSEL SECTION */}
      <div
        // UPDATED: Mobile gets 100% width + native scroll. Desktop gets fixed width + visible overflow.
        className={`mx-auto ${isDesktop ? "overflow-visible" : "overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide"}`}
        style={isDesktop ? { width: `${CARD_WIDTH * 3 + GAP * 2}px` } : { width: "100%" }}
      >
        <motion.div
          // UPDATED: Disable framer motion transform on mobile so native scroll works
          animate={isDesktop ? controls : undefined}
          initial={isDesktop ? { x: 0 } : undefined}
          style={{ gap: `${GAP}px` }}
          className="flex flex-nowrap items-stretch py-4"
        >
          {loopedInsights.map((item, i) => (
            <InsightCard key={`${item.id}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}