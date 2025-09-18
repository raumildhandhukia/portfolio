'use client';

import IntroSection from '@/components/sections/IntroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="pt-24">
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
