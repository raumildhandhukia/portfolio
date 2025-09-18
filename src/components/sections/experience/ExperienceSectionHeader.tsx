import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <FaBriefcase className="text-3xl text-blue-400" />
        <h2 className="text-4xl font-bold retro-glow">EXPERIENCE</h2>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm">
        My professional journey through the world of technology and development
      </p>
    </motion.div>
  );
};

export default ExperienceSectionHeader;
