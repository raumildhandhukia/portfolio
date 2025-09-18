'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
