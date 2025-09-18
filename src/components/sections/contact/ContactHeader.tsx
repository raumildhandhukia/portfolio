'use client';

import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <FaEnvelope className="text-3xl text-green-400" />
        <h2 className="text-4xl font-bold retro-glow">CONTACT</h2>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm">
        Ready to level up your project? Let&apos;s team up and create something awesome!
      </p>
    </motion.div>
  );
};

export default ContactHeader;
