export default function SecondSection() {
  const items = [
    {
      title: "AI accelerates work and redefines play",
      image:
        "https://cdn.prod.website-files.com/66c31377d57fee80e2d1cf4d/68b9df69b83b4dad5d745a1f_aihuman.webp",
      offset: "translate-y-0",
    },
    {
      title: "AR and BCI augment human capability",
      image:
        "https://cdn.prod.website-files.com/66c31377d57fee80e2d1cf4d/68b9dbb19112e693130577bf_AR.webp",
      offset: "translate-y-0 lg:translate-y-25",
    },
    {
      title: "Tokenization transforms global capital markets",
      image:
        "https://cdn.prod.website-files.com/66c31377d57fee80e2d1cf4d/68b9dc8ad98f94a36e734e31_tokens2.webp",
      offset: "translate-y-0 lg:translate-y-50",
    },
    {
      title: "Longevity redefines how long and well we live",
      image:
        "https://cdn.prod.website-files.com/66c31377d57fee80e2d1cf4d/68b9ddaf98a015e1b6b6edd6_helix.webp",
      offset: "translate-y-0 lg:translate-y-75",
    },
  ];

  return (
    <section className="relative z-40 w-full  pb-44 lg:pb-84  overflow-hidden">
      {/* CENTER WRAPPER */}
      <div className="max-w-350 mx-auto  ">
        {/* H1 */}
        <h1 className=" max-w-2xl ml-auto text-white text-end lg:text-[4.5rem] tracking-tight leading-none font-switzer">
          We envision a transformative decade ahead
        </h1>

        {/* GRID */}
        <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                relative h-[430px] lg:h-[430px] w-full
                border border-[#1D98E9] overflow-hidden
                bg-[#080618]/60 backdrop-blur-sm
                 transition-all duration-500 ease-out group  
                ${item.offset}
              `}
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-b from-[#080618]/20 via-transparent to-[#080618]/95 pointer-events-none" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 pb-10 pointer-events-none">
                <h3 className="text-white text-[1.8rem] font-normal leading-tight tracking-wide font-switzer">
                  {item.title}
                </h3>
              </div>

              {/* GLOW BORDER */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#1D98E9] transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
