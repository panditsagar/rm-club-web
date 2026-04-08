"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection({ company }) {
  return (
    <section className="relative z-30 w-full flex flex-col justify-center items-center pt-20  ">
      <div className="max-w-[1300px] w-full flex flex-col items-center justify-center  ">
        <div className="flex flex-col   ">
          {/* Intro Text */}
          <h2 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-6 text-start">
            {company?.details?.heading}
          </h2>

          <p className="text-md text-gray-600 leading-relaxed font-switzer font-normal">
            {company?.details?.p1}
          </p>
          <p className="text-base text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            {company?.details?.p2}
          </p>

          {/* History Section */}
          <h3 className="text-primary-dark text-2xl lg:text-3xl tracking-tight leading-[1.2] font-switzer font-normal mb-4">
            The Story Behind Our Growth
          </h3>
          <p className="text-md text-gray-600 leading-relaxed font-switzer font-normal mb-12">
            {company?.details?.story}
          </p>
        </div>
      </div>
    </section>
  );
}
