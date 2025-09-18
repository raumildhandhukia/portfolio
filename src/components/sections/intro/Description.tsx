'use client';

import { motion } from 'framer-motion';

interface DescriptionProps {
  text?: string;
  className?: string;
}

const Description = ({ 
  text = "Welcome to my digital realm! I'm a passionate developer who loves creating innovative solutions and turning ideas into reality. Let's build something amazing together!",
  className = "text-gray-300 mb-10 max-w-2xl mx-auto text-sm leading-relaxed"
}: DescriptionProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className={className}
    >
      {text}
    </motion.p>
  );
};

export default Description;
