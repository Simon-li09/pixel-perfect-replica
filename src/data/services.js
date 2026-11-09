import { Code2, Palette, Megaphone, GraduationCap, Wrench, FileText } from "lucide-react";

export const services = [
  { id: "web", icon: Code2, title: "Web & App Development", description: "Fast, modern websites and web apps built to grow your business.", items: ["Business websites", "E-commerce stores", "Landing pages", "Web apps"] },
  { id: "design", icon: Palette, title: "Graphic & Brand Design", description: "Logos, flyers and brand identities that look world-class.", items: ["Logo design", "Flyers & banners", "Brand kits", "Social media graphics"] },
  { id: "marketing", icon: Megaphone, title: "Digital Marketing", description: "Reach more customers with smart social and search campaigns.", items: ["Social media management", "Paid ads", "SEO", "Content strategy"] },
  { id: "training", icon: GraduationCap, title: "Digital Skills Training", description: "Practical, hands-on courses for beginners and professionals.", items: ["Computer basics", "Coding", "Design", "Freelancing"] },
  { id: "support", icon: Wrench, title: "Tech Support & Setup", description: "Device setup, troubleshooting and software installation.", items: ["Laptop & phone repair advice", "Software installs", "Email setup", "Networking"] },
  { id: "docs", icon: FileText, title: "Documents & Online Services", description: "Typing, CV writing, online registrations and printing.", items: ["CV & cover letters", "Typing & formatting", "Online registrations", "Printing & scanning"] },
];
