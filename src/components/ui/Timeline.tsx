import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isActive?: boolean;
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/20" />
      
      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Dot */}
            <div
              className={`absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 ${
                item.isActive
                  ? "border-accent bg-accent"
                  : "border-accent/50 bg-background"
              } transform -translate-x-1/2`}
            />
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-effect p-4 rounded-lg border border-accent/10"
            >
              <div className="text-sm text-accent mb-1">{item.date}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
