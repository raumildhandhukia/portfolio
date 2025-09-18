'use client';

import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

export interface FilterOption {
  id: string;
  label: string;
}

interface FilterComponentProps {
  options: FilterOption[];
  selectedFilter: string;
  onFilterChange: (filterId: string) => void;
  title?: string;
  className?: string;
}

const FilterComponent = ({ 
  options, 
  selectedFilter, 
  onFilterChange, 
  title = "FILTER BY CATEGORY",
  className = ""
}: FilterComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex justify-center mb-12 ${className}`}
    >
      <div className="nes-container is-dark flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 mb-4">
          <FaFilter className="text-blue-400" />
          <span className="text-sm font-bold">{title}</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {options.map((option) => (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(option.id)}
              className={`nes-btn ${
                selectedFilter === option.id ? 'is-primary' : 'is-dark'
              } !text-xs !px-3 !py-2`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FilterComponent;
