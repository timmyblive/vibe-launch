"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "bordered" | "glow";
  onClick?: () => void;
  hoverEffect?: boolean;
  animateIn?: boolean;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  onClick,
  hoverEffect = true,
  animateIn = false,
}: CardProps) {
  // Base classes
  const baseClasses = "rounded-xl transition-all duration-300";
  
  // Variant classes
  const variantClasses = {
    default: "bg-card-bg border border-card-border shadow-card",
    glass: "glass-effect backdrop-blur-md",
    bordered: "border-2 border-accent bg-transparent",
    glow: "bg-card-bg border border-card-border blue-glow",
  };
  
  // Hover effect classes
  const hoverClasses = hoverEffect 
    ? "hover:shadow-card-hover hover:translate-y-[-4px]" 
    : "";
  
  // Animation classes
  const animationClasses = animateIn 
    ? "animate-slide-up" 
    : "";
  
  // Clickable classes
  const clickableClasses = onClick 
    ? "cursor-pointer" 
    : "";
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${animationClasses} ${clickableClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

// Card subcomponents
Card.Header = function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

Card.Body = function CardBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

Card.Title = function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={`text-xl font-bold mb-2 ${className}`}>{children}</h3>;
};

Card.Description = function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-foreground/80 ${className}`}>{children}</p>;
};
