"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
  icon,
  fullWidth = false,
}: ButtonProps) {
  // Base classes
  const baseClasses = "relative rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2";
  
  // Size classes
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-accent text-white hover:shadow-lg hover:shadow-accent/20 hover:translate-y-[-2px] active:translate-y-[0px]",
    secondary: "bg-foreground text-background hover:bg-opacity-80",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white",
  };

  // Full width class
  const widthClass = fullWidth ? "w-full" : "";
  
  // Disabled class
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  // Combine all classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;
  
  // Glow effect for primary variant
  const glowEffect = variant === "primary" && !disabled ? "after:content-[''] after:absolute after:inset-0 after:rounded-full after:opacity-0 after:transition-opacity hover:after:opacity-100 after:bg-accent after:blur-xl after:-z-10" : "";
  
  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={`${classes} ${glowEffect}`}>
        {icon && <span className="button-icon">{icon}</span>}
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      className={`${classes} ${glowEffect}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
}
