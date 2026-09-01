import EnterpriseWorkflow from "@/assets/EnterpriseWorkflow.png";
import ScalableSaaS from "@/assets/ScalableSaaS.png";
import AISecurity from "@/assets/AISecurity.png";
import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technology: string[];
  businessResult: string;
  image: StaticImageData;
}

export const projectsData: Project[] = [
  {
    slug: "enterprise-workflow",
    title: "Enterprise Workflow Automation",
    category: "AI Automation",
    description: "Reduced manual operations by 60% using AI-driven systems.",
    technology: ["Python", "TensorFlow", "React", "AWS"],
    businessResult: "60% reduction in manual operations",
    image: EnterpriseWorkflow,
  },

  {
    slug: "scalable-saas",
    title: "Scalable SaaS Platform",
    category: "Web Platform",
    description: "Built a secure, high-traffic SaaS application.",
    technology: ["Next.js", "Node.js", "PostgreSQL", "OpenAI"],
    businessResult: "Secure & high-traffic ready",
    image: ScalableSaaS,
  },

  {
    slug: "ai-security",
    title: "AI Security Monitoring",
    category: "Data Security",
    description: "Implemented AI threat detection for enterprise data.",
    technology: ["Python", "Cybersecurity", "Google Cloud", "PyTorch"],
    businessResult: "Enterprise data secured",
    image: AISecurity,
  },
];