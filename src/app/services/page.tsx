"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import {
  Palette,
  Monitor,
  Terminal,
  Shield,
  Laptop,
  Globe
} from "lucide-react";
import Image from "next/image";
import servicesBg from "@/assets/Services.png";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      desc: "Web Design for NextGen2AI is a course designed to equip designers and developers with the skills to create AI-integrated websites. Through hands-on projects and case studies, participants will learn to design interfaces optimized for AI features, ensuring seamless integration and personalized user experiences."
    },
    {
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
      desc: "Web Development for NextGen2AI is a course designed to equip designers and developers with the skills to create AI-integrated websites. Through hands-on projects and case studies, participants will learn to design interfaces optimized for AI features, ensuring seamless integration and personalized user experiences."
    },
    {
      title: "Mobile Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      desc: "Android Development for NextGen2AI empowers participants to infuse artificial intelligence into Android apps. Through this course, developers master the integration of machine learning, natural language processing, and computer vision, enabling the creation of cutting-edge, intelligent applications."
    }
  ];

  const features = [
    {
      title: "Awesome Design",
      icon: Palette,
      color: "text-purple-400",
      desc: "Awesome Design by NextGen2AI encapsulates innovative design principles enhanced by advanced AI technologies. This approach integrates intuitive interfaces, personalized experiences, and streamlined functionalities, setting a new standard for excellence in design."
    },
    {
      title: "FrontEnd Works",
      icon: Monitor,
      color: "text-blue-400",
      desc: "Frontend Works by NextGen2AI revolutionizes web interfaces with advanced AI-driven features. Through this approach, frontend development achieves unparalleled interactivity, responsiveness, and personalization, setting new benchmarks for user engagement and satisfaction."
    },
    {
      title: "Python Apps",
      icon: Terminal,
      color: "text-emerald-400",
      desc: "Python Apps by NextGen2AI signifies the fusion of Python development with cutting-edge AI capabilities. These apps leverage machine learning, natural language processing, and other AI techniques to deliver intelligent solutions for diverse tasks, from data analysis to automation, pushing the boundaries of innovation."
    },
    {
      title: "Data Protection",
      icon: Shield,
      color: "text-[#84CC16]",
      desc: "Data Protection by NextGen2AI ensures state-of-the-art security measures powered by advanced AI technologies. Through robust encryption, anomaly detection, and predictive analytics, NextGen2AI safeguards sensitive data, mitigates risks, and ensures compliance with privacy regulations, setting a new standard for data protection in the digital age."
    },
    {
      title: "Fully Responsive",
      icon: Laptop,
      color: "text-cyan-400",
      desc: "Fully Responsive by NextGen2AI signifies websites and applications that seamlessly adapt to various devices and screen sizes, powered by advanced AI algorithms. This ensures optimal user experiences across platforms, enhancing accessibility and engagement while setting new standards for responsive design in the digital landscape."
    },
    {
      title: "Web Apps",
      icon: Globe,
      color: "text-pink-400",
      desc: "Web Apps by NextGen2AI are intelligent, dynamic applications infused with advanced AI functionalities. These apps leverage machine learning, natural language processing, and other AI techniques to deliver personalized experiences, automate processes, and drive innovation in web development, setting new standards for functionality and user engagement."
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
            src={servicesBg}
            alt="Services"
            className="w-full h-auto object-contain"
            priority
          />
        </section>

        {/* Main Services (3 Cards) */}
        <section className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A0512] rounded-2xl overflow-hidden border border-white/10 group hover:border-blue-500/50 transition-colors flex flex-col"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0512] to-transparent opacity-80" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[white] text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6 Features Grid */}
        <section className="py-20 bg-[#050505] px-6 md:px-12 xl:px-24 border-t border-white/5 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-lg`}>
                      <Icon className={feature.color} size={28} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {feature.title}
                    </h4>
                    <p className="text-[white] text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
