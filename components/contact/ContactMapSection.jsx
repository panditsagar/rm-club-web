"use client";

import React from "react";

export default function ContactMapSection() {
  return (
    <section className="w-full   pb-20 ">
      <div>
        {/* Right Column: Map */}
        <div className="w-full h-[600px] bg-gray-100   overflow-hidden shadow-sm border border-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.212476595604!2d72.83403331490234!3d18.921371987176587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sBallard%20Estate%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1645520268580!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
