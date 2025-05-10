
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievementsData = [
  {
    title: "Best Technical Project Award",
    description: "Recognized for exceptional technical implementation and innovation"
  },
  {
    title: "Big Thanks Award - Smart City QR code generation",
    description: "Acknowledged for developing an efficient QR code system for healthcare professionals"
  },
  {
    title: "Big Thanks Award - Website Automation",
    description: "Honored for implementing automation solutions that enhanced website functionality"
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Achievements</h2>
        
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-400/20">
            <Award className="h-12 w-12 text-white" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden card-hover bg-white dark:bg-gray-800">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-600"></div>
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full p-2 bg-amber-100 dark:bg-amber-900/30">
                      <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                    
                    <div className="mt-4 w-full pt-4 border-t">
                      <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
                        <Check className="h-4 w-4" />
                        <span className="text-sm font-medium">Achievement Unlocked</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            "Success is not the key to happiness. Happiness is the key to success. 
            If you love what you are doing, you will be successful."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
