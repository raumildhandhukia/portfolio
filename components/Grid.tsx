import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { SparklesCore } from "./ui/Sparkles";
import { IoCopyOutline } from "react-icons/io5";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import GridGlobe from "./ui/GridGlobe";
import MagicButton from "./MagicButton";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

const wobbleCardWords = [
  {
    text: "Currently",
  },
  {
    text: "I'm",
  },
  {
    text: "building",
  },
  {
    text: "AI powered",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Job",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Application",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Tracking",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Application",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "supporting",
  },
  {
    text: "Web",
  },
  {
    text: "and iOS",
  },
  {
    text: "devices.",
  },
];

export function WobbleCards() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = EMAIL || "";
    navigator?.clipboard?.writeText(text);
    setCopied(true);
  };
  return (
    <>
      <div className="py-14 px-4 md:py-20 md:px-20 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="">
            <h2 className="md:max-w-[75%] 2xl:max-w-[70%] text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.0015em] text-white">
              Full Stack Developer / Python Developer with extensive experience
              in Web Development and API Development, committed to delivering
              efficient and scalable solutions.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With expertise in Next.js, React, Python, Node.js, TypeScript and
              databases not limited to MongoDB, MySQL, and PostgreSQL.
            </p>
          </div>
          <Image
            src="/current.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[30%] lg:-right-[15%] -bottom-20 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-700 md:bg-black-100 min-h-[300px] lg:min-h-[300px]"
          className=""
        >
          <div className="">
            <h2 className="w-[90%] text-left text-balance text-base md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white">
              Together, we can turn your ideas into impactful, user-friendly
              applications.
            </h2>
            <p className="mt-4 max-w-[15rem] md:max-w-[30rem] text-left text-base/6 text-neutral-200">
              Adaptive to new challenges and working hand-in-hand with clients
              to develop efficient, scalable, and intuitive solutions that
              address real-world needs.
            </p>
          </div>
          <Image
            src="/vercelpic.png"
            width={420}
            height={420}
            alt="linear demo image"
            className={`absolute -right-[75%] lg:-right-[40%] 2xl:-right-[30%] grayscale filter -bottom-3 lg:top-1 object-contain rounded-2xl`}
          />

          <div className="invisible md:visible w-[50%] absolute mt-3 bottom-3">
            <h2 className="absolute top-1 text-lg font-semibold text-zinc-300">
              Want to collaborate on a project ?
            </h2>
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-black-100"
              widthProperty="w-[90%] md:w-full"
            />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black-100">
          <p className="mt-4 max-w-[20rem] md:max-w-[30rem] text-left text-xl/6 md:text-lg/6 text-neutral-200 font-bold">
            Versatile and flexible with different time zone communications.
          </p>

          <GridGlobe />
        </WobbleCard>
        <WobbleCard
          gradientDirection="bottom"
          containerClassName="col-span-1 lg:col-span-3 bg-black-100 min-h-[250px] lg:min-h-[200px] xl:min-h-[200px]"
        >
          <h2 className="text-left text-balance">
            <p className="text-lg sm:text-base md:text-xl lg:text:3xl xl:text-4xl 2xl:text-5xl font-bold tracking-[-0.0015em] text-white">
              Currently building an{" "}
              <span className="text-blue-400">
                AI powered Job Application Tracking
              </span>{" "}
              app supporting Web and iOS devices.
            </p>
          </h2>
          <p className="mt-4 max-w-[46rem] text-left text-sm md:text-base/6 text-neutral-200">
            This application will automatically track job applications by
            analyzing email inbox, tag application status and provide insights
            on job application progress.
          </p>
        </WobbleCard>
      </div>
    </>
  );
}

const Grid = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center py-20">
        <h1 className="heading">
          <span className="text-white">
            About <span className="text-purple">Me</span>
          </span>
        </h1>
        <WobbleCards />
      </div>
    </section>
  );
};

export default Grid;
