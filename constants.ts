
import { Project } from './types';

export const PERSONAL_INFO = {
  name: "Sahil Aslam",
  identity: "Software & Website Developer",
  specialization: [
    "MERN Developer",
    "Specialist in Frontend Development"
  ],
  contact: {
    email: "sahilaslam754@gmail.com",
    phone: "+91 62058 35321",
    location: "India",
    socials: {
      linkedin: "https://linkedin.com/in/sahilaslam",
      github: "https://github.com/sahilaslam754",
      twitter: "https://twitter.com/sahilaslam"
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Client Appointment Booking System",
    category: "Full Stack Application",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Business Website + Admin CMS",
    category: "Web Platform & Dashboard",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Feedback & Review System",
    category: "Data Management",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Authentication System",
    category: "Security & UI Design",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Premium UI Experience",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    title: "Learning / Progress Tracker",
    category: "Educational App",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 7,
    title: "Startup Landing Page",
    category: "Conversion Focused",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200"
  }
];
