"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function WaitlistSection() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Safari-friendly styles
  const safariStyles = {
    container: {
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
    } as React.CSSProperties,
    gradientBg: {
      background: 'linear-gradient(to right, #2563eb, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    } as React.CSSProperties,
    blurEffect: {
      WebkitBackdropFilter: 'blur(24px)',
      backdropFilter: 'blur(24px)',
    } as React.CSSProperties
  };

  return (
    <section className="relative py-16 overflow-hidden" style={safariStyles.container}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"
        style={safariStyles.container}
      ></div>
      
      {/* Futuristic grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6TTI0IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl"
            style={{
              ...safariStyles.blurEffect,
              ...safariStyles.container
            }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the Waitlist
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Be the first to experience the future of collaboration. Early access members get exclusive benefits.
              </p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4"
                      required
                      style={safariStyles.container}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                    style={safariStyles.container}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {isSubmitting ? "Joining..." : "Join Now"}
                  </button>
                </div>
                {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
              </form>
            ) : (
              <div 
                className="text-center p-6 bg-white/5 rounded-lg border border-white/10"
                style={safariStyles.container}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">You're on the list!</h3>
                <p className="text-white/70">We'll notify you when we're ready to launch. Stay tuned!</p>
              </div>
            )}
            
            {/* Futuristic decorative elements */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20"
              style={safariStyles.container}
            ></div>
            <div 
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"
              style={safariStyles.container}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
