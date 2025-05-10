
import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const techSkills = [
  { name: "Python - Flask", color: "bg-tech-python text-white" },
  { name: "Terraform", color: "bg-tech-terraform text-white" },
  { name: "NextJS", color: "bg-tech-nextjs text-white" },
  { name: "HTML", color: "bg-tech-html text-white" },
  { name: "CSS", color: "bg-tech-css text-white" },
  { name: "JavaScript", color: "bg-tech-javascript text-black" },
  { name: "C# Selenium Automation", color: "bg-blue-600 text-white" },
  { name: "Azure Cloud", color: "bg-blue-500 text-white" },
  { name: "Power BI", color: "bg-yellow-600 text-white" },
  { name: "SQL", color: "bg-green-600 text-white" },
  { name: "Flutter", color: "bg-blue-400 text-white" },
];

const languageSkills = [
  { name: "English", level: "Professional" },
  { name: "Tamil", level: "Native" },
];

const certifications = [
  { name: "Python programming", id: "T7454179" },
  { name: "Microsoft Azure Fundamentals AZ 900", id: "" },
  { name: "Microsoft Artificial Intelligence AI 900", id: "" },
  { name: "C# Selenium Automation - Nunit Framework", id: "" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-secondary bg-opacity-40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
              <CardDescription>Technologies I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill, index) => (
                  <Badge key={index} className={`text-sm py-1.5 ${skill.color}`}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="animate-fade-in" style={{animationDelay: "100ms"}}>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
                <CardDescription>Communication skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languageSkills.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="outline">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{animationDelay: "200ms"}}>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>Professional qualifications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>{cert.name} {cert.id && <span className="text-sm text-muted-foreground">({cert.id})</span>}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
