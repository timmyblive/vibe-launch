"use client";

import React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { SocialLinks } from "@/components/ui/SocialLinks";

export default function Footer() {
  const socialMediaLinks = [
    {
      name: "Facebook",
      image: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
      url: "#"
    },
    {
      name: "X",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
      url: "#"
    },
    {
      name: "Instagram",
      image: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      url: "#"
    },
    {
      name: "YouTube",
      image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      url: "#"
    }
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-background border-t border-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-gradient mb-4">VibelaunchLaunch</h2>
            <p className="text-foreground/70 mb-4">
              Modern tech landing page with futuristic UI elements and clean design.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground/70">Toggle theme:</span>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-foreground/70 hover:text-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/70 hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social links and copyright */}
        <div className="mt-12 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center">
          {/* New SocialLinks component */}
          <SocialLinks socials={socialMediaLinks} className="mb-4 md:mb-0" />
          
          <div className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} VibelaunchLaunch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
