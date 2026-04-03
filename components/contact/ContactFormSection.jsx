"use client";

import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="relative w-full md:pb-20 px-6 md:px-26">
      <div className="max-w-[1400px] mx-auto">
         {/* Main Container Card matching the screenshot bounds */}
         <div className="relative w-full min-h-[750px] bg-gray-100 rounded-[30px] rounded-br-[0px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            {/* Full Background Image covering the entire card */}
            <div className="absolute inset-0 z-0">
               <Image 
                 src="/form.jpg" 
                 alt="Contact Person"
                 fill
                 className="object-cover object-[center_top]"
               />
               {/* Overlay - transparent on left, solid grey on right */}
            </div>

            {/* Left Content Spacer (leaves woman visible) */}
            <div className="relative z-10 w-full md:w-[50%] lg:w-1/2 min-h-[300px]"></div>

            {/* Right Form Container covering exactly the right half with a glass blur */}
            <div className="relative z-10 w-full md:w-[50%] lg:w-1/2 h-full flex flex-col bg-[#8F9499]/80 backdrop-blur-xl">
               <ContactForm />
            </div>

         </div>
      </div>
    </section>
  );
}
