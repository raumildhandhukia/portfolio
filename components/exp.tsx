import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {
  ClassEffectForEmipro,
  ClassEffectForSetu,
  ClassEffectForSowFin,
  ClassEffectForCelectAI,
} from "./Experience";

export default function TimelineDemo() {
  const data = [
    {
      title: "June 2024",
      subtitle: "SowFin",
      role: "Full Stack Developer",
      content: (
        <TextGenerateEffect
          speed={0.05}
          duration={5}
          isExperience={true}
          inputArray={ClassEffectForSowFin}
        />
      ),
    },
    {
      title: "May 2023",
      subtitle: "Celect AI",
      role: "Software Developer Intern",
      content: (
        <TextGenerateEffect
          speed={0.05}
          duration={5}
          isExperience={true}
          inputArray={ClassEffectForCelectAI}
        />
      ),
    },
    {
      title: "May 2022",
      subtitle: "Setu Consulting Services",
      role: "Software Developer",
      content: (
        <TextGenerateEffect
          speed={0.05}
          duration={5}
          isExperience={true}
          inputArray={ClassEffectForSetu}
        />
      ),
    },
    {
      title: "Jan 2021",
      subtitle: "Emipro Technologies",
      role: "Software Developer Intern",
      content: (
        <TextGenerateEffect
          speed={0.05}
          duration={5}
          isExperience={true}
          inputArray={ClassEffectForEmipro}
        />
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
