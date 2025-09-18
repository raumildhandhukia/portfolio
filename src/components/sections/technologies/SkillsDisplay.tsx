'use client';

import { motion } from 'framer-motion';
import { Technology, SkillCategory } from '@/types/technologies';
import TechnologyCard from './TechnologyCard';

interface SkillsDisplayProps {
  technologies: Technology[];
  currentCategory: SkillCategory | undefined;
}

const SkillsDisplay = ({ technologies, currentCategory }: SkillsDisplayProps) => {
  return (
    <motion.div
      key={currentCategory?.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nes-container is-dark">
        <div className="flex items-center justify-center gap-3 mb-6">
          {currentCategory && <currentCategory.icon className={`text-2xl ${currentCategory.color}`} />}
          <h3 className="text-2xl font-bold">
            {currentCategory ? `${currentCategory.name} SKILLS` : 'ALL TECHNOLOGIES'}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsDisplay;
