// src/components/Footer.tsx
import React from "react";
import { Linkedin, Mail, Phone, Github, Heart } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  "About",
  "Experience",
  "Skills",
  "Education",
  "Achievements",
  "Contact",
];

const SOCIAL_LINKS = [
  {
    href: "mailto:srijith180497@gmail.com",
    label: "Email",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    href: "tel:+917904206023",
    label: "Phone",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    href: "https://www.linkedin.com/in/srijith-v-87a4201ab/",
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    external: true,
  },
  {
    href: "https://github.com/SrijithV-Sri/",
    label: "GitHub",
    icon: <Github className="h-5 w-5" />,
    external: true,
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10 border-b border-gray-200 dark:border-gray-800">
          {/* Brand */}
          <motion.div
            className="w-full md:w-auto text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-3 text-white font-bold flex-shrink-0">
                SV
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Srijith V
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Senior Associate Developer
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Versatile developer with expertise across AI applications, cloud
              infrastructure, and full-stack development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-full md:w-auto text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="w-full md:w-auto text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-4">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-end gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full bg-purple-50 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 flex items-center justify-center transition-all duration-300 group border border-purple-100 dark:border-gray-700 hover:border-transparent"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">
            Coimbatore, India
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
            © {currentYear} Srijith V. All rights reserved. Made with
            <Heart
              className="h-3.5 w-3.5 text-red-500 animate-pulse"
              fill="currentColor"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
