import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "./Container";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  withArrow?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  withArrow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus-visible:ring-[#2563EB]",
    secondary: "bg-[#111111] text-white border border-[#333333] hover:bg-[#222222] hover:border-[#444444] focus-visible:ring-white",
    outline: "border border-[#333333] bg-transparent text-white hover:bg-[#111111] focus-visible:ring-white",
    ghost: "bg-transparent text-white hover:bg-[#111111] hover:text-white focus-visible:ring-white",
  };

  const arrowClass = "w-4 h-4 transition-transform group-hover:translate-x-1";

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className={arrowClass} />}
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], "group", className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
