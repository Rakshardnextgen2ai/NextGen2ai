import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Brain,
  Code,
  Smartphone,
  Cloud,
  PenTool,
  BarChart3,
  ShieldCheck
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import nextgenLogo from "@/assets/nextgen2ailogo.png";

export function Footer() {
  return (
    <footer className="bg-[#020108] relative overflow-hidden pt-24 pb-8">
      {/* Decorative Wavy Dots (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none">
        {/* Left Waves (Magenta) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`l-${i}`}
            d={`M -100 ${150 + i * 15} Q ${200 + i * 15} ${400 - i * 10} ${600 + i * 20} 600`}
            stroke="#D946EF"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
        {/* Right Waves (Blue) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={`r-${i}`}
            d={`M 1500 ${150 + i * 15} Q ${1200 - i * 15} ${400 - i * 10} ${800 - i * 20} 600`}
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity={0.1 + (i * 0.02)}
          />
        ))}
      </svg>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">

          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 group mb-8">
              <div className="flex flex-col">
                <Image src={nextgenLogo} alt="NextGen2AI Logo" width={240} height={90} />
              </div>
            </Link>

            <p className="text-[#8B92A5] text-base leading-relaxed mb-10 max-w-sm">
              Building intelligent digital experiences for ambitious companies worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/nextgen2ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A0512] border border-[#D946EF]/50 flex items-center justify-center text-white hover:bg-[#D946EF]/20 transition-all shadow-[0_0_15px_rgba(217,70,239,0.25)] hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/nextgen2ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A0512] border border-[#7C3AED]/50 flex items-center justify-center text-white hover:bg-[#7C3AED]/20 transition-all shadow-[0_0_15px_rgba(124,58,237,0.25)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/next-gen2ai-342759369/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A0512] border border-[#3B82F6]/50 flex items-center justify-center text-white hover:bg-[#3B82F6]/20 transition-all shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#D946EF] font-bold text-lg mb-2 uppercase tracking-wider">COMPANY</h4>
            <div className="h-[2px] w-8 bg-[#D946EF] mb-8 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-[#8B92A5] font-medium hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-[#8B92A5] font-medium hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/Portfolio" className="text-[#8B92A5] font-medium hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-[#8B92A5] font-medium hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/Pricing" className="text-[#8B92A5] font-medium hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="lg:col-span-3">
            <h4 className="text-[#06B6D4] font-bold text-lg mb-2 uppercase tracking-wider">SERVICES</h4>
            <div className="h-[2px] w-8 bg-[#06B6D4] mb-8 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <ul className="flex flex-col gap-4 text-[#8B92A5] font-medium">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Brain size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>AI & ML Solutions</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Code size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>Web Development</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Smartphone size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>Mobile App Development</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Cloud size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>Cloud Solutions</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <PenTool size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <BarChart3 size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>Data Analytics</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <ShieldCheck size={16} className="text-[#06B6D4] flex-shrink-0" />
                <span>Cybersecurity</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-[#06B6D4] font-bold text-lg mb-2 uppercase tracking-wider">CONTACT</h4>
            <div className="h-[2px] w-8 bg-[#06B6D4] mb-8 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <ul className="flex flex-col gap-6 text-[#8B92A5] font-medium">
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-[#06B6D4]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-[#0A0512]">
                  <MapPin size={16} className="text-[#06B6D4]" />
                </div>
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-[#06B6D4]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-[#0A0512]">
                  <Mail size={16} className="text-[#06B6D4]" />
                </div>
                <a href="mailto:office@nextgen2ai.com" className="hover:text-white transition-colors">office@nextgen2ai.com</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-[#06B6D4]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-[#0A0512]">
                  <Phone size={16} className="text-[#06B6D4]" />
                </div>
                <a href="tel:+91-9538431415" className="hover:text-white transition-colors">+91-9538431415</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-[#06B6D4]/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-[#0A0512]">
                  <Clock size={16} className="text-[#06B6D4]" />
                </div>
                <span>Mon - Sat: 6:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>



        {/* Glowing Horizon Separator */}
        <div className="relative w-full h-[2px] mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D946EF] via-40% via-[#3B82F6] via-60% to-transparent opacity-40 shadow-[0_0_10px_#D946EF]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D946EF] via-40% via-[#3B82F6] via-60% to-transparent blur-[8px] opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-gradient-to-r from-[#D946EF] to-[#3B82F6] blur-[2px] shadow-[0_0_15px_#3B82F6]" />
        </div>
        <div className="border-t border-white/10 mt-8 pt-5 text-center">
          <p className="text-sm text-gray-400">
            © 2026 LearnMore Technologies. All Rights Reserved.
          </p>

          <p className="mt-2 text-xl text-gray-500">
            Designed &amp; Developed by{" "}
            <a
              href="https://rakshard.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors">
              Raksha R.D
            </a>
          </p>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-start items-center gap-6 md:gap-10">

          <p className="text-[#8B92A5] text-sm font-medium">
            © 2026 NextGen2AI. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
