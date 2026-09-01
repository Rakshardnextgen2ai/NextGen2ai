"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { industriesData } from "../../data/industries";
import { cn } from "../ui/Container";

export function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Image that changes on hover */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={industriesData[hoveredIndex].image}
              alt={industriesData[hoveredIndex].title}
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-[#010103]/80 to-transparent z-0" />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <SectionHeading
          title="BUILT FOR REAL-WORLD IMPACT."
          align="left"
          className="mb-16 text-left items-start"
        />

        <div className="flex flex-col border-t border-white/10">
          {industriesData.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-white/10 py-10 md:py-16 flex flex-col md:flex-row md:items-center gap-8 cursor-pointer relative"
            >
              {/* Highlight background on hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between px-0 md:px-2">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                  <span className={cn(
                    "font-mono text-3xl font-light transition-colors duration-300",
                    hoveredIndex === index ? "text-[#06B6D4]" : "text-[#555555]"
                  )}>
                    {industry.number}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                    {industry.title}
                  </h3>
                </div>

                <div className="flex items-center gap-8 mt-6 md:mt-0 opacity-0 md:opacity-100 md:group-hover:opacity-100 md:translate-x-4 md:group-hover:translate-x-0 transition-all duration-300 w-full md:w-1/3 justify-end">
                  <p className="text-[white] text-sm md:text-base hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {industry.description}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 flex-shrink-0">
                    <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
