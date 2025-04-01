import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        dark: {
          primary: "#121212", // Deep black
          accent: "#2D7FF9", // Blue accent
        },
        // Light theme colors
        light: {
          primary: "#FAFAFA", // Clean white
          accent: "#2D7FF9", // Same blue accent
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "SF Pro", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "headline": ["clamp(2.25rem, 5vw, 3rem)", { // 36-48px
          lineHeight: "1.2",
          fontWeight: "700",
        }],
        "body": ["clamp(1rem, 1.125vw, 1.125rem)", { // 16-18px
          lineHeight: "1.6",
        }],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 30px rgba(45, 127, 249, 0.12)',
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(45, 127, 249, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(45, 127, 249, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropFilter: {
        'blur': 'blur(8px)',
      },
    },
  },
  plugins: [],
};

export default config;
