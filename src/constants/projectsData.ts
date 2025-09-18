export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management.",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    features: [
      "User authentication & authorization",
      "Shopping cart & checkout system",
      "Payment processing with Stripe",
      "Admin dashboard",
      "Real-time inventory tracking",
    ],
    liveUrl: "https://example-store.com",
    githubUrl: "https://github.com/username/ecommerce",
    image: "🛒",
    status: "completed",
  },
  {
    id: "proj2",
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
    category: "frontend",
    technologies: ["Vue.js", "TypeScript", "Socket.io", "Tailwind"],
    features: [
      "Drag & drop task boards",
      "Real-time collaboration",
      "Team messaging",
      "Progress analytics",
      "File attachments",
    ],
    liveUrl: "https://taskmaster-app.com",
    githubUrl: "https://github.com/username/taskmaster",
    image: "📋",
    status: "completed",
  },
  {
    id: "proj3",
    title: "Weather Forecast API",
    description:
      "RESTful API providing detailed weather forecasts with caching, rate limiting, and global coverage.",
    category: "backend",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    features: [
      "Global weather data",
      "Caching for performance",
      "Rate limiting",
      "Historical data",
      "Mobile-optimized responses",
    ],
    githubUrl: "https://github.com/username/weather-api",
    image: "🌤️",
    status: "completed",
  },
  {
    id: "proj4",
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot with natural language processing and custom knowledge base integration.",
    category: "ai",
    technologies: ["Python", "TensorFlow", "React", "WebSocket", "OpenAI"],
    features: [
      "Natural language understanding",
      "Custom knowledge base",
      "Multi-language support",
      "Voice interaction",
      "Analytics dashboard",
    ],
    liveUrl: "https://ai-assistant.com",
    image: "🤖",
    status: "in-progress",
  },
  {
    id: "proj5",
    title: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency portfolio tracking with alerts, analytics, and trading insights.",
    category: "frontend",
    technologies: ["React", "Chart.js", "WebSocket", "Material-UI"],
    features: [
      "Real-time price tracking",
      "Portfolio analytics",
      "Price alerts",
      "Trading history",
      "Market insights",
    ],
    image: "₿",
    status: "planned",
  },
  {
    id: "proj6",
    title: "Social Media Dashboard",
    description:
      "Unified dashboard for managing multiple social media accounts with scheduling and analytics.",
    category: "fullstack",
    technologies: ["Next.js", "Prisma", "NextAuth", "Vercel", "APIs"],
    features: [
      "Multi-platform integration",
      "Post scheduling",
      "Analytics & insights",
      "Content calendar",
      "Team collaboration",
    ],
    image: "📱",
    status: "planned",
  },
];

export const categories = [
  { id: "all", label: "ALL" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "ai", label: "AI/ML" },
];
