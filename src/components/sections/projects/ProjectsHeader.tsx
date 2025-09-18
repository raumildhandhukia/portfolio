'use client';

import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const ProjectsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 flex flex-col items-center"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <FaCode className="text-3xl text-green-400" />
        <h2 className="text-4xl font-bold retro-glow">PROJECTS</h2>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm">
        A collection of my favorite projects showcasing different technologies and skills
      </p>
    </motion.div>
  );
};

export default ProjectsHeader;
