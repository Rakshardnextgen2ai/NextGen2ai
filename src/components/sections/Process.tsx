"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Lightbulb, Rocket, Settings, GitPullRequest } from "lucide-react";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the real problem, explore user needs, and define goals for your solution.",
      icon: Lightbulb,
      color: "purple"
    },
    {
      num: "02",
      title: "STRATEGIZE",
      desc: "Design a clear plan, set priorities, and map the roadmap for execution.",
      icon: GitPullRequest, // Using a similar mapping icon
      color: "purple"
    },
    {
      num: "03",
      title: "BUILD",
      desc: "Develop the solution, test iteratively, and ensure it's scalable and high-performing.",
      icon: Settings,
      color: "green"
    },
    {
      num: "04",
      title: "LAUNCH",
      desc: "Deploy to production, monitor performance, and iterate for long-term success.",
      icon: Rocket,
      color: "purple"
    },
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#040108] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple-700/8 blur-[150px]" />
        <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#84CC16]/5 blur-[150px]" />
      </div>

      {/* Decorative Background SVG Elements */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 800" fill="none">
        {/* Left Rings */}
        <circle cx="-100" cy="100" r="400" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" />
        <circle cx="-100" cy="100" r="300" stroke="rgba(168,85,247,0.05)" strokeWidth="1" />
        <circle cx="182" cy="382" r="5" fill="#A855F7" className="animate-pulse" filter="drop-shadow(0 0 8px #A855F7)" />

        {/* Right Rings */}
        <circle cx="1500" cy="700" r="300" stroke="rgba(132,204,22,0.15)" strokeWidth="1.5" />
        <circle cx="1500" cy="700" r="400" stroke="rgba(132,204,22,0.05)" strokeWidth="1" />
        <circle cx="1200" cy="700" r="5" fill="#84CC16" className="animate-pulse" filter="drop-shadow(0 0 8px #84CC16)" />

        {/* Wavy dots bottom left */}
        <path d="M 0 700 Q 200 600 400 800" stroke="url(#wave-grad-process)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <path d="M -50 750 Q 150 650 350 850" stroke="url(#wave-grad-process)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <path d="M 50 650 Q 250 550 450 750" stroke="url(#wave-grad-process)" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />

        {/* Wavy dots top right */}
        <path d="M 1000 0 Q 1200 150 1440 50" stroke="#A855F7" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <path d="M 1050 -50 Q 1250 100 1440 0" stroke="#A855F7" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />

        <defs>
          <linearGradient id="wave-grad-process" x1="0" y1="700" x2="400" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="1" stopColor="#84CC16" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">

        {/* Custom Section Header */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tighter"
          >
            FROM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#84CC16]">IDEA TO IMPACT.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[white] text-lg max-w-2xl"
          >
            A simple process. Powerful outcomes.
          </motion.p>
        </div>

        <div className="relative pt-10">
          {/* Base Horizontal Connecting Line */}
          <div className="absolute top-[31px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#A855F7] via-[#84CC16] to-[#A855F7] opacity-40 hidden md:block" />

          {/* Animated Connecting Line */}
          <motion.div
            className="absolute top-[31px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#A855F7] via-[#84CC16] to-[#A855F7] hidden md:block origin-left shadow-[0_0_10px_#A855F7]"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => {
              const isPurple = step.color === "purple";
              const glowColor = isPurple ? "rgba(168,85,247,0.8)" : "rgba(132,204,22,0.8)";
              const borderColor = isPurple ? "border-[#A855F7]" : "border-[#84CC16]";
              const textColor = isPurple ? "text-[#E9D5FF]" : "text-[#D9F99D]";

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex flex-col items-center md:items-start"
                >
                  {/* Number Circle intersecting the line */}
                  <div
                    className={`w-16 h-16 rounded-full bg-[#0B0616] border-2 ${borderColor} flex items-center justify-center text-xl font-bold text-white mb-10 relative z-10 mx-auto md:ml-4 shadow-[0_0_20px_${glowColor}]`}
                  >
                    {step.num}
                  </div>

                  <div className="flex flex-col items-center md:items-start w-full px-4 md:px-0">
                    {/* Icon Box */}
                    <div className={`w-14 h-14 rounded-2xl border ${borderColor}/50 bg-[#110826] flex items-center justify-center mb-6 shadow-[inset_0_0_15px_${glowColor.replace('0.8', '0.2')}]`}>
                      <step.icon size={26} className={isPurple ? "text-[#A855F7]" : "text-[#84CC16]"} />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4 tracking-wide uppercase">
                      {step.title}
                    </h4>
                    <p className="text-[white] text-sm leading-relaxed mb-6 text-center md:text-left min-h-[80px]">
                      {step.desc}
                    </p>

                    {/* Bottom Colored Indicator Line */}
                    <div className={`h-1 w-12 rounded-full ${isPurple ? "bg-[#A855F7]" : "bg-[#84CC16]"} shadow-[0_0_10px_${glowColor}]`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
