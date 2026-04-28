"use client";

import React from "react";
import { SiFacebook } from "react-icons/si";

// --- TEAM DATA ---
const teamMembers = [
  {
    id: 1,
    name: "Roshan Oraon",
    role: "CEO & Founder",
    image: "/team/ceo.png",
  },
  {
    id: 2,
    name: "Sarita Tigga",
    role: "Member of Rm Club",
    image: "/team/sarita.webp",
  },
  {
    id: 3,
    name: "Sanjay Kujur",
    role: "Member of Rm Club",
    image: "/team/sanjay.webp",
  },
  {
    id: 4,
    name: "Prakash Kr. Nayak",
    role: "Member of Rm Club",
    image: "/team/prakash.webp",
  },
  {
    id: 5,
    name: "Vijayman Bhagat",
    role: "Member of Rm Club",
    image: "/team/vijayman.webp",
  },
  {
    id: 6,
    name: "Sumitra Kr. Bhagat",
    role: "Member of Rm Club",
    image: "/team/sumitra.webp",
  },
  {
    id: 7,
    name: "Sushma Lakra",
    role: "Member of Rm Club",
    image: "/team/sushma.webp",
  },
  {
    id: 8,
    name: "Saromani Oraon",
    role: "Member of Rm Club",
    image: "/team/saromani.webp",
  },
  {
    id: 9,
    name: "Jaimani Kr. Tirkey",
    role: "Member of Rm Club",
    image: "/team/jaimani.webp",
  },
  {
    id: 10,
    name: "Hemant Minz",
    role: "Member of Rm Club",
    image: "/team/hemant.webp",
  },
  {
    id: 11,
    name: "Bimla Oraon",
    role: "Member of Rm Club",
    image: "/team/bimal.webp",
  },
  {
    id: 12,
    name: "Ganesh Gope",
    role: "Member of Rm Club",
    image: "/team/vijayman.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full pb-25 pt-0 sm:pt-10 overflow-x-clip text-primary-dark z-20 bg-[#F2F4FA]">
      

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-tr-[40px] overflow-hidden flex flex-col h-[410px] transition-all duration-500 group cursor-pointer"
            >
              {/* Unified Animating Image Container */}
              <div className="flex-1 w-full relative overflow-hidden">
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    
                  `}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                      
                    `}
                  />
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="px-6 pb-6 shrink-0 mt-auto bg-white z-10 relative">
                <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className="text-[19px] font-bold text-[#1a2b3c] tracking-tight font-serif">
                      {member.name}
                    </h3>
                    <p className="text-[14px] text-[#60707b] ">{member.role}</p>
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
