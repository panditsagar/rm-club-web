"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function GallerySection({ company }) {
  if (!company?.gallery?.images) return null;

  
  const galleryImages = company.gallery.images;

  return (
    <section className="bg-white py-16  pb-30  ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* --- ITEM 1: TEXT BLOCK --- */}
          <div className="flex flex-col justify-center items-start   ">
            <h2 className="text-3xl md:text-4xl lg:text-[2rem] font-medium text-slate-900 font-switzer leading-[1.1] uppercase mb-6  ">
              FROM IDEA TO IMPACT 
            </h2>
            <p className="text-gray-700 text-xl leading-[1.4]  font-switzer">
              We lead in every sphere we operate in. Serving customers globally across various industries. Serving customers globally across various industries. Explore our offerings by Industry or by Business.
            </p>
            
          </div>

          {/* --- ITEMS 2-6: IMAGES --- */}
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="group relative h-[300px] md:h-[350px] lg:h-[330px] w-full overflow-hidden   cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={img.src}
                alt={img.tag || `Gallery Image ${index}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end">
                {/* Title */}
                <h3 className="text-white text-xl md:text-2xl font-normal font-switzer tracking-wide">
                  {img.tag || "Gallery Item"}
                </h3>

                
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
