import { FaLocationArrow } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ReactGA from "react-ga4";

const RESUME_PATH = "/resume/Raumil_Resume.pdf";

const Hero = ({ analyze }: { analyze: typeof ReactGA }) => {
  return (
    <div className="pb-20 pt-36">
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
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
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
            Transforming Real Life Problems into Digital Solutions
          </p>
          <TextGenerateEffect
            words="Hi! I'm Raumil Dhandhukia, a Full Stack Developer based in United States"
            className="text-center text-[40px] md:text-4xl lg:text-6xl"
          />
          <div className="flex flex-col md:flex-row gap-5">
            <MagicButton
              title="Download Resume"
              icon={<MdDownload />}
              position="right"
              widthProperty="w-full"
              handleClick={() => {
                analyze.event({
                  category: "Download",
                  action: "Downloaded Resume",
                });
                const link = document.createElement("a");
                link.href = process.env.NEXT_PUBLIC_PORTFOLIOSITE + RESUME_PATH;
                link.download = "Raumil_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
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
