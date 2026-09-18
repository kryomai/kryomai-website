import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Cpu,
  FlaskConical,
  Layers3,
  Network,
  Orbit,
  Workflow,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const architectureSteps = [
  {
    id: "01",
    icon: Layers3,
    title: "Objective Layer",
    description:
      "A user, system, or application defines an objective, task, constraint, or desired outcome.",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "Intelligence Layer",
    description:
      "Context is interpreted, requirements are reasoned about, and an adaptive execution strategy is formed.",
  },
  {
    id: "03",
    icon: Workflow,
    title: "Coordination Layer",
    description:
      "Agents, tools, APIs, data sources, services, and external systems are connected into a coherent workflow.",
  },
  {
    id: "04",
    icon: Network,
    title: "Orchestration Layer",
    description:
      "The system evaluates available resources, execution environments, dependencies, and workload requirements.",
  },
  {
    id: "05",
    icon: Cpu,
    title: "Compute Layer",
    description:
      "Workloads may execute across local, remote, heterogeneous, distributed, and future computational systems.",
  },
];

const computeTargets = [
  {
    icon: Cpu,
    label: "CPU",
    description: "General compute",
  },
  {
    icon: Cpu,
    label: "GPU",
    description: "Parallel compute",
  },
  {
    icon: Cpu,
    label: "NPU",
    description: "AI acceleration",
  },
  {
    icon: Orbit,
    label: "QPU",
    description: "Quantum systems",
  },
  {
    icon: Cloud,
    label: "HPC",
    description: "Distributed systems",
  },
  {
    icon: FlaskConical,
    label: "Research",
    description: "Scientific systems",
  },
];

export function ArchitecturePreview() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      {/* Technical grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 kryomai-grid opacity-30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-16rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-accent/[0.025] blur-3xl"
      />

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Proposed System Architecture</Badge>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                ARCH / 001
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
              A coordination layer between
              <span className="block text-muted-foreground">
                intelligence and computation.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              The proposed KryomAI Intelligence OS architecture is designed
              around a continuous flow from objectives to reasoning,
              coordination, orchestration, and execution.
            </p>
          </div>

          <Button href="/architecture" variant="secondary">
            Explore Full Architecture
            <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* Main Architecture Panel */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-surface/85 shadow-xl backdrop-blur-sm">
          {/* Panel Header */}
          <div className="flex flex-col gap-4 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  System Flow
                </p>
              </div>

              <p className="mt-3 text-sm text-foreground sm:text-base">
                Objective → Intelligence → Coordination → Computation
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Zap size={13} className="text-accent" />

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Conceptual Model
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Vertical Flow */}
            <div className="p-5 sm:p-8 lg:border-r lg:border-border lg:p-10">
              <div className="mb-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  Intelligence Pipeline
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  From intent to coordinated execution
                </p>
              </div>

              <div className="mx-auto max-w-xl">
                {architectureSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === architectureSteps.length - 1;

                  return (
                    <div key={step.id}>
                      <div className="group flex gap-4 sm:gap-5">
                        {/* Step Icon */}
                        <div className="flex shrink-0 flex-col items-center">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10 sm:h-12 sm:w-12">
                            <Icon
                              size={19}
                              className="text-accent transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>

                          {!isLast ? (
                            <div className="my-2 h-8 w-px bg-gradient-to-b from-border-strong to-border" />
                          ) : null}
                        </div>

                        {/* Step Content */}
                        <div className={isLast ? "" : "pb-7"}>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[10px] tracking-[0.18em] text-subtle-foreground">
                              {step.id}
                            </span>

                            <h3 className="text-base font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-lg">
                              {step.title}
                            </h3>
                          </div>

                          <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compute Fabric Visual */}
            <div className="relative overflow-hidden border-t border-border p-5 sm:p-8 lg:border-t-0 lg:p-10">
              <div className="mb-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  Compute Fabric
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Potential execution environments
                </p>
              </div>

              {/* Central Compute Diagram */}
              <div className="relative mx-auto flex min-h-[290px] max-w-md items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-muted/50 p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 kryomai-grid opacity-40"
                />

                {/* Connection Lines */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-border" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-border" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-border" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-border" />

                {/* Outer Orbit */}
                <div className="pointer-events-none absolute h-44 w-44 rounded-full border border-accent/10 sm:h-52 sm:w-52" />

                <div className="pointer-events-none absolute h-32 w-32 rounded-full border border-border sm:h-40 sm:w-40" />

                {/* Central Node */}
                <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-accent/50 bg-surface shadow-[0_0_55px_color-mix(in_srgb,var(--accent)_13%,transparent)] sm:h-28 sm:w-28">
                  <BrainCircuit size={23} className="text-accent" />

                  <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground">
                    KryomAI
                  </span>

                  <span className="mt-1 font-mono text-[8px] text-muted-foreground">
                    INTELLIGENCE
                  </span>
                </div>

                {/* Compute Cards */}
                <div className="absolute left-[5%] top-[9%] rounded-md border border-border bg-surface px-3 py-2 shadow-md transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-2">
                    <Cpu size={13} className="text-technical" />

                    <span className="font-mono text-[9px] text-muted-foreground">
                      CPU
                    </span>
                  </div>
                </div>

                <div className="absolute right-[5%] top-[9%] rounded-md border border-border bg-surface px-3 py-2 shadow-md transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-2">
                    <Cpu size={13} className="text-technical" />

                    <span className="font-mono text-[9px] text-muted-foreground">
                      GPU
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-[9%] left-[5%] rounded-md border border-border bg-surface px-3 py-2 shadow-md transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-2">
                    <Cpu size={13} className="text-technical" />

                    <span className="font-mono text-[9px] text-muted-foreground">
                      NPU
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-[9%] right-[5%] rounded-md border border-border bg-surface px-3 py-2 shadow-md transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-2">
                    <Orbit size={13} className="text-accent" />

                    <span className="font-mono text-[9px] text-muted-foreground">
                      QPU
                    </span>
                  </div>
                </div>
              </div>

              {/* Compute Target List */}
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {computeTargets.map((target) => {
                  const Icon = target.icon;

                  return (
                    <div
                      key={target.label}
                      className="group rounded-md border border-border bg-surface-muted px-3 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-surface"
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          size={13}
                          className="text-technical transition-colors group-hover:text-accent"
                        />

                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground">
                          {target.label}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] leading-4 text-subtle-foreground">
                        {target.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Panel Footer */}
          <div className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                Modular architecture
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
              Designed for evolving compute ecosystems
            </span>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

          <p className="max-w-4xl leading-7">
            This architecture represents a long-term research and platform
            direction. Individual components may exist at different stages of
            development, experimentation, or future exploration.
          </p>
        </div>
      </Container>
    </section>
  );
}