export interface ServiceCategory {
  title: string;
  services: Service[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const servicesData: ServiceCategory[] = [
  {
    title: "AI & Development",
    services: [
      {
        id: "web-development",
        title: "Web Development",
        description: "We build fast, secure, and scalable web applications using modern technologies.",
        icon: "Code",
        href: "/services/web-development",
      },
      {
        id: "mobile-development",
        title: "Mobile Development",
        description: "Android & iOS apps with AI integration for intelligent solutions.",
        icon: "Smartphone",
        href: "/services/mobile-development",
      },
      {
        id: "awesome-design",
        title: "Awesome Design",
        description: "Intuitive, creative designs powered by AI technologies for a stunning UX.",
        icon: "Palette",
        href: "/services/design",
      },
      {
        id: "frontend-works",
        title: "Frontend Works",
        description: "Interactive, responsive, and AI-enhanced web interfaces for superior UX.",
        icon: "Monitor",
        href: "/services/frontend",
      },
    ],
  },
  {
    title: "Cloud & Security",
    services: [
      {
        id: "python-apps",
        title: "Python Apps",
        description: "Python-based applications integrated with AI for automation and analysis.",
        icon: "Terminal",
        href: "/services/python",
      },
      {
        id: "data-protection",
        title: "Data Protection",
        description: "Advanced AI-powered security to protect your sensitive data and privacy.",
        icon: "Shield",
        href: "/services/data-protection",
      },
      {
        id: "fully-responsive",
        title: "Fully Responsive",
        description: "Websites and apps that adapt perfectly to all devices and screen sizes.",
        icon: "Laptop",
        href: "/services/responsive",
      },
      {
        id: "web-apps",
        title: "Web Apps",
        description: "Dynamic AI-powered web applications delivering personalized experiences.",
        icon: "Globe",
        href: "/services/web-apps",
      },
    ],
  }
];
