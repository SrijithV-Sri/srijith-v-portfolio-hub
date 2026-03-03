// src/components/Skills.tsx
import React from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML / CSS", level: 88, color: "#E34F26" },
      { name: "JavaScript / TypeScript", level: 82, color: "#F7DF1E" },
      { name: "ReactJS", level: 85, color: "#61DAFB" },
      { name: "NextJS", level: 85, color: "#7c3aed" },
    ],
  },
  {
    category: "AI & Backend",
    icon: "🤖",
    items: [
      { name: "Python / Flask", level: 90, color: "#3776AB" },
      { name: "RAG / LLM Integration", level: 82, color: "#10b981" },
      { name: "AI Workflow Automation", level: 80, color: "#8b5cf6" },
      { name: "AutoGen / Agentic AI", level: 75, color: "#6366f1" },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    items: [
      { name: "Terraform / IaC", level: 85, color: "#7B42BC" },
      { name: "Azure Services", level: 80, color: "#0089D6" },
      { name: "CI/CD Pipelines", level: 75, color: "#f59e0b" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 dark:bg-purple-800/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 dark:bg-blue-800/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-5">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
