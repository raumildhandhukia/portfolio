import { motion } from "framer-motion";
import { Experience } from "../../../types";
import ExperienceHeader from "./ExperienceHeader";
import ResponsibilitiesList from "./ResponsibilitiesList";
import SkillsList from "./SkillsList";
import AchievementsList from "./AchievementsList";

interface ExperienceDetailsProps {
  experience: Experience;
  selectedExp: string;
}

const ExperienceDetails = ({ experience, selectedExp }: ExperienceDetailsProps) => {
  return (
    <motion.div
      key={selectedExp}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-2"
    >
      <div className="nes-container is-dark flex flex-col overflow-y-auto overflow-x-hidden h-full">
        <ExperienceHeader experience={experience} />
        <ResponsibilitiesList experience={experience} />
        <SkillsList experience={experience} />
        <AchievementsList experience={experience} />
      </div>
    </motion.div>
  );
};

export default ExperienceDetails;
