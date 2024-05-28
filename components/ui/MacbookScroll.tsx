"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";
import ReactGA from "react-ga";
import { TextGenerateEffect } from "./TextGenerateEffect";
import MatrixRain from "./MatrixRain";
import { Typewriter } from "react-simple-typewriter";
export const MacbookScroll = ({
  analyze,
  src,
  showGradient,
  title,
  badge,
}: {
  analyze: typeof ReactGA;
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isLargerThanMacbook, setIsLargerThanMacbook] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
    if (window && window.innerWidth > 1440) {
      setIsLargerThanMacbook(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 1900] : isLargerThanMacbook ? [0, 1500] : [0, 1500]
  );

  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center md:py-20 2xl:py-80 justify-start flex-shrink-0 [perspective:800px] transform scale-[0.30] md:scale-[0.65] 2xl:scale-100"
    >
      <h2
        style={
          {
            // translateY: textTransform,
            // opacity: textOpacity,
          }
        }
        className="dark:text-white text-neutral-800 text-2xl font-bold mb-20 text-center"
      >
        {title || (
          <span className="text-purple">
            <span className="text-red-300 text-2xl">Visit my GitHub,</span>
            <br />
            to know more about what and how I code.
          </span>
        )}
      </h2>
      <div className="flex justify-evenly items-start">
        <div className=" md:w-[20vw] mr-36 md:mr-0">
          <LeftSideStack />
        </div>
        <div className="w-[70] md:w-[80vw] 2xl:w-[45vw] flex justify-center items-center">
          <div>
            {/* Lid */}
            <Lid
              analyze={analyze}
              src={src}
              scaleX={scaleX}
              scaleY={scaleY}
              rotate={rotate}
              translate={translate}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
            {/* Base area */}
            <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
              {/* above keyboard bar */}
              <div className="h-10 w-full relative">
                <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
              </div>
              <div className="flex relative">
                <div className="mx-auto w-[10%] overflow-hidden  h-full">
                  <SpeakerGrid />
                </div>
                <div className="mx-auto w-[80%] h-full">
                  <Keypad />
                </div>
                <div className="mx-auto w-[10%] overflow-hidden  h-full">
                  <SpeakerGrid />
                </div>
              </div>
              <Trackpad />
              <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
              {showGradient && (
                <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
              )}
            </div>
            {isVisible && (
              <div className="flex justify-center items-center mt-[10vh] max-w-[25vw]">
                <p className="text-purple text-center font-bold text-4xl">
                  this is what I use to code but I am always{" "}
                  <span className="text-red-500">
                    excited to learn new things
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" md:w-[20vw] ml-36 md:ml-0">
          <RightSideStack />
        </div>
      </div>
    </div>
  );
};

export const Lid = ({
  analyze,
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
  isVisible,
  setIsVisible,
}: {
  analyze: typeof ReactGA;
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  src?: string;
}) => {
  return (
    <div
      className="relative [perspective:800px] cursor-pointer"
      onClick={() => {
        analyze.event({
          category: "GitHub",
          action: "Clicked GitHub From Macbook Scroll",
        });
        window.open("https://github.com/raumildhandhukia");
      }}
    >
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-black rounded-lg flex items-center justify-center"
        >
          <div className="h-[10.8rem] w-[31rem] border rounded-lg bg-gradient-to-tr from-black via-indigo-900 to-black-100 flex items-center justify-center">
            {/* <MatrixRain /> */}
            <span className="text-white bg-blend-overlay">
              <MacbookHeading isVisible={isVisible} />
            </span>
          </div>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        onUpdate={() => setIsVisible(true)}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <Image
          src={src as string}
          fill
          alt="aceternity logo"
          className="object-cover object-left-top absolute rounded-lg inset-0"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32  rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F1</span>
        </KBtn>

        <KBtn>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
            <div className="bg-black h-full w-full rounded-full" />
          </div>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn>
          <span className="block">~</span>
          <span className="block mt-1">`</span>
        </KBtn>

        <KBtn>
          <span className="block ">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn
          className="w-10 items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>

        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`|`}</span>
          <span className="block">{`\\`}</span>
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn
          className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          caps lock
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>

        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn
          className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>{" "}
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <span className="block">fn</span>
          </div>
          <div className="flex justify-start w-full pl-1">
            <IconWorld className="h-[6px] w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-end w-full pr-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-start w-full pl-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start w-full pl-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
          <KBtn className="w-6 h-3">
            <IconCaretUpFilled className="h-[6px] w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="w-6 h-3">
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="w-6 h-3">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </KBtn>
            <KBtn className="w-6 h-3">
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[4px]",
        backlit && "bg-red-800/[0.5] shadow-xl shadow-indigo-500"
      )}
    >
      <div
        className={cn(
          "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
      {children}
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[0.5px] gap-[2px] mt-2 h-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const MacbookHeading = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div>
      {isVisible ? (
        <div className="text-red-500 font-bold text-4xl">
          <Typewriter
            words={[
              "My Tech Stack",
              "My Arsenal",
              "My Tools",
              "My Skills",
              "My Stack",
              "My Tech",
            ]}
            loop={true}
            cursor={true}
          />
        </div>
      ) : null}
    </div>
  );
};

const LeftSideStack = () => {
  return (
    <div className="flex justify-start items-start">
      <div className="flex flex-col items-start gap-10">
        <div className="teck-stack-item-wrapper">
          <Image src="/next.svg" width={50} height={50} alt="nextjs" />
          <p className="tech-stack-p">Next.js</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/re.svg" width={50} height={50} alt="react" />
          <p className="tech-stack-p">React</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/types.svg" width={50} height={50} alt="ts" />
          <p className="tech-stack-p">Typescript</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/js.svg" width={50} height={50} alt="js" />
          <p className="tech-stack-p">JavaScript</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/tail.svg" width={50} height={50} alt="js" />
          <p className="tech-stack-p">tailwind</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/html.svg" width={50} height={50} alt="html" />
          <p className="tech-stack-p">HTML</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/css.svg" width={50} height={50} alt="css" />
          <p className="tech-stack-p">CSS</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/docker.svg" width={50} height={50} alt="docker" />
          <p className="tech-stack-p">Docker</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/socket.png" width={50} height={50} alt="socket" />
          <p className="tech-stack-p">Socket.io</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/aws.svg" width={50} height={50} alt="aws" />
          <p className="tech-stack-p">AWS</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/unity.svg" width={50} height={50} alt="unity" />
          <p className="tech-stack-p">Unity</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/git.svg" width={50} height={50} alt="git" />
          <p className="tech-stack-p">Git</p>
        </div>
      </div>
    </div>
  );
};
const RightSideStack = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-start gap-10 ">
        <div className="teck-stack-item-wrapper">
          <Image src="/nj.svg" width={50} height={50} alt="nodejs" />
          <p className="tech-stack-p">Node.js</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/authlogo.png" width={50} height={50} alt="authjs" />
          <p className="tech-stack-p">Auth.js</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/express.png" width={50} height={50} alt="express" />
          <p className="tech-stack-p">Express</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/py.svg" width={50} height={50} alt="python" />
          <p className="tech-stack-p">Python</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/flask.svg" width={50} height={50} alt="flask" />
          <p className="tech-stack-p">Flask</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/java.png" width={50} height={50} alt="java" />
          <p className="tech-stack-p">Java</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/prisma.svg" width={50} height={50} alt="prisma" />
          <p className="tech-stack-p">Prisma</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/mongo.svg" width={50} height={50} alt="mongo" />
          <p className="tech-stack-p">MongoDB</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/pgsql.svg" width={50} height={50} alt="pgsql" />
          <p className="tech-stack-p">PostgreSQL</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/mysql.svg" width={50} height={50} alt="mysql" />
          <p className="tech-stack-p">MySQL</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/rest.png" width={50} height={50} alt="restapi" />
          <p className="tech-stack-p">REST Api</p>
        </div>
        <div className="teck-stack-item-wrapper">
          <Image src="/graphql.svg" width={50} height={50} alt="graph" />
          <p className="tech-stack-p">GraphQL</p>
        </div>
      </div>
    </div>
  );
};
