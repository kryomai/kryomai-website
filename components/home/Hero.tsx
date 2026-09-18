import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  Network,
  Orbit,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0 kryomai-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 kryomai-radial" />

      <div className="pointer-events-none absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute right-[-12rem] top-[18%] h-[24rem] w-[24rem] rounded-full bg-technical/[0.025] blur-3xl" />

      <Container className="relative">
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-16 py-20 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:py-28">
          {/* Left Content */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Intelligence-Native Computing Platform</Badge>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                KRYOMAI / 001
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-foreground sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              Connecting
              <span className="block">Intelligence</span>
              <span className="block text-muted-foreground">
                with Computation.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              KryomAI is building the foundation for intelligence-native
              computing — connecting intelligent software, heterogeneous
              computation, and complex systems through a unified architecture.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/intelligence-os">
                Explore Intelligence OS
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>

              <Button href="/architecture" variant="secondary">
                Study the Architecture
                <ArrowDownRight
                  size={15}
                  className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Button>
            </div>

            {/* Status Line */}
            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-3 text-xs text-subtle-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>

                <span className="font-mono uppercase tracking-[0.16em]">
                  Platform development in progress
                </span>
              </div>

              <span className="hidden h-3 w-px bg-border sm:block" />

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                Future compute infrastructure
              </span>
            </div>

            {/* Small Thesis Markers */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Focus
                </p>
                <p className="mt-1 text-xs text-foreground">
                  Intelligence
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Layer
                </p>
                <p className="mt-1 text-xs text-foreground">
                  Infrastructure
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Direction
                </p>
                <p className="mt-1 text-xs text-foreground">
                  Long-Term
                </p>
              </div>
            </div>
          </div>

          {/* Right Technical Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface/75 p-4 shadow-2xl backdrop-blur-md sm:p-6">
              {/* Technical Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    KryomAI Core
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-subtle-foreground">
                    SYS.001
                  </span>

                  <Zap size={12} className="text-accent" />
                </div>
              </div>

              {/* Main Intelligence Visualization */}
              <div className="relative flex h-[68%] items-center justify-center">
                {/* Orbit Rings */}
                <div className="absolute h-[78%] w-[78%] rounded-full border border-border/80" />

                <div className="absolute h-[60%] w-[60%] rounded-full border border-border" />

                <div className="absolute h-[42%] w-[42%] rounded-full border border-accent/30" />

                <div className="absolute h-[78%] w-[78%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-border" />

                <div className="absolute h-[60%] w-[60%] animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-accent/20" />

                {/* Connection Lines */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-border" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-border" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-border/70" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-border/70" />

                {/* Central Node */}
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-accent/50 bg-surface-elevated shadow-[0_0_70px_color-mix(in_srgb,var(--accent)_16%,transparent)] sm:h-32 sm:w-32">
                  <div className="absolute inset-2 rounded-full border border-accent/10" />

                  <Sparkles size={25} className="relative text-accent" />

                  <span className="relative mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground">
                    Intelligence
                  </span>

                  <span className="relative mt-1 font-mono text-[8px] text-muted-foreground">
                    ACTIVE LAYER
                  </span>
                </div>

                {/* Network Node */}
                <div className="absolute left-[1%] top-[23%] flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg sm:left-[5%] sm:px-3">
                  <Network size={14} className="text-technical" />

                  <span className="font-mono text-[8px] text-muted-foreground sm:text-[9px]">
                    NETWORK
                  </span>
                </div>

                {/* Compute Node */}
                <div className="absolute right-[1%] top-[24%] flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg sm:right-[3%] sm:px-3">
                  <Cpu size={14} className="text-technical" />

                  <span className="font-mono text-[8px] text-muted-foreground sm:text-[9px]">
                    COMPUTE
                  </span>
                </div>

                {/* Orchestration Node */}
                <div className="absolute bottom-[13%] left-[2%] flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg sm:left-[7%] sm:px-3">
                  <Workflow size={14} className="text-accent" />

                  <span className="font-mono text-[8px] text-muted-foreground sm:text-[9px]">
                    ORCHESTRATION
                  </span>
                </div>

                {/* Execution Node */}
                <div className="absolute bottom-[12%] right-[1%] flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg sm:right-[5%] sm:px-3">
                  <ArrowDownRight size={14} className="text-accent" />

                  <span className="font-mono text-[8px] text-muted-foreground sm:text-[9px]">
                    EXECUTION
                  </span>
                </div>

                {/* Small Orbit Markers */}
                <div className="absolute left-[21%] top-[12%] h-2 w-2 rounded-full bg-technical" />

                <div className="absolute right-[22%] top-[15%] h-1.5 w-1.5 rounded-full bg-accent" />

                <div className="absolute bottom-[9%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-technical" />

                <div className="absolute bottom-[28%] right-[18%] h-2 w-2 rounded-full border border-accent/70" />
              </div>

              {/* System Metrics */}
              <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 sm:gap-3">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground sm:text-[9px]">
                    Layer
                  </p>

                  <p className="mt-1 text-[11px] text-foreground sm:text-xs">
                    Intelligence
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground sm:text-[9px]">
                    Mode
                  </p>

                  <p className="mt-1 text-[11px] text-foreground sm:text-xs">
                    Adaptive
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground sm:text-[9px]">
                    Status
                  </p>

                  <p className="mt-1 text-[11px] text-accent sm:text-xs">
                    Research
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Technical Label */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-md border border-border bg-surface px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <Orbit size={13} className="text-accent" />

                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle-foreground">
                  Intelligence Infrastructure
                </p>
              </div>

              <p className="mt-1 text-xs text-foreground">
                A unified layer for future computation
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}