'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: FaGithub,
    color: 'text-gray-400 hover:text-white',
    description: 'Check out my repositories'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedin,
    color: 'text-blue-400 hover:text-blue-300',
    description: 'Let\'s connect professionally'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: FaTwitter,
    color: 'text-blue-400 hover:text-blue-300',
    description: 'Follow for tech updates'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: FaEnvelope,
    color: 'text-green-400 hover:text-green-300',
    description: 'Send me a message'
  }
];

const SocialLinks = () => {
  return (
    <div className="nes-container is-dark">
      <h3 className="text-xl font-bold mb-6 text-center">FIND ME ONLINE</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-gray-600 hover:border-blue-400 transition-all duration-300 text-center group flex flex-col items-center gap-2 !py-3"
            >
              <Icon className={`text-3xl mx-auto mb-2 transition-colors duration-300 ${social.color}`} />
              <div className="text-sm font-bold mb-1">{social.name}</div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {social.description}
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
