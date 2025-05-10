
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center py-20 px-4 md:px-8 animate-fade-in">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-medium mb-4">Hi there 👋, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Srijith V</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Associate Application Developer</h2>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl">
          Versatile developer with 3+ years experience across multiple technologies. 
          Adaptable & proficient in diverse tech stacks, playing a dynamic role in development, 
          testing, and cloud automation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="mailto:srijith180497@gmail.com">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#experience">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
