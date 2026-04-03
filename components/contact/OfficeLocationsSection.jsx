"use client";

import React from "react";

const locations = [
  {
    title: "New York City, NY",
    address: ["245 Madison Avenue,", "Suite 320, NY 10016"],
    contact: ["+44 (0)20 8547 2121", "contact@insightfinancial.com"],
  },
  {
    title: "California",
    address: ["Los Angeles, CA", "1024 Sunset Blvd, Suite 210"],
    contact: ["+1 (213) 555 4477", "la.office@insightfinancial.com"],
  },
  {
    title: "Texas",
    address: ["Dallas, TX", "580 Commerce Street, Floor 5"],
    contact: ["+1 (469) 555 9021", "tx.office@insightfinancial.com"],
  },
  {
    title: "Florida",
    address: ["Miami, FL", "120 Ocean Drive, Suite 18"],
    contact: ["+1 (305) 555 3368", "fl.office@insightfinancial.com"],
  },
];

export default function OfficeLocationsSection() {
  return (
    <section className="bg-white  md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-[#0f172a] text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Office Locations
        </h2>

        <div className="flex flex-col">
          <div className="border-t border-gray-200">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b border-gray-200 gap-6 lg:gap-4  "
              >
                {/* Title (e.g. New York City, NY) */}
                <div className="lg:w-[25%]">
                  <h3 className="text-[#0a1128] text-[22px] font-semibold tracking-tight">
                    {loc.title}
                  </h3>
                </div>

                {/* Address */}
                <div className="lg:w-[25%] flex flex-col text-[#60707B] text-[16px] leading-relaxed">
                  {loc.address.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="lg:w-[30%] flex flex-col text-[#60707B] text-[16px] leading-relaxed">
                  {loc.contact.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>

                {/* Get Direction Link */}
                <div className="lg:w-[20%] flex lg:justify-end items-center">
                  <a
                    href="#"
                    className="group flex items-center  gap-3 text-[#0a1128] font-semibold text-[16px] hover:text-[#4F55F1] transition-colors"
                  >
                    Get Direction
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
