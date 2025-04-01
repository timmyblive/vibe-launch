"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent"
      style={{ 
        backgroundColor: theme === 'dark' ? '#2D7FF9' : '#E2E8F0',
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span
        className={`${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out`}
      >
        {/* Sun icon for light mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-opacity ${
            theme === 'dark' ? 'opacity-0' : 'opacity-100'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F59E0B"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon icon for dark mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-0 h-6 w-6 transition-opacity ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#2D7FF9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
    </button>
  );
}
