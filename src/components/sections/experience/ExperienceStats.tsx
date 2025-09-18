import { motion } from "framer-motion";
import { experienceStats } from "../../../constants";

const ExperienceStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full relative z-10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full bg-transparent">
        {experienceStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="nes-container is-dark text-center"
          >
            <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
            <div className="text-xs text-gray-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceStats;
