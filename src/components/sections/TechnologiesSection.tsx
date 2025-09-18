'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCog, FaReact, FaNodeJs, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

interface Technology {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
  experience: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const categories: SkillCategory[] = [
    { id: 'frontend', name: 'FRONTEND', icon: FaReact, color: 'text-blue-400' },
    { id: 'backend', name: 'BACKEND', icon: FaNodeJs, color: 'text-green-400' },
    { id: 'database', name: 'DATABASE', icon: FaDatabase, color: 'text-purple-400' },
    { id: 'cloud', name: 'CLOUD', icon: FaCloud, color: 'text-yellow-400' },
    { id: 'tools', name: 'TOOLS', icon: FaTools, color: 'text-red-400' },
  ];

  const technologies: Technology[] = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend', icon: '⚛️', description: 'Building interactive UIs', experience: '4+ years' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: '📘', description: 'Type-safe development', experience: '3+ years' },
    { name: 'Next.js', level: 85, category: 'frontend', icon: '▲', description: 'Full-stack React framework', experience: '2+ years' },
    { name: 'Vue.js', level: 80, category: 'frontend', icon: '💚', description: 'Progressive framework', experience: '2+ years' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: '🎨', description: 'Utility-first CSS', experience: '3+ years' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨', description: 'ES6+ modern features', experience: '5+ years' },

    // Backend
    { name: 'Node.js', level: 90, category: 'backend', icon: '🟢', description: 'Server-side JavaScript', experience: '4+ years' },
    { name: 'Python', level: 85, category: 'backend', icon: '🐍', description: 'Backend & data science', experience: '3+ years' },
    { name: 'Express.js', level: 90, category: 'backend', icon: '🚂', description: 'Fast web framework', experience: '4+ years' },
    { name: 'FastAPI', level: 80, category: 'backend', icon: '⚡', description: 'Modern Python API framework', experience: '2+ years' },
    { name: 'GraphQL', level: 75, category: 'backend', icon: '🔍', description: 'Query language for APIs', experience: '2+ years' },
    { name: 'REST APIs', level: 95, category: 'backend', icon: '🌐', description: 'RESTful architecture', experience: '5+ years' },

    // Database
    { name: 'MongoDB', level: 85, category: 'database', icon: '🍃', description: 'NoSQL document database', experience: '3+ years' },
    { name: 'PostgreSQL', level: 80, category: 'database', icon: '🐘', description: 'Relational database', experience: '3+ years' },
    { name: 'Redis', level: 75, category: 'database', icon: '🔴', description: 'In-memory data store', experience: '2+ years' },
    { name: 'MySQL', level: 80, category: 'database', icon: '🐬', description: 'Popular SQL database', experience: '3+ years' },
    { name: 'Prisma', level: 85, category: 'database', icon: '⚡', description: 'Next-gen ORM', experience: '2+ years' },

    // Cloud
    { name: 'AWS', level: 80, category: 'cloud', icon: '☁️', description: 'Cloud computing platform', experience: '3+ years' },
    { name: 'Vercel', level: 90, category: 'cloud', icon: '▲', description: 'Frontend deployment', experience: '2+ years' },
    { name: 'Docker', level: 75, category: 'cloud', icon: '🐳', description: 'Containerization', experience: '2+ years' },
    { name: 'Heroku', level: 85, category: 'cloud', icon: '🟣', description: 'Platform as a Service', experience: '3+ years' },
    { name: 'Netlify', level: 85, category: 'cloud', icon: '🌊', description: 'JAMstack deployment', experience: '3+ years' },

    // Tools
    { name: 'Git', level: 95, category: 'tools', icon: '📦', description: 'Version control', experience: '5+ years' },
    { name: 'VS Code', level: 95, category: 'tools', icon: '📝', description: 'Code editor', experience: '5+ years' },
    { name: 'Figma', level: 75, category: 'tools', icon: '🎨', description: 'Design collaboration', experience: '2+ years' },
    { name: 'Jest', level: 80, category: 'tools', icon: '🃏', description: 'JavaScript testing', experience: '3+ years' },
    { name: 'Webpack', level: 70, category: 'tools', icon: '📦', description: 'Module bundler', experience: '2+ years' },
    { name: 'Linux', level: 85, category: 'tools', icon: '🐧', description: 'Operating system', experience: '4+ years' },
  ];

  const filteredTechnologies = technologies.filter(tech => tech.category === selectedCategory);
  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  const getSkillBarColor = (level: number) => {
    if (level >= 90) return 'bg-green-400';
    if (level >= 75) return 'bg-yellow-400';
    if (level >= 60) return 'bg-orange-400';
    return 'bg-red-400';
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return 'EXPERT';
    if (level >= 75) return 'ADVANCED';
    if (level >= 60) return 'INTERMEDIATE';
    return 'BEGINNER';
  };

  return (
    <section id="technologies" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaCog className="text-3xl text-purple-400 animate-spin" />
            <h2 className="text-4xl font-bold retro-glow">TECH STACK</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="nes-container is-dark">
              <h3 className="text-lg font-bold mb-6 text-center">CATEGORIES</h3>
              <div className="space-y-3">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full p-3 text-left border-2 transition-all duration-300 flex items-center gap-3 ${
                        isActive
                          ? 'border-blue-400 bg-blue-400/20'
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <Icon className={`text-xl ${category.color}`} />
                      <span className="font-bold text-sm">{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="nes-container is-dark">
              <div className="flex items-center gap-3 mb-6">
                {currentCategory && <currentCategory.icon className={`text-2xl ${currentCategory.color}`} />}
                <h3 className="text-2xl font-bold">{currentCategory?.name} SKILLS</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-2 border-gray-600 p-4 hover:border-blue-400 transition-all duration-300"
                  >
                    {/* Tech Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-bold text-sm">{tech.name}</h4>
                          <p className="text-xs text-gray-400">{tech.experience}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 border ${
                        tech.level >= 90 ? 'border-green-400 text-green-400' :
                        tech.level >= 75 ? 'border-yellow-400 text-yellow-400' :
                        tech.level >= 60 ? 'border-orange-400 text-orange-400' :
                        'border-red-400 text-red-400'
                      }`}>
                        {getSkillLevel(tech.level)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 mb-3">{tech.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>PROFICIENCY</span>
                        <span>{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 border border-gray-600">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${getSkillBarColor(tech.level)}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="nes-container is-dark">
            <h3 className="text-xl font-bold mb-6 text-center">SKILL OVERVIEW</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => {
                const categoryTechs = technologies.filter(tech => tech.category === category.id);
                const averageLevel = Math.round(
                  categoryTechs.reduce((sum, tech) => sum + tech.level, 0) / categoryTechs.length
                );
                const Icon = category.icon;

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 border-2 border-gray-600 hover:border-blue-400 transition-colors duration-300"
                  >
                    <Icon className={`text-3xl ${category.color} mx-auto mb-2`} />
                    <div className="text-sm font-bold mb-1">{category.name}</div>
                    <div className="text-xs text-gray-400 mb-2">{categoryTechs.length} skills</div>
                    <div className={`text-lg font-bold ${category.color}`}>{averageLevel}%</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
