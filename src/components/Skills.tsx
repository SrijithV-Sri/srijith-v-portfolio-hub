
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const techSkills = [
  { name: "Python - Flask", color: "bg-tech-python text-white", level: 90 },
  { name: "Terraform", color: "bg-tech-terraform text-white", level: 85 },
  { name: "NextJS", color: "bg-tech-nextjs text-white", level: 80 },
  { name: "HTML", color: "bg-tech-html text-white", level: 95 },
  { name: "CSS", color: "bg-tech-css text-white", level: 85 },
  { name: "JavaScript", color: "bg-tech-javascript text-black", level: 80 },
  { name: "C# Selenium Automation", color: "bg-blue-600 text-white", level: 75 },
  { name: "Azure Cloud", color: "bg-blue-500 text-white", level: 85 },
  { name: "Power BI", color: "bg-yellow-600 text-white", level: 80 },
  { name: "SQL", color: "bg-green-600 text-white", level: 85 },
  { name: "Flutter", color: "bg-blue-400 text-white", level: 75 },
];

const languageSkills = [
  { name: "English", level: "Professional", percentage: 90 },
  { name: "Tamil", level: "Native", percentage: 100 },
];

const certifications = [
  { name: "Python programming", id: "T7454179" },
  { name: "Microsoft Azure Fundamentals AZ 900", id: "" },
  { name: "Microsoft Artificial Intelligence AI 900", id: "" },
  { name: "C# Selenium Automation - Nunit Framework", id: "" },
];

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription className="text-white/80">Technologies I work with</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {techSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center">
                        <Badge 
                          className={`${skill.color} transition-all duration-300 ${hoveredSkill === skill.name ? 'scale-110' : ''}`}
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-100"
                        indicatorClassName={`${skill.color.split(' ')[0]}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                  <CardTitle>Languages</CardTitle>
                  <CardDescription className="text-white/80">Communication skills</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {languageSkills.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{lang.name}</span>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                        <Progress value={lang.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription className="text-white/80">Professional qualifications</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center p-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          {cert.id && <p className="text-sm text-muted-foreground">ID: {cert.id}</p>}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="py-4 flex space-x-4 animate-marquee whitespace-nowrap">
            {techSkills.map((skill, index) => (
              <Badge key={index} className={`${skill.color} text-sm py-1.5 px-3`}>
                {skill.name}
              </Badge>
            ))}
            {techSkills.map((skill, index) => (
              <Badge key={`dup-${index}`} className={`${skill.color} text-sm py-1.5 px-3`}>
                {skill.name}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
