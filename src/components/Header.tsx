
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 flex justify-between items-center animate-fade-in">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Srijith V</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#education" className="hover:text-primary transition-colors">Education</a>
        <a href="#achievements" className="hover:text-primary transition-colors">Achievements</a>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:srijith180497@gmail.com" aria-label="Email" title="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/srijith-v-87a4201ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
