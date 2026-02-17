"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection({ company }) {
  return (
    <section className="relative z-30 w-full min-h-screen  flex flex-col justify-center  pt-20  px-6 md:px-26">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
        <h1 className="  text-primary-dark text-4xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal">
          {company?.details?.mainheading}
        </h1>
      </div>
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* LEFT COLUMN - IMAGE CARDS STACK (Fixed Width) */}

        {/* RIGHT COLUMN - RICH TEXT CONTENT (Flex Fill) */}
        <div className="flex-1 flex flex-col justify-start text-left ">
          {/* Intro Text */}
          <h2 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-6  ">
            {company?.details?.heading}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal  ">
            {company?.details?.p1}
          </p>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            {company?.details?.p2}
          </p>

          {/* History Section */}
          <h3 className="ext-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal  mb-4">
            The Story Behind Our Growth
          </h3>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            {company?.details?.story}
          </p>

          {/* Fast Facts Section */}
          <h3 className="ext-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-4">
            The essentials you should know before diving deeper.
          </h3>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal">
            {company?.details?.essentials}
          </p>
        </div>

        <div className="w-full lg:w-[360px] flex-none flex flex-col gap-6">
          {/* CARD 1: IMAGE CARD (Using first feature image or fallback) */}
          <div className="bg-white  overflow-hiddengroup">
            <div className="relative h-[380px] w-full overflow-hidden">
              <img
                src={company?.features?.[0]?.image || "/seven/corporate.png"}
                alt="Feature Highlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* CARD 2: CONTENT CARD (Our Global Solutions) */}
          <div className="bg-[#E9EDEE] p-10  ">
            <h3 className="text-primary-dark text-xl font-switzer font-bold mb-4">
               {company?.details?.rightCards?.card2Title  }
            </h3>
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              {company?.details?.rightCards?.card2Desc}
            </p>
            <button className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide hover:gap-3 transition-all">
              Explore <FaArrowRight className="w-4 h-4 text-primary" />
            </button>
          </div>

          {/* CARD 3: CTA CARD (Speak to our team) */}
          <div className="bg-[#E9EDEE] p-10 ">
            <h3 className="text-primary-dark text-xl font-switzer font-bold mb-4">
              {company?.details?.rightCards?.card3Title}
            </h3>
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              {company?.details?.rightCards?.card3Desc}
            </p>
            <div className="flex justify-between items-center">
              <button className="text-primary font-bold text-sm tracking-wide hover:text-primary-dark transition-colors">
                Contact us
              </button>
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                <FaArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
