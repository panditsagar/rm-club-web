"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function ThirdSection() {
  // Data for the "V" visualization bars (height percentages)
  // Mirroring the left side to create a V shape
  const bars = [
    40,
    60,
    45,
    70,
    50,
    80,
    60,
    100, // Left side
    60,
    80,
    50,
    70,
    45,
    60,
    40, // Right side (approximate mirror)
  ];

  return (
    <section className="relative z-30 w-full min-h-screen bg-[#080618] flex items-center justify-center py-20 px-6 md:px-20 overflow-hidden">
      {/* Top Gradient Blend */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-transparent to-[#080618] -translate-y-full pointer-events-none" />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* LEFT COLUMN - TECH CARD */}
        <div className="relative aspect-square w-full max-w-[600px] mx-auto">
          {/* Main Border Container */}
          <div className="absolute inset-0 border border-white/10 bg-[#080618]/50 backdrop-blur-sm">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#1FA5FD]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#1FA5FD]" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#1FA5FD]" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#1FA5FD]" />

            {/* Inner Diagonal Lines (Decorative) */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/5 opacity-50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5 opacity-50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/5 opacity-50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/5 opacity-50" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* "V" Visualization */}
              <div className="flex items-end gap-1.5 h-32 mb-12">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-linear-to-t from-[#2c1eff] to-[#1FA5FD]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Logo Text */}
              <div className="absolute bottom-12 flex items-center gap-3 text-white tracking-widest uppercase font-light text-lg">
                <span className="font-semibold text-xl">Hartmann</span>
                <div className="h-6 w-px bg-white/30" />
                <span className="text-white/80">Ventures</span>
              </div>
            </div>

            {/* Bottom Blue Glow Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
          </div>
        </div>

        {/* RIGHT COLUMN - TEXT CONTENT */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="font-switzer text-5xl md:text-6xl text-white font-normal leading-tight mb-8">
            Hartmann <br />
            Ventures
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-light mb-12">
            Hartmann Ventures invests at the frontier of technology, backing
            founders building the next era of human capability. Our core theses
            span Generative AI, Brain-Computer Interfaces, XR & Spatial
            Computing, Programmable Biology, and Robotics— transformations that
            will redefine how we work, create, connect, and build in the decades
            ahead.
          </p>

          <button className="flex items-center gap-3 w-fit px-6 py-3 bg-[#111827] text-[#1FA5FD] hover:text-white border border-[#1FA5FD]/30 hover:border-[#1FA5FD] transition-all duration-300 rounded-sm group">
            <span className="text-lg">Learn more</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
