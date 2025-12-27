"use client";

import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default function App() {

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#080618]">
        {/* SPLINE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-150 ease-linear z-0">
          <Spline scene="https://prod.spline.design/DBCGWGemx6OSZ2Xf/scene.splinecode" />
        </div>

        {/* GRADIENT OVERLAY (Simulating the blue waves if Spline doesn't fully cover or for mood) */}
        



        {/* CONTENT */}
        <div className="relative z-50 h-full flex flex-col justify-center px-8 md:px-20   pt-34">
          <h1
            className="font-switzer text-5xl md:text-7xl lg:text-[6.65rem] font-normal tracking-tight leading-none capitalize
 text-[#ECF5FF] max-w-4xl"
          >
            The future belongs to those who invest in it
          </h1>

          <p className="mt-14 text-lg md:text-[1.65rem] text-white max-w-xl leading-[1.1] tracking-wide font-normal">
            Hartmann Capital is the institutional <br />
            gateway to early-stage frontier tech.
          </p>

          <Link
            href="#"
            className="mt-6 text-[#1FA5FD] md:text-[1.65rem] font-normal inline-flex items-center gap-1    transition-colors group"
          >
            Discover more
            <span className="transform group-hover:translate-y-1 transition-transform">
              <FaArrowDown  size={18} />
            </span>
          </Link>
        </div>

        {/* BOTTOM FADE */}
       </section>
    </>
  );
}
