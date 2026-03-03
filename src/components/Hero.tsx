// src/components/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-purple-400 dark:bg-purple-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 md:w-96 h-64 md:h-96 bg-yellow-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10 animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-20 left-1/3 w-64 md:w-96 h-64 md:h-96 bg-blue-400 dark:bg-indigo-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10 animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.p
            className="text-xl md:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi there{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 30, 0, 30, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.6 }}
            >
              👋
            </motion.span>
            , I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Srijith V
          </motion.h1>

          <motion.h2
            className="text-xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Senior Associate Developer
          </motion.h2>

          <motion.p
            className="text-base md:text-lg mb-8 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Versatile developer with 5+ years of experience across multiple
            technologies. Specializing in AI-based applications, workflow
            automation, and cloud infrastructure — adaptable across full-stack
            development, DevOps, and GenAI domains.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-lg shadow-purple-500/20"
              asChild
            >
              <a href="mailto:srijith180497@gmail.com">
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
              asChild
            >
              <a href="#experience">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
              asChild
            >
              <a
                href="/SRIJITH_V.pdf"
                download="SRIJITH_V_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar panel */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-2xl opacity-30 dark:opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gray-50 dark:bg-gray-900 border-4 border-purple-100 dark:border-purple-900 flex items-center justify-center shadow-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <div className="relative z-10 text-center px-6">
                <div className="text-7xl mb-3">👨‍💻</div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                  GenAI Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
