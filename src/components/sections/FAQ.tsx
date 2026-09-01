"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "../../data/faq";
import { cn } from "../ui/Container";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const colors = [
    { text: "text-[#D946EF]", border: "border-[#D946EF]", bg: "bg-[#D946EF]", glow: "shadow-[0_0_15px_rgba(217,70,239,0.4)]" },
    { text: "text-[#A855F7]", border: "border-[#A855F7]", bg: "bg-[#A855F7]", glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]" },
    { text: "text-[#3B82F6]", border: "border-[#3B82F6]", bg: "bg-[#3B82F6]", glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
    { text: "text-[#06B6D4]", border: "border-[#06B6D4]", bg: "bg-[#06B6D4]", glow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]" }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#020108] relative overflow-hidden flex flex-col items-center">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -left-1/4 top-1/4 w-[800px] h-[800px] rounded-full bg-[#D946EF]/6 blur-[150px]" />
        <div className="absolute -right-1/4 bottom-1/4 w-[800px] h-[800px] rounded-full bg-[#3B82F6]/6 blur-[150px]" />
      </div>

      {/* Decorative Wavy Dots (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
        {/* Left Waves (Magenta) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`l-${i}`}
            d={`M -100 ${200 + i * 20} Q ${300 + i * 15} ${400 - i * 10} ${700 + i * 20} 800`}
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
            d={`M 1500 ${200 + i * 20} Q ${1100 - i * 15} ${400 - i * 10} ${800 - i * 20} 800`}
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 flex flex-col items-center">

        {/* Custom Section Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#3B82F6] mb-6"
          >
            FAQ
          </motion.h2>
          {/* Gradient underline */}
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#D946EF] to-[#3B82F6] shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const style = colors[index % colors.length];

            return (
              <div
                key={faq.id}
                className={cn(
                  "relative rounded-xl overflow-hidden transition-all duration-500",
                  isOpen ? "p-[2px]" : "p-[1px] bg-white/5 hover:bg-white/10"
                )}
              >
                {/* Active Glowing Border Wrapper */}
                {isOpen && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#3B82F6]" />
                )}

                <div className={cn(
                  "relative h-full w-full rounded-[calc(0.75rem-1px)] bg-[#0A0512]",
                  isOpen && "bg-[#090314]" // slightly deeper on active
                )}>
                  {/* Subtle active inner gradient */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF]/10 to-[#3B82F6]/10 mix-blend-screen pointer-events-none" />
                  )}

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 px-6 md:px-8 text-left z-10 relative"
                  >
                    <span className="flex items-center gap-6">
                      <span className={cn("font-bold text-lg md:text-xl", style.text)}>
                        0{index + 1}
                      </span>
                      <span className={cn(
                        "text-lg md:text-xl font-bold transition-colors",
                        isOpen ? "text-white" : "text-white"
                      )}>
                        {faq.question}
                      </span>
                    </span>

                    <span className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 border",
                      isOpen
                        ? `bg-transparent border-[#4F46E5] text-[#A855F7] bg-[#4F46E5]/20 shadow-[0_0_15px_rgba(79,70,229,0.5)]`
                        : `bg-transparent ${style.border} ${style.text}`
                    )}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="text-[white] pb-8 px-6 md:px-8 md:pl-[5.5rem] text-sm md:text-base leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
