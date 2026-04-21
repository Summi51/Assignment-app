"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative">
        <div className="flex justify-between items-center h-[64px]">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Image
              src="/demo-logo.svg"
              alt="Demo Logo"
              width={40}
              height={45}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {['WHO WE SERVE', 'SOLUTIONS', 'RESOURCES', 'ABOUT US', 'CONTACT US'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-[10px] font-bold text-black hover:text-blue-600 transition-colors duration-200 tracking-wider"
              >
                {item}
              </Link>
            ))}

            <div className="flex items-center space-x-6 pl-4">
              {/* Bolder Search Icon */}
              <button aria-label="Search" className="text-black hover:text-gray-500 transition">
                <svg className="w-[18px] h-[18px] stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>

              {/* IND with Big Solid Arrow (As per image) */}
              <div className="flex items-center space-x-2 cursor-pointer group">
                <span className="text-[11px] font-[900] text-black tracking-widest group-hover:text-gray-500 uppercase">IND</span>
                <svg className="w-3 h-3 text-black group-hover:text-gray-500 fill-current" viewBox="0 0 24 24">
                  <path d="M0 7.33l12 11.34 12-11.34z" />
                </svg>
              </div>

              {/* ENGLISH with Big Solid Arrow (As per image) */}
              <div className="flex items-center space-x-2 cursor-pointer group">
                <span className="text-[11px] font-[900] text-black tracking-widest group-hover:text-gray-500 uppercase">ENGLISH</span>
                <svg className="w-3 h-3 text-black group-hover:text-gray-500 fill-current" viewBox="0 0 24 24">
                  <path d="M0 7.33l12 11.34 12-11.34z" />
                </svg>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex flex-col justify-center items-center space-y-1"
              aria-label="Menu"
            >
              <div className={`w-6 h-[2.5px] bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></div>
              <div className={`w-6 h-[2.5px] bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[2.5px] bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`lg:hidden fixed top-[64px] right-0 w-full h-screen bg-white z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} border-t border-gray-100`}>
          <div className="flex flex-col p-8 space-y-6">
            {['WHO WE SERVE', 'SOLUTIONS', 'RESOURCES', 'ABOUT US', 'CONTACT US'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-[11px] font-extrabold tracking-widest border-b pb-2"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}