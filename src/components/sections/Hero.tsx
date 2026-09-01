"use client";

import { motion } from "motion/react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Brain, Rocket, Shield } from "lucide-react";
import { Services } from "./Services";

export function Hero() {
  return (
    <section className="relative pb-3 md:pt-10 md:pb-20 overflow-hidden min-h-screen flex items-center bg-[#010103]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-30"></div>

      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase border border-emerald-500/30 rounded-full px-4 py-2 w-fit bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="text-purple-400">AI</span> • DIGITAL • INNOVATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter text-white leading-[1.1] mb-8"
          >
            AI & Digital <br />
            Solutions That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#84CC16] animate-gradient">
              Drive Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white mb-12 max-w-lg"
          >
            We help businesses automate, scale, and secure their digital future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-6"
          >
            <Button
              href="/contact"
              className="bg-emerald-500 hover:bg-emerald-400 text-white border-0 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 font-semibold"
              withArrow
            >
              Start a Conversation
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="border-white/10 hover:border-white/30 bg-transparent text-white"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </div>

        {/* Visual Abstract Component (Right Side) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] w-full hidden lg:flex items-center justify-center"
        >
          {/* Isometric 3D Platform */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-[40%] [transform-style:preserve-3d] [transform:rotateX(60deg)_rotateZ(45deg)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-emerald-500/15 blur-[80px]" />

            {/* Base Layer */}
            <div className="absolute inset-4 rounded-3xl border-2 border-purple-500/30 bg-[#050505]/80 shadow-[0_0_40px_rgba(168,85,247,0.2)] [transform:translateZ(-40px)]" />

            {/* Middle Layer */}
            <div className="absolute inset-8 rounded-2xl border-2 border-emerald-500/30 bg-[#0A0A0A]/90 shadow-[0_0_40px_rgba(16,185,129,0.2)] [transform:translateZ(-20px)]" />

            {/* Top Layer */}
            <div className="absolute inset-12 rounded-2xl border-2 border-cyan-500/50 bg-[#111111] shadow-[0_0_50px_rgba(6,182,212,0.4)] [transform:translateZ(0px)] flex items-center justify-center">
              {/* Grid on top layer */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-2xl" />
            </div>
          </div>

          {/* Central Floating Glass Card (Molecule) */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-56 h-56 bg-[#050505]/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center z-20 overflow-hidden"
          >
            {/* Glowing borders around the card */}
            <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent bg-gradient-to-br from-purple-500 via-transparent to-emerald-400 [mask-composite:exclude] [mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)]" />

            {/* Bright Molecule SVG */}
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              <circle cx="30" cy="50" r="16" fill="url(#mol-grad-1-hero)" />
              <circle cx="70" cy="30" r="14" fill="url(#mol-grad-2-hero)" />
              <circle cx="65" cy="70" r="12" fill="url(#mol-grad-3-hero)" />
              <path d="M 42 46 L 58 34" stroke="url(#mol-grad-2-hero)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 68 40 L 66 60" stroke="url(#mol-grad-3-hero)" strokeWidth="8" strokeLinecap="round" />
              <defs>
                <linearGradient id="mol-grad-1-hero" x1="14" y1="34" x2="46" y2="66">
                  <stop stopColor="#FDE047" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="mol-grad-2-hero" x1="56" y1="16" x2="84" y2="44">
                  <stop stopColor="#D946EF" />
                  <stop offset="1" stopColor="#9333EA" />
                </linearGradient>
                <linearGradient id="mol-grad-3-hero" x1="53" y1="58" x2="77" y2="82">
                  <stop stopColor="#6EE7B7" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Glowing Circuit Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 800 600" fill="none">
            {/* Line to Top Left */}
            <motion.path
              d="M 400 300 L 300 300 L 300 150 L 220 150"
              stroke="#A855F7" strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-50"
            />
            <circle cx="220" cy="150" r="4" fill="#A855F7" className="animate-pulse" />

            {/* Line to Top Right */}
            <motion.path
              d="M 400 300 L 500 300 L 500 180 L 580 180"
              stroke="#10B981" strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-50"
            />
            <circle cx="580" cy="180" r="4" fill="#10B981" className="animate-pulse" />

            {/* Line to Bottom Right */}
            <motion.path
              d="M 400 300 L 400 450 L 550 450 L 550 420"
              stroke="#84CC16" strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-50"
            />
            <circle cx="550" cy="420" r="4" fill="#84CC16" className="animate-pulse" />
          </svg>

          {/* AI Powered Card (Top Left) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-28 left-4 xl:-left-12 w-48 bg-[#050505]/90 backdrop-blur-md rounded-2xl p-5 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] z-30 flex flex-col gap-2"
          >
            <Brain className="text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" size={32} />
            <h4 className="text-white font-bold text-sm">AI Powered</h4>
            <p className="text-white text-xs leading-relaxed">Smarter solutions for tomorrow</p>
          </motion.div>

          {/* Future Ready Card (Top Right) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-4 w-48 bg-[#050505]/90 backdrop-blur-md rounded-2xl p-5 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)] z-30 flex flex-col gap-2"
          >
            <Rocket className="text-emerald-400 mb-2 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" size={32} />
            <h4 className="text-white font-bold text-sm">Future Ready</h4>
            <p className="text-white text-xs leading-relaxed">Scalable. Intelligent. Impactful.</p>
          </motion.div>

          {/* Secure by Design Card (Bottom Right) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-28 right-12 w-48 bg-[#050505]/90 backdrop-blur-md rounded-2xl p-5 border border-[#84CC16]/50 shadow-[0_0_30px_rgba(132,204,22,0.2)] z-30 flex flex-col gap-2"
          >
            <Shield className="text-[#84CC16] mb-2 drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" size={32} />
            <h4 className="text-white font-bold text-sm">Secure by Design</h4>
            <p className="text-white text-xs leading-relaxed">Security built in every solution</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
