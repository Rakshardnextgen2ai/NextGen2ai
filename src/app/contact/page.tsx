"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { Clock, MapPin, Phone, Mail, Send } from "lucide-react";
import Image from "next/image";
import contactUs from "@/assets/contactUs.png";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Contact Message from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:office@nextgen2ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Navbar />
      <FloatingContact />
      <main className="flex-1 bg-[#010103] pt-24">

        {/* Hero Section */}
        <section className="relative w-full border-b border-white/5">
          <Image
            src={contactUs}
            alt="About Us"
            className="w-full h-auto object-contain"
            priority
          />
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>

              <div className="flex items-center gap-2 text-emerald-400 mb-2 font-medium">
                <Clock size={18} />
                <span>We usually respond within 24 hours</span>
              </div>
              <p className="text-[white] mb-10">
                Fill up the form below to send us a message.
              </p>

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column: Location & Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold text-white mb-10">Our Location</h2>

              {/* Location Card Details */}
              <div className="bg-[#0A0512] border border-white/10 rounded-2xl p-6 mb-8 flex flex-col gap-6 shadow-xl">
                <div className="flex items-start gap-4">


                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-[white] text-sm">+91 9538431415</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-[white] text-sm">office@nextgen2ai.com</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7776.491138352166!2d77.7166!3d12.956132!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzIyLjEiTiA3N8KwNDInNTkuOCJF!5e0!3m2!1sen!2sus!4v1787571958399!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 group-hover:filter-none transition-all duration-500"
                ></iframe>
              </div>

            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
