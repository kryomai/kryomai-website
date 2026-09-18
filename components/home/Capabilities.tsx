import {
  ArrowUpRight,
  Bot,
  Code2,
  Cpu,
  FlaskConical,
  Laptop,
  Network,
  Orbit,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    number: "01",
    icon: Bot,
    category: "INTELLIGENCE",
    title: "Intelligent Agents",
    description:
      "Agent-based systems designed to interpret objectives, reason about tasks, use tools, and execute multi-step workflows.",
    status: "In Development",
    statusType: "development",
  },
  {
    number: "02",
    icon: Laptop,
    category: "INTERACTION",
    title: "Computer Interaction",
    description:
      "Research into intelligent systems that can interact with local computer environments through controlled and observable interfaces.",
    status: "Prototype Direction",
    statusType: "prototype",
  },
  {
    number: "03",
    icon: Workflow,
    category: "ORCHESTRATION",
    title: "Task Orchestration",
    description:
      "Coordinating agents, tools, services, dependencies, and execution steps through an intelligent control layer.",
    status: "In Development",
    statusType: "development",
  },
  {
    number: "04",
    icon: Network,
    category: "CONNECTIVITY",
    title: "Tool & API Coordination",
    description:
      "Connecting intelligent models with APIs, external tools, data sources, services, and software systems.",
    status: "Prototype Direction",
    statusType: "prototype",
  },
  {
    number: "05",
    icon: Cpu,
    category: "COMPUTE FABRIC",
    title: "Heterogeneous Compute",
    description:
      "Long-term exploration of workload coordination across CPUs, GPUs, NPUs, cloud systems, distributed infrastructure, and future compute.",
    status: "Research",
    statusType: "research",
  },
  {
    number: "06",
    icon: FlaskConical,
    category: "SCIENTIFIC SYSTEMS",
    title: "Research Infrastructure",
    description:
      "Foundational architecture for intelligent scientific workflows, experimentation, simulation, discovery, and advanced computational research.",
    status: "Research",
    statusType: "research",
  },
];

const statusClasses = {
  development: "border-accent/30 bg-accent/10 text-accent",
  prototype: "border-technical/30 bg-technical-soft text-technical",
  research: "border-border bg-surface-muted text-muted-foreground",
};

export function Capabilities() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 kryomai-grid opacity-25" />

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Platform Capabilities</Badge>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                CAPABILITIES / 006
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
              Building the components of
              <span className="block text-muted-foreground">
                an intelligent computing platform.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              KryomAI is exploring and developing connected capabilities that
              may form the foundation of Intelligence OS over time.
            </p>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground lg:flex">
            <Orbit size={14} className="text-accent" />
            Modular capability stack
          </div>
        </div>

        {/* Capability Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.number}
                className="group relative flex min-h-[315px] flex-col bg-surface p-6 transition-colors duration-300 hover:bg-surface-elevated sm:p-7"
              >
                {/* Hover Accent Line */}
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/40">
                    <Icon
                      size={20}
                      className="text-accent transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.18em] text-subtle-foreground">
                    {capability.number}
                  </span>
                </div>

                {/* Category */}
                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.2em] text-subtle-foreground">
                  {capability.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {capability.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                  <span
                    className={[
                      "inline-flex rounded-full border px-2.5 py-1",
                      "font-mono text-[9px] uppercase tracking-[0.14em]",
                      statusClasses[
                        capability.statusType as keyof typeof statusClasses
                      ],
                    ].join(" ")}
                  >
                    {capability.status}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-subtle-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 flex items-start gap-3">
          <Code2 size={17} className="mt-1 shrink-0 text-accent" />

          <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
            These capabilities represent a staged development path. Some are
            actively being implemented, while others remain prototype
            directions, research areas, or long-term architectural
            possibilities.
          </p>
        </div>
      </Container>
    </section>
  );
}