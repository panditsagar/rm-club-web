"use client";

import Link from "next/link";

export default function Navbar() {
 
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-350 z-100 flex items-center justify-between px-10 mt-8 py-3 rounded-2xl text-white bg-black/30 backdrop-blur-md">
      {/* 1. LEFT LOGO ICON */}
      <div className="flex items-center cursor-pointer">
        <div className="w-13 h-13 relative">
          {/* Abstract Logo Placeholder similar to image */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 60 62"
            fill="none"
            className="main-nav-bar__icon-svg"
          >
            <path
              d="M4.96417 0.588257C5.4297 0.588257 5.80894 0.967496 5.80894 1.43303V26.5945C5.80894 27.06 5.42743 27.4393 4.96417 27.4393C4.49863 27.4393 4.1194 27.06 4.1194 26.5945V1.43303C4.1194 0.967496 4.49863 0.588257 4.96417 0.588257ZM9.92833 12.5604V22.491C9.92833 22.9565 9.5491 23.3358 9.08356 23.3358C8.61803 23.3358 8.23879 22.9543 8.23879 22.491V12.5604C8.23879 12.0949 8.61803 11.7156 9.08356 11.7156C9.5491 11.7156 9.92833 12.0949 9.92833 12.5604ZM22.2843 26.0131V38.0262C22.2843 38.4917 21.905 38.8732 21.4395 38.8732C20.9739 38.8732 20.5947 38.4917 20.5947 38.0262V22.5001C20.5947 22.0345 20.9739 21.6553 21.4395 21.6553C21.905 21.6553 22.2843 22.0368 22.2843 22.5001V26.0131ZM26.4014 52.7007C26.4014 53.1662 26.0221 53.5454 25.5566 53.5454C25.0911 53.5454 24.7118 53.1639 24.7118 52.7007V23.4357C24.7118 22.9702 25.0911 22.5909 25.5566 22.5909C26.0221 22.5909 26.4014 22.9702 26.4014 23.4357V52.7007ZM29.6737 15.3899C30.1393 15.3899 30.5185 15.7714 30.5185 16.2347V33.0506C30.5185 33.5162 30.1393 33.8954 29.6737 33.8954C29.2082 33.8954 28.829 33.5139 28.829 33.0506V16.2347C28.829 15.7692 29.2082 15.3899 29.6737 15.3899ZM14.0455 17.8425V28.3408C14.0455 28.8063 13.6662 29.1856 13.2007 29.1856C12.7352 29.1856 12.3559 28.8041 12.3559 28.3408V17.8425C12.3559 17.377 12.7352 16.9977 13.2007 16.9977C13.6662 16.9977 14.0455 17.3792 14.0455 17.8425ZM18.1649 21.678V33.691C18.1649 34.1566 17.7856 34.5381 17.3201 34.5381C16.8546 34.5381 16.4753 34.1566 16.4753 33.691V20.2451C16.4753 19.7796 16.8546 19.4003 17.3201 19.4003C17.7856 19.4003 18.1649 19.7818 18.1649 20.2451V21.678ZM29.6737 38.5507C30.1393 38.5507 30.5185 38.9322 30.5185 39.3955V60.567C30.5185 61.0326 30.1393 61.4118 29.6737 61.4118C29.2082 61.4118 28.829 61.0303 28.829 60.567V39.3955C28.829 38.93 29.2082 38.5507 29.6737 38.5507ZM58.505 4.94837C58.0394 4.94837 57.6602 5.32988 57.6602 5.79314V17.8062C57.6602 18.2717 58.0394 18.6509 58.505 18.6509C58.9705 18.6509 59.3497 18.2694 59.3497 17.8062V5.79541C59.3497 5.32988 58.9705 4.95064 58.505 4.95064V4.94837ZM54.3856 0.588257C53.92 0.588257 53.5408 0.967496 53.5408 1.43303V26.5945C53.5408 27.06 53.9223 27.4393 54.3856 27.4393C54.8511 27.4393 55.2303 27.06 55.2303 26.5945V1.43303C55.2303 0.967496 54.8511 0.588257 54.3856 0.588257ZM49.4214 12.5604V22.491C49.4214 22.9565 49.8006 23.3358 50.2662 23.3358C50.7317 23.3358 51.1109 22.9543 51.1109 22.491V12.5604C51.1109 12.0949 50.7317 11.7156 50.2662 11.7156C49.8006 11.7156 49.4214 12.0949 49.4214 12.5604ZM37.0655 26.0131V38.0262C37.0655 38.4917 37.4447 38.8732 37.9103 38.8732C38.3758 38.8732 38.755 38.4917 38.755 38.0262V22.5001C38.755 22.0345 38.3758 21.6553 37.9103 21.6553C37.4447 21.6553 37.0655 22.0368 37.0655 22.5001V26.0131ZM32.9484 52.7007C32.9484 53.1662 33.3276 53.5454 33.7931 53.5454C34.2587 53.5454 34.6379 53.1639 34.6379 52.7007V23.4357C34.6379 22.9702 34.2587 22.5909 33.7931 22.5909C33.3276 22.5909 32.9484 22.9702 32.9484 23.4357V52.7007ZM45.3043 17.8425V28.3408C45.3043 28.8063 45.6835 29.1856 46.149 29.1856C46.6146 29.1856 46.9938 28.8041 46.9938 28.3408V17.8425C46.9938 17.377 46.6146 16.9977 46.149 16.9977C45.6835 16.9977 45.3043 17.3792 45.3043 17.8425ZM41.1849 21.678V33.691C41.1849 34.1566 41.5641 34.5381 42.0296 34.5381C42.4952 34.5381 42.8744 34.1566 42.8744 33.691V20.2451C42.8744 19.7796 42.4952 19.4003 42.0296 19.4003C41.5641 19.4003 41.1849 19.7818 41.1849 20.2451V21.678ZM0.844771 4.94837C1.3103 4.94837 1.68954 5.32988 1.68954 5.79314V17.8062C1.68954 18.2717 1.3103 18.6509 0.844771 18.6509C0.379239 18.6509 0 18.2694 0 17.8062V5.79541C0 5.32988 0.379239 4.95064 0.844771 4.95064V4.94837Z"
              fill="currentColor"
            ></path>
          </svg>
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
            href="#"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            Offerings
            <span className="absolute -bottom-1 left-0 w-full h-1px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <Link
            href="#"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <Link
            href="#"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <Link
            href="#"
            className="relative group hover:text-white transition-colors cursor-pointer"
          >
            Insights
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
