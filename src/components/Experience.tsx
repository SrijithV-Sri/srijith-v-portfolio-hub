
import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experienceData = [
  {
    id: 1,
    company: "Intellient",
    position: "Associate Application Developer",
    period: "Oct 2024 - Present",
    description: "Working on an open-source enterprise product, Intellient, built using Next.js and Python AutoGen. The application is currently focused on Generative AI, with ongoing efforts to transition towards Agentic AI using AutoGen. Contributing to the evolution of intelligent agent-based automation, enhancing AI-driven workflows.",
    skills: ["Next.js", "Python", "AutoGen", "Generative AI"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Assistant Application Developer",
    period: "Dec 2023 - Jul 2024",
    description: "Comprehensive infrastructure orchestration using Terraform IaC. Automated Azure resource provisioning (Resource Groups, VNets, Subnets, NSGs) using Terraform. Deployed API Management services and Azure Functions with Terraform automation. Minimized manual intervention by streamlining resource deployment. Improved operational efficiency and consistency through Terraform-based automation.",
    skills: ["Terraform", "Azure", "IaC", "API Management", "Azure Functions"],
    color: "from-purple-600 to-fuchsia-600"
  },
  {
    id: 3,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Smart City – Healthcare QR Code System",
    period: "Jan 2023 - Nov 2023",
    description: "Application for QR Code generation, enabling healthcare professionals to retrieve patient medical history efficiently. Developed a QR code generation and optimization system using Flutter. Designed customized QR codes to display patient history upon scanning. Ensured QR code dimensional precision for accurate readability. Enhanced accessibility and efficiency in healthcare data retrieval.",
    skills: ["Flutter", "QR Code Generation", "Healthcare", "Mobile Development"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 4,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "OnDemand Bus Transportation",
    period: "Mar 2022 - Nov 2022",
    description: "Application for passenger tracking based on transport card usage. Built passenger tracking system using Power BI & SQL. Integrated real-time fare calculation and transport data visualization. Provided drivers with predictive drop-off insights via Power BI reports.",
    skills: ["Power BI", "SQL", "Data Visualization", "Predictive Analytics"],
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 5,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Vehicle Property Recognition",
    period: "Dec 2021 - Feb 2022",
    description: "Automated automotive vehicle shipment processing. Developed a Python & Flask application to optimize vehicle loading/unloading into NYK ship decks. Utilized bkg file inputs and configuration files for deck allocation. Generated output CSV reports to streamline shipment logistics. Drastically reduced processing time and improved workflow efficiency.",
    skills: ["Python", "Flask", "CSV Processing", "Automation"],
    color: "from-green-500 to-emerald-600"
  }
];

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-16">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="timeline" className="text-base">Timeline</TabsTrigger>
              <TabsTrigger value="cards" className="text-base">Cards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="timeline" className="mt-0">
              <div className="relative">
                <div className="timeline-line"></div>
                
                {experienceData.map((job, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div 
                      key={job.id} 
                      className={`flex flex-col md:flex-row mb-12 md:mb-24 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                        <div 
                          className={`absolute left-0 md:left-1/2 top-0 w-12 h-12 rounded-full bg-gradient-to-r ${job.color} flex items-center justify-center transform md:translate-x-[-50%] z-10`}
                        >
                          <span className="text-white font-bold">{job.id}</span>
                        </div>
                        
                        <Card className={`overflow-hidden card-hover border-t-4 border-t-gradient-${index}`}>
                          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${job.color}`}></div>
                          <CardHeader>
                            <CardTitle className="text-xl">{job.position}</CardTitle>
                            <CardDescription className="text-base">{job.company}</CardDescription>
                            <Badge variant="outline" className="w-fit mt-2">
                              {job.period}
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4 text-muted-foreground">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, i) => (
                                <Badge key={i} className={`bg-gradient-to-r ${job.color} hover:opacity-80 text-white`}>
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="md:w-1/2"></div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="cards" className="space-y-8">
              {experienceData.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="overflow-hidden card-hover cursor-pointer"
                    onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  >
                    <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
                    <CardHeader className="bg-secondary/30">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle>{job.position}</CardTitle>
                          <CardDescription className="text-lg">{job.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-sm md:text-base w-fit">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className={`pt-6 transition-all duration-300 ${expandedId === job.id ? 'max-h-96' : 'max-h-40 overflow-hidden'}`}>
                      <p className="mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <Badge key={i} className={`bg-gradient-to-r ${job.color} hover:opacity-80 text-white`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
