"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { teamData } from "../../data/team";

export function Team() {
  const cardStyles = [
    {
      gradient: "from-[#4F46E5] to-[#7C3AED]",
      glowColor: "bg-[#6D28D9]",
      shadowColor: "shadow-[0_0_15px_#6D28D9]"
    },
    {
      gradient: "from-[#D946EF] to-[#9333EA]",
      glowColor: "bg-[#D946EF]",
      shadowColor: "shadow-[0_0_15px_#D946EF]"
    },
    {
      gradient: "from-[#7C3AED] to-[#4F46E5]",
      glowColor: "bg-[#7C3AED]",
      shadowColor: "shadow-[0_0_15px_#7C3AED]"
    },
    {
      gradient: "from-[#84CC16] to-[#EAB308]",
      glowColor: "bg-[#84CC16]",
      shadowColor: "shadow-[0_0_15px_#84CC16]"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#030108] relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#4F46E5]/8 blur-[150px]" />
        <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#84CC16]/5 blur-[150px]" />
      </div>

      {/* Decorative Wavy Dots (Left and Right) */}
      <svg className="absolute bottom-0 inset-x-0 w-full h-[400px] pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none">
        {/* Left Waves (Purple) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`l-${i}`}
            d={`M 0 ${200 + i * 15} Q ${300 + i * 10} ${400 - i * 15} ${600 + i * 15} 400`}
            stroke="#7C3AED"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
        {/* Right Waves (Green) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`r-${i}`}
            d={`M 1440 ${200 + i * 15} Q ${1140 - i * 10} ${400 - i * 15} ${840 - i * 15} 400`}
            stroke="#84CC16"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 flex flex-col items-center">

        {/* Custom Section Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter uppercase"
          >
            THE PEOPLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#84CC16]">BEHIND</span> THE PRODUCT.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {teamData.map((member, i) => {
            const style = cardStyles[i % cardStyles.length];
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col items-center"
              >
                {/* Image Card Container */}
                <div className={`relative h-[300px] md:h-[360px] w-full rounded-2xl overflow-hidden mb-6 border-2 border-transparent bg-gradient-to-br ${style.gradient} [mask-composite:exclude] [mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] p-[2px]`}>
                  <div className="relative w-full h-full rounded-[calc(1rem-2px)] overflow-hidden bg-[#0A0A0A]">
                    {/* Inner glowing effect on the image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500`} />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-110"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center flex flex-col items-center">
                  <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-[white] text-xs font-bold tracking-[0.15em] uppercase mb-6">{member.role}</p>
                  {/* Indicator Line */}
                  <div className={`h-[3px] w-8 rounded-full ${style.glowColor} ${style.shadowColor}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
