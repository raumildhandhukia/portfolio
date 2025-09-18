import { motion } from "framer-motion";
import { Experience } from "../../../types";

interface SkillsListProps {
  experience: Experience;
}

const SkillsList = ({ experience }: SkillsListProps) => {
  return (
    <div className="mb-6 break-words">
      <h4 className="text-lg font-bold mb-3 text-yellow-400">TECHNOLOGIES</h4>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gray-700 text-xs px-3 py-1 border border-gray-600 hover:border-blue-400 transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
