// ... imports
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Added usePathname
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { companiesData } from "../lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Desktop Dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile Dropdown
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // If we are on a page that needs a dark nav by default, we can still track scroll for other effects if needed,
      // but the background will be overridden.
      // However, let's keep the logic clean.
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we should show the dark glass background
  // 1. If user has scrolled down
  // 2. OR if we are on a page with a light background (Contact, Team, Company, etc.)
  const showDarkNav = isScrolled;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[100] font-switzer transition-all duration-300 ${
        showDarkNav
          ? "bg-black/60 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-2 border-b border-white/20"
      }`}
    >
      <nav className="w-full px-6 lg:px-20 flex items-center justify-between relative z-50">
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`relative transition-all duration-300 ${showDarkNav ? "w-10 h-10 lg:w-14 lg:h-14" : "w-10 h-10 lg:w-14 lg:h-14"}`}
          >
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* MEGA MENU DROPDOWN */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-16 -left-90 w-[900px] bg-[#181818] text-white   rounded-sm overflow-hidden border border-white/10"
                >
                  <div className="flex h-full">
                    {/* LEFT COLUMN: BRAND CONCEPT */}
                    <div className="w-[35%] bg-white/5 p-10 flex flex-col justify-between border-r border-white/5">
                      <div>
                        <h3 className="text-[#3b82f6] font-serif text-2xl font-medium mb-4 tracking-tight">
                          The RM Ecosystem
                        </h3>
                        <p className="text-gray-400 text-[0.9rem] leading-relaxed mb-6 font-normal">
                          A diverse network of enterprises building value across
                          industries, united by a shared vision of impact and
                          excellence.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3b82f6] hover:gap-3 transition-all duration-300"
                        >
                          View All Ventures <FaArrowRight />
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: VENTURES GRID */}
                    <div className="w-[65%] p-8 bg-[#181818]">
                      <div className="grid grid-cols-2 gap-4">
                        {companiesData.map((item) => (
                          <Link
                            key={item.id}
                            href={`/company/${item.id}`}
                            className="group/item relative flex flex-col p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-gray-200 text-[0.95rem] font-semibold group-hover/item:text-[#3b82f6] transition-colors">
                                {item.name}
                              </h4>
                              <FaArrowRight className="w-3 h-3 text-[#3b82f6] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                            </div>
                            <p className="text-xs text-gray-500 font-normal line-clamp-1 group-hover/item:text-gray-400 transition-colors">
                              {item.tagline}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/team">Leadership</NavLink>
        </div>

        {/* 3. RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/contact"
            className="group flex items-center gap-0.5 w-fit"
          >
            {/* Left Part: Text */}
            <div className="bg-[#3b82f6] text-white px-8 py-2 rounded-bl-2xl rounded-tr-xl font-medium text-md transition-all duration-300 group-hover:bg-[#2563eb]">
              Contact Us
            </div>

            {/* Right Part: Arrow */}
            <div className="bg-[#3b82f6] text-white p-3 rounded-br-xl rounded-tl-xl transition-all duration-300 group-hover:bg-[#2563eb] flex items-center justify-center">
              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-[110] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
            }
            className="h-0.5 w-6 bg-white block origin-center"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 bg-white block"
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            className="h-0.5 w-6 bg-white block origin-center"
          />
        </button>
      </nav>

      {/* 5. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-[#181818] flex flex-col pt-32 px-10 gap-8 text-white lg:hidden h-screen"
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold border-b border-white/10 pb-4 hover:text-[#0054A6] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold border-b border-white/10 pb-4 hover:text-[#0054A6] transition-colors"
            >
              About Us
            </Link>

            {/* Mobile Dropdown */}
            <div className="flex flex-col w-full border-b border-white/10 pb-4">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="text-2xl font-bold flex items-center justify-between w-full hover:text-[#0054A6] transition-colors"
              >
                Our Ventures
                <motion.svg
                  animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#0054A6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isMobileDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col pl-4 gap-4 overflow-hidden"
                  >
                    <div className="pt-6 flex flex-col gap-4">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold border-b border-white/10 pb-4 hover:text-[#0054A6] transition-colors"
            >
              Leadership
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-[#0054A6]"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative group py-2">
      <span className="group-hover:text-[#0054A6] transition-colors">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0054A6] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
