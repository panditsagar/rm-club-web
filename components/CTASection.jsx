"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative w-full px-5 md:px-30  z-40  py-10 md:py-22 pb-10 md:pb-30 overflow-hidden  ">
      {/* Top Gradient Blend (from SevenSection) */}
      <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-[#080618] to-transparent z-50 pointer-events-none" />
          
    
      <div className="max-w-[1400px] mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        {/* Left Text */}
        <h2 className="text-start text-4xl lg:text-[4.5rem]  tracking-tight leading-none font-jakarta font-medium max-w-xl">
          Learn more about our offerings{" "}
        </h2>

        {/* Right CTA */}
        <div className="mb-2">
          <Link
            href="/contact"
            className="group flex border-b-3 pb-2 md:pb-3 border-[#2D68FF] items-center gap-3 text-[#2D68FF] text-3xl md:text-5xl font-author font-medium hover:text-white transition-colors duration-300 relative"
          >
            <FiArrowUpRight className="text-3xl md:text-5xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="relative">Get in touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
