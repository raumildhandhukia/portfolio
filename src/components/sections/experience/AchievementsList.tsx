import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Experience } from "../../../types";

interface AchievementsListProps {
  experience: Experience;
}

const AchievementsList = ({ experience }: AchievementsListProps) => {
  return (
    <div className="break-words">
      <h4 className="text-lg font-bold mb-3 text-purple-400">ACHIEVEMENTS</h4>
      <div className="space-y-2">
        {experience.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 text-sm text-gray-300 break-words"
          >
            <FaStar className="text-yellow-400 flex-shrink-0 mt-0.5" />
            <span className="break-words">{achievement}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;
