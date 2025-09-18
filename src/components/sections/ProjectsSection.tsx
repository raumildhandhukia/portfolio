'use client';

import { useState } from 'react';
import { projects } from '../../constants/projectsData';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectFilter from './projects/ProjectFilter';
import ProjectsGrid from './projects/ProjectsGrid';
import GitHubCTA from './projects/GitHubCTA';
import { HackingBackground } from '../effects';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      {/* Retro Heist Planning Background */}
      <HackingBackground />
      
      <div className="w-full flex justify-center relative z-10">
        <div className="w-[78rem] max-w-full px-6 flex flex-col gap-8 items-center">
          <ProjectsHeader />
          <ProjectFilter filter={filter} setFilter={setFilter} />
          <div className="flex-grow">
            <ProjectsGrid projects={filteredProjects} />
          </div>
          <GitHubCTA />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
