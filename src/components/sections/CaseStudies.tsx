"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { projectsData } from "../../data/projects";
import { cn } from "../ui/Container";

export function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-[#060312] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple-700/8 blur-[150px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#84CC16]/5 blur-[150px]" />
      </div>

      {/* Decorative Wavy Lines (Bottom Right) */}
      <svg className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none z-0" viewBox="0 0 600 400" fill="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M ${100 + i * 50} 400 Q ${300 + i * 20} ${200 + i * 10} 600 ${50 + i * 30}`}
            stroke={`url(#wave-grad-${i % 2})`}
            strokeWidth="1"
            strokeDasharray="4 4"
            className="opacity-40"
          />
        ))}
        <defs>
          <linearGradient id="wave-grad-0" x1="100" y1="400" x2="600" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#84CC16" />
          </linearGradient>
          <linearGradient id="wave-grad-1" x1="100" y1="400" x2="600" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" stopOpacity="0.5" />
            <stop offset="1" stopColor="#84CC16" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">

        {/* Custom Section Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter"
          >
            CASE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-[#84CC16] to-[#84CC16]">STUDIES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[white] text-lg max-w-2xl leading-relaxed"
          >
            Real results delivered for our clients
          </motion.p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projectsData.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.slug}
                className={cn(
                  "flex flex-col lg:items-center gap-12 lg:gap-20",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500 to-[#84CC16] opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative h-[350px] md:h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden border-2 border-transparent bg-gradient-to-br from-purple-500 to-[#84CC16] [mask-composite:exclude] [mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] p-[2px]">
                    <div className="relative w-full h-full rounded-[calc(2rem-2px)] overflow-hidden bg-[#0A0A0A]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill

                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 flex flex-col items-start"
                >
                  <span className="text-sm tracking-wider uppercase mb-4 font-bold">
                    <span className="text-purple-400">AI & </span>
                    <span className="text-[#84CC16]">{project.category.replace('AI & ', '')}</span>
                  </span>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[white] text-lg mb-10 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-12">
                    {project.technology.map((tech, index) => {
                      const isLast = index === project.technology.length - 1;
                      return (
                        <span
                          key={tech}
                          className={cn(
                            "px-4 py-1.5 rounded-xl text-sm font-medium",
                            isLast
                              ? "border border-[#84CC16] text-[#84CC16] shadow-[0_0_10px_rgba(132,204,22,0.1)]"
                              : "border border-purple-500/50 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                          )}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mb-12 p-8 rounded-2xl bg-[#0B0616]/80 border border-white/5 w-full max-w-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 opacity-40">
                      <svg width="150" height="80" viewBox="0 0 150 80" fill="none">
                        <path d="M0 80 C 30 70, 40 50, 70 50 C 90 50, 100 30, 120 20 L 150 10" stroke="#84CC16" strokeWidth="2" />
                        <path d="M0 80 C 30 70, 40 50, 70 50 C 90 50, 100 30, 120 20 L 150 10 L 150 80 Z" fill="url(#chart-grad)" />
                        <circle cx="150" cy="10" r="4" fill="#84CC16" />
                        <defs>
                          <linearGradient id="chart-grad" x1="75" y1="10" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84CC16" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#84CC16" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-sm text-purple-400 mb-4 uppercase tracking-wider font-semibold">Business Impact</p>
                    <p className="text-3xl text-white font-medium flex items-center gap-3 relative z-10">
                      <span className="text-[#84CC16] font-bold text-4xl">{project.businessResult.split(' ')[0]}</span>
                      {project.businessResult.substring(project.businessResult.indexOf(' ') + 1)}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
