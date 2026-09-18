import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Layers3,
  Network,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const layers = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Intelligence Layer",
    description:
      "Reasoning, planning, learning, decision-making, and intelligent task understanding.",
    tag: "Cognitive Core",
  },
  {
    number: "02",
    icon: Network,
    title: "Coordination Layer",
    description:
      "Connects intelligent agents, software tools, services, data, and distributed systems.",
    tag: "System Connectivity",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Computation Layer",
    description:
      "Coordinates available computational resources across CPUs, GPUs, NPUs, and future compute systems.",
    tag: "Compute Fabric",
  },
];

export function PlatformIntroduction() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-15rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-accent/[0.035] blur-3xl" />

        <div className="absolute bottom-[-12rem] right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-technical/[0.025] blur-3xl" />

        <div className="absolute inset-0 kryomai-grid opacity-30" />
      </div>

      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Introductory Content */}
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>What We Are Building</Badge>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                PLATFORM / 003
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
              An intelligence layer for the next generation of computing.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Today’s computers execute instructions. Future systems will
              increasingly understand objectives, reason about problems,
              select tools, coordinate resources, and adapt their execution.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              KryomAI Intelligence OS is a long-term platform direction for
              making intelligence a native part of how computational systems
              operate.
            </p>

            <div className="mt-8">
              <Button href="/intelligence-os" variant="secondary">
                Discover Intelligence OS
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>
            </div>

            {/* Technical Metadata */}
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-5 border-t border-border pt-5 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Direction
                </p>

                <p className="mt-1 text-xs text-foreground">
                  Long-Term Platform
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Architecture
                </p>

                <p className="mt-1 text-xs text-foreground">
                  Intelligence-Native
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                  Status
                </p>

                <p className="mt-1 text-xs text-accent">
                  Research & Development
                </p>
              </div>
            </div>
          </div>

          {/* Layer Cards */}
          <div className="relative space-y-4">
            {/* Vertical Connector */}
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-[21px] top-10 hidden w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:block"
            />

            {layers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.number}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated hover:shadow-xl sm:p-7"
                >
                  {/* Hover Accent */}
                  <div className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Top Technical Line */}
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent/60 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex gap-5">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon
                        size={20}
                        className="text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-base font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-lg">
                              {layer.title}
                            </h3>

                            {index === 0 ? (
                              <span className="hidden rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-accent sm:inline-flex">
                                Core
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-subtle-foreground">
                            {layer.tag}
                          </p>
                        </div>

                        <span className="font-mono text-[10px] tracking-[0.18em] text-subtle-foreground">
                          {layer.number}
                        </span>
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                        {layer.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-border-strong transition-colors duration-300 group-hover:bg-accent" />

                        <span>
                          System Layer {layer.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 border-t border-border pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                <Layers3 size={18} className="text-accent" />
              </div>

              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                The objective is not simply to build another AI application,
                but to explore the infrastructure required for intelligence to
                coordinate software, systems, and computation.
              </p>
            </div>

            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground lg:text-right">
              Platform Thesis
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}