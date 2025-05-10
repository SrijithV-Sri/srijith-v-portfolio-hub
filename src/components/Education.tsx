
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "M.Sc. Physics",
    institution: "Bishop Heber College",
    year: "2020",
    gpa: "8.06",
    details: "Specialized in advanced theoretical physics and quantum mechanics"
  },
  {
    degree: "B.Sc. Physics",
    institution: "Bishop Heber College",
    year: "2018",
    gpa: "7.31",
    details: "Focused on foundational physics concepts and experimental methodologies"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-950/30">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                <CardHeader className="flex flex-col md:flex-row items-center gap-6 pb-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <School className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <CardTitle className="text-2xl mb-1">{edu.degree}</CardTitle>
                    <p className="text-xl text-primary dark:text-purple-400">{edu.institution}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Graduated {edu.year}
                      </span>
                      <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-md border-0 shadow-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10">
            <CardContent className="pt-6 px-6">
              <div className="text-center">
                <div className="mb-4 inline-block p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Always expanding my knowledge through professional development courses, 
                  workshops, and staying updated with the latest industry trends.
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
