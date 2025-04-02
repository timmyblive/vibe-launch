"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function TopLeftLogo() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Top-left logo */}
      <div className="fixed top-4 left-4 z-30 sidebar-logo">
        {theme === 'dark' ? (
          <Image 
            src="/vibelaunchhorlogodark.png" 
            alt="VibeLaunch Logo" 
            width={120} 
            height={40}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        ) : (
          <Image 
            src="/vibelaunchhorlogolight.png" 
            alt="VibeLaunch Logo" 
            width={120} 
            height={40}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        )}
      </div>
      
      {/* Add CSS to hide the logo when sidebar is open */}
      <style jsx>{`
        @media (max-width: 768px) {
          .sidebar-logo {
            display: none;
          }
        }
        
        #sidebar:not(.translate-x-full) ~ .sidebar-logo {
          opacity: 0;
          pointer-events: none;
        }
        
        .sidebar-logo {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </>
  );
}
