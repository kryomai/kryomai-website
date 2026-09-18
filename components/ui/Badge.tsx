import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  dot?: boolean;
};

export function Badge({
  children,
  className = "",
  dot = true,
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2",
        "font-mono text-[10px] font-medium uppercase tracking-[0.22em]",
        "leading-none text-accent",
        className,
      ].join(" ")}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className="relative flex h-1.5 w-1.5 shrink-0"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />

          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ) : null}

      <span>{children}</span>
    </span>
  );
}