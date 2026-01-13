"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full max-w-350 z-100 flex items-center justify-between px-10 mt-8 py-3 rounded-2xl text-white bg-black/30 backdrop-blur-md mx-auto">
      {/* 1. LEFT LOGO ICON */}
      <div className="flex items-center cursor-pointer">
        <div className="w-13 h-13 relative">
          {/* Abstract Logo Placeholder similar to image */}
          <Image
            src="/logo1.png"
            alt="RM Club Logo"
            width={52}
            height={52}
            className="objec"
          />
        </div>
      </div>

      {/* 2. CENTER BRANDING */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 tracking-widest text-[1.3rem]  ">
        <h1 className="font-switzer text-[1.6rem] font-light">RM</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="96 0 14 33"
          className="h-8 w-auto"
          fill="currentColor"
        >
          <path d="M107.46 0H105.13V24.9958H107.46V0ZM100.5 9.90744H98.17V32.5855H100.5V9.90744Z" />
        </svg>

        <h1 className="font-switzer text-[1.6rem] font-light">CLUB</h1>
      </div>

      {/* 3. RIGHT MENU */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6 text-[1.3rem] font-normal text-white">
          <Link
            href="/"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="/about"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <Link
            href="/team"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            Team
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <Link
            href="#"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            Explor RM Club
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>

        {/* 4. CONTACT BUTTON */}
        <Link
          href="#"
          className="relative px-4 cursor-pointer py-2 bg-[#0A2549] text-[#1EA1F7] font-normal rounded-md text-[1.3rem] overflow-hidden group"
        >
          <span className="relative z-10">Contact</span>
          <span className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </Link>
      </div>
    </nav>
  );
}
