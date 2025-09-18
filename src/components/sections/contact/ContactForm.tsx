"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaUser, FaCommentAlt, FaPaperPlane } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div className="nes-container is-dark w-full h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6 text-center">SEND MESSAGE</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            <div className="flex items-center gap-2">
              <FaUser className="inline mr-2" />
              <span>Your Name</span>
            </div>
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="nes-input is-dark w-full"
            placeholder="Enter your name..."
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            <div className="flex items-center gap-2">
              <FaEnvelope className="inline mr-2" />
              <span>Your Email</span>
            </div>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="nes-input is-dark w-full"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Subject Input */}
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="subject">
            <div className="flex items-center gap-2">
              <FaCommentAlt className="inline mr-2" />
              <span>Subject</span>
            </div>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="nes-input is-dark w-full"
            placeholder="What's this about?"
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col flex-1">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            <div className="flex items-center gap-2">
              <FaCommentAlt className="inline mr-2" />
              <span>Message</span>
            </div>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="nes-textarea is-dark w-full resize-none flex-1"
            placeholder="Tell me about your project, ideas, or just say hello!"
          />
        </div>

        {/* Submit Button */}
        <div className="space-y-4 pt-2 mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full nes-btn ${
              submitStatus === "success"
                ? "is-success"
                : submitStatus === "error"
                ? "is-error"
                : "is-primary"
            } flex items-center justify-center gap-2`}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                SENDING...
              </>
            ) : submitStatus === "success" ? (
              <>✅ MESSAGE SENT!</>
            ) : submitStatus === "error" ? (
              <>❌ ERROR OCCURRED</>
            ) : (
              <>
                <FaPaperPlane />
                SEND MESSAGE
              </>
            )}
          </motion.button>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 text-sm"
            >
              Thanks for reaching out! I&apos;ll get back to you soon. 🎮
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 text-sm"
            >
              Oops! Something went wrong. Please try again. 🔧
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
