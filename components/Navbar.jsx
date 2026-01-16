"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const companies = [
  { name: "JAWA POONP", id: "jawa-poonp" },
  { name: "REPARKLE", id: "reparkle" },
  { name: "IPDC", id: "ipdc" },
  { name: "City View", id: "city-view" },
  { name: "Beatz Of Melody", id: "beatz-melody" },
];


  return (
    <>
      <nav className="relative w-[95%] lg:max-w-350 z-[100] flex items-center justify-between px-6 lg:px-10 mt-8 py-3 rounded-2xl text-white bg-black/30 backdrop-blur-md mx-auto">
        {/* 1. LEFT LOGO ICON */}
        <div className="flex items-center cursor-pointer">
          <div className="w-10 h-10 lg:w-13 lg:h-13 relative">
            <Image
              src="/logo1.png"
              alt="RM Club Logo"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
        </div>

        {/* 2. CENTER BRANDING (Hidden on very small screens if it overlaps, or kept centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 tracking-widest">
          <h1 className="font-switzer text-[1.2rem] lg:text-[1.6rem] font-light">RM</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="96 0 14 33"
            className="h-6 lg:h-8 w-auto"
            fill="currentColor"
          >
            <path d="M107.46 0H105.13V24.9958H107.46V0ZM100.5 9.90744H98.17V32.5855H100.5V9.90744Z" />
          </svg>
          <h1 className="font-switzer text-[1.2rem] lg:text-[1.6rem] font-light">CLUB</h1>
        </div>

        {/* 3. DESKTOP RIGHT MENU (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 text-[1.3rem] font-normal text-white">
            <Link href="/" className="relative group hover:text-white transition-colors cursor-pointer">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link href="/about" className="relative group hover:text-white transition-colors cursor-pointer">
              About
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link href="/team" className="relative group hover:text-white transition-colors cursor-pointer">
              Team
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            {/* DROPDOWN */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Explore RM Club</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              <div className={`absolute top-full left-0 mt-4 w-70 transition-all duration-300 ease-out origin-top ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
                <div className="bg-[#EEF6FF] rounded-sm p-4 shadow-xl">
                  {companies.map((item) => (
                    <Link key={item.id} href={`/company/${item.id}`} className="flex items-center justify-between px-4 py-4 rounded-md group/item hover:bg-white/80 transition-all">
                      <span className="text-[#0F172A] text-[1.2rem] font-medium">{item.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#0F172A" className="w-5 h-5 transform group-hover/item:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/contact" className="relative px-4 cursor-pointer py-2 bg-[#0A2549] text-[#1EA1F7] font-normal rounded-md text-[1.3rem] overflow-hidden group">
            <span className="relative z-10">Contact</span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER ICON */}
        <button 
          className="lg:hidden flex flex-col gap-1.5 z-[110]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* 5. MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[90] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-white transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">Home</Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">About</Link>
        <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">Team</Link>
        
        {/* Simple Mobile Dropdown Toggle */}
        <div className="flex flex-col items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl flex items-center gap-2">
            Explore RM Club <span className={isOpen ? "rotate-180" : ""}>▾</span>
          </button>
          {isOpen && (
            <div className="flex flex-col items-center gap-4 mt-4 text-lg text-gray-300">
              <Link href="/hartmann-ventures" onClick={() => setIsMobileMenuOpen(false)}>JAWA POONP</Link>
              <Link href="/hartmann-ventures" onClick={() => setIsMobileMenuOpen(false)}>REPARKLE</Link>
              <Link href="/hartmann-ventures" onClick={() => setIsMobileMenuOpen(false)}>IPDC</Link>
              <Link href="/hartmann-ventures" onClick={() => setIsMobileMenuOpen(false)}>City view</Link>
              <Link href="/hartmann-ventures" onClick={() => setIsMobileMenuOpen(false)}>Beatz Of Melody</Link>
            </div>
          )}
        </div>

        <Link 
          href="/contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="px-8 py-3 bg-[#0A2549] text-[#1EA1F7] rounded-md text-xl"
        >
          Contact
        </Link>
      </div>
    </>
  );
}