const PHONE = process.env.NEXT_PUBLIC_PHONE;
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

import { FaLocationArrow } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { GoCopy } from "react-icons/go";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";
import ReactGA from "react-ga4";
import { Typewriter } from "react-simple-typewriter";

const Footer = ({ analyze }: { analyze: typeof ReactGA }) => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <h1 className="heading lg:max-w-[45vw]">
            <span className="text-purple">Contact Me</span>
          </h1>
          <div className="flex justify-between">
            <h3 className="text-white-200 text-lg font-light ml-2"></h3>
            <h3 className="text-red-400 text-xl font-light ml-2 min-h-[30px] max-h-[30px]">
              <Typewriter
                words={[
                  "Hire Me",
                  "Let's Talk",
                  "Hire Me",
                  "Let's Collaborate",
                ]}
                loop={true}
                cursor={true}
              />
            </h3>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-evenly gap-10">
          <div className="flex justify-center items-center gap-3">
            <IoPhonePortraitOutline className="w-[40px] h-[40px] text-purple" />
            <h2 className="text-white-200 text-xl font-light">{PHONE}</h2>
            <GoCopy
              className="w-4 h-4 cursor-pointer"
              onClick={() => {
                analyze.event({
                  category: "Contact",
                  action: "Copied Phone",
                });
                navigator.clipboard.writeText(PHONE || "");
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <SiGmail className="w-[40px] h-[40px] text-purple mr-2" />
            <h2 className="text-white-200 text-xl font-light">{EMAIL}</h2>
            <GoCopy
              className="w-4 h-4 cursor-pointer"
              onClick={() => {
                analyze.event({
                  category: "Contact",
                  action: "Copied Email",
                });
                navigator.clipboard.writeText(EMAIL || "");
              }}
            />
          </div>
        </div>

        <p className="text-white-200 mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={`mailto:${EMAIL}`} className="mt-5 md:mt-0">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            widthProperty="w-full"
          />
        </a>
      </div>
      <div className="flex md:mt-16 flex-col md:flex-row justify-between items-center gap-10">
        <p className="md:text-base text-sm md:font-normal font-light order-2 md:order-1">
          Copyright © 2024 Raumil Dhandhukia
        </p>

        <div className="flex items-center md:gap-3 gap-6 order-1 mt-10 md:mt-0 md:order-2">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link}>
                <Image
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                ></Image>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
