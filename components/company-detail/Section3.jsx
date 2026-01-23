"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection({ company }) {
 const { ecosystemSection } = company;

  return (
    <section className="relative z-30 w-full min-h-screen bg-[#080618] flex items-center justify-center py-20 pb-40 sm:pb-50 px-6 md:px-20">
     
      <div className="max-w-[1400px] w-full flex flex-col">
        <h1 className="max-w-lg mb-16 text-white text-start text-[2.5rem] lg:text-[4.5rem] tracking-tight leading-[1.1] sm:leading-none font-jakarta font-medium">
          Discover our Venture Ecosystem
        </h1>
        <div className="    grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* LEFT COLUMN - TECH CARD */}
          <div className="relative aspect-square w-full max-w-[600px] mx-auto">
            {/* Main Border Container */}
            <div className="absolute inset-0   ">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#1FA5FD]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#1FA5FD]" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#1FA5FD]" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#1FA5FD]" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* "V" Visualization */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 760 760"
                  fill="none"
                  className="offerings__visual-svg group"
                >
                  <path
                    d="M264.773 760L272.3 751.361H478.556L488.593 760H759.999V495.225L751.361 487.698V281.443L759.999 271.407V9.2481e-06L495.226 0L487.698 8.6392L281.443 8.63921L271.406 9.2481e-06L0 2.16588e-05V264.775L8.63823 272.301L8.63821 478.557L0 488.593V760L264.773 760Z"
                    fill="var(--color-dark)"
                  ></path>
                  <path
                    d="M272.3 750.861H272.073L271.923 751.032L264.545 759.5L0.5 759.5V488.778L9.01716 478.883L9.13821 478.743V478.557L9.13823 272.301V272.074L8.96669 271.924L0.5 264.547V0.500022L271.22 0.500009L281.116 9.01816L281.257 9.13921H281.443L487.698 9.1392H487.926L488.075 8.96767L495.454 0.5L759.499 0.500009V271.221L750.982 281.116L750.861 281.257V281.443V487.698V487.926L751.032 488.075L759.499 495.453V759.5H488.779L478.882 750.982L478.742 750.861H478.556H272.3Z"
                    stroke="white"
                    strokeOpacity="0.2"
                  ></path>
                  <rect
                    x="160.531"
                    y="160.531"
                    width="438.937"
                    height="438.937"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="1.06265"
                  ></rect>
                  <path
                    d="M1 1L161 161"
                    stroke="white"
                    strokeOpacity="0.2"
                  ></path>
                  <path
                    d="M1 759L161 599"
                    stroke="white"
                    strokeOpacity="0.2"
                  ></path>
                  <path
                    d="M599 161L759 1"
                    stroke="white"
                    strokeOpacity="0.2"
                  ></path>
                  <path
                    d="M599 599L759 759"
                    stroke="white"
                    strokeOpacity="0.2"
                  ></path>
                  <path
                    d="M281 10H488"
                    stroke="url(#paint0_linear_2997_10989)"
                  ></path>
                  <path
                    d="M10 479L10 272"
                    stroke="url(#paint1_linear_2997_10989)"
                  ></path>
                  <path
                    d="M478.999 750H271.999"
                    stroke="url(#paint2_linear_2997_10989)"
                  ></path>
                  <path
                    d="M750 281V488"
                    stroke="url(#paint3_linear_2997_10989)"
                  ></path>
                  <g className="logo-zoom">
                    <image
                      className="logo-img"
                      href={ecosystemSection.logo}
                      x="280"
                      y="280"
                      width="202"
                      height="202"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>

                  <defs>
                    <linearGradient
                      id="paint0_linear_2997_10989"
                      x1="281"
                      y1="10"
                      x2="488"
                      y2="10"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#002FFF" stopOpacity="0"></stop>
                      <stop offset="0.5" stopColor="#002FFF"></stop>
                      <stop
                        offset="1"
                        stopColor="#002FFF"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2997_10989"
                      x1="10"
                      y1="479"
                      x2="10"
                      y2="272"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#002FFF" stopOpacity="0"></stop>
                      <stop offset="0.5" stopColor="#002FFF"></stop>
                      <stop
                        offset="1"
                        stopColor="#002FFF"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2997_10989"
                      x1="478.999"
                      y1="750"
                      x2="271.999"
                      y2="750"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#002FFF" stopOpacity="0"></stop>
                      <stop offset="0.5" stopColor="#002FFF"></stop>
                      <stop
                        offset="1"
                        stopColor="#002FFF"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2997_10989"
                      x1="750"
                      y1="281"
                      x2="750"
                      y2="488"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#002FFF" stopOpacity="0"></stop>
                      <stop offset="0.5" stopColor="#002FFF"></stop>
                      <stop
                        offset="1"
                        stopColor="#002FFF"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2997_10989"
                      x1="380"
                      y1="256"
                      x2="380"
                      y2="504"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1FA5FD"></stop>
                      <stop offset="1" stopColor="#3C0ED5"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Bottom Blue Glow Bar */}
            </div>
          </div>

          {/* RIGHT COLUMN - TEXT CONTENT */}
          <div className="flex flex-col justify-center text-left">
            <h2 className="   text-white lg:text-[4.5rem] tracking-tight leading-none font-jakarta font-medium mb-8 max-w-md">
             {ecosystemSection.title}
            </h2>

            <p className=" text-lg md:text-[1.35rem] text-white/90 max-w-xl leading-[1.1] tracking-wide font-normal mb-10">
              {ecosystemSection.description}
 
             </p>

            <button
              className="
    relative
    inline-flex items-center gap-2
    w-fit
    px-3 py-2.5
    bg-[#0A2549]
    text-[#1EA1F7]
 
    text-[1.1rem]
    overflow-hidden
    cursor-pointer
    group
  "
            >
              <span className="relative z-10">{ecosystemSection.buttonText}</span>

              <span className=" ">
                <FaArrowRight size={14} className="relative z-10  " />
              </span>

              {/* SHIMMER OVERLAY */}
              <span
                className="
      absolute inset-0
      bg-gradient-to-r
      from-transparent
      via-white/15
      to-transparent
      -translate-x-full
      group-hover:translate-x-full
      transition-transform
      duration-700
      ease-in-out
    "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
