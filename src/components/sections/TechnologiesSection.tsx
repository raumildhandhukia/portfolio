'use client';

import { useState } from 'react';
import { categories, technologies, filterOptions } from '@/constants/technologiesData';
import FilterComponent from '@/components/common/FilterComponent';
import { 
  TechnologiesHeader, 
  SkillsDisplay, 
  SkillOverview 
} from './technologies';
import { SpaceBackground } from '../effects';

const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);
  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <section id="technologies" className="min-h-screen py-20 relative">
      {/* Space Background Animation */}
      <SpaceBackground />
      
      <div className="w-full flex justify-center relative z-10">
        <div className="w-[78rem] px-6">
        <TechnologiesHeader />
        
        <FilterComponent
          options={filterOptions}
          selectedFilter={selectedCategory}
          onFilterChange={setSelectedCategory}
          title="FILTER BY TECHNOLOGY CATEGORY"
        />

        <SkillsDisplay
          technologies={filteredTechnologies}
          currentCategory={currentCategory}
        />

        <SkillOverview
          categories={categories}
          technologies={technologies}
        />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
