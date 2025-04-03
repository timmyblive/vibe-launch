"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const hoverZoneRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle hover events
  useEffect(() => {
    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300); // Small delay to prevent accidental closing
    };
    
    const hoverZone = hoverZoneRef.current;
    const sidebar = sidebarRef.current;
    
    if (hoverZone) {
      hoverZone.addEventListener("mouseenter", handleMouseEnter);
    }
    
    if (sidebar) {
      sidebar.addEventListener("mouseenter", handleMouseEnter);
      sidebar.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (hoverZone) {
        hoverZone.removeEventListener("mouseenter", handleMouseEnter);
      }
      
      if (sidebar) {
        sidebar.removeEventListener("mouseenter", handleMouseEnter);
        sidebar.removeEventListener("mouseleave", handleMouseLeave);
      }
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hover zone for sidebar activation */}
      <div
        ref={hoverZoneRef}
        className="fixed top-0 left-0 h-full w-4 z-40"
        aria-hidden="true"
      />
      
      {/* Menu icon - only visible when sidebar is closed, positioned at bottom */}
      {!isOpen && (
        <div
          className="fixed bottom-6 left-6 z-50 p-2 rounded-md bg-accent text-white hover:blue-glow transition-all duration-300 cursor-pointer"
          aria-label="Menu"
          onClick={(e) => {
            e.currentTarget.classList.add('animate-flip');
            setTimeout(() => setIsOpen(true), 300);
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-flip')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        </div>
      )}
      
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 glass-effect z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${className}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="mb-8">
            <Image 
              src={theme === 'dark' ? "/smalllogodark.png" : "/smalllogolight.png"} 
              alt="VibeLaunch Logo" 
              width={54} 
              height={54}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                  Features
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-accent/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-foreground/70">Theme</span>
              <ThemeToggle />
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Login
              </a>
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded-lg bg-accent text-white hover:blue-glow transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
