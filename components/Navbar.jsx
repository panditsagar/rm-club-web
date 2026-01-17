"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Desktop Dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile Dropdown

  const companies = [
    { name: "JAWA POONP", id: "jawa-poonp" },
    { name: "REPARKLE", id: "reparkle" },
    { name: "IPDC", id: "ipdc" },
    { name: "City View", id: "city-view" },
    { name: "Beatz Of Melody", id: "beatz-melody" },
  ];

  return (
    <>
      <nav className="relative w-[95%] lg:max-w-[1400px] z-[100] flex items-center justify-between px-6 lg:px-10 mt-8 py-3 rounded-2xl text-white bg-black/30 backdrop-blur-md mx-auto">
        {/* 1. LEFT LOGO */}
        <div className="flex items-center cursor-pointer">
          <Link href="/" className="w-10 h-10 lg:w-13 lg:h-13 relative block">
            <Image
              src="/logo1.png"
              alt="RM Club Logo"
              width={52}
              height={52}
              className="object-contain"
            />
          </Link>
        </div>

        {/* 2. DESKTOP CENTER/RIGHT MENU (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 text-[1.3rem] font-normal text-white">
            <Link href="/" className="relative group hover:text-white transition-colors">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link href="/about" className="relative group hover:text-white transition-colors">
              About
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link href="/team" className="relative group hover:text-white transition-colors">
              Team
              <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            {/* DESKTOP DROPDOWN */}
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
                    <Link
                      key={item.id}
                      href={`/company/${item.id}`}
                      className="flex items-center justify-between px-4 py-4 rounded-md group/item hover:bg-white/80 transition-all"
                    >
                      <span className="text-[#0F172A] text-[1.2rem] font-medium font-author">{item.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#0F172A" className="w-5 h-5 transform group-hover/item:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. DESKTOP GET STARTED (Hidden on mobile) */}
        <Link href="/contact" className="relative group hidden lg:inline-block">
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-24 h-11 bg-blue-500/60 blur-[10px] rounded-full pointer-events-none" />
          <div className="relative p-[1.2px] rounded-xl overflow-hidden bg-gradient-to-br from-white via-zinc-800 to-blue-500">
            <div className="relative px-8 py-2.5 bg-[#050505] rounded-[11px] flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-orange-400/40 blur-[1px]" />
              <span className="relative z-10 text-[1.2rem] text-[#1EA1F7] font-normal">Get In Touch</span>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          </div>
        </Link>

        {/* 4. MOBILE HAMBURGER ICON */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-[110] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* 5. MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-white transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">Home</Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">About</Link>
        <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium">Team</Link>

        {/* Mobile Dropdown */}
        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="text-2xl font-medium flex items-center gap-2"
          >
            Explore RM Club
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          
          <div className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? "max-h-[400px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
            {companies.map((company) => (
              <Link
                key={company.id}
                href={`/company/${company.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-gray-400 hover:text-white"
              >
                {company.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Contact Button */}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-10 py-3 bg-[#1EA1F7] text-black font-bold rounded-xl text-xl"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}