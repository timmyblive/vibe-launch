"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function WhitePaperSection() {
  return (
    <section id="whitepaper" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-accent/5 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">White Paper</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Learn about our technology, vision, and implementation details
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left column - TOC */}
          <div className="glass-effect p-8 rounded-2xl border border-accent/20">
            <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                  <span className="text-accent mr-2">01.</span>
                  Executive Summary
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                  <span className="text-accent mr-2">02.</span>
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                  <span className="text-accent mr-2">03.</span>
                  Technology Stack
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                  <span className="text-accent mr-2">04.</span>
                  Implementation Strategy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                  <span className="text-accent mr-2">05.</span>
                  Security Measures
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-foreground/80 hover:text-accent transition-colors">
                  <span className="text-accent mr-2">06.</span>
                  Future Roadmap
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <Button variant="outline" size="lg" className="w-full">
                Download Full Paper
              </Button>
            </div>
          </div>
          
          {/* Right column - Excerpt */}
          <div className="glass-effect p-8 rounded-2xl border border-accent/20">
            <h3 className="text-xl font-semibold mb-6">Executive Summary</h3>
            <div className="prose prose-invert max-w-none">
              <p>
                VibeLaunch represents a paradigm shift in how modern tech platforms are designed and implemented. Our approach combines cutting-edge UI/UX principles with robust backend architecture.
              </p>
              <p>
                The platform&apos;s core technology leverages a microservices architecture that enables rapid scaling and feature deployment without compromising system stability or user experience.
              </p>
              <p>
                What sets VibeLaunch apart is our commitment to creating an ecosystem where developers and end-users can collaborate seamlessly. This isn&apos;t just another platform—it&apos;s a comprehensive solution designed for the future of digital interaction.
              </p>
              <p>
                Our implementation of advanced rendering techniques and state management ensures that the platform remains responsive even under high load conditions, while our innovative approach to data synchronization minimizes latency and maximizes reliability.
              </p>
              <p>
                The security model implemented in VibeLaunch goes beyond industry standards, incorporating multi-layered protection mechanisms and continuous vulnerability assessment to safeguard user data and system integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
