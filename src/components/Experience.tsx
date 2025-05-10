
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    id: 1,
    company: "Intellient",
    position: "Associate Application Developer",
    period: "Oct 2024 - Present",
    description: "Working on an open-source enterprise product, Intellient, built using Next.js and Python AutoGen. The application is currently focused on Generative AI, with ongoing efforts to transition towards Agentic AI using AutoGen. Contributing to the evolution of intelligent agent-based automation, enhancing AI-driven workflows.",
    skills: ["Next.js", "Python", "AutoGen", "Generative AI"]
  },
  {
    id: 2,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Assistant Application Developer",
    period: "Dec 2023 - Jul 2024",
    description: "Comprehensive infrastructure orchestration using Terraform IaC. Automated Azure resource provisioning (Resource Groups, VNets, Subnets, NSGs) using Terraform. Deployed API Management services and Azure Functions with Terraform automation. Minimized manual intervention by streamlining resource deployment. Improved operational efficiency and consistency through Terraform-based automation.",
    skills: ["Terraform", "Azure", "IaC", "API Management", "Azure Functions"]
  },
  {
    id: 3,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Smart City – Healthcare QR Code System",
    period: "Jan 2023 - Nov 2023",
    description: "Application for QR Code generation, enabling healthcare professionals to retrieve patient medical history efficiently. Developed a QR code generation and optimization system using Flutter. Designed customized QR codes to display patient history upon scanning. Ensured QR code dimensional precision for accurate readability. Enhanced accessibility and efficiency in healthcare data retrieval.",
    skills: ["Flutter", "QR Code Generation", "Healthcare", "Mobile Development"]
  },
  {
    id: 4,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "OnDemand Bus Transportation",
    period: "Mar 2022 - Nov 2022",
    description: "Application for passenger tracking based on transport card usage. Built passenger tracking system using Power BI & SQL. Integrated real-time fare calculation and transport data visualization. Provided drivers with predictive drop-off insights via Power BI reports.",
    skills: ["Power BI", "SQL", "Data Visualization", "Predictive Analytics"]
  },
  {
    id: 5,
    company: "Fujitsu Consulting India Pvt. Ltd.",
    position: "Vehicle Property Recognition",
    period: "Dec 2021 - Feb 2022",
    description: "Automated automotive vehicle shipment processing. Developed a Python & Flask application to optimize vehicle loading/unloading into NYK ship decks. Utilized bkg file inputs and configuration files for deck allocation. Generated output CSV reports to streamline shipment logistics. Drastically reduced processing time and improved workflow efficiency.",
    skills: ["Python", "Flask", "CSV Processing", "Automation"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-8 max-w-5xl mx-auto">
        {experienceData.map((job, index) => (
          <Card key={job.id} className={`overflow-hidden animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader className="bg-secondary bg-opacity-50">
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
            <CardContent className="pt-6">
              <p className="mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
