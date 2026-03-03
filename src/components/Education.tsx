// src/components/Education.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { School, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "M.Sc. Physics",
    institution: "Bishop Heber College",
    year: "2020",
    gpa: "8.06",
    details:
      "Specialized in advanced theoretical physics and quantum mechanics",
  },
  {
    degree: "B.Sc. Physics",
    institution: "Bishop Heber College",
    year: "2018",
    gpa: "7.31",
    details:
      "Focused on foundational physics concepts and experimental methodologies",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            My academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-800 dark:to-purple-950/20 h-full">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-full"></div>
                <CardHeader className="flex flex-col sm:flex-row items-center gap-4 pb-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <School className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <CardTitle className="text-xl mb-1 text-gray-900 dark:text-gray-100">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-base text-purple-600 dark:text-purple-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="bg-white/70 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
                    <div className="flex flex-wrap justify-between gap-2">
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                        Graduated {edu.year}
                      </span>
                      <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-md w-full border border-purple-100 dark:border-purple-900/40 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800">
            <CardContent className="pt-6 px-6 pb-6">
              <div className="text-center">
                <div className="mb-4 inline-block p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Continuous Learning
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Always expanding knowledge through professional development,
                  AI/ML certifications, and staying current with the latest
                  industry trends in GenAI and cloud technologies.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
