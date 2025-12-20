import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
}) {
  const styles = {
    primary:
      "bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] hover:bg-[linear-gradient(150.92deg,#F98D1B_9.11%,#FFC180_70.58%)] text-white",
    secondary:
      "bg-[#0A243F] hover:bg-[#081b2f] text-dark",
    outline:
      "border border-[#0A243F] text-[#0A243F] hover:bg-[#0A243F] hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={clsx(
        "px-5 py-2 rounded-xl text-sm font-medium transition duration-200",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}