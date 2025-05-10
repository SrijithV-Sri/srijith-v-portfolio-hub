import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <header
      className={`sticky top-0 w-full py-4 px-4 md:px-8 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-3 text-white font-bold">
            SV
          </div>
          <h1 className="text-xl font-bold gradient-text">Srijith V</h1>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {[
            "About",
            "Experience",
            "Skills",
            "Education",
            "Achievements",
            "Contact",
          ].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group py-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {item}
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-purple-600" />
              )}
            </Button>
          </motion.div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
              asChild
            >
              <a
                href="mailto:srijith180497@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-5 w-5 text-foreground hover:text-purple-600 dark:hover:text-purple-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/srijith-v-87a4201ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground hover:text-purple-600 dark:hover:text-purple-400" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
              asChild
            >
              <a
                href="https://github.com/SrijithV-Sri/SrijithV-Sri/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-foreground hover:text-purple-600 dark:hover:text-purple-400" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-50 p-6 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-3 text-white font-bold">
                  SV
                </div>
                <h1 className="text-xl font-bold gradient-text">Srijith V</h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              {[
                "About",
                "Experience",
                "Skills",
                "Education",
                "Achievements",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
                  asChild
                >
                  <a
                    href="mailto:srijith180497@gmail.com"
                    aria-label="Email"
                    title="Email"
                  >
                    <Mail className="h-6 w-6 text-foreground hover:text-purple-600 dark:hover:text-purple-400" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/srijith-v-87a4201ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-foreground hover:text-purple-600 dark:hover:text-purple-400" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
                  asChild
                >
                  <a
                    href="https://github.com/SrijithV-Sri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-6 w-6 text-foreground hover:text-purple-600 dark:hover:text-purple-400" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
