import Image from 'next/image';

export default function Insights() {
  const listItems = [
    {
      title: "Pre-market Entry",
      desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
      active: true
    },
    {
      title: "Market Entry",
      desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
      active: false
    },
    {
      title: "Operations",
      desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
      active: false
    },
    {
      title: "Growth & Expansion",
      desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
      active: false
    }
  ];

  return (
    <section id="insights" className="py-20 lg:py-24 bg-white relative overflow-hidden">
<<<<<<< HEAD
      <div className="max-w-[1928px] mx-auto w-full px-6 md:px-[60px] xl:pl-[384px] xl:pr-[100px] relative z-10 flex flex-col xl:flex-row gap-14 xl:gap-16 items-start">

        {/* ===== INSPIRATION & INSIGHTS Badge (left side) ===== */}
=======
      <div className="max-w-[1928px] mx-auto w-full px-6 md:px-[60px] xl:pl-[384px] xl:pr-[100px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

        {/* INSPIRATION & INSIGHTS  left side */}
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
        <div className="hidden xl:flex absolute left-[93px] top-0 bg-[#EFEFEF] w-[206px] h-[206px] rounded-[24px] z-20 flex-col justify-center pl-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="text-black font-black text-[18px] tracking-[0.05em] mb-1 leading-[1.3] uppercase pr-4">INSPIRATION &</span>
          <span className="text-black font-black text-[18px] tracking-[0.05em] leading-[1.3] uppercase">INSIGHTS</span>
        </div>

<<<<<<< HEAD
        {/* ===== Center Column - Text List ===== */}
        <div className="w-full xl:max-w-[420px] flex flex-col justify-start pt-2 xl:pt-2">
=======
        {/*  Center Column side - Text List */}
        <div className="flex-1 w-full flex flex-col justify-start xl:max-w-[567px] pt-4">
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
          {listItems.map((item, idx) => (
            <div key={idx} className="flex flex-col w-full group cursor-pointer">
              <div className="flex flex-col mb-4">
                <h3 className={`text-[16px] font-bold mb-2 transition-colors ${item.active ? 'text-[#00338D]' : 'text-black group-hover:text-[#00338D]'}`}>
                  {item.title}
                </h3>
                <p className={`text-[14px] leading-[1.5] transition-colors ${item.active ? 'text-[#00338D]' : 'text-[#333333]'}`}>
                  {item.desc}
                </p>
              </div>
              <div className={`w-full h-[1px] mb-6 ${item.active ? 'bg-[#00338D]' : 'bg-[#D1D1D1]'}`} />
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* ===== Right Column - Images ===== */}
        <div className="w-full xl:flex-1 xl:max-w-[720px] min-w-0 flex flex-row gap-4 mt-2 xl:mt-0 h-[520px]">

          {/* Big Image - Left */}
          <div className="basis-[66%] shrink-0 relative h-full rounded-[22px] overflow-hidden shadow-xl group cursor-pointer">
=======
        {/* Right side Column Images */}
        <div className="flex-[1.4] w-full flex flex-row gap-4 mt-12 lg:mt-0">

          {/* 1 big image - Left */}
          <div className="w-2/3 relative h-[620px] rounded-[24px] overflow-hidden shadow-xl group cursor-pointer">
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
            <Image
              src="/emp.jpg"
              alt="Pre-Market"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
<<<<<<< HEAD
            {/* Dark overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[52%] bg-gradient-to-t from-black via-black/55 to-transparent" />
            {/* Text */}
            <div className="absolute bottom-6 left-6 pr-6">
              <p className="text-white font-bold text-[46px] leading-[0.95] mb-2 whitespace-nowrap">Pre-Market</p>
              <p className="text-gray-200 text-[12px] leading-[1.4]">
=======

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-white font-bold text-xl mb-2">Pre-Market</p>
              <p className="text-gray-300 text-sm leading-relaxed">
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
                Evaluating Supply Chain Readiness<br />
                Before Committing Capital in<br />
                Emerging Markets
              </p>
            </div>
          </div>

<<<<<<< HEAD
          {/* Small Image - Middle */}
          <div className="basis-[17%] shrink-0 relative h-full rounded-[22px] overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src="/hero-office.jpg"
              alt="Operations"
              fill
              className="object-cover object-[72%_center] group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/42" />
            <div className="absolute inset-0 flex items-end justify-center pb-6">
              <p
                className="text-white font-semibold text-[18px] tracking-[0.02em] leading-none"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Operations
              </p>
=======
          {/* 2 Small Images - Right */}
          <div className="w-1/3 flex flex-col gap-4">

            <div className="flex-1 relative rounded-[24px] overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="/office_staff_1776347058908.png"
                alt="Operations"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-white font-bold text-lg tracking-widest"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Operations
                </p>
              </div>
            </div>

            {/* Growth & Expansion */}
            <div className="flex-1 relative rounded-[24px] overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="/glass_building_1776347079016.png"
                alt="Growth & Expansion"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-white font-bold text-lg tracking-widest"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Growth & Expansion
                </p>
              </div>
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
            </div>

<<<<<<< HEAD
          {/* Small Image - Right */}
          <div className="basis-[17%] shrink-0 relative h-full rounded-[22px] overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src="/job.jpg"
              alt="Growth & Expansion"
              fill
              className="object-cover object-[66%_center] group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/42" />
            <div className="absolute inset-0 flex items-end justify-center pb-6">
              <p
                className="text-white font-semibold text-[18px] tracking-[0.02em] leading-none"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Growth & Expansion
              </p>
            </div>
=======
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
          </div>
        </div>

      </div>
    </section>
  );
}