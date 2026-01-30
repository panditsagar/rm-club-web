"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white pt-16 pb-8 border-t-2 border-[#0054A6] font-switzer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* TOP ROW: LOGO & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* COLUMN 1: BRAND */}
            <div>
                 <Link href="/" className="flex items-center gap-3 mb-6   w-fit   rounded-sm">
                    <div className="relative w-16 h-16">
                        <Image
                        src="/logo1.png"
                        alt="RM Club Logo"
                        fill
                        className="object-contain " 
                        />
                    </div>
                </Link>
                <div className="text-gray-300 text-sm leading-relaxed mb-6">
                    A multi-venture ecosystem building sustainable real-world enterprises. Driven by values, powered by people.
                </div>
                <div className="flex gap-3">
                    <SocialIcon href="#"><FaXTwitter size={14}/></SocialIcon>
                    <SocialIcon href="#"><FaLinkedinIn size={14}/></SocialIcon>
                    <SocialIcon href="#"><FaYoutube size={14}/></SocialIcon>
                    <SocialIcon href="#"><FaInstagram size={14}/></SocialIcon>
                </div>
            </div>

            {/* COLUMN 2: QUICK LINKS */}
            <div>
                <h4 className="text-md font-bold mb-4 border-b border-white/60 pb-4 w-fit text-[#ffffff]">Quick Links</h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                    <li><FooterLink href="/">Home</FooterLink></li>
                    <li><FooterLink href="/about">About Us</FooterLink></li>
                    <li><FooterLink href="/team">Leadership</FooterLink></li>
                    <li><FooterLink href="/ventures">Our Ventures</FooterLink></li>
                    <li><FooterLink href="/contact">Contact Us</FooterLink></li>
                </ul>
            </div>

            {/* COLUMN 3: VENTURES */}
            <div>
                <h4 className="text-md font-bold mb-4 border-b border-white/60 pb-4 w-fit text-[#ffffff]">Our Businesses</h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                    <li><FooterLink href="/company/jawa-poonp">Jawa Poonp</FooterLink></li>
                    <li><FooterLink href="/company/reparkle">Reparkle Infra</FooterLink></li>
                    <li><FooterLink href="/company/ipdc">IPDC Finance</FooterLink></li>
                    <li><FooterLink href="/company/city-view">Hospitality</FooterLink></li>
                    <li><FooterLink href="/company/beatz-melody">Media & Arts</FooterLink></li>
                </ul>
            </div>

            {/* COLUMN 4: CONTACT */}
             <div>
                <h4 className="text-md font-bold mb-4 border-b border-white/60 pb-4 w-fit text-[#ffffff]">Contact</h4>
                <div className="flex flex-col gap-4 text-sm text-gray-300">
                    <div>
                        <span className="block text-white font-semibold">Corporate Office</span>
                        Ranchi, Jharkhand, India
                    </div>
                    <div>
                        <span className="block text-white font-semibold">Email</span>
                        <a href="mailto:connect@rmclub.in" className="hover:text-[#0054A6] transition-colors">connect@rmclub.in</a>
                    </div>
                    <div>
                        <span className="block text-white font-semibold">Phone</span>
                        <a href="tel:+911234567890" className="hover:text-[#0054A6] transition-colors">+91 123 456 7890</a>
                    </div>
                </div>
            </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} RM Club Ecosystem. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-[#0054A6] transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#0054A6] transition-colors">Terms of Use</Link>
                <Link href="#" className="hover:text-[#0054A6] transition-colors">Sitemap</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ children, href }) {
  return (
    <a
      href={href}
      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-[#0054A6] hover:text-white transition-all rounded-sm text-white"
    >
      {children}
    </a>
  );
}

function FooterLink({ children, href }) {
  return (
    <Link
      href={href}
      className="hover:text-[#0054A6] hover:translate-x-1 transition-all inline-block"
    >
      {children}
    </Link>
  );
}
