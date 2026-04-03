"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { facebook, SiFacebook } from "react-icons/si";
const teamMembers = [
  {
    id: 1,
    name: "Emily Tran",
    role: "Managing Director",
    image: "/team/sarita.webp",
     isCircle: true,
  },
  {
    id: 2,
    name: "Rachel Lee",
    role: "Vice President",
      image: "/team/sanjay.webp",
    isCircle: true,
  },
  {
    id: 3,
    name: "James Nguyen",
    role: "Senior Advisor Associate",
   image: "/team/prakash.webp",
    isCircle: true,
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "Vice President",
       image: "/team/prakash.webp",
    isCircle: true,
  },
];

export default function SixSection() {
  return (
    <section className="relative w-full pt-16 bg-[#F2F4FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          <h2 className="text-[#0f172a] text-4xl md:text-5xl font-bold tracking-tight   text-start mb-10 lg:mb-16">
            Our Team
          </h2>
          <div className="flex  items-center gap-6  mb-10 lg:mb-16">
            <Link
              href="/team"
              className="group flex items-center gap-0.5 w-fit"
            >
              {/* Left Part: Text */}
              <div className="bg-[#4F55F1] font-serif text-white text-lg px-8 py-2.5  font-medium text-md transition-all duration-300 group-hover:bg-[#2563eb]">
                View All
              </div>

              {/* Right Part: Arrow */}
              <div className="bg-[#4F55F1] font-serif text-white p-4  transition-all duration-300 group-hover:bg-[#2563eb] flex items-center justify-center">
                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white   rounded-tr-[40px] overflow-hidden flex flex-col h-[410px] transition-all duration-500   group cursor-pointer"
            >
              {/* Unified Animating Image Container */}
              <div className="flex-1 w-full relative overflow-hidden">
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${
                      member.isCircle
                        ? "[clip-path:circle(110px_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)]"
                        : "[clip-path:circle(150%_at_50%_50%)]"
                    }
                  `}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${
                        member.isCircle
                          ? "scale-110 group-hover:scale-100"
                          : "scale-100 group-hover:scale-105"
                      }
                    `}
                  />
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="px-6 pb-6 shrink-0 mt-auto bg-white z-10 relative">
                <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className="text-[19px] font-bold text-[#1a2b3c]  tracking-tight font-serif  ">
                      {member.name}
                    </h3>
                    <p className="text-[14px] text-[#5c6a76]">{member.role}</p>
                  </div>

                  <SiFacebook
                    color="#0866FF"
                    size={36}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
