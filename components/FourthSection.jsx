"use client";

import React from "react";

export default function FourthSection() {
  const sectors = [
    "News and media",
    "Hospitality",
    "Travel",
    "Music",
    "Education",
  ];

  // Duplicate multiple times to ensure the marquee fills the screen and loops smoothly
  const carouselItems = [...sectors, ...sectors, ...sectors, ...sectors];

  return (
    <section className="relative w-full py-20  overflow-hidden">
      <div className="w-full ">
        <h2 className="text-[#0f172a] text-4xl md:text-5xl font-bold tracking-tight pl-6 md:pl-10 lg:pl-20 text-start mb-10 lg:mb-16">
          Sectors We Engage In
        </h2>

        {/* The Blue Ticker Ribbon matching the reference UI */}
        <div className="w-full bg-[#4F55F1] py-14 border-y-2 border-[#4F55F1]">
          <div className="flex animate-marquee whitespace-nowrap">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center shrink-0 pr-12 md:pr-26"
              >
                <span className="text-white font-bold text-[40px] md:text-[56px] lg:text-3rem tracking-tight whitespace-nowrap">
                  {item}
                </span>

                <div className="ml-12 md:ml-20 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M32 0v32l-32-32h32z"></path>
                    <path d="M16 16v16l-16-16h16z"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded style just in case animate-marquee wasn't properly configured for an infinite linear loop */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: custom-marquee 25s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: custom-marquee 15s linear infinite;
          }
        }
      `,
        }}
      />
    </section>
  );
}
