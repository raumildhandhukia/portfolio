import { motion } from "framer-motion";
import { Experience } from "../../../types";

interface ResponsibilitiesListProps {
  experience: Experience;
}

const ResponsibilitiesList = ({ experience }: ResponsibilitiesListProps) => {
  return (
    <div className="mb-6 break-words">
      <h4 className="text-lg font-bold mb-3 text-green-400">RESPONSIBILITIES</h4>
      <ul className="space-y-2">
        {experience.description.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 text-sm text-gray-300 break-words"
          >
            <span className="text-blue-400 mt-1 flex-shrink-0">▶</span>
            <span className="break-words">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsibilitiesList;
