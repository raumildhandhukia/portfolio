export interface Technology {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
  experience: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}
