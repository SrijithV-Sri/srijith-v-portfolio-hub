'use client';

import React from 'react';
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML/CSS', level: 85, color: 'rgb(234, 84, 85)' },
      { name: 'JavaScript', level: 80, color: 'rgb(246, 189, 96)' },
      { name: 'NextJS', level: 85, color: 'rgb(51, 194, 255)' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python/Flask', level: 90, color: 'rgb(120, 165, 255)' },
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Terraform', level: 85, color: 'rgb(142, 115, 226)' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-600/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">Skills</h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skills.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl card-hover"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="space-y-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200 dark:bg-gray-700"
                      style={{ 
                        backgroundColor: `hsl(var(--background))`,
                        ['--progress-background' as any]: skill.color
                      }}
                    />
                  </motion.div>
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