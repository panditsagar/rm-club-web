"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const insights = [
  {
    id: 1,
    tag: "Venture Update",
    title: "Jansanket: Strengthening Local Voices",
    image: "/seven/community.png",
    link: "#",
  },
  {
    id: 2,
    tag: "Venture Story",
    title: "City View Restaurant: Hospitality as Community",
    image: "/seven/media.png", // Using authentic cultural/social image
    link: "#",
  },
  {
    id: 3,
    tag: "Ecosystem Insight",
    title: "Building Across Sectors: Lessons from RM Club",
    image: "/seven/corporate.png",
    link: "#",
  },
  {
    id: 4,
    tag: "Venture Update",
    title: "RM Trek: Curated Experiences and a New Way to Explore",
    image: "/seven/rural.png", // Using rural/nature image
    link: "#",
  },
  {
    id: 5,
    tag: "Venture Story",
    title: "Beatz of Melody: A Home for Independent Sound and Creativity",
    image: "/seven/media.png",
    link: "#",
  },
  {
    id: 6,
    tag: "Venture Update",
    title: "Reparkle: Real Estate Initiatives Built for Long-Term Value",
    image: "/seven/realestate.png",
    link: "#",
  },
];

// --- InsightCard with Responsive Width ---
function InsightCard({ item }) {
  return (
    <div className="group flex flex-col cursor-pointer shrink-0 relative w-full">
      {/* Main Container - News/Update Card Style */}
      <div className="relative w-full h-[460px] bg-gray-100 overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300">
        
        {/* IMAGE BACKGROUND */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
        />
        
        {/* BLUE GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-opacity duration-300"></div>
        
        {/* CONTENT */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          
          {/* TOP BADGE */}
          <span className="inline-block bg-[#0054A6] text-white text-xs font-bold px-3 py-1.5 w-fit uppercase tracking-wider backdrop-blur-sm shadow-sm">
            {item.tag}
          </span>

          {/* BOTTOM CONTENT */}
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
             
             <h3 className="text-white text-xl  font-bold leading-tight font-switzer mb-6 line-clamp-3">
                {item.title}
             </h3>
             
             <div className="flex items-center gap-6 border-t border-white/20 pt-4">
                <Link href={item.link} className="flex items-center gap-2 text-white text-sm font-semibold hover:text-accent transition-colors">
                    Read More <FaArrowRight size={12} />
                </Link>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function SevenSection() {
 

  return (
    <section className="relative w-full z-30 bg-white py-10 md:py-20 pb-20 md:pb-30 text-primary-dark ">
      
      {/* Header Container */}
      <div
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 px-6 md:px-10"
      >
        <h2 className="text-start text-3xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal max-w-xl mb-6 lg:mb-0">
          Ecosystem Updates
        </h2>

    
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {insights.map((item) => (
                <InsightCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
