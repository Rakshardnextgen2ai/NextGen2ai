"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import Image from "next/image";
import Portfolio from "@/assets/Portfolio.png";
import CRM from "@/assets/CRMApplication.png";
import mobile from "@/assets/mobileapp.png";
import AiHand from "@/assets/AIHands.png";
import Development from "@/assets/Development.png";
import AICore from "@/assets/AICore.png";
import Robotics from "@/assets/Robotics.png";
import CRMConcep from "@/assets/CRM Concept.png";
import Platform from "@/assets/Platform.png";
// Simulated portfolio data matching the grid
const portfolioItems = [
  { id: 1, title: "CRM Application", category: "Web design", image: CRM },
  { id: 2, title: "Android App", category: "Mobile App", image: mobile },
  { id: 3, title: "AI Hands", category: "Web design", image: AiHand },
  { id: 4, title: "Development Workflow", category: "UI design", image: Development },
  { id: 5, title: "AI Core", category: "Web design", image: AICore },
  { id: 6, title: "Robotics Strategy", category: "UI design", image: Robotics },
  { id: 7, title: "CRM Concept", category: "Web design", image: CRMConcep },
  { id: 8, title: "Web Design Platform", category: "Web design", image: Platform },
];

const categories = ["All", "Web design", "Mobile App", "UI design"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Navbar />
      <FloatingContact />
      <main className="flex-1 bg-[#010103] pt-24">

        {/* Hero Section */}
        <section className="relative w-full border-b border-white/5">
          <Image
            src={Portfolio}
            alt="About Us"
            className="w-full h-auto object-contain"
            priority
          />
        </section>

        {/* Portfolio Gallery Section */}
        <section className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === category
                    ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-transparent"
                    : "bg-white/5 text-[white] border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-white/5 border border-white/10"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-[#010103]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* Trusted By Banner */}
        <section className="py-20 bg-[#050505] border-y border-white/5 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-purple-600/5 blur-[150px] rounded-full" />
          </div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Startups & Businesses
            </h2>
            <p className="text-[white] text-lg">
              Delivering scalable digital solutions with AI innovation
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
