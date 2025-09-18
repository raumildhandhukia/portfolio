'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarker, FaStar } from 'react-icons/fa';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
  achievements: string[];
}

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState<string>('exp1');

  const experiences: Experience[] = [
    {
      id: 'exp1',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: [
        'Lead development of scalable web applications using React, Node.js, and AWS',
        'Mentor junior developers and conduct code reviews',
        'Architected microservices infrastructure serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 70%'
      ],
      skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker', 'MongoDB'],
      achievements: [
        'Increased application performance by 60%',
        'Led team of 5 developers',
        'Delivered 15+ successful projects'
      ]
    },
    {
      id: 'exp2', 
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing applications',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Optimized database queries improving response time by 40%',
        'Built RESTful APIs serving mobile and web applications'
      ],
      skills: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
      achievements: [
        'Reduced bug reports by 45%',
        'Built 3 products from scratch',
        'Improved code coverage to 85%'
      ]
    },
    {
      id: 'exp3',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Remote',
      duration: '2018 - 2020',
      description: [
        'Created responsive websites for diverse client portfolio',
        'Implemented modern JavaScript frameworks and libraries',
        'Collaborated with backend developers on API integration',
        'Maintained legacy codebases and performed upgrades'
      ],
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'jQuery', 'Bootstrap'],
      achievements: [
        'Delivered 25+ client projects',
        'Achieved 98% client satisfaction',
        'Reduced load times by 50%'
      ]
    }
  ];

  const currentExp = experiences.find(exp => exp.id === selectedExp) || experiences[0];

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaBriefcase className="text-3xl text-blue-400" />
            <h2 className="text-4xl font-bold retro-glow">EXPERIENCE</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            My professional journey through the world of technology and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="nes-container is-dark">
              <h3 className="text-xl font-bold mb-4 text-center">TIMELINE</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedExp(exp.id)}
                    className={`w-full p-4 text-left border-2 transition-all duration-300 ${
                      selectedExp === exp.id
                        ? 'border-blue-400 bg-blue-400/20'
                        : 'border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{exp.title}</div>
                    <div className="text-blue-400 text-xs mb-1">{exp.company}</div>
                    <div className="text-gray-400 text-xs">{exp.duration}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={selectedExp}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="nes-container is-dark h-full">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{currentExp.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-blue-400" />
                    {currentExp.company}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarker className="text-green-400" />
                    {currentExp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-yellow-400" />
                    {currentExp.duration}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-green-400">RESPONSIBILITIES</h4>
                <ul className="space-y-2">
                  {currentExp.description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-blue-400 mt-1">▶</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-yellow-400">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExp.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-700 text-xs px-3 py-1 border border-gray-600 hover:border-blue-400 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-bold mb-3 text-purple-400">ACHIEVEMENTS</h4>
                <div className="space-y-2">
                  {currentExp.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <FaStar className="text-yellow-400" />
                      {achievement}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Technologies Mastered', value: '20+' },
              { label: 'Coffee Consumed', value: '∞' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="nes-container is-dark text-center"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
