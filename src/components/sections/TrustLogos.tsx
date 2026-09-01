"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function TrustLogos() {
  const logos = [
    "/assets/client1.png",
    "/assets/client2.png",
    "/assets/client3.png",
  ];

  // Repeat the logos enough times so the marquee doesn't run out on ultra-wide screens
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-6 border-y border-white/5 bg-transparent overflow-hidden">
      <div className="flex flex-col items-center gap-5">
        <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          TRUSTED BY FORWARD-THINKING TEAMS
        </p>

        <div className="relative w-full flex overflow-hidden group py-2">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#010103] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#010103] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity
            }}
            className="flex items-center gap-24 whitespace-nowrap px-8"
          >
            {repeatedLogos.map((logo, i) => (
              <div
                key={i}
                className="relative w-52 h-32 flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Client Logo ${i}`}
                    fill
                    className={`object-contain ${logo.includes("client3") ? "scale-115" : ""}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
