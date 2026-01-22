"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-[#080618] text-[#fff] m-2 p-4  pt-5 md:m-10 md:p-10 rounded-md font-author">
      <div className=" ">
        {/* TOP ROW: LOGO + CONTACT INFO */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8  mb-12">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src="/logo1.png"
                alt="RM Club Logo"
                width={52}
                height={52}
                className="objec"
              />
            </div>
            <div className="  flex items-center gap-2 tracking-widest text-[1.3rem]  ">
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
          </div>

          {/* CONTACT COLUMNS */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-44">
            {/* General Inquiries */}
            <div className="flex flex-col gap-2">
              <span className="bg-[#1A1A2A] text-white text-sm px-2 py-1 uppercase tracking-wider w-fit ">
                General Inquiries
              </span>
              <a
                href="mailto:connect@rmclub.in"
                className="text-lg hover:text-white transition-colors border-b border-white/90 hover:border-white w-fit"
              >
                connect@rmclub.in
              </a>
            </div>

            {/* Press */}
            <div className="flex flex-col gap-2">
               <span className="bg-[#1A1A2A] text-white text-sm px-2 py-1 uppercase tracking-wider w-fit ">
                Press
              </span>
              <a
                href="mailto:media@rmclub.in"
                className="text-lg hover:text-white transition-colors border-b border-white/90 hover:border-white   w-fit"
              >
                media@rmclub.in
              </a>
            </div>

            {/* Our Investors */}
            <div className="flex flex-col gap-2">
               <span className="bg-[#1A1A2A] text-white text-sm px-2 py-1 uppercase tracking-wider w-fit ">
                Partnerships
              </span>
              <a
                href="mailto:partners@rmclub.in"
                className="text-lg hover:text-white transition-colors border-b border-white/90 hover:border-white   w-fit"
              >
                partners@rmclub.in
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: DISCLAIMER + SOCIALS */}
        <div className="flex flex-col lg:flex-row justify-between gap-16  mb-12">
          {/* Disclaimer Text */}
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 text-md text-white/80 leading-[1.1]">
            <p>
            RM Club is a multi-venture ecosystem bringing together independent businesses, community initiatives, and collaborative projects across media, hospitality, real estate, travel, education, and commerce.
            We focus on building sustainable, real-world ventures guided by long-term thinking, shared values, and responsible growth. Each initiative operates independently while benefiting from collective experience and ecosystem support.

            </p>
            <p>
             This website is intended for general informational purposes only. It does not constitute financial, legal, or investment advice, nor an offer or solicitation of any kind.

References to ventures, initiatives, or activities are descriptive in nature and should not be interpreted as guarantees, recommendations, or invitations to participate in financial arrangements. Engagements, partnerships, or collaborations are subject to independent discussion and mutual agreement.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-md font-medium text-white/90">Follow us</span>
            <div className="flex gap-2">
              <SocialIcon href="#">
                <FaXTwitter size={20} />
              </SocialIcon>
              <SocialIcon href="#">
                <FaLinkedinIn size={20} />
              </SocialIcon>
              <SocialIcon href="#">
                <FaYoutube size={20} />
              </SocialIcon>
              <SocialIcon href="#">
                <FaInstagram size={20} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: LINKS + CREDITS */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-white/90 gap-8 text-sm md:text-md font-medium  ">
          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <FooterLink href="#">Offerings</FooterLink>
            <FooterLink href="#">Portfolio</FooterLink>
            <FooterLink href="#">About</FooterLink>
        
            <FooterLink href="#">Contact</FooterLink>
          </div>

          <div className="flex gap-8 ">
            <FooterLink href="#"  >
              Privacy Statement
            </FooterLink>
            <FooterLink href="#"  >
              Terms of Use
            </FooterLink>
          </div>

          {/* Credits */}
          <div className="flex gap-4 text-white/90">
            <span>Designed by Triplehash</span>
            {/* <span>Code by Dennis</span> */}
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
      className="w-12 h-12 border border-white/15 flex items-center justify-center   hover:border-white/30 transition-all rounded-xs text-white"
    >
      {children}
    </a>
  );
}

function FooterLink({ children, href, className = "" }) {
  return (
    <Link
      href={href}
      className={`hover:text-white transition-colors ${className}`}
    >
      <span className="flex items-center gap-1">
        {children}
       
      </span>
    </Link>
  );
}
