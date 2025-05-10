
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Check } from "lucide-react";

const achievementsData = [
  "Best Technical Project Award",
  "Big Thanks Award - Smart City QR code generation",
  "Big Thanks Award - Website Automation"
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 px-4 md:px-8 bg-secondary bg-opacity-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Achievements</h2>
        
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <Card className="animate-fade-in border-0 shadow-lg">
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {achievementsData.map((achievement, index) => (
                <li key={index} className="flex items-center gap-3 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
