import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/formatters";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon" | "none";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 cursor-pointer",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 cursor-pointer",
    ghost: "hover:bg-gray-100 text-gray-700 cursor-pointer",
    icon: "hover:bg-gray-100 text-gray-600 rounded-full p-2 cursor-pointer",
    none: "bg-gray-100 text-white  cursor-pointer",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-md",
    lg: "px-6 py-3 text-base rounded-md",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        variant !== "icon" && sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
