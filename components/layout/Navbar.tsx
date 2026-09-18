"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Intelligence OS",
    href: "/intelligence-os",
  },
  {
    label: "Architecture",
    href: "/architecture",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close mobile menu with Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="kryomai-container">
        <div className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="KryomAI home"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md">
              <Image
                src="/brand/kryomai-logo.jpeg"
                alt="KryomAI logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                KryomAI
              </div>

              <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  {item.label}

                  {active ? (
                    <span className="absolute inset-x-3 -bottom-[1px] h-px bg-accent" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Link
              href="/intelligence-os"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Explore OS
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface-muted"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen ? (
          <div
            className="fixed inset-0 top-16 z-40 bg-background/70 backdrop-blur-sm sm:top-[4.5rem] lg:hidden"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}

        {/* Mobile Navigation Panel */}
        <div
          id="mobile-navigation"
          className={`relative z-50 overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[40rem] border-t border-border opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col gap-1 py-5"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-3 text-sm transition-colors ${
                    active
                      ? "bg-surface-muted text-foreground"
                      : "text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>

                  {active ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  ) : null}
                </Link>
              );
            })}

            <Link
              href="/intelligence-os"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Explore Intelligence OS
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}