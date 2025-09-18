'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../../../constants/projectsData';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <motion.div
      layout
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;
