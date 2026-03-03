// src/components/Achievements.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievementsData = [
  {
    title: "Best Technical Project Award",
    description:
      "Recognized for exceptional technical implementation and innovation in project delivery",
  },
  {
    title: "Big Thanks Award – Smart City QR Code",
    description:
      "Acknowledged for developing an efficient QR code system for healthcare professionals",
  },
  {
    title: "Big Thanks Award – Website Automation",
    description:
      "Honored for implementing automation solutions that enhanced website functionality and efficiency",
  },
];

const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300/10 dark:bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
            Recognition for impactful work
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-400/20">
            <Award className="h-10 w-10 text-white" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Fixed top bar — no longer absolute */}
                <div className="h-1 bg-gradient-to-r from-yellow-400 to-amber-600 w-full"></div>
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full p-3 bg-amber-50 dark:bg-amber-900/20">
                      <Star className="h-6 w-6 text-amber-500 dark:text-amber-400" />
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="mt-4 w-full pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
                        <Check className="h-4 w-4" />
                        <span className="text-xs font-semibold">
                          Achievement Unlocked
                        </span>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 italic text-sm max-w-2xl mx-auto">
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
