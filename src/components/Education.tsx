
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. Physics",
    institution: "Bishop Heber College",
    year: "2020",
    gpa: "8.06"
  },
  {
    degree: "B.Sc. Physics",
    institution: "Bishop Heber College",
    year: "2018",
    gpa: "7.31"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{edu.degree}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.institution}</p>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>Graduated {edu.year}</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
