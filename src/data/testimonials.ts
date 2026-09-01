export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "The mobile app developed by NextGen2AI exceeded our expectations. Excellent support!",
    name: "Jane Smith",
    role: "Product Manager",
    company: "AppCorp",
    rating: 5,
  },
  {
    id: "t2",
    quote: "Their understanding of artificial intelligence and its practical application to our specific industry challenges was unparalleled.",
    name: "Elena Rodriguez",
    role: "VP of Product",
    company: "HealthTech Innovations",
    rating: 5,
  },
  {
    id: "t3",
    quote: "Working with NextGen2AI transformed how we approach data. We went from reactive reporting to proactive, automated decision making.",
    name: "Marcus Johnson",
    role: "CTO",
    company: "FinServe Partners",
    rating: 5,
  }
];
