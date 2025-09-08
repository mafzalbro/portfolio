import type { LucideIcon } from "lucide-react";
import { Home, FolderGit2, History, BookOpen, Rss, Github, Linkedin, Twitter } from "lucide-react";

export const navigationLinks: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Experience", href: "/experience", icon: History },
  { name: "Guides", href: "/guides", icon: BookOpen },
  { name: "Blog", href: "/blog", icon: Rss },
];

export const socialLinks: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "tRPC",
  "Web3",
  "Socket.io",
  "Tailwind CSS",
  "Figma",
  "CI/CD",
  "Passport.js",
  "Swagger",
];

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with features like product catalog, shopping cart, user authentication, and order management.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "ecommerce website",
    link: "#",
    type: "Full Stack",
  },
  {
    title: "Real-time Chat App",
    description: "A web application for real-time communication using WebSockets, with private and group chat functionalities.",
    technologies: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "chat application",
    link: "#",
    type: "Full Stack",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio, built to showcase my skills and projects in an interactive way.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "portfolio design",
    link: "/",
    type: "Frontend",
  },
  {
    title: "Task Management Tool",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "TypeScript", "tRPC", "MySQL"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "task management",
    link: "#",
    type: "Full Stack",
  },
  {
    title: "WordPress Blog Site",
    description: "A freelance project for a client, developing a custom WordPress theme and plugins for a business blog.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "wordpress blog",
    link: "#",
    type: "CMS",
  },
  {
    title: "Web3 NFT Marketplace",
    description: "A decentralized application for minting and trading NFTs on the Ethereum blockchain.",
    technologies: ["React", "Solidity", "Hardhat", "Web3.js"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "NFT marketplace",
    link: "#",
    type: "Web3",
  },
];

export const experience = [
    {
        role: "Volunteer MERN Developer",
        company: "Petinder.online",
        period: "Dec 2023 - Present",
        description: "Contributed to the development of a social platform for pet lovers, focusing on both frontend and backend tasks. Implemented new features, fixed bugs, and improved application performance."
    },
    {
        role: "Freelance Developer",
        company: "ADS Malik UAE",
        period: "2023 - 2024",
        description: "Developed and maintained websites for clients using WordPress and the MERN stack. Handled project requirements from conception to deployment, ensuring client satisfaction."
    },
    {
        role: "Full Stack Developer",
        company: "Final Year Project (FYP)",
        period: "2023 - 2024",
        description: "Led the development of a comprehensive web application as a final year project. Responsible for the entire stack, from database design and API development to frontend implementation."
    },
    {
        role: "Freelance Frontend Developer",
        company: "Various Clients",
        period: "2020 - 2024",
        description: "Worked on various freelance projects, focusing on creating beautiful and responsive user interfaces using React and other modern frontend technologies. Collaborated with designers and clients to bring ideas to life."
    }
];

export const guides = [
  {
    title: "Mastering Next.js App Router",
    description: "A deep dive into the Next.js App Router, covering server components, layouts, and data fetching strategies.",
    link: "#"
  },
  {
    title: "Efficient State Management in React",
    description: "Comparing different state management libraries like Redux, Zustand, and React Context for large-scale applications.",
    link: "#"
  },
  {
    title: "Building Secure APIs with Node.js",
    description: "A guide to securing your Express.js APIs using Passport.js, JWT, and other best practices.",
    link: "#"
  },
  {
    title: "Getting Started with tRPC",
    description: "Learn how to build end-to-end typesafe APIs with tRPC, making your full-stack TypeScript development a breeze.",
    link: "#"
  }
];

export const blogs = [
  {
    title: "The Rise of AI in Web Development",
    description: "Exploring how AI tools like GitHub Copilot and Genkit are changing the landscape of software development.",
    link: "#"
  },
  {
    title: "Why TypeScript is a Must-Have in 2024",
    description: "An overview of the benefits of using TypeScript for building robust and maintainable applications.",
    link: "#"
  },
  {
    title: "My Experience as a Freelance Developer",
    description: "Sharing insights and tips from my journey as a freelance MERN stack developer.",
    link: "#"
  }
];
