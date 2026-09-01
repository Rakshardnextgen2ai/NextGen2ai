export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    id: "faq-1",
    question: "What services does NextGen2AI provide?",
    answer: "We provide end-to-end digital product development and AI integration services. This includes custom software development, machine learning models, intelligent automation, data engineering, and enterprise cloud architecture."
  },
  {
    id: "faq-2",
    question: "Do you provide customized AI solutions?",
    answer: "Yes, every AI solution we build is tailored to the specific business context, operational challenges, and data infrastructure of our clients. We do not believe in one-size-fits-all AI."
  },
  {
    id: "faq-3",
    question: "How secure are your solutions?",
    answer: "Security is built into our foundational architecture. We implement enterprise-grade encryption, role-based access control, comprehensive threat modeling, and adhere to industry compliance standards like SOC2, GDPR, and HIPAA where applicable."
  },
  {
    id: "faq-4",
    question: "How can we start a project?",
    answer: "Starting a project begins with a discovery session where we learn about your business goals and technical challenges. From there, we propose a strategic roadmap, architecture design, and implementation plan."
  }
];
