"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import aboutUsBg from "@/assets/aboutUs.png";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatingContact />
      <main className="flex-1 bg-[#010103] pt-24">

        {/* Hero Section */}
        <section className="relative w-full border-b border-white/5">
          <Image
            src={aboutUsBg}
            alt="About Us"
            className="w-full h-auto object-contain"
            priority
          />
        </section>

        {/* We are awesome TEAM Section */}
        <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 relative overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              We are awesome TEAM
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[white] text-lg leading-relaxed flex flex-col gap-6"
            >
              <p>
                NextGen2AI is a collaborative team of innovators passionate about artificial intelligence and modern technologies. We believe in blending creativity, ethics, and engineering to build impactful digital solutions.
              </p>
              <p>
                Driven by a shared vision, our diverse team transforms challenges into opportunities by delivering intelligent, scalable, and secure AI-powered systems.
              </p>
              <p>
                Together, we are not just a team — we are a force shaping the future of AI-driven innovation.
              </p>

              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-white">
                  <Check size={20} className="text-[#84CC16]" /> Ethical & Responsible AI Development
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Check size={20} className="text-[#84CC16]" /> Skilled & Diverse Technical Experts
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Check size={20} className="text-[#84CC16]" /> Innovation-Focused Problem Solving
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 3 Columns Section */}
        <section className="py-20 bg-[#050505] px-6 md:px-12 xl:px-24 border-y border-white/5 relative">
          <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <p className="text-[white] mb-6">
                Choosing NextGen2AI means partnering with a team that values innovation, integrity, and measurable impact.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                  <CheckCircle2 size={16} className="text-purple-400" /> Ethical AI Solutions
                </li>
                <li className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                  <CheckCircle2 size={16} className="text-purple-400" /> Experienced Team
                </li>
                <li className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                  <CheckCircle2 size={16} className="text-purple-400" /> Transparent Process
                </li>
                <li className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                  <CheckCircle2 size={16} className="text-purple-400" /> Client-Focused Delivery
                </li>
              </ul>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Solution</h3>
              <div className="flex flex-col gap-3">
                {["Web Design", "Android Development", "CRM System Development", "Python Apps Development"].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rotate-45 bg-[#3B82F6]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Our Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
              <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-white">
                    <span>Web Development</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#EF4444] h-full w-[85%]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-white">
                    <span>Designing</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#10B981] h-full w-[95%]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-white">
                    <span>User Experience</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#06B6D4] h-full w-[90%]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm text-white">
                    <span>Development</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#3B82F6] h-full w-[75%]" />
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 px-6 md:px-12 xl:px-24">
          <div className="w-full max-w-[1920px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 border-b border-white/10 pb-4">Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Rajitha", role: "UI/UX Designer", image: "/assets/Rajitha.png" },
                { name: "NamrataHalabannavar", role: "UI & UX designer, Frontend expert", image: "/assets/NamrataHalabannavar.png" },
                { name: "Naveena", role: "Expert in Database management, Database designer", image: "/assets/Naveena.png" },
                { name: "ALTHAF", role: "Backend Developer", image: "/assets/altaf.png" },].map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#0A0512] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-purple-500/50 transition-colors"
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-[#84CC16] p-[2px] mb-6">
                      <div className="w-full h-full rounded-full bg-[#111] overflow-hidden relative flex items-center justify-center">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          /* Placeholder Avatar */
                          <svg className="w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{member.name}</h4>
                    <p className="text-sm text-[white] line-clamp-3">{member.role}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
