
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="tel:+917904206023" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 7904206023
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:srijith180497@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  srijith180497@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/srijith-v-87a4201ab/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  srijith-v-87a4201ab
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <a href="mailto:srijith180497@gmail.com">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
