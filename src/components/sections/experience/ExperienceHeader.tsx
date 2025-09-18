import { FaBriefcase, FaCalendar, FaMapMarker } from "react-icons/fa";
import { Experience } from "../../../types";

interface ExperienceHeaderProps {
  experience: Experience;
}

const ExperienceHeader = ({ experience }: ExperienceHeaderProps) => {
  return (
    <div className="mb-6 break-words">
      <h3 className="text-2xl font-bold mb-2 break-words">{experience.title}</h3>
      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-400" />
          {experience.company}
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarker className="text-green-400" />
          {experience.location}
        </div>
        <div className="flex items-center gap-2">
          <FaCalendar className="text-yellow-400" />
          {experience.duration}
        </div>
      </div>
    </div>
  );
};

export default ExperienceHeader;
