// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/App";

const NAV_ITEMS = [
  "About",
  "Experience",
  "Skills",
  "Education",
  "Achievements",
  "Contact",
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 w-full py-4 px-4 md:px-8 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-3 text-white font-bold flex-shrink-0">
            SV
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Srijith V
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group py-2 text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {item}
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-purple-600" />
            )}
          </Button>

          <div className="hidden md:flex items-center gap-2">
            {[
              {
                href: "mailto:srijith180497@gmail.com",
                label: "Email",
                icon: <Mail className="h-5 w-5" />,
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
            ].map(({ href, label, icon, external }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                asChild
              >
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {icon}
                </a>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-950 z-50 p-6 flex flex-col"
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
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Srijith V
                </h1>
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

            <div className="flex flex-col gap-6 flex-1">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-medium text-gray-800 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                {[
                  {
                    href: "mailto:srijith180497@gmail.com",
                    label: "Email",
                    icon: <Mail className="h-6 w-6" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/srijith-v-87a4201ab/",
                    label: "LinkedIn",
                    icon: <Linkedin className="h-6 w-6" />,
                    external: true,
                  },
                  {
                    href: "https://github.com/SrijithV-Sri/",
                    label: "GitHub",
                    icon: <Github className="h-6 w-6" />,
                    external: true,
                  },
                ].map(({ href, label, icon, external }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 text-gray-600 dark:text-gray-300"
                    asChild
                  >
                    <a
                      href={href}
                      aria-label={label}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
