"use client";

import React from "react";
import Timeline from "@/components/ui/Timeline";

export default function RoadmapSection() {
  const roadmapItems = [
    {
      date: "Q2 2025",
      title: "Platform Launch",
      description: "Initial release of the VibeLaunch platform with core features and waitlist access.",
      isActive: true,
    },
    {
      date: "Q3 2025",
      title: "Community Building",
      description: "Expanding our user base and implementing feedback-driven improvements.",
    },
    {
      date: "Q4 2025",
      title: "Advanced Features",
      description: "Rolling out premium features and enhanced integration capabilities.",
    },
    {
      date: "Q1 2026",
      title: "Enterprise Solutions",
      description: "Launching enterprise-grade solutions for larger organizations and teams.",
    },
    {
      date: "Q2 2026",
      title: "Global Expansion",
      description: "Expanding our services to new markets and introducing localized features.",
    },
  ];

  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our development timeline and future plans for the VibeLaunch platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Timeline items={roadmapItems} />
        </div>
      </div>
    </section>
  );
}
