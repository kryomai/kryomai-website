import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const variants = {
  primary:
    "bg-accent text-accent-foreground shadow-sm hover:bg-accent-hover hover:shadow-md",

  secondary:
    "border border-border bg-surface text-foreground hover:border-border-strong hover:bg-surface-elevated",

  ghost:
    "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = [
    "group inline-flex min-h-11 items-center justify-center gap-2",
    "rounded-md px-5 py-3",
    "text-sm font-medium",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-accent",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}