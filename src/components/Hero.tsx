"use client";

<<<<<<< HEAD
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
=======
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CommentType = {
  id: string;
  name: string;
  time: string;
  avatar: string | null;
  initials?: string;
  text: string;
  isCurrentUser: boolean;
};

const initialComments: CommentType[] = [
  { id: '1', name: 'sahil kadge', time: '1 month ago', avatar: 'https://i.pravatar.cc/100?img=11', text: "Could you please provide this image? I'm unable to download it.", isCurrentUser: false },
  { id: '2', name: 'DesignDot Technologies Pvt Ltd', time: '1 month ago', avatar: null, initials: 'D', text: "use any image", isCurrentUser: false },
  { id: '3', name: 'Samreen Inayat', time: '15 minutes ago', avatar: 'https://i.pravatar.cc/100?img=5', text: "ok", isCurrentUser: true },
];

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [newMessage, setNewMessage] = useState("");
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    if (editingId) {
      setComments(comments.map(c => c.id === editingId ? { ...c, text: newMessage } : c));
      setEditingId(null);
    } else {
      const newComment: CommentType = {
        id: Date.now().toString(),
        name: 'Samreen Inayat',
        time: 'Just now',
        avatar: 'https://i.pravatar.cc/100?img=5',
        text: newMessage,
        isCurrentUser: true,
      };
      setComments([...comments, newComment]);
    }
    setNewMessage("");
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const startEdit = (comment: CommentType) => {
    setEditingId(comment.id);
    setNewMessage(comment.text);
    setMenuOpenId(null);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  const deleteComment = (id: string) => {
    setComments(comments.filter(c => c.id !== id));
    setMenuOpenId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#00338D]">
      <div className="max-w-[1920px] mx-auto min-h-[calc(100vh-80px)] lg:min-h-[850px] flex flex-col lg:flex-row relative pb-10 lg:pb-0">
        
        <div className="absolute inset-0 w-full h-full z-0 block">
          <Image
            src="/office_staff_1776347058908.png"
            alt="Office Staff Collaboration"
            fill
            className="object-cover object-[80%_center] opacity-25 lg:opacity-100 mix-blend-overlay lg:mix-blend-normal transition-all duration-500"
            priority
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
          />
        </svg>
      </div>

<<<<<<< HEAD
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
=======
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden lg:block">
          <svg 
            className="w-full h-full text-[#00338D]" 
            viewBox="0 0 1000 1000" 
            preserveAspectRatio="none"
          >
    
            <path 
              fill="currentColor" 
              d="M 0,0 L 320,0 C 500,0 500,860 820,860 L 1000,860 L 1000,1000 L 0,1000 Z" 
            />
          </svg>
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
        </div>
      </div>

<<<<<<< HEAD
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
=======
        {false && (
          <div className="absolute hidden lg:flex top-[24%] right-[24%] z-40 animate-fade-in-up">
            <div className="relative cursor-pointer group" onClick={() => setIsChatOpen(!isChatOpen)}>
              {/* The Badge */}
              <div className="relative flex items-center bg-white border-[3px] border-[#0055ff] rounded-full p-[2px] pr-2 shadow-xl z-30 transition-transform group-hover:scale-105">
                <div className="flex -space-x-2">
                  <Image src="https://i.pravatar.cc/100?img=11" alt="sahil" width={28} height={28} className="rounded-full border-2 border-white relative z-30" />
                  <div className="w-7 h-7 rounded-full bg-[#0055ff] flex items-center justify-center text-white font-bold text-xs border-2 border-white relative z-20">D</div>
                  <Image src="https://i.pravatar.cc/100?img=5" alt="samreen" width={28} height={28} className="rounded-full border-2 border-white relative z-10" />
                </div>
              </div>

              <div className="absolute -bottom-[5px] left-3 w-4 h-4 bg-white border-b-[3px] border-l-[3px] border-[#0055ff] rotate-[-45deg] z-20 transition-transform group-hover:scale-105"></div>
            </div>
            {isChatOpen && (
              <div 
                className="absolute top-10 right-0 lg:-left-[420px] bg-white rounded-2xl shadow-2xl w-[420px] z-50 text-black border border-gray-200 flex flex-col p-5 max-h-[85vh] overflow-y-auto animate-fade-in origin-top-right cursor-default select-text" 
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-6 px-1">
                  <span className="font-bold text-[16px]">Comment</span>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <svg className="w-5 h-5 cursor-pointer hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="5" cy="12" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="19" cy="12" r="1.5" />
                    </svg>
                    <svg className="w-5 h-5 cursor-pointer hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg onClick={() => setIsChatOpen(false)} className="w-[22px] h-[22px] cursor-pointer hover:text-red-500 transition-colors ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col space-y-7 px-1">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-3">
                      {comment.avatar ? (
                        <Image src={comment.avatar} alt={comment.name} width={34} height={34} className="rounded-full shrink-0" />
                      ) : (
                        <div className="w-[34px] h-[34px] rounded-full bg-[#0055ff] flex items-center justify-center text-white font-bold text-sm shrink-0">{comment.initials}</div>
                      )}
                      
                      <div className="flex flex-col w-full relative">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-baseline space-x-2">
                            <span className="font-bold text-[14px]">{comment.name}</span>
                            <span className="text-[#a4a4a4] text-[13px]">{comment.time}</span>
                          </div>

                          {comment.isCurrentUser && (
                            <div className="relative">
                              <div 
                                onClick={(e) => { e.stopPropagation(); setMenuOpenId(menuOpenId === comment.id ? null : comment.id); }}
                                className={`flex items-center justify-center w-8 h-6 rounded-md cursor-pointer transition-colors ${menuOpenId === comment.id ? 'bg-[#e5f0ff] text-[#0084ff]' : 'text-gray-400 hover:text-black hover:bg-gray-100'}`}
                              >
                                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                                  <circle cx="5" cy="12" r="1.5" />
                                  <circle cx="12" cy="12" r="1.5" />
                                  <circle cx="19" cy="12" r="1.5" />
                                </svg>
                              </div>
                              
                              {menuOpenId === comment.id && (
                                <>
                                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpenId(null)} />
                                  <div className="absolute top-[130%] right-0 bg-[#111111] text-white rounded-[14px] shadow-2xl py-2 w-[160px] z-50 animate-fade-in-up origin-top-right">
                                    <button 
                                      onClick={(e) => { e.stopPropagation(); startEdit(comment); }}
                                      className="w-full text-left px-5 py-2.5 text-[13.5px] font-medium hover:bg-white/10 transition-colors"
                                    >
                                      Edit
                                    </button>
                                    <button 
                                      onClick={(e) => { e.stopPropagation(); deleteComment(comment.id); }}
                                      className="w-full text-left px-5 py-2.5 text-[13.5px] font-medium hover:bg-white/10 transition-colors"
                                    >
                                      Delete comment
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-[14px] text-[#2c2c2c] leading-slug mt-1 whitespace-pre-wrap break-words pr-2">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start space-x-3 mt-8 px-1 pb-1">
                  <Image src="https://i.pravatar.cc/100?img=5" alt="samreen" width={34} height={34} className="rounded-full mt-1 shrink-0" />
                  <div className="flex-1 bg-[#f5f5f5] rounded-[18px] flex flex-col pt-3 pb-2 px-4 shadow-sm border border-transparent focus-within:border-gray-300 transition-all duration-300 relative">
                    
                    <textarea 
                      ref={textareaRef}
                      value={newMessage}
                      onChange={(e) => {
                        setNewMessage(e.target.value);
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                      }}
                      onKeyDown={handleKeyDown}
                      placeholder={editingId ? "Edit comment..." : "Reply"}
                      className="bg-transparent border-none outline-none text-[14px] text-gray-800 placeholder-[#8f8f8f] w-full resize-none min-h-[30px] max-h-[140px] overflow-y-auto mb-2"
                      rows={1}
                    />

                    <div className="flex items-center justify-between w-full pt-1">
                      <div className="flex items-center space-x-3 text-[#757575]">
                        {/* Emoji Icon */}
                        <svg className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold text-[18px] cursor-pointer hover:text-black transition-colors leading-[0] mt-[-2px]">@</span>
                        <svg className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <button 
                        onClick={handleSend}
                        disabled={!newMessage.trim()}
                        className={`w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-300 ${newMessage.trim() ? 'bg-[#0055ff] hover:bg-[#004ade] shadow-md scale-105' : 'bg-[#d6d6d6] cursor-not-allowed'}`}
                      >
                        <svg className="w-3.5 h-3.5 text-white stroke-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 lg:pl-32 lg:pr-10 py-16 lg:py-0 z-10 pt-[15%] lg:pt-0 pb-[30%] lg:pb-0 pointer-events-none">
          <div className="animate-fade-in-up -mt-4 lg:-mt-10 pointer-events-auto relative z-20">
            <h2 className="text-[#a4bfea] font-bold tracking-[0.15em] text-[8px] sm:text-[10px] uppercase mb-4">
              ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              EMPOWERED<br />WORKPLACES
            </h1>
            
            <div className="w-full max-w-[26rem] h-[3px] bg-white my-6"></div>
            
            <p className="text-[#a4bfea] text-sm sm:text-[15px] leading-relaxed mb-12 max-w-[26rem] font-light tracking-wide">
              by fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
            </p>

            <Link 
              href="#contact"
              className="relative inline-flex items-center px-6 py-3.5 bg-[#FF5A00] hover:bg-[#ff6b00] transition-colors w-fit group"
              style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}
>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
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
<<<<<<< HEAD
=======

        <div className="absolute bottom-8 right-6 lg:bottom-12 lg:right-28 z-20 flex items-center space-x-3 pointer-events-auto">
          <div className="flex -space-x-3 items-center">
            {[14, 15, 12].map((i) => (
              <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[2.5px] border-[#00338D] bg-gray-200 relative overflow-hidden shadow-lg`}>
                <Image src={`https://i.pravatar.cc/100?img=${i}`} alt="avatar" fill className="object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[2.5px] border-[#00338D] bg-[#FF5A00] relative flex items-center justify-center z-10 text-white text-[8px] sm:text-[10px] font-bold shadow-lg tracking-widest">
              MORE
            </div>
          </div>
          <div className="text-white flex flex-col justify-center ml-1">
            <p className="font-extrabold text-xl sm:text-2xl leading-none">250 +</p>
            <p className="text-[9px] sm:text-[10px] text-white font-medium leading-[1.2] mt-1 tracking-wide">Enjoy Working<br />with us</p>
          </div>
        </div>

>>>>>>> 9a7968369cce200855f9f5ce205249a3abf612ee
      </div>

    </section>
  );
}