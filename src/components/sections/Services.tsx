"use client";

import { motion } from "motion/react";
import { ArrowRight, Brain, Bot, Network, Cpu, Globe, Smartphone, Cloud, Layout, Shield, Server, Lock, Database } from "lucide-react";
import { servicesData } from "../../data/services";

const icons = {
  Brain, Bot, Network, Cpu, Globe, Smartphone, Cloud, Layout, Shield, Server, Lock, Database
};

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-[#010103] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple-700/8 blur-[150px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#84CC16]/5 blur-[150px]" />
      </div>

      {/* Decorative Background Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 800" fill="none">
        {/* Left Rings */}
        <circle cx="-100" cy="100" r="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx="-100" cy="100" r="300" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        <circle cx="182" cy="382" r="4" fill="white" className="animate-pulse" filter="drop-shadow(0 0 5px white)" />

        {/* Right Rings */}
        <circle cx="1500" cy="700" r="500" stroke="rgba(132,204,22,0.1)" strokeWidth="1" />
        <circle cx="1500" cy="700" r="600" stroke="rgba(132,204,22,0.05)" strokeWidth="1" />
        <circle cx="1000" cy="700" r="4" fill="#84CC16" className="animate-pulse" filter="drop-shadow(0 0 5px #84CC16)" />
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">

        {/* Custom Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter"
          >
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-[#84CC16] to-[#84CC16]">BUILD</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[white] text-lg max-w-2xl leading-relaxed"
          >
            From intelligent automation to scalable digital products, we turn complex ideas into technology that delivers measurable impact.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {servicesData.map((category, catIdx) => (
            <div key={category.title}>

              {/* Category Header with glowing line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-10"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84CC16] to-purple-500 whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="flex-grow flex items-center">
                  <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-[#84CC16]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#84CC16] shadow-[0_0_8px_#84CC16]" />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {category.services.map((service, i) => {
                  const Icon = icons[service.icon as keyof typeof icons] || Brain;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      whileHover={{ y: -8, scale: 1.015 }}
                      className="group relative rounded-2xl bg-[#090514] p-8 border border-white/10 hover:border-white/25 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-colors duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
                    >
                      {/* Decorative Dot Waves (Bottom Right) */}
                      <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-15 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500 pointer-events-none">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current text-white/30">
                          {Array.from({ length: 6 }).map((_, waveIdx) => (
                            <path
                              key={waveIdx}
                              d={`M 0 ${100 - waveIdx * 10} Q 50 ${120 - waveIdx * 15} 100 ${50 - waveIdx * 10}`}
                              strokeWidth="0.5"
                              strokeDasharray="2 2"
                            />
                          ))}
                        </svg>
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-10">
                          {/* Icon Box */}
                          <div className="w-14 h-14 rounded-xl border border-white/10 bg-[#0B0616] group-hover:bg-white/[0.08] group-hover:border-white/30 group-hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-md">
                            <Icon size={28} />
                          </div>

                          {/* Number */}
                          <span className="text-white/40 group-hover:text-white/80 font-bold text-xl transition-colors duration-300">
                            0{i + 1}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3 transition-colors duration-300">
                          {service.title}
                        </h4>

                        <p className="text-white/70 text-sm leading-relaxed flex-grow">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
