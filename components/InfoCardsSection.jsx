"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function SecondSection() {
  const items = [
    {
      badge: "Independent Ventures",
      title: "Autonomous Management",
      date: "Independent Structure",
      link: "/about",
      // Distinctive minimal geometric icon matching the screenshot style
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#5B55FA" strokeWidth="1.5" />
          <path d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40V8Z" fill="#5B55FA" />
        </svg>
      ),
    },
    {
      badge: "Shared Governance",
      title: "Structured Oversight",
      date: "Central Coordination",
      link: "/about",
      // Stacked discs icon
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="14" rx="16" ry="4" stroke="#5B55FA" strokeWidth="1.5" />
          <path d="M8 24C8 26.2091 15.1634 28 24 28C32.8366 28 40 26.2091 40 24" stroke="#5B55FA" strokeWidth="1.5" />
          <ellipse cx="24" cy="24" rx="16" ry="4" fill="#5B55FA" />
          <path d="M8 34C8 36.2091 15.1634 38 24 38C32.8366 38 40 36.2091 40 34" stroke="#5B55FA" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      badge: "Long-Term Focus",
      title: "Sustainable Growth",
      date: "Long-Term Vision",
      link: "/vision",
      // Half-grid geometric element
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#5B55FA" strokeWidth="1.5" />
          <path d="M8 24C8 15.1634 15.1634 8 24 8V40C15.1634 40 8 32.8366 8 24Z" fill="#5B55FA" />
          <path d="M24 16H40" stroke="#5B55FA" strokeWidth="1" />
          <path d="M24 32H40" stroke="#5B55FA" strokeWidth="1" />
          <path d="M32 8V40" stroke="#5B55FA" strokeWidth="1" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-40 w-full bg-white">
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* The 3 white feature columns */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-10 lg:p-16 border-b md:border-b-0 border-gray-200 md:border-r flex flex-col justify-between hover:bg-gray-50/50 transition-colors"
            >
              <div>
                {/* Icon */}
                <div className="mb-20">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-[#0f172a] text-2xl font-bold mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed">
                  Focusing on {item.badge.toLowerCase()} whilst maintaining a strict commitment to our {item.date.toLowerCase()}.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The 4th Blue CTA Column */}
        <div className="w-full lg:w-1/4 bg-[#4F55F1] p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* subtle background glow/overlay for premium feel */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
          
          <div className="relative z-10">
            {/* White Circle Arrow Icon */}
            <div className="mb-20">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#4F55F1]">
                  <path d="M21 11V3h-8l3.29 3.29-9.58 9.58 1.41 1.41 9.58-9.58zM3 21h18v-2H3v2z" />
                </svg>
              </div>
            </div>

            {/* Bold Call To Action equivalent to the image */}
            <h2 className="text-white text-[#0f172a] text-2xl font-bold mb-4 tracking-tight   mb-16 underline decoration-white/40 underline-offset-4">
              How RM Club Operates A Unique structure and long-term vision.
            </h2>
          </div>

          <div className="relative z-10">
            <Link
              href="/about"
              className="group flex items-center gap-3 text-white text-[15px] font-semibold hover:text-white/80 transition-colors"
            >
              Read Our Vision
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
