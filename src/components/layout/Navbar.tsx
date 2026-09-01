"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";
import nextgenlogo from "@/assets/nextgen2ailogo.png"

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "Pricing", href: "/Pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-8 xl:px-16 pointer-events-none">
      <div
        className={`w-full max-w-[1920px] mx-auto pointer-events-auto rounded-full transition-all duration-300 border ${
          isScrolled
            ? "bg-[#04010A]/95 backdrop-blur-2xl border-emerald-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] py-3 px-6 md:px-10"
            : "bg-[#070312]/90 backdrop-blur-xl border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-3.5 px-6 md:px-10"
        } flex items-center justify-between relative`}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={nextgenlogo}
            alt="NextGen2AI Logo"
            width={220}
            height={80}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Button
            href="/contact"
            className="ml-3 bg-emerald-500 hover:bg-emerald-400 border-0 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all font-semibold"
            withArrow
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-3 bg-[#0A0512] border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-5 shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                href="/contact" 
                className="w-full justify-center bg-emerald-500 hover:bg-emerald-400 border-0 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
              >
                Let's Talk
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
