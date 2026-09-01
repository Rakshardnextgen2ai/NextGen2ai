export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "Vishal B Pandey",
    name: "VishalBPandey",
    role: "Senior project manager",
    image: "/assets/VishalBPandey.png",
    socials: { linkedin: "#" }
  },
  {
    id: "kumar-abhishek",
    name: "KUMAR ABHISHEK",
    role: "Software Developer",
    image: "/assets/KumarAbhishek.png",
    socials: { linkedin: "#" }
  },
  {
    id: "RiddhiSirsikar",
    name: "RIDDHI SIRSIKAR",
    role: "Full Stack Developer",
    image: "/assets/RiddhiSirsikar.png",
    socials: { linkedin: "#" }
  },

  {
    id: "kavin-kumar",
    name: "KAVIN KUMAR N",
    role: "Data Analyst",
    image: "/assets/kavinkumar.png",
    socials: { linkedin: "#" }
  },
  {
    id: "vijay",
    name: "VIJAY",
    role: "Data Analyst",
    image: "/assets/vijay.png",
    socials: { linkedin: "#" }
  },
  {
    id: "JEEVAN C",
    name: "JEEVAN C",
    role: "Full Stack developer",
    image: "/assets/JEEVANC.png",
    socials: { linkedin: "#" }
  },
  {
    id: "Suchithracl",
    name: "Suchithra cl",
    role: "Data Analyst",
    image: "/assets/suchithracl.png",
    socials: { linkedin: "#" }
  },
  {
    id: "SwathiNV",
    name: "SWATHI NV",
    role: "Data Analyst",
    image: "/assets/SwathiNV.png",
    socials: { linkedin: "#" }
  }
];
