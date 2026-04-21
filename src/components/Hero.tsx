"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B2E83]">

      {/* RIGHT IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/hero-office.jpg"
          alt="Office"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* LEFT BLUE PANEL WITH SMOOTH TOP & BOTTOM CURVES */}
      <div className="absolute inset-0 z-10">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 H500 C300,100 800,600 1100,900 H0 V0 Z"
            fill="#0B2E83"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-[1600px] mx-auto h-screen flex items-center">

        <div className="w-full lg:w-[45%] px-8 sm:px-16 lg:px-28 text-white">

          <p className="text-[10px] tracking-[0.2em] font-medium text-[#9fb6e5] mb-4 uppercase">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            EMPOWERED
            <br />
            WORKPLACES
          </h1>

          <div className="w-48 h-[2px] bg-white mb-6"></div>

          <p className="text-[#c3d4f3] text-[13px] leading-relaxed max-w-sm mb-10">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success.
          </p>

          {/* FIX: BUTTON SHAPE & COLOR CORRECTED HERE */}
          <Link
            href="#contact"
            className="inline-flex items-center bg-[#FF7300] px-7 py-3 font-bold text-black text-[10px] tracking-widest transition hover:translate-x-1 rounded-l-[4px]"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
            }}
          >
            <span className="mr-3 text-lg leading-none font-black">→</span>
            LETS CONNECT
          </Link>
        </div>
      </div>

      {/* BOTTOM LEFT TEXT */}
      <div className="absolute bottom-8 left-8 sm:left-16 lg:left-28 z-20">
        <p className="text-white text-[9px] font-medium tracking-[0.15em] uppercase">
          ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND THE WORLD
        </p>
      </div>

      {/* BOTTOM RIGHT SECTION */}
      <div className="absolute bottom-8 right-8 lg:right-20 z-20 flex items-center gap-3">

        <div className="flex -space-x-3">
          {[14, 15, 12].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-[#0B2E83] overflow-hidden"
            >
              <Image
                src={`https://i.pravatar.cc/100?img=${i}`}
                alt="avatar"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          ))}

          <div className="w-10 h-10 rounded-full bg-[#FF7300] flex items-center justify-center text-black text-[8px] font-bold border-2 border-[#0B2E83]">
            MORE
          </div>
        </div>

        <div className="text-white">
          <p className="text-2xl font-extrabold leading-none">250 +</p>
          <p className="text-[9px] leading-tight mt-1 opacity-80">
            Enjoy Working
            <br />
            with us
          </p>
        </div>
      </div>

    </section>
  );
}