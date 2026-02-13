"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative w-full z-40 py-14  bg-[#181818] overflow-hidden items-center flex">
      <div className="max-w-[1400px] mx-auto px-10 w-full relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        {/* Left Text */}
        <div className="max-w-3xl">
          <h2 className="text-start text-4xl md:text-6xl lg:text-[3rem] tracking-tight leading-[1.1] font-switzer font-normal text-white mb-6">
            Interested in Working With RM Club?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-[1.2]">
            We welcome thoughtful collaboration aligned with governance, growth,
            and long-term value.
          </p>
        </div>

        {/* Right CTA */}
        <div className="mb-4">
          <Link href="/contact" className="group flex flex-col">
            <div className="flex items-center gap-2 text-white group-hover:text-[#0054A6] text-3xl md:text-4xl font-switzer font-bold transition-colors duration-300">
              <span>Get in touch</span>
              <FiArrowUpRight className="text-4xl md:text-4xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
            </div>
            {/* Underline animation */}
            <div className="h-0.5 w-full bg-[#0054A6] mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
