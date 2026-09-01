"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

function AnimatedNumber({ value }: { value: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCurrent(value);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{current}</span>;
}

export function Stats() {
  const stats = [
    { 
      value: 50, 
      suffix: "+", 
      label: "PROJECTS DELIVERED",
      gradient: "from-[#8B5CF6] to-[#A855F7]",
      glowColor: "bg-[#8B5CF6]",
      shadowColor: "shadow-[0_0_15px_#8B5CF6]",
      separatorColor: "via-[#8B5CF6]/50"
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "ENTERPRISE CLIENTS",
      gradient: "from-[#D946EF] to-[#E879F9]",
      glowColor: "bg-[#D946EF]",
      shadowColor: "shadow-[0_0_15px_#D946EF]",
      separatorColor: "via-[#D946EF]/50"
    },
    { 
      value: 10, 
      suffix: "+", 
      label: "YEARS EXPERIENCE",
      gradient: "from-[#A855F7] to-[#84CC16]",
      glowColor: "bg-[#A855F7]",
      shadowColor: "shadow-[0_0_15px_#84CC16]",
      separatorColor: "via-[#84CC16]/50"
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "DEDICATED SUPPORT",
      gradient: "from-[#A3E635] to-[#65A30D]",
      glowColor: "bg-[#84CC16]",
      shadowColor: "shadow-[0_0_15px_#84CC16]",
      separatorColor: null
    },
  ];

  return (
    <section className="py-24 bg-[#010103] relative overflow-hidden flex items-center justify-center min-h-[400px]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#311188]/10 blur-[150px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#1C360B]/10 blur-[150px]" />
      </div>

      {/* Decorative Wavy Dots (Left and Right) */}
      <svg className="absolute bottom-0 inset-x-0 w-full h-[250px] pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 250" fill="none">
        {/* Left Waves (Purple) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path 
            key={`l-${i}`} 
            d={`M 0 ${100 + i * 10} Q ${300 + i * 5} ${250 - i * 5} ${720 + i*10} 250`} 
            stroke="#6D28D9" 
            strokeWidth="1" 
            strokeDasharray="2 4" 
            opacity={0.1 + (i * 0.02)}
          />
        ))}
        {/* Right Waves (Green) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path 
            key={`r-${i}`} 
            d={`M 1440 ${100 + i * 10} Q ${1140 - i * 5} ${250 - i * 5} ${720 - i*10} 250`} 
            stroke="#65A30D" 
            strokeWidth="1" 
            strokeDasharray="2 4" 
            opacity={0.1 + (i * 0.02)}
          />
        ))}
      </svg>

      {/* Bottom Horizontal Glowing Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] via-50% to-transparent" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #8B5CF6 20%, #D946EF 40%, #84CC16 80%, rgba(0,0,0,0) 100%)' }}>
        <div className="absolute inset-0 blur-[8px] bg-inherit opacity-50" />
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          {stats.map((stat, i) => {
            const isLast = i === stats.length - 1;
            return (
              <div key={i} className="flex-1 flex items-center justify-center relative w-full">
                {/* Stat Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center justify-center text-center px-4 z-10"
                >
                  <div className={`text-6xl md:text-7xl lg:text-[5rem] font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                    <AnimatedNumber value={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-6">
                    {stat.label}
                  </div>
                  {/* Bottom glowing indicator */}
                  <div className={`h-1 w-12 rounded-full ${stat.glowColor} ${stat.shadowColor}`} />
                </motion.div>

                {/* Vertical Separator */}
                {!isLast && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-transparent z-0" style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${stat.separatorColor?.replace('via-[', '').replace(']/50', '')}, transparent)` }}>
                     {/* Workaround for dynamic tailwind via-[] if it doesn't parse correctly */}
                     <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${stat.separatorColor} to-transparent opacity-80`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
