import Image from 'next/image';

export default function About() {
  return (
    <section id="about-us" className="py-20 lg:py-32 bg-white relative overflow-hidden">

      {/* World Map Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-center items-center">
        <div className="w-full h-full bg-[url('/world-map.png')] bg-no-repeat bg-center bg-contain opacity-50"></div>
      </div>

      <div className="max-w-[1928px] mx-auto w-full px-6 md:px-[60px] xl:pl-[384px] xl:pr-[100px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

        {/* 'ABOUT FIRM' Floating Box */}
        <div className="hidden xl:flex absolute left-[93px] top-0 bg-[#EFEFEF] w-[180px] h-[180px] rounded-[16px] z-20 flex-col justify-center pl-[35px]">
          <span className="text-black font-extrabold text-[18px] tracking-[0.05em] mb-1 leading-none uppercase">ABOUT</span>
          <span className="text-black font-extrabold text-[18px] tracking-[0.05em] leading-none uppercase">FIRM</span>
        </div>

        {/* Left Column (Text & Stats) */}
        <div className="flex-1 w-full flex flex-col justify-start xl:max-w-[567px]">

          <h2 className="text-[#333333] text-[20px] font-medium mb-6 leading-none">
            HLS Global Group
          </h2>

          <p className="text-[#333333] text-[13px] leading-[1.7] w-full font-normal mb-14 text-justify lg:text-left">
            is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
          </p>

          <div className="flex flex-col w-full px-1">

            {/* Top Row Stats */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[28px] mb-1 tracking-tight">250+</span>
                <span className="text-[#444] text-[12px] leading-[1.4] font-medium font-sans">
                  Professional Staff<br />Members Globally
                </span>
              </div>
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[28px] mb-1 tracking-tight">1000+</span>
                <span className="text-[#444] text-[12px] leading-[1.4] font-medium font-sans">
                  Clients in the HLS<br />Global Network
                </span>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#0B2E83] mb-6"></div>

            {/* Bottom Row Stats */}

            <div className="flex justify-between items-start">
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[28px] mb-1 tracking-tight">35+</span>
                <span className="text-[#444] text-[12px] leading-[1.4] font-medium font-sans">
                  Years of Experience<br />Connecting Japan<br />and the World
                </span>
              </div>
              <div className="flex flex-col w-[45%]">
                <span className="text-black font-black text-[28px] mb-1 tracking-tight">15+</span>
                <span className="text-[#444] text-[12px] leading-[1.4] font-medium font-sans">
                  Countries Covered<br />With Our Alliance<br />Network
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Image & Button) */}
        <div className="flex-[1.2] w-full relative flex flex-col items-end">

          {/* Location Button */}
          <div className="bg-[#FF7300] flex items-center justify-between px-5 h-[32px] rounded-r-[16px] rounded-l-[16px] w-[280px] mb-4 cursor-pointer shadow-sm hover:bg-[#e65c00] transition-colors relative z-20">
            <span className="text-black font-bold text-[10px] tracking-[0.05em] pt-[2px]">WE ARE LOCATED</span>
            <div className="flex items-center space-x-1 pt-[2px]">
              <span className="text-black font-bold text-[10px] tracking-wide">INDIA</span>
              <svg className="w-[14px] h-[14px] text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Image Container with Zoom Animation on Hover */}
          <div className="relative w-full h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-xl z-20 bg-gray-100 group">
            {/* EXTENSION FIXED TO .png */}
            <Image
              src="/office.png"
              alt="HLS Global Office Building"
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}