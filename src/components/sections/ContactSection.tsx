'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaUser, FaCommentAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: FaGithub,
      color: 'text-gray-400 hover:text-white',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
      color: 'text-blue-400 hover:text-blue-300',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: FaTwitter,
      color: 'text-blue-400 hover:text-blue-300',
      description: 'Follow for tech updates'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: FaEnvelope,
      color: 'text-green-400 hover:text-green-300',
      description: 'Send me a message'
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'raumil@example.com',
      color: 'text-green-400'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'text-blue-400'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'San Francisco, CA',
      color: 'text-purple-400'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaEnvelope className="text-3xl text-green-400" />
            <h2 className="text-4xl font-bold retro-glow">CONTACT</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Ready to level up your project? Let&apos;s team up and create something awesome!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Get in Touch */}
            <div className="nes-container is-dark">
              <h3 className="text-xl font-bold mb-6 text-center">GET IN TOUCH</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 border-2 border-gray-600 hover:border-blue-400 transition-colors duration-300"
                    >
                      <Icon className={`text-xl ${info.color}`} />
                      <div>
                        <div className="text-sm font-bold">{info.label}</div>
                        <div className="text-xs text-gray-300">{info.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="nes-container is-dark">
              <h3 className="text-xl font-bold mb-6 text-center">FIND ME ONLINE</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border-2 border-gray-600 hover:border-blue-400 transition-all duration-300 text-center group"
                    >
                      <Icon className={`text-3xl mx-auto mb-2 transition-colors duration-300 ${social.color}`} />
                      <div className="text-sm font-bold mb-1">{social.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {social.description}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="nes-container is-dark">
              <h3 className="text-lg font-bold mb-4 text-center">RESPONSE TIME</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">&lt; 24h</div>
                  <div className="text-xs text-gray-300">Email Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-xs text-gray-300">Reply Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="nes-container is-dark">
              <h3 className="text-xl font-bold mb-6 text-center">SEND MESSAGE</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="name">
                    <FaUser className="inline mr-2" />
                    PLAYER NAME
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
                    <FaEnvelope className="inline mr-2" />
                    EMAIL ADDRESS
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
                    <FaCommentAlt className="inline mr-2" />
                    QUEST SUBJECT
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
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="message">
                    <FaCommentAlt className="inline mr-2" />
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="nes-textarea is-dark w-full resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full nes-btn ${
                    submitStatus === 'success' ? 'is-success' :
                    submitStatus === 'error' ? 'is-error' :
                    'is-primary'
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
                  ) : submitStatus === 'success' ? (
                    <>
                      ✅ MESSAGE SENT!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      ❌ ERROR OCCURRED
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 text-sm"
                  >
                    Thanks for reaching out! I&apos;ll get back to you soon. 🎮
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-400 text-sm"
                  >
                    Oops! Something went wrong. Please try again. 🔧
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="nes-container is-dark">
            <div className="mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-lg font-bold mb-2">GAME OVER?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Not quite! This is just the beginning of our collaboration.
            </p>
            <div className="text-xs text-gray-400">
              © 2024 Raumil Dhandhukia. Built with ❤️ and lots of ☕
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
