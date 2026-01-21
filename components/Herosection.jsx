"use client";

import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import TextType from "./ui/TextType";

export default function App() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#080618]">
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0 hidden md:block">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* GRADIENT OVERLAY (Simulating the blue waves if Spline doesn't fully cover or for mood) */}

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto relative z-50 h-full flex flex-col justify-center mt-[-80px] sm:mt-0  px-5 md:px-0">
          <h1
            className="font-jakarta text-[2.65rem] md:text-7xl lg:text-[5.6rem] font-bold tracking-tight leading-[1.1] sm:leading-none capitalize
 text-[#ECF5FF]  max-w-3xl"
          >
            {/* The future belongs to those who invest in it */}
The future belongs to those who
            <TextType
              text={[" invest in it"]}
              typingSpeed={120}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={120}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </h1>

          <p className="mt-14 text-2xl md:text-[1.65rem] text-white max-w-xl leading-[1.1] tracking-wide font-normal">
            Building long-term value across businesses, communities, and
            real-world enterprises.
          </p>

          <Link
            href="#"
            className="mt-6 text-[#1FA5FD] text-[1.4rem] md:text-[1.65rem] font-normal inline-flex items-center gap-1    transition-colors group"
          >
            Discover more
            <span className="transform group-hover:translate-y-1 transition-transform">
              <FaArrowDown size={18} />
            </span>
          </Link>
        </div>

        {/* BOTTOM FADE */}
      </section>
    </>
  );
}
