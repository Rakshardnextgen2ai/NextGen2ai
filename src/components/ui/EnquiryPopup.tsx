"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

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

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Enquiry from ${formData.name || 'a visitor'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:office@nextgen2ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#DFE9F5] rounded-xl shadow-2xl p-6 md:p-8 overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <h2 className="text-2xl md:text-[28px] font-bold text-[#333333] text-center mb-6">
              Quick Enquiry
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#3B5BDB] outline-none text-gray-800 placeholder-gray-500 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#3B5BDB] outline-none text-gray-800 placeholder-gray-500 shadow-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#3B5BDB] outline-none text-gray-800 placeholder-gray-500 shadow-sm"
              />

              <div className="relative">
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#3B5BDB] outline-none text-gray-600 appearance-none bg-white shadow-sm cursor-pointer"
                >
                  <option value="" disabled>Select course</option>
                  <option value="Artificial Intelligence">Web Development</option>
                  <option value="Machine Learning">AI & ML </option>
                  <option value="Data Science">Python </option>
                  <option value="Cloud Computing">Mobile App Development </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#3B5BDB] outline-none text-gray-600 appearance-none bg-white shadow-sm cursor-pointer"
                >
                  <option value="" disabled>Select Location</option>
                  <option value="United States">Bangalore</option>
                  <option value="United Kingdom">Hyderabad</option>
                  <option value="India">online</option>

                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>

              <textarea
                placeholder="Message (please don't paste links)"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#3B5BDB] outline-none text-gray-800 placeholder-gray-500 shadow-sm resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-2 bg-[#3355CC] hover:bg-[#2A47AA] text-white font-medium py-3.5 px-4 rounded-lg transition-colors text-lg"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
