'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaGamepad } from 'react-icons/fa';

interface CharacterAvatarProps {
  character?: string;
  size?: string;
  className?: string;
}

const CharacterAvatar = ({ 
  character = "👨‍💻",
  size = "text-8xl",
  className = "nes-container is-dark w-72 h-72 flex items-center justify-center relative mb-6"
}: CharacterAvatarProps) => {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {/* Character Face */}
      <div className={`${size} pixel-bounce`}>{character}</div>
      
      {/* Floating Code Icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <FaCode className="absolute top-6 left-6 text-blue-400 text-xl" />
        <FaRocket className="absolute top-6 right-6 text-green-400 text-xl" />
        <FaGamepad className="absolute bottom-6 left-6 text-purple-400 text-xl" />
        <div className="absolute bottom-6 right-6 w-4 h-4 bg-yellow-400"></div>
      </motion.div>
    </motion.div>
  );
};

export default CharacterAvatar;
