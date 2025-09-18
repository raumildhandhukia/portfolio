'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaGithub, FaPlay, FaFilter } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'proj1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management.',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'User authentication & authorization',
        'Shopping cart & checkout system',
        'Payment processing with Stripe',
        'Admin dashboard',
        'Real-time inventory tracking'
      ],
      liveUrl: 'https://example-store.com',
      githubUrl: 'https://github.com/username/ecommerce',
      image: '🛒',
      status: 'completed'
    },
    {
      id: 'proj2',
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
      category: 'frontend',
      technologies: ['Vue.js', 'TypeScript', 'Socket.io', 'Tailwind'],
      features: [
        'Drag & drop task boards',
        'Real-time collaboration',
        'Team messaging',
        'Progress analytics',
        'File attachments'
      ],
      liveUrl: 'https://taskmaster-app.com',
      githubUrl: 'https://github.com/username/taskmaster',
      image: '📋',
      status: 'completed'
    },
    {
      id: 'proj3',
      title: 'Weather Forecast API',
      description: 'RESTful API providing detailed weather forecasts with caching, rate limiting, and global coverage.',
      category: 'backend',
      technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
      features: [
        'Global weather data',
        'Caching for performance',
        'Rate limiting',
        'Historical data',
        'Mobile-optimized responses'
      ],
      githubUrl: 'https://github.com/username/weather-api',
      image: '🌤️',
      status: 'completed'
    },
    {
      id: 'proj4',
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing and custom knowledge base integration.',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket', 'OpenAI'],
      features: [
        'Natural language understanding',
        'Custom knowledge base',
        'Multi-language support',
        'Voice interaction',
        'Analytics dashboard'
      ],
      liveUrl: 'https://ai-assistant.com',
      image: '🤖',
      status: 'in-progress'
    },
    {
      id: 'proj5',
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracking with alerts, analytics, and trading insights.',
      category: 'frontend',
      technologies: ['React', 'Chart.js', 'WebSocket', 'Material-UI'],
      features: [
        'Real-time price tracking',
        'Portfolio analytics',
        'Price alerts',
        'Trading history',
        'Market insights'
      ],
      image: '₿',
      status: 'planned'
    },
    {
      id: 'proj6',
      title: 'Social Media Dashboard',
      description: 'Unified dashboard for managing multiple social media accounts with scheduling and analytics.',
      category: 'fullstack',
      technologies: ['Next.js', 'Prisma', 'NextAuth', 'Vercel', 'APIs'],
      features: [
        'Multi-platform integration',
        'Post scheduling',
        'Analytics & insights',
        'Content calendar',
        'Team collaboration'
      ],
      image: '📱',
      status: 'planned'
    }
  ];

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'fullstack', label: 'FULL STACK' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'planned': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📅';
      default: return '❓';
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="w-full px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaCode className="text-3xl text-green-400" />
            <h2 className="text-4xl font-bold retro-glow">PROJECTS</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            A collection of my favorite projects showcasing different technologies and skills
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="nes-container is-dark">
            <div className="flex items-center gap-2 mb-4">
              <FaFilter className="text-blue-400" />
              <span className="text-sm font-bold">FILTER BY CATEGORY</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.id)}
                  className={`nes-btn ${
                    filter === category.id ? 'is-primary' : 'is-dark'
                  } !text-xs !px-3 !py-2`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="nes-container is-dark h-full flex flex-col"
            >
              {/* Project Header */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{project.image}</div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`text-xs ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)} {project.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-blue-400">TECH STACK</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-xs px-2 py-1 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-green-400">KEY FEATURES</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">▶</span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-xs text-gray-400">
                      +{project.features.length - 3} more features...
                    </li>
                  )}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nes-btn is-success flex-1 flex items-center justify-center gap-2 !text-xs !py-2"
                  >
                    <FaPlay className="text-xs" />
                    DEMO
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nes-btn is-dark flex-1 flex items-center justify-center gap-2 !text-xs !py-2"
                  >
                    <FaGithub className="text-xs" />
                    CODE
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="nes-container is-dark max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">WANT TO SEE MORE?</h3>
            <p className="text-gray-300 text-sm mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-primary flex items-center justify-center gap-2 mx-auto"
            >
              <FaGithub />
              VIEW GITHUB
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
