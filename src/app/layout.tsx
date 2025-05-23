import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import TopLeftLogo from "@/components/layout/TopLeftLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VibeLaunch - Modern Tech Landing Page",
  description: "A clean, minimalist design with futuristic elements, subtle blue glow effects, and interactive components.",
  keywords: "tech, landing page, modern, futuristic, UI, design",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Safari-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TopLeftLogo />
          <Sidebar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        
        {/* Safari detection script - client-side only */}
        <Script
          id="safari-detection"
          strategy="afterInteractive"
        >
          {`
            (function() {
              if (typeof window !== 'undefined') {
                const ua = window.navigator.userAgent;
                const isSafari = 
                  /^((?!chrome|android).)*safari/i.test(ua) || 
                  /iPad|iPhone|iPod/.test(ua) ||
                  (ua.includes('AppleWebKit') && !ua.includes('Chrome'));
                
                if (isSafari) {
                  document.documentElement.classList.add('safari');
                }
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
