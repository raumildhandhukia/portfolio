import { motion } from "framer-motion";
import { experiences } from "../../../constants";

interface ExperienceTimelineProps {
  selectedExp: string;
  onSelectExp: (expId: string) => void;
}

const ExperienceTimeline = ({ selectedExp, onSelectExp }: ExperienceTimelineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-1 h-full"
    >
      <div className="nes-container is-dark flex flex-col h-full">
        <h3 className="text-xl font-bold mb-4 text-center">TIMELINE</h3>
        <div className="!space-y-2 flex-1 overflow-y-auto">
          {experiences.map((exp, index) => (
            <motion.button
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectExp(exp.id)}
              className={`w-full !p-4 text-left border-2 transition-all duration-300 ${
                selectedExp === exp.id
                  ? "border-blue-400 bg-blue-400/20"
                  : "border-gray-600 hover:border-gray-400"
              }`}
            >
              <div className="font-bold text-sm mb-1">{exp.title}</div>
              <div className="text-blue-400 text-xs mb-1">{exp.company}</div>
              <div className="text-gray-400 text-xs">{exp.duration}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
