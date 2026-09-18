import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/ui/Container";

const footerNavigation = [
  {
    title: "Platform",
    links: [
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
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Roadmap",
        href: "/roadmap",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    handle: "@kryomai",
    href: "https://x.com/kryomai",
    mark: "𝕏",
  },
  {
    label: "Instagram",
    handle: "@kryomai",
    href: "https://instagram.com/kryomai",
    mark: "IG",
  },
  {
    label: "GitHub",
    handle: "@kryomai",
    href: "https://github.com/kryomai",
    mark: "GH",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-14rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-accent/[0.035] blur-3xl" />
        <div className="absolute bottom-[-16rem] right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.025] blur-3xl" />
      </div>

      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand Column */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="KryomAI home"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
                <Image
                  src="/brand/kryomai-logo.jpeg"
                  alt="KryomAI logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <div className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                  KryomAI
                </div>

                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Intelligence Infrastructure
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              Building the foundation for intelligence-native computing through
              intelligent software, orchestration, and future computational
              systems.
            </p>

            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Connecting Intelligence with Computation
            </div>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Start a conversation
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Platform Navigation */}
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-subtle-foreground">
                {group.title}
              </h3>

              <nav className="mt-6 flex flex-col gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Social Section */}
        <div className="border-t border-border py-9">
          <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-subtle-foreground">
                  Connect with KryomAI
                </span>

                <span className="h-px w-10 bg-border" />
              </div>

              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                Follow platform updates, technical experiments, research
                progress, open-source work, and future announcements.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`KryomAI ${social.label} ${social.handle}`}
                  className="group inline-flex min-w-[9.5rem] items-center gap-3 rounded-md border border-border bg-background px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded border border-border bg-surface text-[10px] font-bold text-foreground">
                    {social.mark}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-foreground">
                      {social.label}
                    </span>

                    <span className="mt-0.5 block font-mono text-[9px] text-muted-foreground">
                      {social.handle}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="ml-auto text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Open Source Strip */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <p className="text-sm font-medium text-foreground">
                  KryomAI Open Source
                </p>
              </div>

              <p className="mt-2 max-w-xl text-xs leading-6 text-muted-foreground">
                Explore public repositories, experiments, developer tools, and
                selected research projects.
              </p>
            </div>

            <a
              href="https://github.com/kryomai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Explore GitHub
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-border py-7 text-xs text-subtle-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KryomAI. All rights reserved.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="mailto:hello@kryomai.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail size={13} />
              hello@kryomai.com
            </a>

            <span className="hidden text-border sm:inline">/</span>

            <p className="font-mono text-[9px] uppercase tracking-[0.16em]">
              Intelligence Infrastructure
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}