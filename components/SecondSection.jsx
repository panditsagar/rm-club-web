"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

export default function SecondSection() {
  const items = [
  
    {
      badge: "Infrastructure",
      title: "Shaping Real Assets",
      date: "Project Update",
      image: "/updates/infra.png",
      link: "/projects"
    },
    {
      badge: "Media & Culture",
      title: "Powering Voice and Culture",
      date: "Community Initiative",
      image: "/updates/culture.png",
      link: "/impact"
    },
    {
      badge: "Social Impact",
      title: "Strengthening Communities",
      date: "CSR Activity",
      image: "/updates/community.png",
      link: "/impact"
    },
  ];

  return (
    <section className="relative z-40 w-ful pt-20  ">
      {/* CENTER WRAPPER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-8">
            <h1 className="  text-primary-dark text-4xl md:text-5xl lg:text-[2.5rem] tracking-tight leading-tight font-switzer font-normal">
            We envision a transformative decade ahead
            </h1>
            <Link 
                href="/about" 
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors uppercase text-sm tracking-wider"
            >
                Read Our Vision <FaArrowRight />
            </Link>
        </div>

        {/* GRID - News/Update Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[4/4] bg-gray-100  overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* IMAGE BACKGROUND */}
              <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
              />
                 {/* Overlay - Gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* BLUE GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-opacity duration-300"></div>
              
              {/* CONTENT */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                
                {/* TOP BADGE */}
                <span className="inline-block bg-[#0054A6] text-white text-xs font-bold px-3 py-1.5  w-fit uppercase tracking-wider">
                  {item.badge}
                </span>

                {/* BOTTOM CONTENT */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   <p className="text-gray-300 text-xs font-medium mb-2 uppercase tracking-wide">
                      {item.date}
                   </p>
                   
                   <h3 className="text-white text-xl md:text-2xl font-bold leading-tight font-switzer mb-6">
                      {item.title}
                   </h3>
                   
                   <div className="flex items-center gap-6 border-t border-white/20 pt-4">
                      <Link href={item.link} className="flex items-center gap-2 text-white text-sm font-semibold hover:text-accent transition-colors">
                          Read More <FaArrowRight size={12} />
                      </Link>
                      
                      <button className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors">
                          Share <FaShare size={12} />
                      </button>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Link */}
        <div className="mt-12 text-center md:hidden">
            <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm tracking-wider"
            >
                Read Our Vision <FaArrowRight />
            </Link>
        </div>

      </div>
    </section>
  );
}
