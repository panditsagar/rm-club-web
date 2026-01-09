"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi"; // Matching the Source icon style

export default function FourthSection() {
const logos = [
  {
    id: "coindesk",
    content: (
      <span className="text-white font-bold text-4xl opacity-60">
        News and media
      </span>
    ),
    quote:
      "Through Jansanket, RM Club supports local journalism and community-focused reporting that amplifies regional voices and public awareness.",
    source: "RM Club Ecosystem",
  },
  {
    id: "barrons",
    content: (
      <span className="text-white font-bold text-4xl opacity-60">
        Hospitality
      </span>
    ),
    quote:
      "City View Restaurant & Bar represents RM Club’s approach to hospitality—bringing people together through food, experience, and community.",
    source: "RM Club Ecosystem",
  },
  {
    id: "cryptoslate",
    content: (
      <span className="text-white font-bold text-4xl opacity-60">
        Travel
      </span>
    ),
    quote:
      "RM Trek focuses on curated travel and exploration, creating meaningful experiences that connect people with places and culture.",
    source: "RM Club Ecosystem",
  },
  {
    id: "blockworks",
    content: (
      <span className="text-white font-bold text-4xl opacity-60">
        Music
      </span>
    ),
    quote:
      "Beatz of Melody supports independent artists and creative production, fostering authentic sound and sustainable creative expression.",
    source: "RM Club Ecosystem",
  },
  {
    id: "carta",
    content: (
      <span className="text-white font-bold text-4xl opacity-60">
        Education
      </span>
    ),
    quote:
      "Jawa Poonp reflects RM Club’s commitment to education and welfare initiatives focused on access, learning, and long-term social impact.",
    source: "RM Club Ecosystem",
  },
];

  // Duplicate for marquee effect
  const carouselItems = [...logos, ...logos];

  return (
    <section className="relative w-full bg-[#080618] py-20 overflow-hidden pb-50">
      <div className="w-full">
        <h2 className="text-white pl-20 text-start text-5xl lg:text-[4.5rem] tracking-tight leading-none font-switzer mb-20">
          Engaging across 
        </h2>

        {/* CAROUSEL TRACK */}
        <div className="w-full border-t border-b border-white/20 relative">
          <div className="flex animate-marquee">
            {carouselItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group relative flex items-center cursor-pointer justify-center w-[300px] h-[290px] shrink-0 border-r border-white/20 transition-all duration-300"
              >
                {/* LOGO CONTENT */}
                <div className="group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                  {item.content}
                </div>

                {/* --- HOVER UI ELEMENTS --- */}

                {/* Corner Squares (Matches Image) */}
                <BlueSquare className="-top-1 -left-1" />
                <BlueSquare className="-top-1 -right-1" />
                <BlueSquare className="-bottom-1 -left-1" />

                {/* DIAGONAL LINE AND TOOLTIP CONTAINER */}
                <div className="absolute top-[65%] left-1/2 w-[400px] pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-y-2 group-hover:translate-y-0">
                  {/* The SVG Line */}
                  <svg
                    className="absolute top-0 left-0 w-full h-[100px] overflow-visible"
                    style={{
                      filter: "drop-shadow(0 0 2px rgba(31, 165, 253, 0.5))",
                    }}
                  >
                    <rect x="0" y="0" width="8" height="8" fill="#1FA5FD" />
                    <path
                      d="M 0 0 L 50 60" // Starts from parent's left 50% (0 in this local div), goes down and right
                      stroke="#1FA5FD"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>

                  {/* THE TOOLTIP BOX */}
                  <div className="absolute top-[60px] left-[50px] w-[320px] pointer-events-auto">
                    <div className="relative bg-[#050412]/95 backdrop-blur-md border border-[#1FA5FD] p-6 text-left  ">
                      <p className="text-[#1FA5FD] text-[15px] leading-relaxed font-medium mb-4">
                        {item.quote}
                      </p>

                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-[#1FA5FD] text-sm font-semibold border-b border-[#1FA5FD] pb-0.5 hover:opacity-80 transition-opacity"
                      >
                        {item.source}
                        <FiArrowUpRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// Small helper component for the blue points
function BlueSquare({ className = "" }) {
  return (
    <div
      className={`absolute w-2 h-2 bg-[#1FA5FD] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${className}`}
    />
  );
}
