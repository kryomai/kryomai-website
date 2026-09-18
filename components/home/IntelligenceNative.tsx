import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  CircleDot,
  Cpu,
  GitBranch,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

const comparisons = [
  {
    traditional: "Instruction-driven execution",
    future: "Goal-driven execution",
  },
  {
    traditional: "Static workflows",
    future: "Adaptive workflows",
  },
  {
    traditional: "Applications operate in isolation",
    future: "Intelligence coordinates multiple systems",
  },
  {
    traditional: "Compute is manually selected",
    future: "Compute can be dynamically coordinated",
  },
  {
    traditional: "Human manages every tool interaction",
    future: "Intelligent systems manage task execution",
  },
];

const principles = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Understand",
    description:
      "Systems interpret objectives, context, constraints, and desired outcomes.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Reason",
    description:
      "Intelligence decomposes complex objectives into executable steps.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Coordinate",
    description:
      "Software, tools, agents, and computational resources work together.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Execute",
    description:
      "Tasks are carried out across the most appropriate available systems.",
  },
];

export function IntelligenceNative() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-14rem] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-accent/[0.035] blur-3xl" />
        <div className="absolute left-[-12rem] bottom-[-14rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.025] blur-3xl" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Badge>Why Intelligence-Native Computing</Badge>

              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                MODEL / 002
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
              From executing instructions
              <span className="block text-muted-foreground">
                to coordinating intelligence.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Traditional computing is organized around applications and
              instructions. Intelligence-native computing is organized around
              objectives, reasoning, coordination, and adaptive execution.
            </p>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            A Different Computing Model
          </div>
        </div>

        {/* Comparison Panel */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Panel Header */}
          <div className="grid border-b border-border md:grid-cols-2">
            <div className="border-b border-border px-6 py-5 md:border-b-0 md:border-r sm:px-8">
              <div className="flex items-center gap-3">
                <CircleDot size={16} className="text-muted-foreground" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Conventional Model
                </span>
              </div>
            </div>

            <div className="bg-accent/[0.025] px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <Bot size={16} className="text-accent" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Intelligence-Native Direction
                </span>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div>
            {comparisons.map((item, index) => (
              <div
                key={item.traditional}
                className="group grid border-b border-border last:border-b-0 md:grid-cols-2"
              >
                <div className="flex items-center gap-4 border-b border-border px-6 py-5 transition-colors duration-200 group-hover:bg-surface-elevated md:border-b-0 md:border-r sm:px-8">
                  <span className="font-mono text-[10px] text-subtle-foreground">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {item.traditional}
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-accent/[0.015] px-6 py-5 transition-colors duration-200 group-hover:bg-accent/[0.04] sm:px-8">
                  <Check size={15} className="shrink-0 text-accent" />

                  <span className="text-sm font-medium text-foreground">
                    {item.future}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="flex flex-col justify-between gap-3 border-t border-border bg-surface-muted px-6 py-4 sm:flex-row sm:items-center sm:px-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle-foreground">
              Computing Paradigm Shift
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
              Instructions → Objectives → Execution
            </span>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  Core Operating Principles
                </p>

                <span className="h-px w-8 bg-border-strong" />
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Intelligence as a system capability
              </h3>
            </div>

            <ArrowRight
              size={20}
              className="hidden text-subtle-foreground sm:block"
            />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="group relative overflow-hidden bg-surface p-6 transition-colors duration-300 hover:bg-surface-elevated sm:p-7"
                >
                  {/* Hover accent */}
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon
                        size={20}
                        className="text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.18em] text-subtle-foreground">
                      {principle.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-base font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                    {principle.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}