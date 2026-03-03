// src/components/Experience.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from "lucide-react";

const experienceData = [
  {
    id: 1,
    company: "Quadrasystems.net India Pvt. Ltd.",
    position: "Senior Associate Developer",
    period: "Present",
    description:
      "Developing AI-based applications that automate real-time workflows across industries. Building solutions using ReactJS, NextJS, and Python to address real-world operational problems. Implementing RAG (Retrieval-Augmented Generation) based features with model optimization and performance improvements. Designed and built an end-to-end workflow automation system that significantly reduces organizational processing time.",
    skills: [
      "ReactJS",
      "NextJS",
      "Python",
      "RAG",
      "AI Workflows",
      "Model Optimization",
    ],
    color: "from-violet-600 to-purple-600",
    isLatest: true,
  },
  {
    id: 2,
    company: "Quadrasystems.net India Pvt. Ltd.",
    position: "Associate Developer",
    period: "Oct 2024 – Present",
    description:
      "Working on an open-source enterprise product, Intellient, built using Next.js and Python AutoGen. The application is focused on Generative AI with ongoing efforts to transition towards Agentic AI using AutoGen. Contributing to the evolution of intelligent agent-based automation and enhancing AI-driven workflows.",
    skills: ["Next.js", "Python", "AutoGen", "Generative AI", "Agentic AI"],
    color: "from-blue-600 to-indigo-600",
    isLatest: false,
  },
  {
    id: 3,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Assistant Application Developer",
    period: "Dec 2023 – Jul 2024",
    description:
      "Comprehensive infrastructure orchestration using Terraform IaC. Automated Azure resource provisioning (Resource Groups, VNets, Subnets, NSGs). Deployed API Management services and Azure Functions with Terraform automation. Minimized manual intervention and improved operational efficiency through Terraform-based automation.",
    skills: ["Terraform", "Azure", "IaC", "API Management", "Azure Functions"],
    color: "from-purple-600 to-fuchsia-600",
    isLatest: false,
  },
  {
    id: 4,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Smart City – Healthcare QR Code System",
    period: "Jan 2023 – Nov 2023",
    description:
      "Built a QR code generation and optimization system using Flutter for healthcare professionals to retrieve patient medical history efficiently. Designed customized QR codes with dimensional precision for accurate readability. Enhanced accessibility and efficiency in healthcare data retrieval.",
    skills: [
      "Flutter",
      "QR Code Generation",
      "Healthcare",
      "Mobile Development",
    ],
    color: "from-cyan-500 to-blue-500",
    isLatest: false,
  },
  {
    id: 5,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "OnDemand Bus Transportation",
    period: "Mar 2022 – Nov 2022",
    description:
      "Built a passenger tracking system using Power BI & SQL based on transport card usage. Integrated real-time fare calculation and transport data visualization. Provided drivers with predictive drop-off insights via Power BI reports.",
    skills: ["Power BI", "SQL", "Data Visualization", "Predictive Analytics"],
    color: "from-amber-500 to-orange-600",
    isLatest: false,
  },
  {
    id: 6,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Vehicle Property Recognition",
    period: "Dec 2021 – Feb 2022",
    description:
      "Developed a Python & Flask application to optimize vehicle loading/unloading into NYK ship decks. Utilized bkg file inputs and configuration files for deck allocation. Generated CSV output reports to streamline shipment logistics and drastically reduced processing time.",
    skills: ["Python", "Flask", "CSV Processing", "Automation"],
    color: "from-green-500 to-emerald-600",
    isLatest: false,
  },
];

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section
      id="experience"
      className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/50 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            My professional journey across technologies
          </p>
        </motion.div>

        <div className="mt-4">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 mb-12 bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
            </TabsList>

            {/* ───── TIMELINE VIEW ───── */}
            <TabsContent value="timeline" className="mt-0">
              <div className="relative pl-8 md:pl-0">
                {/* Center line — desktop only */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-indigo-500 -translate-x-1/2"></div>
                {/* Left line — mobile */}
                <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-500"></div>

                {experienceData.map((job, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={job.id}
                      className={`relative flex flex-col md:flex-row mb-10 md:mb-16 ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-0 md:left-1/2 top-4 w-7 h-7 rounded-full bg-gradient-to-r ${job.color} flex items-center justify-center md:-translate-x-1/2 z-10 shadow-md`}
                      >
                        <span className="text-white text-xs font-bold">
                          {job.id}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="md:w-[46%] ml-10 md:ml-0 md:px-6">
                        {job.isLatest && (
                          <span className="inline-block mb-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow">
                            ✦ Latest Role
                          </span>
                        )}
                        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div
                            className={`h-1 bg-gradient-to-r ${job.color}`}
                          ></div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg leading-snug text-gray-900 dark:text-gray-100">
                              {job.position}
                            </CardTitle>
                            <CardDescription className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {job.company}
                            </CardDescription>
                            <Badge
                              variant="outline"
                              className="w-fit mt-1 text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                            >
                              {job.period}
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, i) => (
                                <Badge
                                  key={i}
                                  className={`bg-gradient-to-r ${job.color} text-white text-xs hover:opacity-80`}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block md:w-[46%]"></div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            {/* ───── CARDS VIEW ───── */}
            <TabsContent value="cards" className="space-y-6">
              {experienceData.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                    onClick={() =>
                      setExpandedId(expandedId === job.id ? null : job.id)
                    }
                  >
                    <div
                      className={`h-1.5 bg-gradient-to-r ${job.color}`}
                    ></div>
                    <CardHeader className="bg-gray-50 dark:bg-gray-800/70">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <CardTitle className="text-base md:text-lg text-gray-900 dark:text-gray-100">
                              {job.position}
                            </CardTitle>
                            {job.isLatest && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                                Latest
                              </span>
                            )}
                          </div>
                          <CardDescription className="text-sm font-medium">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-300 dark:border-gray-600"
                          >
                            {job.period}
                          </Badge>
                          {expandedId === job.id ? (
                            <ChevronUp className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === job.id ? "auto" : 0,
                        opacity: expandedId === job.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <CardContent className="pt-4 pb-5">
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              className={`bg-gradient-to-r ${job.color} text-white text-xs hover:opacity-80`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </motion.div>
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
