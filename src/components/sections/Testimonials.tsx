"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "../../data/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="py-12 md:py-16 bg-[#020108] relative overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#D946EF]/8 blur-[150px]" />
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#3B82F6]/8 blur-[150px]" />
      </div>

      {/* Decorative Wavy Dots (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
        {/* Left Waves (Magenta) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`l-${i}`}
            d={`M -100 ${400 + i * 20} Q ${300 + i * 15} ${500 - i * 10} ${800 + i * 20} 800`}
            stroke="#D946EF"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
        {/* Right Waves (Blue) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`r-${i}`}
            d={`M 1500 ${400 + i * 20} Q ${1100 - i * 15} ${700 - i * 10} ${600 - i * 20} 800`}
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">

          {/* Custom Large Gradient Quote Icon */}
          <div className="absolute -top-12 -left-4 md:-left-12 opacity-80 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
            <svg width="72" height="72" viewBox="0 0 24 24" fill="url(#quote-grad)" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18L0 10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              <defs>
                <linearGradient id="quote-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D946EF" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center w-full relative z-10"
            >
              <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-tight mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] px-4 md:px-12">
                “{testimonialsData[currentIndex].quote}”
              </h3>

              {/* Gradient separator line */}
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#D946EF] to-[#3B82F6] mb-8 shadow-[0_0_10px_rgba(217,70,239,0.5)]" />

              <div>
                <p className="text-xl font-bold text-white mb-2">
                  {testimonialsData[currentIndex].name}
                </p>
                <p className="text-[#ffff] text-sm md:text-base font-medium">
                  {testimonialsData[currentIndex].role}, {testimonialsData[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-6 mt-16 z-20 relative">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-[#D946EF]/50 flex items-center justify-center text-white hover:bg-[#D946EF]/10 transition-colors shadow-[0_0_15px_rgba(217,70,239,0.2)]"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-[#3B82F6]/50 flex items-center justify-center text-white hover:bg-[#3B82F6]/10 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
