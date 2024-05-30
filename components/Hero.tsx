import { FaLocationArrow } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";

const RESUME_PATH = "/resume/RaumilD_Resume";

const Hero = ({ analyze }: { analyze: typeof ReactGA }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const handleClick = (type: ".docx" | ".pdf") => {
    analyze.event({
      category: "Download",
      action: `Downloaded Resume ${type} file`,
    });
    const link = document.createElement("a");
    link.href = process.env.NEXT_PUBLIC_PORTFOLIOSITE + RESUME_PATH + type;
    link.download = "RaumilD_Resume" + type;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pb-5 md:pb-10 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen 2xl:h-[60vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 lg:my-0 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Transforming Real Life Problems into Scalable Digital Solutions
          </p>
          <TextGenerateEffect
            isExperience={false}
            input={[
              "Hi! I'm Raumil Dhandhukia, a Full Stack Developer based in United States",
            ]}
            className="text-center text-[40px] md:text-4xl lg:text-6xl"
          />
          <div className="flex flex-col md:flex-row gap-5">
            <Drawer>
              <DrawerTrigger>
                <button>
                  <MagicButton
                    title="Download Resume"
                    icon={<MdDownload />}
                    position="right"
                    widthProperty="w-full"
                  />
                </button>
              </DrawerTrigger>
              <DrawerContent className="w-[90vw] ml-[5vw] md:w-[30vw] md:ml-[35vw]">
                <DrawerHeader>
                  <div className="flex w-full justify-center mt-2 mb-2 md:-mb-5">
                    <DrawerTitle className="text-purple">
                      Click on one of the file type to download
                    </DrawerTitle>
                  </div>
                </DrawerHeader>
                <DrawerDescription>
                  <div className="flex justify-center gap-5">
                    <DrawerClose>
                      <MagicButton
                        title="PDF"
                        icon={<MdDownload />}
                        position="right"
                        widthProperty="md:w-[10vw]"
                        handleClick={() => handleClick(".pdf")}
                      />
                    </DrawerClose>
                    <DrawerClose>
                      <MagicButton
                        title="DOCX"
                        icon={<MdDownload />}
                        position="right"
                        widthProperty="md:w-[10vw]"
                        handleClick={() => handleClick(".docx")}
                      />
                    </DrawerClose>
                  </div>
                  <DrawerClose></DrawerClose>
                </DrawerDescription>
              </DrawerContent>
            </Drawer>

            <a href="#about">
              <MagicButton
                widthProperty="w-full"
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
