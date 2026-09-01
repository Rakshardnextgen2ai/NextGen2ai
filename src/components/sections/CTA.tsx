"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function CTA() {
  return (
    <section className="relative py-16 md:py-24 bg-[#020108] overflow-hidden flex items-center justify-center">
      {/* Dramatic Horizon & Floor Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] z-0">
        {/* The intense horizon light */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 mix-blend-overlay shadow-[0_0_20px_white]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[3px] bg-white blur-[2px] shadow-[0_0_30px_white]" />
        
        {/* The floor reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent mix-blend-overlay" />
        
        {/* Intense horizon ambient glows */}
        <div className="absolute top-0 -translate-y-1/2 left-[20%] right-[50%] h-[250px] bg-[#D946EF] blur-[120px] opacity-20 rounded-full" />
        <div className="absolute top-0 -translate-y-1/2 left-[50%] right-[20%] h-[250px] bg-[#3B82F6] blur-[120px] opacity-25 rounded-full" />
        
        {/* Floor specular highlights */}
        <div className="absolute top-0 left-[30%] right-[50%] h-[150px] bg-[#D946EF] blur-[80px] opacity-15 rounded-full" />
        <div className="absolute top-0 left-[50%] right-[30%] h-[150px] bg-[#3B82F6] blur-[80px] opacity-20 rounded-full" />
      </div>

      {/* Decorative Wavy Dots (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
        {/* Left Waves (Magenta) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path 
            key={`l-${i}`} 
            d={`M -100 ${200 + i * 20} Q ${300 + i * 15} ${600 - i * 10} ${800 + i*20} 800`} 
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
            d={`M 1500 ${200 + i * 20} Q ${1100 - i * 15} ${600 - i * 10} ${600 - i*20} 800`} 
            stroke="#3B82F6" 
            strokeWidth="1.5" 
            strokeDasharray="2 6" 
            opacity={0.1 + (i * 0.02)}
          />
        ))}
      </svg>

      <Container className="relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          READY TO BUILD <br /> WHAT'S NEXT?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#B0B4C4] mb-16 max-w-xl mx-auto"
        >
          Let's turn your idea into an intelligent digital product. Our team is ready to help you scale.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-emerald-500 hover:bg-emerald-400 rounded-full hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_45px_rgba(16,185,129,0.6)]"
          >
            <span className="relative z-10 flex items-center text-lg">
              Start a Conversation
              <ArrowRight size={20} className="ml-3 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
