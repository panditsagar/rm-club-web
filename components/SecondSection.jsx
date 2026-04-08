"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

export default function SecondSection() {
  const items = [
    {
      badge: "Independent Ventures",
      title: "Autonomous Management",
      date: "Independent Structure",
      image: "/updates/infra.png",
      link: "/about",
    },
    {
      badge: "Shared Governance",
      title: "Structured Oversight",
      date: "Central Coordination",
      image: "/updates/culture.png",
      link: "/about",
    },
    {
      badge: "Long-Term Focus",
      title: "Sustainable Growth",
      date: "Long-Term Vision",
      image: "/updates/community.png",
      link: "/vision",
    },
  ];
  return (
    <section className="relative z-40 w-ful py-16  bg-[#F2F4FA]">
      {/* CENTER WRAPPER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 ">
        <h2 className="text-[#0f172a] text-4xl md:text-5xl font-bold tracking-tight  text-start mb-10 lg:mb-16">
          How RM Club Operates
        </h2>
        {/* GRID - News/Update Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative h-[450px] md:h-[500px]  w-full   overflow-hidden "
            >
              {/* IMAGE BACKGROUND */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
             
             
              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* TOP BADGE */}
                <span className="inline-block bg-[#5359F1] text-white text-xs font-bold px-3 py-1.5  w-fit uppercase tracking-wider">
                  {item.badge}
                </span>

                {/* BOTTOM CONTENT */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 text-xs font-medium mb-2 uppercase tracking-wide">
                    {item.date}
                  </p>

                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight font-switzer mb-4">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-6 border-t border-white/20 pt-4">
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-white text-sm font-semibold hover:text-accent transition-colors"
                    >
                      Read More <FaArrowRight size={12} />
                    </Link>

                  
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
