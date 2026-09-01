export interface Industry {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const industriesData: Industry[] = [
  {
    id: "healthcare",
    number: "01",
    title: "Healthcare",
    description: "Accelerating patient care and diagnostic accuracy with predictive modeling and secure data handling.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "manufacturing",
    number: "02",
    title: "Manufacturing",
    description: "Optimizing supply chains and automating quality control with advanced computer vision and IoT integrations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "retail",
    number: "03",
    title: "Retail & E-Commerce",
    description: "Personalizing customer experiences and forecasting trends using intelligent recommendation engines.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "education",
    number: "04",
    title: "Education & EdTech",
    description: "Creating adaptive learning environments that scale personalized education globally.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
  }
];
