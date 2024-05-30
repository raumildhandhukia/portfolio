"use client";
const PHONE = process.env.NEXT_PUBLIC_PHONE;
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

import { IoPhonePortraitOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { GoCopy } from "react-icons/go";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import ReactGA from "react-ga4";
import { Typewriter } from "react-simple-typewriter";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { sendMessage } from "@/actions/sendMessage";

const Footer = ({ analyze }: { analyze: typeof ReactGA }) => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSending(true);

    // Validation
    if (
      !formData.email ||
      !formData.message ||
      !formData.firstname ||
      !formData.lastname
    ) {
      setErrorMessage("All fields are required to send message.");
      return;
    }

    // Reset error message
    setErrorMessage("");

    // Send message
    try {
      await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setOpen(false);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
      setSending(false);
    } catch (error) {}
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
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
        {/* <a href={`mailto:${EMAIL}`} className="mt-5 md:mt-0">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            widthProperty="w-full"
          />
        </a> */}
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <MagicButton
            title="Send me a message"
            icon={<FaLocationArrow />}
            position="right"
            widthProperty="w-full"
          />
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-[80%] md:w-max">
            <div className="">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Send me a message
              </h2>

              <form className="my-8" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="mb-4 text-red-500">{errorMessage}</div>
                )}
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <div className="flex flex-col space-y-2 w-full">
                    <Label htmlFor="firstname">First name</Label>
                    <Input
                      id="firstname"
                      placeholder="Your First Name"
                      type="text"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full">
                    <Label htmlFor="lastname">Last name</Label>
                    <Input
                      id="lastname"
                      placeholder="Your Last Name"
                      type="text"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-col space-y-2 w-full">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="Your Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <Label htmlFor="message">Type your message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please type your message here"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  className="mt-3 bg-gradient-to-br relative group/btn from-black dark:from-purple dark:to-indigo-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Send &rarr;
                  <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />
                {sending ? (
                  <div className="flex justify-center w-full">
                    <BeatLoader color="#36d7b7" />
                  </div>
                ) : null}
              </form>
            </div>
          </DialogContent>
        </Dialog>
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
