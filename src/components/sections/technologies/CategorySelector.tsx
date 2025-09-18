'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '@/types/technologies';

interface CategorySelectorProps {
  categories: SkillCategory[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategorySelector = ({ categories, selectedCategory, onCategorySelect }: CategorySelectorProps) => {
  return (
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
                onClick={() => onCategorySelect(category.id)}
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
  );
};

export default CategorySelector;
