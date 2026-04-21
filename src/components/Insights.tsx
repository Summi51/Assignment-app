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
      <div className="max-w-[1928px] mx-auto w-full px-6 md:px-[60px] xl:pl-[384px] xl:pr-[100px] relative z-10 flex flex-col xl:flex-row gap-14 xl:gap-16 items-start">

        {/* ===== INSPIRATION & INSIGHTS Badge (left side) ===== */}
        <div className="hidden xl:flex absolute left-[93px] top-0 bg-[#EFEFEF] w-[206px] h-[206px] rounded-[24px] z-20 flex-col justify-center pl-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="text-black font-black text-[18px] tracking-[0.05em] mb-1 leading-[1.3] uppercase pr-4">INSPIRATION &</span>
          <span className="text-black font-black text-[18px] tracking-[0.05em] leading-[1.3] uppercase">INSIGHTS</span>
        </div>

        {/* ===== Center Column - Text List ===== */}
        <div className="w-full xl:max-w-[420px] flex flex-col justify-start pt-2 xl:pt-2">
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

        {/* ===== Right Column - Images ===== */}
        <div className="w-full xl:flex-1 xl:max-w-[720px] min-w-0 flex flex-row gap-4 mt-2 xl:mt-0 h-[520px]">

          {/* Big Image - Left */}
          <div className="basis-[66%] shrink-0 relative h-full rounded-[22px] overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src="/emp.jpg"
              alt="Pre-Market"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[52%] bg-gradient-to-t from-black via-black/55 to-transparent" />
            {/* Text */}
            <div className="absolute bottom-6 left-6 pr-6">
              <p className="text-white font-bold text-[46px] leading-[0.95] mb-2 whitespace-nowrap">Pre-Market</p>
              <p className="text-gray-200 text-[12px] leading-[1.4]">
                Evaluating Supply Chain Readiness<br />
                Before Committing Capital in<br />
                Emerging Markets
              </p>
            </div>
          </div>

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
            </div>
          </div>

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
          </div>
        </div>

      </div>
    </section>
  );
}