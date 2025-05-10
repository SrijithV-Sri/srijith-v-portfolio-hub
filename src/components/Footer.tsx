import React from "react";
import { Linkedin, Mail, Phone, Github, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-200 dark:border-gray-800">
          <motion.div
            className="mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-3 text-white font-bold">
                SV
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Srijith V</h3>
                <p className="text-sm text-muted-foreground">
                  Associate Application Developer
                </p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Versatile developer with expertise across multiple technologies
              and domains.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                "About",
                "Experience",
                "Skills",
                "Education",
                "Achievements",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col text-center md:text-right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="mailto:srijith180497@gmail.com"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-500/10 hover:from-purple-600 hover:to-blue-500 flex items-center justify-center transition-colors group"
              >
                <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="tel:+917904206023"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-500/10 hover:from-purple-600 hover:to-blue-500 flex items-center justify-center transition-colors group"
              >
                <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/srijith-v-87a4201ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-500/10 hover:from-purple-600 hover:to-blue-500 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/SrijithV-Sri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-500/10 hover:from-purple-600 hover:to-blue-500 flex items-center justify-center transition-colors group"
              >
                <Github className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Coimbatore, India
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            &copy; {currentYear} Srijith V. All rights reserved. Made with
            <Heart
              className="h-4 w-4 mx-1 text-red-500 animate-pulse"
              fill="currentColor"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
