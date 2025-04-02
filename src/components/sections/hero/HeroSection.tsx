"use client";

import React, { useState, useRef, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isSafari, setIsSafari] = useState(false);
  const splineRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect Safari browser
  useEffect(() => {
    const isSafariBrowser = 
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    setIsSafari(isSafariBrowser);
  }, []);

  // Handle cursor tracking via mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !splineRef.current) return;
      
      // Get container bounds
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate relative position within container (0 to 1)
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Pass mouse position to Spline if available
      try {
        if (splineRef.current.setVariable) {
          splineRef.current.setVariable('mouseX', x * 2 - 1); // Convert to -1 to 1 range
          splineRef.current.setVariable('mouseY', -(y * 2 - 1)); // Convert to -1 to 1 range and invert Y
        }
      } catch (error) {
        // Silently handle errors for Safari
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Safari fallback component
  const SafariFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div 
        className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 animate-float"
        style={{
          boxShadow: '0 0 30px rgba(45, 127, 249, 0.5)',
          transform: 'translateZ(0)', // Force hardware acceleration
          WebkitTransform: 'translateZ(0)',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-48 h-48 rounded-xl bg-black flex items-center justify-center">
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-white"></div>
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Fallback background */}
      <div className={`absolute inset-0 z-0 transition-colors duration-500 ${
        isLoading ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-transparent'
      }`} />

      {/* Split layout for text and 3D model */}
      <div className="flex h-full">
        {/* Text side (left) */}
        <div className="w-full md:w-1/2 z-20 flex items-center pointer-events-none">
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

        {/* 3D model side (right) - takes full width on mobile, half on desktop */}
        <div className="absolute inset-0 md:left-1/3 z-10" ref={containerRef}>
          {isSafari ? (
            <SafariFallback />
          ) : (
            <Spline 
              scene="https://prod.spline.design/XCi9THQBrzQxCOnd/scene.splinecode"
              onLoad={(spline) => {
                splineRef.current = spline;
                setIsLoading(false);
                console.log('Spline scene loaded');
              }}
              style={{
                transform: 'translateZ(0)', // Force hardware acceleration
                WebkitTransform: 'translateZ(0)',
              }}
            />
          )}
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="animate-pulse text-white/80">Loading interactive experience...</div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30 pointer-events-none">
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
          style={{
            transform: 'translateZ(0)', // Force hardware acceleration
            WebkitTransform: 'translateZ(0)',
          }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
