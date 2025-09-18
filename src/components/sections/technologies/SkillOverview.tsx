'use client';

import { motion } from 'framer-motion';
import { Technology, SkillCategory } from '@/types/technologies';

interface SkillOverviewProps {
  categories: SkillCategory[];
  technologies: Technology[];
}

const SkillOverview = ({ categories, technologies }: SkillOverviewProps) => {
  return (
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
                className="text-center p-4 border-2 border-gray-600 hover:border-blue-400 transition-colors duration-300 flex flex-col items-center gap-3 !py-3"
              >
                <Icon className={`text-3xl ${category.color} mx-auto`} />
                <div className="text-sm font-bold mb-1">{category.name}</div>
                <div className="text-xs text-gray-400 mb-2">{categoryTechs.length} skills</div>
                <div className={`text-lg font-bold ${category.color}`}>{averageLevel}%</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillOverview;
