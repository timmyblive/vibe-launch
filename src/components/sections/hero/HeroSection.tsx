"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

// Custom 3D-like component that works in all browsers and environments
const VisualExperience = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Handle mouse movement for interactive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized -1 to 1)
      const x = ((e.clientX - centerX) / (rect.width / 2)) * 10;
      const y = ((e.clientY - centerY) / (rect.height / 2)) * 10;
      
      setRotation({ x: -y, y: x });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center" ref={containerRef}>
      <div 
        className="relative w-80 h-80 flex items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Main glowing orb */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
          style={{
            boxShadow: "0 0 60px rgba(45, 127, 249, 0.5)",
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.1s ease-out",
            animation: "pulse 4s infinite ease-in-out",
          }}
        ></div>
        
        {/* Inner orb */}
        <div 
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-purple-700"
          style={{
            boxShadow: "0 0 40px rgba(45, 127, 249, 0.7)",
            transform: `perspective(1000px) rotateX(${rotation.x * 0.8}deg) rotateY(${rotation.y * 0.8}deg)`,
            transition: "transform 0.1s ease-out",
            animation: "pulse 4s infinite ease-in-out 0.5s",
          }}
        ></div>
        
        {/* Core */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-black flex items-center justify-center"
          style={{
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5) inset",
            transform: `perspective(1000px) rotateX(${rotation.x * 0.6}deg) rotateY(${rotation.y * 0.6}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <div className="w-6 h-6 rounded-full bg-white" style={{ animation: "pulse 1.5s infinite" }}></div>
              <div className="w-6 h-6 rounded-full bg-white" style={{ animation: "pulse 1.5s infinite 0.75s" }}></div>
            </div>
          </div>
        </div>
        
        {/* Orbiting particles */}
        <div 
          className="absolute w-full h-full" 
          style={{ 
            animation: "spin 10s linear infinite",
            transform: `perspective(1000px) rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-400"></div>
        </div>
        <div 
          className="absolute w-full h-full" 
          style={{ 
            animation: "spin 15s linear infinite reverse",
            transform: `perspective(1000px) rotateX(${rotation.x * 0.4}deg) rotateY(${rotation.y * 0.4}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-400"></div>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Only run on client-side
  useEffect(() => {
    setIsMounted(true);
    // Simulate loading for a smoother experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6TTI0IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Split layout for text and visual */}
      <div className="flex h-full">
        {/* Text side (left) */}
        <div className="w-full md:w-1/2 z-20 flex items-center">
          <div className="container mx-auto px-6 md:pl-12 lg:pl-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 max-w-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Vibing is better
              </span>
              <br />
              <span className="text-white drop-shadow-lg">with friends</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl drop-shadow-sm">
              Join our community of creators and innovators building the future together.
            </p>
          </div>
        </div>

        {/* Visual side (right) */}
        <div className="absolute inset-0 md:left-1/2 z-10">
          {!isMounted ? (
            // Initial loading state (server-side and first client render)
            <div className="w-full h-full"></div>
          ) : (
            // Visual experience for all browsers
            <VisualExperience />
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
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
          className="text-white drop-shadow-lg"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
