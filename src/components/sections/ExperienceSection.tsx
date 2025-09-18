'use client';

import { useState } from 'react';
import { experiences } from '../../constants';
import { Experience } from '../../types';
import {
  ExperienceSectionHeader,
  ExperienceTimeline,
  ExperienceDetails,
  ExperienceStats,
} from './experience';

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState<string>('exp1');

  const currentExp = experiences.find(exp => exp.id === selectedExp) || experiences[0];

  return (
    <section id="experience" className="py-20">
      <div className="w-full px-6 flex flex-col items-center gap-8 mx-auto">
        <ExperienceSectionHeader />
        
        <div className="grid lg:grid-cols-3 gap-2 !mx-12 h-128 lg:grid-rows-1">
          <ExperienceTimeline 
            selectedExp={selectedExp} 
            onSelectExp={setSelectedExp} 
          />
          <ExperienceDetails 
            experience={currentExp} 
            selectedExp={selectedExp} 
          />
        </div>

        <div className="mt-20 mb-8">
          <ExperienceStats />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
