"use client";

import { useState, useEffect } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    location: "",
    message: ""
  });

  useEffect(() => {
    // Show popup shortly after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-enquiry-modal", handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-enquiry-modal", handleOpen);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Enquiry from ${formData.name || "a visitor"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: +91 ${formData.phone}\nCourse: ${formData.course}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`;

    // Open mail client
    window.location.href = `mailto:office@nextgen2ai.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        location: "",
        message: ""
      });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-[470px] bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl p-6 sm:p-8 overflow-hidden z-10 border border-slate-100 my-auto text-left"
          >
            {/* Soft Organic Pastel Blue Wave in Top-Right Corner */}
            <svg
              viewBox="0 0 220 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 w-52 h-44 pointer-events-none z-0 overflow-hidden rounded-tr-[28px] sm:rounded-tr-[32px]"
            >
              <path
                d="M45 0C80 0 115 20 135 55C155 90 175 140 220 155V0H45Z"
                fill="url(#topRightFluidGradient)"
              />
              <defs>
                <linearGradient
                  id="topRightFluidGradient"
                  x1="220"
                  y1="0"
                  x2="70"
                  y2="140"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#DBEAFE" stopOpacity="0.8" />
                  <stop offset="0.6" stopColor="#EBF1FE" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#F8FAFC" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/90 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <X size={19} strokeWidth={2.4} />
            </button>

            {/* Header Section */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              {/* Left Gradient Icon with Spark Rays */}
              <div className="relative shrink-0">
                {/* 3 Radiating Sky-Blue Rays at Top-Right */}
                <div className="absolute -top-3 -right-3 pointer-events-none">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  >
                    {/* Ray 1: Top vertical ray */}
                    <line x1="6" y1="3" x2="8" y2="8" />
                    {/* Ray 2: Diagonal ray */}
                    <line x1="17" y1="5" x2="13" y2="10" />
                    {/* Ray 3: Right ray */}
                    <line x1="22" y1="14" x2="16" y2="14" />
                  </svg>
                </div>

                {/* Circle Icon Badge */}
                <div className="w-[58px] h-[58px] rounded-full bg-gradient-to-tr from-[#6366F1] via-[#4F46E5] to-[#38BDF8] flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-[9px] ring-[#EEF2FF]">
                  <svg
                    className="w-7 h-7 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    <circle cx="8.5" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
                    <circle cx="12" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
                    <circle cx="15.5" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </div>

              {/* Title, Accent Pill & Subtitle */}
              <div className="flex flex-col">
                <h2 className="text-[26px] sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Quick Enquiry
                </h2>
                <div className="h-[4px] w-14 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full mt-1 mb-1.5" />
                <p className="text-[13.5px] text-slate-500 font-normal leading-snug">
                  Fill in your details and we&apos;ll get back to you soon.
                </p>
              </div>
            </div>

            {/* Form Content */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-xs">
                  <CheckCircle2 size={36} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Thank you for reaching out. We will get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-semibold text-slate-900">
                    Name <span className="text-[#EF4444] font-bold">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] h-12">
                    <span className="pl-4 text-slate-400 shrink-0">
                      <User size={19} strokeWidth={1.75} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                      className="w-full h-full py-3 pl-3 pr-4 text-[14px] text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-semibold text-slate-900">
                    Email <span className="text-[#EF4444] font-bold">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] h-12">
                    <span className="pl-4 text-slate-400 shrink-0">
                      <Mail size={19} strokeWidth={1.75} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      required
                      className="w-full h-full py-3 pl-3 pr-4 text-[14px] text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-semibold text-slate-900">
                    Phone Number <span className="text-[#EF4444] font-bold">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] h-12">
                    <div className="flex items-center gap-2 pl-4 shrink-0 select-none">
                      <span className="text-slate-500">
                        <Phone size={18} strokeWidth={1.75} />
                      </span>
                      <div className="flex items-center gap-1.5 pl-0.5">
                        {/* Indian Flag SVG */}
                        <svg
                          className="w-[20px] h-[14px] rounded-[2px] shadow-xs shrink-0 overflow-hidden border border-slate-200/60"
                          viewBox="0 0 24 16"
                        >
                          <rect width="24" height="5.33" fill="#FF9933" />
                          <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
                          <rect y="10.67" width="24" height="5.33" fill="#138808" />
                          <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.8" />
                        </svg>
                        <span className="text-[13.5px] font-medium text-slate-800">+91</span>
                        <ChevronDown size={14} className="text-slate-600" strokeWidth={2.2} />
                      </div>
                      <div className="h-5 w-[1px] bg-slate-200 ml-1.5 mr-1" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      required
                      className="w-full h-full py-3 pl-2 pr-4 text-[14px] text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Select Course Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-semibold text-slate-900">
                    Select course <span className="text-[#EF4444] font-bold">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] h-12">
                    <span className="pl-4 pointer-events-none text-[#2563EB] shrink-0">
                      <GraduationCap size={20} strokeWidth={2} />
                    </span>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      required
                      className={`w-full h-full pl-3 pr-10 text-[14px] bg-transparent outline-none cursor-pointer appearance-none ${
                        formData.course ? "text-slate-800 font-medium" : "text-slate-400"
                      }`}
                    >
                      <option value="" disabled>Choose a course</option>
                      <option value="Artificial Intelligence & ML">Artificial Intelligence & ML</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Python Full Stack">Python Full Stack</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Data Science & Analytics">Data Science & Analytics</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="UI / UX Design">UI / UX Design</option>
                    </select>
                    <span className="absolute right-4 pointer-events-none text-slate-700">
                      <ChevronDown size={18} strokeWidth={2.2} />
                    </span>
                  </div>
                </div>

                {/* Select Location Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-semibold text-slate-900">
                    Select Location <span className="text-[#EF4444] font-bold">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] h-12">
                    <span className="pl-4 pointer-events-none text-[#2563EB] shrink-0">
                      <MapPin size={20} strokeWidth={2} />
                    </span>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                      className={`w-full h-full pl-3 pr-10 text-[14px] bg-transparent outline-none cursor-pointer appearance-none ${
                        formData.location ? "text-slate-800 font-medium" : "text-slate-400"
                      }`}
                    >
                      <option value="" disabled>Choose a location</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Online">Online</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute right-4 pointer-events-none text-slate-700">
                      <ChevronDown size={18} strokeWidth={2.2} />
                    </span>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13.5px] font-semibold text-slate-900">
                    Message (please don&apos;t paste links)
                  </label>
                  <div className="relative rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-3.5">
                    <div className="flex items-start gap-2.5">
                      <span className="text-slate-500 mt-0.5 shrink-0">
                        <MessageSquare size={18} strokeWidth={1.8} />
                      </span>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full text-[14px] text-slate-800 placeholder:text-slate-400 bg-transparent outline-none resize-none min-h-[64px]"
                      />
                    </div>
                    {/* Subtle resize grip decor */}
                    <div className="absolute bottom-2.5 right-2.5 pointer-events-none opacity-35">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="text-slate-500">
                        <circle cx="8" cy="8" r="1" />
                        <circle cx="8" cy="4" r="1" />
                        <circle cx="4" cy="8" r="1" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Enquiry Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#2162F5] via-[#356DF5] to-[#7B4EF6] text-white font-semibold text-[15.5px] sm:text-base flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(37,99,235,0.28)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.38)] hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer group"
                >
                  <span>Submit Enquiry</span>
                  <ArrowRight
                    size={20}
                    strokeWidth={2.2}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
