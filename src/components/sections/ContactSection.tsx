"use client";

import { motion } from "framer-motion";
import {
  ContactHeader,
  ContactInfo,
  SocialLinks,
  ContactForm,
  ContactFooter,
} from "./contact";
import { RetroCommBackground } from "../effects";

const ContactSection = () => {
  return (
    <section id="contact" className="h-screen flex items-center relative">
      {/* Retro Communications Background */}
      <RetroCommBackground />
      
      <div className="w-full flex justify-center relative z-10">
        <div className="w-[78rem] max-w-full px-6 flex flex-col gap-8 items-center">
          <ContactHeader />

          <div className="flex flex-col gap-8 justify-center items-center w-full">
            {/* Two Column Grid Layout */}
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Column - Stacked Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex flex-col gap-6 justify-start lg:justify-between"
              >
                <ContactInfo />
                <div className="mt-auto">
                  <SocialLinks />
                </div>
              </motion.div>

              {/* Right Column - Single Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex"
              >
                <ContactForm />
              </motion.div>
            </div>
            <ContactFooter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
