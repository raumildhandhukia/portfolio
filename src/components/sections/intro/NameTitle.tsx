'use client';

import { motion } from 'framer-motion';

interface NameTitleProps {
  firstName?: string;
  lastName?: string;
  className?: string;
}

const NameTitle = ({ 
  firstName = "RAUMIL", 
  lastName = "DHANDHUKIA",
  className = "text-4xl lg:text-6xl font-bold mb-6 retro-glow leading-tight"
}: NameTitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={className}
    >
      {firstName}
      <br />
      {lastName}
    </motion.h1>
  );
};

export default NameTitle;
