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
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi there{" "}
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 30, 0, 30, 0],
              }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.6 }}
            >
              👋
            </motion.span>
            , I'm
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Srijith V
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mb-6 text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Associate Application Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Versatile developer with 3+ years experience across multiple
            technologies. Adaptable & proficient in diverse tech stacks, playing
            a dynamic role in development, testing, and cloud automation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
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
              className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/30"
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
              className="text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/30"
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

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
              <div className="hero-pattern-bg w-full h-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/SrijithPortfolio.png"
                  alt="Srijith V Portfolio"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;