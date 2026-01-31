 
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi"; 

export default function FourthSection() {
  const logos = [
    {
      id: "coindesk",
      content: (
        <span className="text-primary font-bold text-xl sm:text-2xl opacity-80">
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
        <span className="text-primary font-bold text-xl sm:text-2xl opacity-80">
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
        <span className="text-primary font-bold text-xl sm:text-2xl opacity-80">
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
        <span className="text-primary font-bold text-xl sm:text-2xl opacity-80">
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
        <span className="text-primary font-bold text-xl sm:text-2xl opacity-80">
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
    <section className="relative w-full bg-white py-20 pb-0   ">

      <div className="w-full">
        <h2 className="text-primary-dark pl-5 lg:pl-25 text-start text-4xl lg:text-[2.5rem] tracking-tight leading-none font-switzer font-normal mb-10 lg:mb-16">
            Sectors We Engage In
        </h2>

        {/* CAROUSEL TRACK WRAPPER */}
        <div className="w-full overflow-hidden pb-32">
          <div className="w-full border-t border-b border-gray-200 relative bg-gray-50">
            <div className="flex animate-marquee">
              {carouselItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="group relative flex items-center cursor-pointer justify-center w-[150px] h-[140px] sm:w-[260px] sm:h-[250px] shrink-0 border-r border-gray-200 transition-all duration-300 hover:bg-white"
                >
                  {/* LOGO CONTENT */}
                  <div className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    {item.content}
                  </div>

                  
                  {/* TOOLTIP CONTAINER */}
                  <div className="absolute top-[65%] left-1/2 w-[400px] pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0">
                    
                    {/* THE TOOLTIP BOX */}
                    <div className="absolute top-[20px] left-[20px] w-[320px] pointer-events-auto shadow-2xl">
                      <div className="relative bg-white border border-gray-200 p-6 text-left shadow-lg">
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45"></div>
                        <p className="text-gray-600 text-[15px] leading-relaxed font-normal mb-4">
                          {item.quote}
                        </p>

                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-primary text-sm font-bold border-b-2 border-primary/20 hover:border-primary pb-0.5 transition-colors"
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
      </div>
    </section>
  );
}

// Small helper component for the blue points
function BlueSquare({ className = "" }) {
  return (
    <div
      className={`absolute w-1.5 h-1.5 bg-primary z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`}
    />
  );
}
