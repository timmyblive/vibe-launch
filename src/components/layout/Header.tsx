"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-effect shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gradient">VibelaunchLaunch</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Contact
          </a>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="#"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
