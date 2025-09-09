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
  "WordPress",
  "PHP",
  "Solidity",
  "Hardhat",
  "Web3.js",
  "Genkit AI"
];

export const projects = [
  {
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-stack e-commerce website with features like product catalog, shopping cart, user authentication, and order management.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "ecommerce website",
    link: "#",
    type: "Full Stack",
    longDescription: "This project is a comprehensive e-commerce solution built with the MERN stack and Next.js. It features a fully functional product catalog, a seamless shopping cart experience, and secure user authentication using JWT. The backend is powered by Node.js and Express, connected to a MongoDB database for efficient data management. The frontend is a responsive and interactive user interface crafted with React and styled with Tailwind CSS."
  },
  {
    title: "Real-time Chat App",
    slug: "real-time-chat-app",
    description: "A web application for real-time communication using WebSockets, with private and group chat functionalities.",
    technologies: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "chat application",
    link: "#",
    type: "Full Stack",
    longDescription: "This chat application facilitates real-time communication through WebSockets. Built with Node.js, Express, and Socket.io on the backend, it supports both private one-on-one messaging and group chats. User data and chat histories are stored in MongoDB. The frontend is a dynamic single-page application built with React, providing a smooth and engaging user experience."
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "This very portfolio, built to showcase my skills and projects in an interactive way.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "portfolio design",
    link: "/",
    type: "Frontend",
    longDescription: "My personal portfolio is a modern web application built with Next.js and TypeScript, designed to showcase my expertise and projects. It features a sleek, responsive design styled with Tailwind CSS and a customizable theme switcher. A key feature is the integration of Genkit AI to power dynamic functionalities, demonstrating my ability to work with cutting-edge technologies."
  },
  {
    title: "Task Management Tool",
    slug: "task-management-tool",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "TypeScript", "tRPC", "MySQL"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "task management",
    link: "#",
    type: "Full Stack",
    longDescription: "This task management tool is designed to improve productivity and team collaboration. It features a Kanban-style board with drag-and-drop functionality for easy task organization. The application is built with a type-safe stack using React, TypeScript, and tRPC for end-to-end type safety. A MySQL database stores all task and user data, ensuring reliability and scalability."
  },
  {
    title: "WordPress Blog Site",
    slug: "wordpress-blog-site",
    description: "A freelance project for a client, developing a custom WordPress theme and plugins for a business blog.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "wordpress blog",
    link: "#",
    type: "CMS",
    longDescription: "For this freelance project, I developed a custom WordPress solution for a client's business blog. This involved creating a bespoke theme from scratch to match their branding and developing custom plugins to add unique functionalities. The project showcases my skills in PHP, MySQL, and JavaScript within the WordPress ecosystem, delivering a high-quality, easy-to-manage content platform."
  },
  {
    title: "Web3 NFT Marketplace",
    slug: "web3-nft-marketplace",
    description: "A decentralized application for minting and trading NFTs on the Ethereum blockchain.",
    technologies: ["React", "Solidity", "Hardhat", "Web3.js"],
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "NFT marketplace",
    link: "#",
    type: "Web3",
    longDescription: "This project is a decentralized NFT marketplace built on the Ethereum blockchain. It allows users to mint their own NFTs and trade them in a secure, peer-to-peer environment. The smart contracts are written in Solidity and tested with Hardhat. The frontend is a React application that interacts with the blockchain using Web3.js, providing an intuitive interface for users to manage their digital assets."
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
    slug: "mastering-nextjs-app-router",
    description: "A deep dive into the Next.js App Router, covering server components, layouts, and data fetching strategies.",
    link: "#",
    content: [
        {
          title: "Introduction to the App Router",
          content: "The Next.js App Router, introduced in version 13, is a paradigm shift from the pages directory. It enables more flexible layouts, server-side rendering by default with React Server Components, and improved data fetching patterns. This guide will walk you through the core concepts."
        },
        {
          title: "File-based Routing",
          content: "In the App Router, every folder is a route segment. A `page.tsx` file makes a route segment publicly accessible. For example, `app/dashboard/settings/page.tsx` corresponds to the `/dashboard/settings` URL path. You can create dynamic segments by naming folders with square brackets, like `app/blog/[slug]/page.tsx`."
        },
        {
          title: "Layouts and Templates",
          content: "Layouts are files that share UI between multiple pages. A layout can be defined in a `layout.tsx` file and will wrap all child segments. This is perfect for shared elements like headers, footers, and sidebars. Templates are similar but re-render on every navigation, making them suitable for animations or effects that need to run on page changes."
        },
        {
          title: "Server Components",
          content: "By default, all components inside the `app` directory are React Server Components (RSCs). This means they render on the server and send minimal JavaScript to the client, leading to faster initial page loads. You can fetch data directly within Server Components using `async/await`. To use client-side interactivity like hooks (`useState`, `useEffect`), you must opt-in by adding the `'use client'` directive at the top of the file."
        }
      ]
  },
  {
    title: "Efficient State Management in React",
    slug: "efficient-state-management-in-react",
    description: "Comparing different state management libraries like Redux, Zustand, and React Context for large-scale applications.",
    link: "#",
    content: [
      {
        title: "The Need for State Management",
        content: "As React applications grow, managing state becomes complex. 'Prop drilling'—passing props down through many levels of components—can become cumbersome. State management libraries provide centralized and predictable ways to handle your application's state."
      },
      {
        title: "React Context API",
        content: "The built-in Context API is a great starting point for state management. It allows you to share state across the component tree without prop drilling. It's ideal for low-frequency updates, such as theme information or user authentication status. However, it can cause performance issues in large apps with frequent updates, as all consumers re-render when the context value changes."
      },
      {
        title: "Zustand: Simple & Unopinionated",
        content: "Zustand is a small, fast, and scalable state management solution. It's often praised for its simplicity and minimal boilerplate. You create a 'store' which is essentially a hook, and components can subscribe to only the parts of the state they need, avoiding unnecessary re-renders. It's a great lightweight alternative to Redux."
      },
      {
        title: "Redux Toolkit: The Standard",
        content: "Redux has long been the standard for large-scale React applications. Redux Toolkit (RTK) is the official, opinionated way to write Redux logic. It simplifies store setup, reduces boilerplate, and includes powerful tools like Immer for immutable updates and Redux Thunk for async logic. RTK is robust and provides excellent developer tools, making it a solid choice for complex applications."
      }
    ]
  },
  {
    title: "Building Secure APIs with Node.js",
    slug: "building-secure-apis-with-nodejs",
    description: "A guide to securing your Express.js APIs using Passport.js, JWT, and other best practices.",
    link: "#",
    content: [
      {
        title: "Why API Security Matters",
        content: "APIs are the backbone of modern applications, and they are a primary target for attackers. Securing your API protects sensitive data, prevents unauthorized access, and ensures the integrity of your application. Key areas to focus on include authentication, authorization, data validation, and rate limiting."
      },
      {
        title: "Authentication with Passport.js",
        content: "Passport.js is a flexible and modular authentication middleware for Node.js. It supports various 'strategies' for different authentication mechanisms, such as username/password, OAuth (e.g., Google, GitHub), and JSON Web Tokens (JWT). A common approach is using a 'local' strategy for login and then issuing a JWT for subsequent requests."
      },
      {
        title: "Using JSON Web Tokens (JWT)",
        content: "JWT is a compact, URL-safe means of representing claims to be transferred between two parties. After a user logs in, the server creates a JWT containing user information (like a user ID) and signs it with a secret key. The client then sends this token in the `Authorization` header of every request. The server can verify the token's signature to authenticate the user without needing to query the database every time."
      },
      {
        title: "Essential Security Best Practices",
        content: "Beyond authentication, implement these practices: **Use HTTPS** to encrypt data in transit. **Validate and sanitize all user input** to prevent injection attacks (e.g., using `joi` or `express-validator`). **Implement rate limiting** to prevent brute-force attacks. **Use a security linter** like `eslint-plugin-security`. **Keep your dependencies updated** to patch known vulnerabilities."
      }
    ]
  },
  {
    title: "Getting Started with tRPC",
    slug: "getting-started-with-trpc",
    description: "Learn how to build end-to-end typesafe APIs with tRPC, making your full-stack TypeScript development a breeze.",
    link: "#",
    content: [
      {
        title: "What is tRPC?",
        content: "tRPC stands for TypeScript Remote Procedure Call. It allows you to create fully typesafe APIs without needing to generate schemas or code. Your API becomes a single object on the server, and you can call its procedures from the client with full type-safety and autocompletion, as if you were calling a local function. This eliminates the need for tools like GraphQL code generators or OpenAPI specs for internal APIs."
      },
      {
        title: "Setting up the Backend",
        content: "On the backend, you define a 'router' using tRPC. This router is where you create your API procedures. Procedures can be queries (for fetching data) or mutations (for creating, updating, or deleting data). You can use Zod to define the input schemas for your procedures, providing automatic validation and type inference."
      },
      {
        title: "Connecting the Frontend",
        content: "On the frontend, you create a tRPC client and provide it with the *type* of your backend router. You don't import the server code itself. This type information is all tRPC needs to provide a fully typed client. You can then use hooks (similar to React Query) like `api.post.all.useQuery()` to call your backend procedures with full autocompletion and type inference for both inputs and outputs."
      },
      {
        title: "The Benefits",
        content: "The main benefit of tRPC is the incredible developer experience. You can refactor your API on the server, and TypeScript will immediately tell you everywhere on the client that needs to be updated. It simplifies your codebase, eliminates a class of bugs related to API contract mismatches, and makes full-stack TypeScript development faster and more enjoyable."
      }
    ]
  }
];

export const blogs = [
  {
    title: "The Rise of AI in Web Development",
    slug: "rise-of-ai-in-web-development",
    description: "Exploring how AI tools like GitHub Copilot and Genkit are changing the landscape of software development.",
    link: "#",
    date: "2024-07-15",
    content: `
AI is rapidly transforming the field of web development. Tools that were once science fiction are now integrated directly into our code editors, streamlining workflows and boosting productivity.

### Code Assistants

Platforms like **GitHub Copilot** and **Tabnine** have become incredibly popular. They provide intelligent code suggestions, complete entire functions, and even help debug issues by analyzing the context of your code. This allows developers to focus more on the logic and architecture rather than boilerplate.

### Generative AI for Prototyping

Beyond code completion, generative AI is making strides in UI/UX prototyping. Services like **Galileo AI** can generate UI designs from simple text prompts, while tools like **v0.dev** by Vercel can create React components based on ShadCN UI and Tailwind CSS. This accelerates the process of turning ideas into interactive prototypes.

### AI-Powered Backends

Frameworks like **Genkit** are making it easier than ever to build AI-powered features into applications. Whether it's creating a chatbot, summarizing text, or analyzing images, these tools provide a structured way to interact with large language models (LLMs) and build complex, agentic behaviors. As these tools mature, we can expect to see even more sophisticated AI features become standard in web applications.
    `
  },
  {
    title: "Why TypeScript is a Must-Have in 2024",
    slug: "why-typescript-is-a-must-have",
    description: "An overview of the benefits of using TypeScript for building robust and maintainable applications.",
    link: "#",
    date: "2024-06-28",
    content: `
If you're still writing plain JavaScript in 2024, it's time to seriously consider making the switch to TypeScript. What started as a niche superset of JavaScript has now become an industry standard for building scalable and maintainable web applications.

### Catch Errors Early

The most immediate benefit of TypeScript is static type checking. It catches a whole class of errors during development that you would otherwise only discover at runtime. Typos, incorrect function arguments, and null/undefined errors are flagged in your editor before you even save the file. This leads to more robust code and fewer bugs in production.

### Improved Developer Experience

TypeScript's integration with modern code editors is a game-changer. You get intelligent autocompletion, refactoring tools, and inline documentation that make development faster and more efficient. When you're working with a new library or a complex codebase, having types guide you is invaluable.

### Scalability and Maintainability

In large projects with multiple developers, TypeScript is essential. It serves as a form of documentation, making the code easier to read and understand. When you need to refactor a piece of code, types give you the confidence that you're not breaking something elsewhere in the application. This makes a huge difference in the long-term health and maintainability of a project.
    `
  },
  {
    title: "My Experience as a Freelance Developer",
    slug: "my-experience-as-a-freelance-developer",
    description: "Sharing insights and tips from my journey as a freelance MERN stack developer.",
    link: "#",
    date: "2024-05-10",
    content: `
Embarking on a freelance career can be both exciting and daunting. After a few years of navigating this path as a MERN stack developer, I've gathered some insights that might help others considering the leap.

### Finding Your Niche

The world of web development is vast. While it's tempting to be a jack-of-all-trades, specializing can make you more marketable. I chose to focus on the MERN stack (MongoDB, Express, React, Node.js) because it's a popular and powerful combination for building modern web applications. This focus has allowed me to build deep expertise and attract clients looking for that specific skill set.

### Communication is Key

Technical skills are only half the battle. As a freelancer, you are also a project manager, a salesperson, and a consultant. Clear, consistent, and proactive communication is crucial. Set clear expectations from the start, provide regular updates, and don't be afraid to ask questions. A happy client is one who feels informed and involved in the process.

### Never Stop Learning

The tech landscape is constantly evolving. What's cutting-edge today might be outdated tomorrow. Dedicate time each week to learning new technologies, improving your existing skills, and staying on top of industry trends. This not only makes you a better developer but also increases your value to potential clients.
`
  }
];
