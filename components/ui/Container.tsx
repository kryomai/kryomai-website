import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
};

export function Container({
  children,
  className = "",
  as: Element = "div",
}: ContainerProps) {
  return (
    <Element className={`kryomai-container ${className}`}>
      {children}
    </Element>
  );
}