'use client';

import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import { categories } from '../../../constants/projectsData';

interface ProjectFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const ProjectFilter = ({ filter, setFilter }: ProjectFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mb-12"
    >
      <div className="nes-container is-dark flex flex-col items-center gap-3">
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
  );
};

export default ProjectFilter;
