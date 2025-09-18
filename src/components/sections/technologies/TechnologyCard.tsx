'use client';

import { motion } from 'framer-motion';
import { Technology } from '@/types/technologies';

interface TechnologyCardProps {
  tech: Technology;
  index: number;
}

const TechnologyCard = ({ tech, index }: TechnologyCardProps) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-2 border-gray-600 !p-3 hover:border-blue-400 transition-all duration-300"
    >
      {/* Tech Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex justify-center gap-3">
          <span className="text-4xl">{tech.icon}</span>
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
  );
};

export default TechnologyCard;
