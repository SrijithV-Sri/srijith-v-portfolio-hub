
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../index.css";

export const metadata = {
  title: "Srijith V | Associate Application Developer",
  description: "Professional portfolio of Srijith V, Associate Application Developer with expertise in Python, Terraform, NextJS and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Sonner />
        {children}
      </body>
    </html>
  );
}
