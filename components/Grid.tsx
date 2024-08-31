import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { SparklesCore } from "./ui/Sparkles";
import { FaLocationArrow } from "react-icons/fa6";
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

  const redirectToProject = () => {
    window.open("https://inboxradarai.vercel.app/", "_blank");
  };
  return (
    <>
      <div className="py-14 px-4 md:py-0 md:px-20 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[430px] lg:min-h-[600px] xl:min-h-[300px] bg-pink-700 md:bg-black-100">
          <div className="">
            <h2 className="md:max-w-[75%] 2xl:max-w-[70%] text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.0015em] text-white">
              I am a Software Developer with 3 years of experience and I build
              scalable and efficient applications.
            </h2>
            <p className="mt-4 max-w-xl text-left  text-base/6 text-neutral-200">
              Always eager to learn new technologies and frameworks. I have
              achieved expertise in Next.js, React, Python, Node.js, TypeScript
              and databases not limited to MongoDB, MySQL, and PostgreSQL.
            </p>
          </div>
          <Image
            src="/current.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[30%] lg:-right-[15%] -bottom-20 md:-bottom-28 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-700 md:bg-black-100 min-h-[300px] lg:min-h-[300px]"
          className=""
        >
          <div className="">
            <h2 className="w-[90%] text-left text-balance text-base md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white">
              I love creating and developing applications that solve real-world
              problems. I am passionate about learning new technologies and
              frameworks.
            </h2>
            <p className="mt-4 max-w-[15rem] md:max-w-[30rem] text-left text-base/6 text-neutral-200">
              Adaptive to new challenges to develop scalable and efficient
              solutions.
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
              Want to reach out?
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
        </WobbleCard>  */}
        {/* <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black-100">
          <p className="mt-4 max-w-[20rem] md:max-w-[30rem] text-left text-xl/6 md:text-lg/6 text-neutral-200 font-bold">
            Versatile and flexible with different time zone communications.
          </p>

          <GridGlobe />
        </WobbleCard> */}
        <WobbleCard
          gradientDirection="bottom"
          containerClassName="col-span-1 lg:col-span-3 bg-black-100 min-h-[580px] md:min-h-[200px]"
        >
          <h2 className="text-left text-balance">
            <p className="text-lg sm:text-base md:text-xl lg:text:xl xl:text-4xl 2xl:text-4xl font-bold tracking-[-0.0015em] text-white">
              Recently I built,
              <br />
              <span className="text-blue-400">
                AI-Powered Email Management SaaS
              </span>{" "}
              featuring AI-powered Email Categorizationm, AI-Labeling,
              AI-Insights and AI Email Writing Assistant with Autocompletion
            </p>
          </h2>
          <p className="mt-4 max-w-[36rem] text-left text-sm md:text-base/6 text-neutral-200">
            Completely integrated and synced with Gmail. Built with{" "}
            <span className="text-red-400">
              Next.js, React, TypeScript, Auth.js, Prisma, PostgreSQL, Gmail API
              and Gemini API
            </span>
            . Integrated <span className="text-red-400">Stripe</span> for
            payment processing.
          </p>
          <Image
            src="/inboxradarai-up.png"
            width={420}
            height={420}
            alt="linear demo image"
            className={`absolute scale-[0.9] md:scale-[1] -right-[0%] lg:-right-[5%] 2xl:-right-[1%] grayscale filter -bottom-8 lg:top-26 2xl:top-60 object-contain rounded-2xl`}
          />
          <div className="flex justify-center md:justify-start my-5 md:mt-0">
            <MagicButton
              title="Check out live on Vercel"
              icon={<FaLocationArrow />}
              position="left"
              handleClick={redirectToProject}
              otherClasses="!bg-black-100"
              widthProperty="md:w-max"
            />
          </div>
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
          {/* <span className="text-white">
            About <span className="text-purple">Me</span>
          </span> */}
        </h1>
        <WobbleCards />
      </div>
    </section>
  );
};

export default Grid;
