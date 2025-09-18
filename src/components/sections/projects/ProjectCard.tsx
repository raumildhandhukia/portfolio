'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaPlay } from 'react-icons/fa';
import { Project } from '../../../constants/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
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
    <motion.div
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
  );
};

export default ProjectCard;
