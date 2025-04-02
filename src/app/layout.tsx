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

// Safari detection function
const safariDetectionScript = `
  (function() {
    window.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || 
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes('AppleWebKit') && !navigator.userAgent.includes('Chrome'));
      
    if (window.isSafari) {
      document.documentElement.classList.add('safari');
      
      // Apply Safari-specific fixes
      document.documentElement.style.setProperty('--webkit-backdrop-filter-fix', 'none');
      document.documentElement.style.setProperty('--safari-overflow-fix', 'hidden');
      
      // Force hardware acceleration
      document.body.style.transform = 'translateZ(0)';
      document.body.style.webkitTransform = 'translateZ(0)';
      document.body.style.backfaceVisibility = 'hidden';
      document.body.style.webkitBackfaceVisibility = 'hidden';
    }
  })();
`;

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
        
        {/* Safari detection and fixes */}
        <script dangerouslySetInnerHTML={{ __html: safariDetectionScript }} />
        
        {/* Polyfills for Safari */}
        <Script
          id="safari-polyfills"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Backdrop filter polyfill for Safari
              if (window.isSafari) {
                // Fix for backdrop-filter
                CSS.supports('backdrop-filter', 'blur(1px)') || 
                  document.write('<script src="https://unpkg.com/backdrop-filter-polyfill@2.0.0/dist/backdrop-filter-polyfill.min.js"><\\/script>');
                
                // Fix for WebGL issues in Safari
                window.addEventListener('load', function() {
                  const canvases = document.querySelectorAll('canvas');
                  canvases.forEach(canvas => {
                    canvas.style.transform = 'translateZ(0)';
                    canvas.style.webkitTransform = 'translateZ(0)';
                  });
                });
              }
            `,
          }}
        />
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
      </body>
    </html>
  );
}
