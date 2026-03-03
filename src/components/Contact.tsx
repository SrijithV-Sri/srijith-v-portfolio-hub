// src/components/Contact.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactLinks = [
  {
    icon: <Phone className="h-5 w-5 text-white" />,
    label: "Phone",
    value: "+91 7904206023",
    href: "tel:+917904206023",
    gradient: "from-purple-500 to-blue-500",
    hoverClass: "hover:text-purple-600 dark:hover:text-purple-400",
  },
  {
    icon: <Mail className="h-5 w-5 text-white" />,
    label: "Email",
    value: "srijith180497@gmail.com",
    href: "mailto:srijith180497@gmail.com",
    gradient: "from-blue-500 to-cyan-400",
    hoverClass: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    icon: <Linkedin className="h-5 w-5 text-white" />,
    label: "LinkedIn",
    value: "srijith-v-87a4201ab",
    href: "https://www.linkedin.com/in/srijith-v-87a4201ab/",
    gradient: "from-cyan-500 to-teal-400",
    hoverClass: "hover:text-cyan-600 dark:hover:text-cyan-400",
    external: true,
  },
];

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:srijith180497@gmail.com";
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/10 dark:bg-blue-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Let's connect and build something great together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {contactLinks.map(
                  ({ icon, label, value, href, gradient, hoverClass, external }) => (
                    <motion.div
                      key={label}
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0 shadow`}
                      >
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {label}
                        </p>
                        <a
                          href={href}
                          className={`text-sm text-gray-700 dark:text-gray-300 ${hoverClass} transition-colors truncate block`}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {value}
                        </a>
                      </div>
                    </motion.div>
                  )
                )}

                <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Coimbatore, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Message Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-500">
                <CardTitle className="text-white text-lg">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus-visible:ring-purple-500 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus-visible:ring-purple-500 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Message subject"
                      className="bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus-visible:ring-purple-500 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus-visible:ring-purple-500 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-md shadow-purple-500/20"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
