import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {
  ClassEffectForASU,
  ClassEffectForEmipro,
  ClassEffectForSetu,
  ClassEffectForSyncAndStyle,
} from "./Experience";

export default function TimelineDemo() {
  const data = [
    {
      title: "June 2024",
      subtitle: "Sync 'N Style",
      role: "Full Stack Developer (Backend Leaning)",
      content: (
        <TextGenerateEffect
          speed={0.05}
          duration={5}
          isExperience={true}
          inputArray={ClassEffectForSyncAndStyle}
        />
      ),
    },
    {
      title: "May 2023",
      subtitle: "Arizona State University",
      role: "Software Engineer",
      content: (
        <TextGenerateEffect
          speed={0.05}
          duration={5}
          isExperience={true}
          inputArray={ClassEffectForASU}
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
