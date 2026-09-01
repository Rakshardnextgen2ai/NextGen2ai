"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, X, Send, Bot } from "lucide-react";

export function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I am Nexora AI, your virtual assistant for NextGen2AI. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const lowerInput = userText.toLowerCase();

    // Add user message
    setMessages(prev => [...prev, { text: userText, isBot: false }]);
    setInput("");

    // Determine dynamic bot reply
    let botResponse = "Thanks for reaching out! One of our AI specialists will be with you shortly. For immediate assistance, feel free to use our WhatsApp or Phone contact options below.";

    if (lowerInput.includes("pricing") || lowerInput.includes("cost") || lowerInput.includes("price") || lowerInput.includes("plans") || lowerInput.includes("buy")) {
      botResponse = "Our pricing is divided into Basic (₹1500/yr), Standard (₹2000/yr), Advanced (₹2500/yr), and Mighty (₹3000/yr). We also offer monthly options! Check the Pricing page for full details.";
    } else if (lowerInput.includes("service") || lowerInput.includes("what do you do") || lowerInput.includes("build") || lowerInput.includes("offer")) {
      botResponse = "We offer Web Development, Mobile App Development, UI/UX Design, Cloud Computing, and cutting-edge Artificial Intelligence solutions to transform your business.";
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi ") || lowerInput === "hi" || lowerInput.includes("hey") || lowerInput.includes("nexora")) {
      botResponse = "Hello! I am Nexora AI. How can I assist you with your digital transformation today?";
    } else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("call") || lowerInput.includes("number")) {
      botResponse = "You can call or WhatsApp us instantly at +91 9538431415, or email us at office@nextgen2ai.com.";
    } else if (lowerInput.includes("location") || lowerInput.includes("where") || lowerInput.includes("address") || lowerInput.includes("office")) {
      botResponse = "Our headquarters is located at No-10 Aviansh Building Kundalahalli Gate, Vartur Marathahalli main road, Bangalore-560037, India.";
    } else if (lowerInput.includes("portfolio") || lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("case study")) {
      botResponse = "We've built CRM applications, Android Apps, AI Core systems, and more. You can view our full gallery on the Portfolio page!";
    } else if (lowerInput.includes("team") || lowerInput.includes("who are you") || lowerInput.includes("staff") || lowerInput.includes("founder")) {
      botResponse = "Our expert team consists of industry veterans like John Doe (CEO), Jane Smith (CTO), Mike Johnson (Lead Designer), and others dedicated to building the intelligent digital future.";
    } else if (lowerInput.includes("about") || lowerInput.includes("mission") || lowerInput.includes("vision") || lowerInput.includes("why")) {
      botResponse = "NextGen2AI is dedicated to building the intelligent digital future. We combine creativity with deep technical expertise to secure and scale your business.";
    } else if (lowerInput.includes("ai") || lowerInput.includes("artificial intelligence") || lowerInput.includes("machine learning")) {
      botResponse = "AI is at the core of what we do! From automated workflows to advanced data analytics, we integrate smart AI solutions directly into your applications.";
    } else {
      botResponse = "That's a great question! While I'm Nexora AI, our human specialists are also ready to assist. Please call us at +91 9538431415 or leave a message on our Contact page!";
    }

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-[#0A0512] border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.15)] w-[320px] sm:w-[350px] mb-2 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold leading-tight">Nexora AI</h3>
                  <p className="text-white/80 text-xs">Intelligent Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-[300px] overflow-y-auto p-4 flex flex-col gap-3 bg-[#010103]">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] rounded-xl p-3 text-sm ${
                    msg.isBot 
                      ? "bg-white/10 text-white self-start rounded-tl-none border border-white/5" 
                      : "bg-emerald-500 text-white self-end rounded-tr-none shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-[#0A0512] border-t border-white/10 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
              />
              <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 p-2 rounded-full text-white shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4 items-center">
        {/* Chat Bot Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/30 group relative z-50 transition-colors"
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-pulse" />}
        </motion.button>

        {/* Call Button */}
        <motion.a
          href="tel:+919538431415"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30 group transition-colors"
        >
          <Phone size={24} className="group-hover:animate-pulse" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919538431415"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE57] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] border border-green-400/30 group relative transition-colors"
        >
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="group-hover:animate-pulse"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
