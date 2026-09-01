"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { Testimonials } from "@/components/sections/Testimonials";
import pricing from "@/assets/Pricing.png";
import Image from "next/image";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic",
      yearlyPrice: "1500.00",
      monthlyPrice: "150.00",
      popular: false,
      features: [
        { name: "Responsive Design", active: true, info: true },
        { name: "Bootstrap Design", active: true },
        { name: "Unlimited Support", active: true },
        { name: "Free Trial version", active: true },
        { name: "Application Development", active: true },
      ]
    },
    {
      name: "Standard",
      yearlyPrice: "2000.00",
      monthlyPrice: "200.00",
      popular: false,
      features: [
        { name: "Responsive Design", active: true },
        { name: "Web Development", active: true },
        { name: "Unlimited Support", active: true },
        { name: "Free Trial version", active: true },
        { name: "Application Development", active: true },
      ]
    },
    {
      name: "Advanced",
      yearlyPrice: "2500.00",
      monthlyPrice: "250.00",
      popular: true,
      features: [
        { name: "Responsive Design", active: true },
        { name: "Website Development", active: true },
        { name: "Unlimited Support", active: true },
        { name: "Free Trial version", active: true },
        { name: "Application Development", active: true },
      ]
    },
    {
      name: "Mighty",
      yearlyPrice: "3000.00",
      monthlyPrice: "300.00",
      popular: false,
      features: [
        { name: "Responsive Design", active: true },
        { name: "Website Development", active: true },
        { name: "Unlimited Support", active: true },
        { name: "Free Trial version", active: true },
        { name: "Application Development", active: true },
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <FloatingContact />
      <main className="flex-1 bg-[#010103] pt-24">

        {/* Hero Section */}
        <section className="relative w-full border-b border-white/5">
          <Image
            src={pricing}
            alt="About Us"
            className="w-full h-auto object-contain"
            priority
          />
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Toggle */}
            <div className="flex items-center gap-4 mb-16 relative z-10 text-white font-semibold">
              <span className={isYearly ? "text-emerald-400" : "text-[white]"}>Yearly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-7 rounded-full bg-white/10 relative border border-white/20 transition-colors hover:border-emerald-500/50"
              >
                <motion.div
                  className="absolute top-1 left-1 w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  animate={{ x: isYearly ? 0 : 28 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={!isYearly ? "text-emerald-400" : "text-[white]"}>Monthly</span>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-[#0A0512] rounded-2xl p-8 flex flex-col items-center border ${plan.popular
                    ? "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] transform md:-translate-y-4"
                    : "border-white/10"
                    } hover:border-emerald-500/30 transition-all group`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>

                  <div className="w-full bg-white/5 border border-white/10 rounded-full py-3 mb-8 flex justify-center items-center group-hover:bg-emerald-500/10 transition-colors">
                    <span className="text-xl font-bold text-emerald-400">₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                    <span className="text-[white] text-sm ml-2">/ {isYearly ? "Year" : "Month"}</span>
                  </div>

                  <ul className="flex flex-col gap-4 w-full mb-10 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-[#D4D4D8]">
                        <Check size={16} className="text-emerald-500 flex-shrink-0" />
                        <span className="flex-1">{feature.name}</span>
                        {feature.info && <Info size={14} className="text-[white] cursor-help" />}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-full font-bold transition-all ${plan.popular
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                    }`}>
                    ⚡ Talk to Us
                  </button>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Testimonials */}
        <div className="bg-[#020108] pt-24 text-center border-t border-white/5">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-[white] text-lg">Trusted by businesses worldwide for AI-driven solutions</p>
        </div>
        <Testimonials />

      </main>
      <Footer />
    </>
  );
}
