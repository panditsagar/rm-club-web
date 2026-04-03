import React from "react";

export default function ContactConnectSection() {
  return (
    <section className="bg-white md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header Area */}
        <div className="mb-16 md:mb-20">
           
          <h2 className="text-[#0f172a] text-4xl md:text-5xl font-bold tracking-tight">
            Let's Connect
          </h2>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 */}
          <div className="flex flex-col">
            <h3 className="text-[#939A9F] text-[19px] font-medium mb-3 md:mb-4">
              General Inquiries
            </h3>
            <a
              href="mailto:Kinsey@example.com"
              className="text-[#0f172a] text-[16px] hover:text-[#0054A6] transition-colors"
            >
              Kinsey@example.com
            </a>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col">
            <h3 className="text-[#939A9F] text-[19px] font-medium mb-3 md:mb-4">
              Address
            </h3>
            <p className="text-[#0f172a] text-[16px] leading-[1.6]">
              USA — 123 Finance St,
              <br />
              Business City, CA, 90210
            </p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col">
            <h3 className="text-[#939A9F] text-[19px] font-medium mb-3 md:mb-4">
              Hours
            </h3>
            <p className="text-[#0f172a] text-[16px]">
              Mon-Fri 9:00AM — 4:00PM
            </p>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col">
            <h3 className="text-[#939A9F] text-[19px] font-medium mb-3 md:mb-4">
              Socials
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                className="text-[#0f172a] text-[16px] hover:text-[#4F55F1] transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-[#0f172a] text-[16px] hover:text-[#4F55F1] transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="#"
                className="text-[#0f172a] text-[16px] hover:text-[#4F55F1] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
