"use client";

import { motion } from "framer-motion";
import {
  ContactHeader,
  ContactInfo,
  SocialLinks,
  ResponseStats,
  ContactForm,
  ContactFooter,
} from "./contact";

const ContactSection = () => {
  return (
    <section id="contact" className="h-screen flex items-center">
      <div className="w-full flex justify-center">
        <div className="w-[78rem] max-w-full px-6 flex flex-col gap-8 items-center">
          <ContactHeader />

          <div className="flex flex-col gap-8 justify-center items-center w-full">
            {/* Contact Information */}
            <div className="flex gap-8 justify-center items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <div className="w-full max-w-md space-y-6">
                  <ContactInfo />
                  <SocialLinks />
                  <ResponseStats />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <div className="w-full max-w-md">
                  <ContactForm />
                </div>
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
