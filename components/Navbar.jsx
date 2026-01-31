"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaSearch, FaArrowRight } from "react-icons/fa";
import { companiesData } from "../lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Desktop Dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile Dropdown

  return (
    <div className="w-full fixed top-0 z-[100] font-switzer shadow-md ">
      
     

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-[#181818] w-full px-6 lg:px-26   p-4  flex items-center justify-between relative z-50">
        
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                <Image
                src="/logo1.png"
                alt="RM Club Logo"
                fill
                className="object-contain" 
                />
            </div>
        </Link>

        {/* 2. DESKTOP CENTER MENU */}
        <div className="hidden lg:flex items-center gap-10 font-medium text-white text-[0.95rem] tracking-wide">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            
            {/* DROPDOWN */}
            <div
              className="relative py-4 group"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#0054A6] transition-colors focus:outline-none">
                <span>Our Ventures</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0054A6]" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* MEGA MENU DROPDOWN */}
              <div
                className={`absolute top-19 -left-48 w-[900px] bg-white text-gray-800 shadow-2xl   overflow-hidden transition-all duration-300 ease-out origin-top ${
                  isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <div className="flex h-full"> 
                  {/* LEFT COLUMN: BRAND CONCEPT */}
                  <div className="w-[32%] bg-gray-50 p-8 flex flex-col justify-between border-r border-gray-100">
                    <div>
                      <h3 className="text-[#0054A6] font-serif text-xl font-medium mb-3 tracking-tight">The RM Ecosystem</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                        A diverse network of enterprises building value across industries, united by a shared vision of impact and excellence.
                      </p>
                    </div>
                    <div>
                      <Link href="/companies" className="text-xs font-bold uppercase tracking-wider text-[#0054A6] flex items-center gap-2 hover:gap-3 transition-all">
                        View All Ventures <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: VENTURES GRID */}
                  <div className="w-[68%] p-8 grid grid-cols-2 gap-x-6 gap-y-4">
                    {companiesData.map((item) => (
                      <Link
                        key={item.id}
                        href={`/company/${item.id}`}
                        className="group/item block p-4 rounded-md hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                      >
                         <h4 className="text-gray-900 text-[0.95rem] font-semibold group-hover/item:text-[#0054A6] transition-colors flex items-center justify-between">
                            {item.name}
                            <FaArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-[#0054A6]" />
                         </h4>
                         <p className="text-xs text-gray-500 mt-1.5 font-normal line-clamp-1">
                           {item.tagline}
                         </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/team">Leadership</NavLink>
        </div>

        {/* 3. RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
           
            <Link 
                href="/contact" 
                className="px-6 py-2.5 bg-[#0054A6] hover:bg-[#004080] text-white font-semibold text-sm rounded-sm shadow-sm transition-all uppercase tracking-wide"
            >
                Contact Us
            </Link>
        </div>

        {/* 4. MOBILE HAMBURGER */}
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
        className={`fixed inset-0 z-[90] bg-[#181818] flex flex-col pt-32 px-10 gap-8 text-white transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold border-b border-white/10 pb-4 hover:text-[#0054A6] transition-colors">Home</Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold border-b border-white/10 pb-4 hover:text-[#0054A6] transition-colors">About Us</Link>
        
        {/* Mobile Dropdown */}
        <div className="flex flex-col w-full border-b border-white/10 pb-4">
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="text-2xl font-bold flex items-center justify-between w-full hover:text-[#0054A6] transition-colors"
          >
            Our Ventures
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180 text-[#0054A6]" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <div
            className={`flex flex-col pl-4 gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isMobileDropdownOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"}`}
          >
            {companiesData.map((company) => (
              <Link
                key={company.id}
                href={`/company/${company.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-[#0054A6] font-medium"
              >
                {company.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold border-b border-white/10 pb-4 hover:text-[#0054A6] transition-colors">Leadership</Link>
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#0054A6]">Contact Us</Link>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
    return (
        <Link href={href} className="relative group py-2">
            <span className="group-hover:text-[#0054A6] transition-colors">{children}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0054A6] transition-all duration-300 group-hover:w-full"></span>
        </Link>
    )
}
