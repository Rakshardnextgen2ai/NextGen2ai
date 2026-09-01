"use client";

import { motion } from "motion/react";
import { Container } from "../ui/Container";
import { Brain, Shield, LineChart } from "lucide-react";

export function About() {
  const cards = [
    {
      num: "01",
      title: "AI FIRST",
      desc: "Intelligence built into every layer of the product.",
      icon: Brain,
      gradient: "from-amber-500 to-purple-600",
      border: "border-amber-500/30",
      glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      textColor: "text-amber-500",
      iconGlow: "bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
    },
    {
      num: "02",
      title: "SECURE BY DESIGN",
      desc: "Enterprise-grade security from architecture to deployment.",
      icon: Shield,
      gradient: "from-purple-500 to-purple-800",
      border: "border-purple-500/30",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      textColor: "text-purple-400",
      iconGlow: "bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    },
    {
      num: "03",
      title: "BUILT TO SCALE",
      desc: "Flexible technology designed to grow with your business.",
      icon: LineChart,
      gradient: "from-emerald-500 to-emerald-800",
      border: "border-emerald-500/30",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      textColor: "text-emerald-400",
      iconGlow: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#010103] relative overflow-hidden">
      {/* Background Wavy Glows (SVG) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Glows behind the sharp lines */}
        <div className="absolute -left-1/4 bottom-0 w-[800px] h-[600px] rounded-[100%] bg-purple-700/8 blur-[150px]" />
        <div className="absolute left-1/4 -bottom-1/4 w-[800px] h-[500px] rounded-[100%] bg-amber-600/5 blur-[150px]" />
        <div className="absolute -right-1/4 bottom-0 w-[800px] h-[800px] rounded-[100%] bg-emerald-500/5 blur-[150px]" />

        {/* Sharp Glowing Waves */}
        <svg className="absolute w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle faint line top left */}
          <path d="M-100,100 C200,50 400,200 600,50" stroke="rgba(168,85,247,0.1)" strokeWidth="2" fill="none" />
          <path d="M-100,120 C250,70 450,220 650,70" stroke="rgba(168,85,247,0.05)" strokeWidth="1" fill="none" />

          {/* Bottom Purple to Amber Wave */}
          <path d="M-100,850 C200,600 400,850 800,850 C1100,850 1300,500 1500,400" stroke="url(#wave-grad-1)" strokeWidth="4" fill="none" filter="drop-shadow(0 0 10px rgba(168,85,247,0.5))" />
          <path d="M-100,870 C220,620 420,870 820,870 C1120,870 1320,520 1520,420" stroke="url(#wave-grad-1)" strokeWidth="2" fill="none" opacity="0.6" filter="drop-shadow(0 0 5px rgba(245,158,11,0.5))" />
          <path d="M-100,890 C240,640 440,890 840,890 C1140,890 1340,540 1540,440" stroke="url(#wave-grad-1)" strokeWidth="1" fill="none" opacity="0.3" />

          {/* Bottom Right Green Wave */}
          <path d="M700,900 C1000,900 1200,750 1500,500" stroke="url(#wave-grad-2)" strokeWidth="4" fill="none" filter="drop-shadow(0 0 10px rgba(16,185,129,0.5))" />
          <path d="M750,900 C1050,900 1250,770 1550,520" stroke="url(#wave-grad-2)" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M800,900 C1100,900 1300,790 1600,540" stroke="url(#wave-grad-2)" strokeWidth="1" fill="none" opacity="0.3" />

          {/* Faint circles right side */}
          <circle cx="1300" cy="200" r="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
          <circle cx="1300" cy="200" r="250" stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="none" />

          {/* Tiny glowing stars/particles */}
          <circle cx="400" cy="550" r="1.5" fill="#A855F7" opacity="0.5" filter="drop-shadow(0 0 2px #A855F7)" />
          <circle cx="900" cy="300" r="1.5" fill="#10B981" opacity="0.5" filter="drop-shadow(0 0 2px #10B981)" />
          <circle cx="1100" cy="650" r="2" fill="#F59E0B" opacity="0.6" filter="drop-shadow(0 0 3px #F59E0B)" />

          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="850" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="40%" stopColor="#D946EF" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="wave-grad-2" x1="700" y1="900" x2="1440" y2="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.1]"
          >
            WHO WE ARE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-amber-400 to-emerald-400 rounded-full mt-2"
          />
        </div>

        {/* Right Side: Content & Cards */}
        <div className="lg:col-span-7 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white leading-relaxed max-w-2xl"
          >
            <p className="mb-4">
              NextGen2AI is a collective of innovators driven by curiosity and collaboration. We champion ethical AI, striving to harness its power for positive societal impact.
            </p>
            <p className="mb-6">
              With diversity as our strength, we envision a future where AI serves humanity's highest ideals.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10 text-emerald-400">Ethical AI</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10 text-purple-400">Secure Systems</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10 text-amber-400">Expert Team</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Background Arch/Glow behind middle card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] rounded-t-full bg-purple-600/5 blur-2xl z-0" />

            {cards.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className={`relative z-10 bg-[#0A0A0A]/80 backdrop-blur-md rounded-[2rem] p-8 ${item.border} border-t-2 border-l-2 border-r border-b ${item.glow} flex flex-col h-full`}
              >
                {/* Background ambient gradient inside card */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b ${item.gradient} opacity-5 z-0`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 ${item.iconGlow}`}>
                    <item.icon size={24} />
                  </div>

                  <span className={`${item.textColor} font-bold text-xl mb-2`}>{item.num}</span>
                  <h3 className="text-white font-bold text-xl mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>

                  {/* Bottom Line Indicator */}
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${item.gradient} mt-auto`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
