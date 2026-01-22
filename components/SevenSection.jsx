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

// Triple buffer for true infinite loop (Left buffer | Middle | Right buffer)
const loopedInsights = [...insights, ...insights, ...insights];
const CARD_WIDTH = 450;
const GAP = 38;

// --- InsightCard with Responsive Width ---
function InsightCard({ item, width }) {
  return (
    <div 
      style={{ width: width }}
      className="group flex flex-col cursor-pointer shrink-0 relative group snap-center"
    >
      {/* Main Container with Blue Corner Markers */}
      <div className="relative flex flex-col h-full border border-white/20 p-4 bg-[#080618] transition-colors duration-300">
        {/* Blue Corner Markers - Visible ONLY on Hover */}
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
          <div className="mb-6">
            <span className="bg-[#101426] text-[#002FFF] px-3 py-2 text-sm font-normal font-author uppercase tracking-wider">
              {item.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[2.45rem] leading-[0.9] font-normal text-white font-author mb-6 line-clamp-3">
            {item.title}
          </h3>

          <div className="mt-auto">
            <span className="relative pb-0.5 inline-block font-author text-lg font-medium text-gray-400 cursor-pointer">
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
  // Start in the middle set
  const [index, setIndex] = useState(insights.length);
  const isTransitioning = useRef(false);
  const containerRef = useRef(null);

  // Responsive State
  const [isDesktop, setIsDesktop] = useState(false);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH);
  const [gap, setGap] = useState(GAP);

  // Dynamic Dimension Check
  const updateDimensions = useCallback(() => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);

    if (desktop) {
      setCardWidth(CARD_WIDTH);
      setGap(GAP);
      // On desktop, container width is fixed
    } else {
       // On mobile, card takes full available width of the container
       if (containerRef.current) {
          // Mobile: 85% of container width to show a "peek" of the next card
          setCardWidth(containerRef.current.offsetWidth * 0.85);
       }
       setGap(20); // Smaller gap on mobile
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    // Initial jump to middle set without animation to set position
    controls.set({ x: -insights.length * (isDesktop ? CARD_WIDTH + GAP : 300) }); // Approximate/safe initial
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions, controls, isDesktop]);

  // Re-sync position when dimensions stabilize
  useEffect(() => {
     const totalItemWidth = cardWidth + gap;
     controls.set({ x: -index * totalItemWidth });
  }, [cardWidth, gap, index, controls]);


  const slideTo = useCallback(
    async (newIndex) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const totalItemWidth = cardWidth + gap;

      // Animate to the new index
      await controls.start({
        x: -newIndex * totalItemWidth,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      });

      // Handle Wrapping Logic
      let finalIndex = newIndex;
      const len = insights.length;

      // If we are in the third set (Right Buffer), jump to Middle
      if (newIndex >= len * 2) {
        finalIndex = newIndex - len;
        await controls.set({ x: -finalIndex * totalItemWidth });
      } 
      // If we are in the first set (Left Buffer), jump to Middle
      else if (newIndex < len) {
        finalIndex = newIndex + len;
        await controls.set({ x: -finalIndex * totalItemWidth });
      }

      setIndex(finalIndex);
      isTransitioning.current = false;
    },
    [controls, cardWidth, gap]
  );

  const handleDragEnd = (event, info) => {
    const threshold = 10; // Minimal threshold to detect intent
    const velocityThreshold = 10;
    
    // Determine direction based on offset or velocity
    // If user swipes significantly or flicks
    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      // Swipe Left -> Next Slide
      slideTo(index + 1);
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      // Swipe Right -> Prev Slide
      slideTo(index - 1);
    } else {
      // Snap back if movement was tiny
      slideTo(index);
    }
  };

  return (
    <section className="relative w-full z-30 bg-[#080618] py-10 md:py-20 pb-20 md:pb-30 text-white">
      {/* Bottom Gradient Blend */}
      <div className="absolute bottom-0 z-30 left-0 w-full h-[200px] bg-linear-to-b from-[#080618] to-transparent translate-y-full pointer-events-none" />

      <div
        style={{
          maxWidth: isDesktop ? `${CARD_WIDTH * 3 + GAP * 2}px` : "100%",
        }}
        className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 px-5 md:px-4"
      >
        <h2 className="text-start text-[2.5rem] md:text-5xl lg:text-[4.0rem] tracking-tight leading-[1.1] font-jakarta font-medium max-w-xl mb-6 lg:mb-0">
          Updates from the RM Club Ecosystem
        </h2>

        {/* Buttons Visible on All Devices now */}
        <div className="flex gap-2 self-end md:self-auto">
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

      <div
        ref={containerRef}
        className="mx-auto overflow-hidden px-5 md:px-0"
        style={{
          width: isDesktop ? `${CARD_WIDTH * 3 + GAP * 2}px` : "100%",
        }}
      >
        <motion.div
           animate={controls}
           initial={{ x: 0 }}
           style={{ gap: `${gap}px` }}
           className="flex flex-row flex-nowrap items-stretch"
           // Enable drag on mobile, disable on desktop (optional, or keep both)
           drag={isDesktop ? false : "x"} 
           // Remove constraints to allow free movement before snap
           dragConstraints={{ left: -10000, right: 10000 }} 
           // Drag elastic 1 means it tracks finger 1:1 perfectly
           dragElastic={1}
           // Momentum false ensuring no momentum scrolling after release
           dragMomentum={false}
           onDragEnd={handleDragEnd}
        >
          {loopedInsights.map((item, i) => (
            <InsightCard 
              key={`${item.id}-${i}`} 
              item={item} 
              width={isDesktop ? CARD_WIDTH : cardWidth}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
