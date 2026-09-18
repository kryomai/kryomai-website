"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-9 w-9 rounded-md border border-border"
      />
    );
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div
      className="flex items-center gap-1 rounded-md border border-border bg-surface p-1"
      aria-label="Theme selection"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Use light theme"
        title="Light mode"
        className={`flex h-7 w-7 items-center justify-center rounded-sm transition-colors ${
          activeTheme === "light"
            ? "bg-background text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun size={15} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Use dark theme"
        title="Dark mode"
        className={`flex h-7 w-7 items-center justify-center rounded-sm transition-colors ${
          activeTheme === "dark"
            ? "bg-background text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon size={15} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-label="Use system theme"
        title="System theme"
        className={`flex h-7 w-7 items-center justify-center rounded-sm transition-colors ${
          theme === "system"
            ? "bg-background text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Monitor size={15} />
      </button>
    </div>
  );
}