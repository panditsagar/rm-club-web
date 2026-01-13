"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
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
    <div className="group flex flex-col cursor-pointer shrink-0 w-[450px] relative group">
      {/* Main Container with Blue Corner Markers */}
      <div className="relative flex flex-col h-full border border-white/20 p-4  bg-[#080618] transition-colors duration-300">
        {/* Blue Corner Markers - Visible ONLY on Hover */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#002FFF] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Border that turns blue on hover */}

        {/* IMAGE AREA */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 mb-6  ">
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
            <span className="bg-[#101426] text-[#002FFF] px-3 py-2 text-sm font-normal font-author uppercase tracking-wider  ">
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
  const [index, setIndex] = useState(0);
  const isTransitioning = useRef(false);

  // Maximum visible cards at once is roughly 3
  const maxIndex = insights.length - 1;

  const slideTo = useCallback(
    async (newIndex) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      // Simple handling for infinite-like loop effect using the doubled array
      await controls.start({
        x: -newIndex * TOTAL_WIDTH,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      });

      let finalIndex = newIndex;

      // If we scrolled past the first set, jump back seamlessly
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
    <section className="relative w-full z-30 bg-[#080618] py-10 pb-30 text-white">
      {/* Bottom Gradient Blend */}
      <div className="absolute bottom-0 z-30 left-0 w-full h-[200px] bg-linear-to-b from-[#080618] to-transparent translate-y-full pointer-events-none" />

      <div
        style={{ maxWidth: `${CARD_WIDTH * 3 + GAP * 2}px` }}
        className="mx-auto flex justify-between items-end mb-16 px-4"
      >
        <h2 className="text-start lg:text-[4.0rem] tracking-tight leading-[1.1] font-jakarta font-medium max-w-xl">
          Updates from the RM Club Ecosytem
        </h2>

        <div className="flex gap-2">
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
        className="mx-auto overflow-visible"
        style={{ width: `${CARD_WIDTH * 3 + GAP * 2}px` }}
      >
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
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
