"use client";

import React from "react";

export default function ContactMapSection() {
  return (
    <section className="w-full bg-white  pb-26 px-6 lg:px-26">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-10">
          <h2 className="text-2xl md:text-[2.5rem] font-switzer font-normal text-gray-800">
            Registered Office & Head Office
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left Column: Address Details */}
          <div className="flex flex-col justify-center py-4 ml-20">
            <h3 className="text-xl font-medium text-gray-900 mb-6 font-serif">
              RM Club Limited
            </h3>

            <address className="not-italic text-gray-600 mb-8 leading-relaxed text-xl">
              RM Club House, Ballard Estate, P. O. Box: 278,<br />
              Mumbai 400 001, India.
            </address>

            <div className="space-y-6 text-gray-700 text-lg">
              <div>
                <p className="font-medium text-gray-900">Toll Free (India): <span className="font-normal text-gray-600">1800 209 4545</span></p>
                <p className="  text-gray-500 mt-1">Available from: 8 am to 8 pm IST</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">International: <span className="font-normal text-gray-600">+91 22 6752 5899</span></p>
                <p className="  text-gray-500 mt-1">Available from: 2:30 am to 2:30 pm GMT</p>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="w-full h-[600px] bg-gray-100   overflow-hidden shadow-sm border border-gray-200 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.212476595604!2d72.83403331490234!3d18.921371987176587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sBallard%20Estate%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1645520268580!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
             ></iframe>
             
             {/* Map Card Overlay (Optional - mimicking the floating card in the image if desired, 
                 but standard iframe usually has markers. The image had a custom overlay.
                 I'll stick to the clean iframe for reliability.) */}
          </div>
        </div>
      </div>
    </section>
  );
}
