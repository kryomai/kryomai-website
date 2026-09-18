import type { Metadata } from "next";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "System Architecture",
  description:
    "Explore the proposed layered architecture behind KryomAI Intelligence OS and intelligence-native computing.",
};

const architectureLayers = [
  {
    number: "01",
    icon: BrainCircuit,
    name: "Objective Layer",
    shortName: "Intent",
    label: "Understand the goal",
    description:
      "Receives user goals, tasks, constraints, context, and desired outcomes as the starting point for system activity.",
    examples: ["User objectives", "Natural language", "Task constraints"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    name: "Intelligence Layer",
    shortName: "Reasoning",
    label: "Interpret and plan",
    description:
      "Interprets objectives, reasons over available context, creates plans, evaluates decisions, and selects appropriate actions.",
    examples: ["Planning", "Reasoning", "Decision-making"],
  },
  {
    number: "03",
    icon: Network,
    name: "Coordination Layer",
    shortName: "Coordination",
    label: "Connect capabilities",
    description:
      "Connects agents, models, tools, APIs, services, data sources, and task dependencies into coordinated workflows.",
    examples: ["Agent coordination", "Tool routing", "Task dependencies"],
  },
  {
    number: "04",
    icon: Workflow,
    name: "Orchestration Layer",
    shortName: "Execution Control",
    label: "Manage operations",
    description:
      "Controls execution state, scheduling, retries, permissions, monitoring, feedback, and workflow progression.",
    examples: ["Scheduling", "State management", "Execution control"],
  },
  {
    number: "05",
    icon: Cpu,
    name: "Computation Layer",
    shortName: "Compute",
    label: "Perform the work",
    description:
      "Connects workloads with local, remote, specialized, and heterogeneous computational resources.",
    examples: ["CPU", "GPU / NPU", "Cloud / specialized compute"],
  },
];

const computeTargets = [
  {
    icon: Cpu,
    title: "CPU Systems",
    description:
      "General-purpose computation, operating system tasks, and local execution.",
  },
  {
    icon: Zap,
    title: "GPU / NPU",
    description:
      "Accelerated inference, parallel workloads, and specialized AI processing.",
  },
  {
    icon: Cloud,
    title: "Cloud Compute",
    description:
      "Remote scalable resources, external model providers, and distributed execution.",
  },
  {
    icon: Database,
    title: "Data Systems",
    description:
      "Memory, storage, retrieval, databases, context, and structured information access.",
  },
  {
    icon: CircuitBoard,
    title: "Future Accelerators",
    description:
      "Potential interfaces for emerging specialized and non-traditional processors.",
  },
  {
    icon: Network,
    title: "Distributed Systems",
    description:
      "Connected machines, clusters, services, and geographically distributed resources.",
  },
];

const architecturePrinciples = [
  {
    icon: Layers3,
    title: "Modularity",
    description:
      "Each layer should evolve independently without tightly coupling the entire system.",
  },
  {
    icon: ShieldCheck,
    title: "Control & Observability",
    description:
      "Execution should remain inspectable, permission-aware, measurable, and controllable.",
  },
  {
    icon: Network,
    title: "Interoperability",
    description:
      "The system should connect different models, tools, services, and compute environments.",
  },
  {
    icon: Code2,
    title: "Extensibility",
    description:
      "New capabilities, agents, tools, and execution providers should be addable over time.",
  },
];

const executionSteps = [
  "Receive objective",
  "Interpret and plan",
  "Select tools and resources",
  "Execute coordinated tasks",
  "Evaluate results",
  "Return outcome",
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border py-24 sm:py-32 lg:py-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 kryomai-grid opacity-70"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-14rem] top-[-16rem] h-[40rem] w-[40rem] rounded-full bg-accent/[0.045] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-16rem] right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-technical/[0.025] blur-3xl"
          />

          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
              <div className="relative max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Technical Architecture</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                    ARCHITECTURE / 002
                  </span>
                </div>

                <h1 className="mt-7 text-5xl font-semibold leading-[0.97] tracking-[-0.065em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
                  The architecture of
                  <span className="block text-muted-foreground">
                    intelligent execution.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">
                  A layered system model connecting objectives, intelligence,
                  coordination, orchestration, and computation.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  This architecture represents the current technical direction
                  being explored for KryomAI Intelligence OS. Individual
                  components and implementation details will evolve through
                  engineering and research.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="#system-flow">
                    Study the System Flow
                    <ArrowDown size={16} />
                  </Button>

                  <Button href="/intelligence-os" variant="secondary">
                    Explore Intelligence OS
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </div>

              {/* Architecture Hero Visual */}
              <div className="relative mx-auto w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-5 shadow-2xl backdrop-blur-md sm:p-7">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Architecture Map
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-subtle-foreground">
                      FLOW.002
                    </span>
                  </div>

                  <div className="relative mt-6 space-y-2">
                    {[
                      ["01", "Objective", "Intent"],
                      ["02", "Intelligence", "Reasoning"],
                      ["03", "Coordination", "Connect"],
                      ["04", "Orchestration", "Control"],
                      ["05", "Computation", "Execute"],
                    ].map(([number, title, label], index) => (
                      <div key={number}>
                        <div className="group flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 transition-colors hover:border-accent/40 hover:bg-surface-elevated">
                          <span className="font-mono text-[9px] text-accent">
                            {number}
                          </span>

                          <div className="h-1.5 w-1.5 rounded-full bg-border-strong transition-colors group-hover:bg-accent" />

                          <span className="flex-1 text-sm text-foreground">
                            {title}
                          </span>

                          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-subtle-foreground">
                            {label}
                          </span>
                        </div>

                        {index < 4 ? (
                          <div className="flex justify-center py-1">
                            <ArrowDown
                              size={13}
                              className="text-border-strong"
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground">
                        Input
                      </p>

                      <p className="mt-1 text-xs text-foreground">
                        Objective
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground">
                        Output
                      </p>

                      <p className="mt-1 text-xs text-accent">
                        Computation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-3 hidden rounded-md border border-border bg-surface px-4 py-3 shadow-xl sm:block">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-accent" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle-foreground">
                      Layered System Model
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Architecture Flow */}
        <section
          id="system-flow"
          className="relative overflow-hidden border-b border-border py-24 sm:py-32"
        >
          <div className="pointer-events-none absolute inset-0 kryomai-grid opacity-25" />

          <Container>
            <div className="relative max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>System Flow</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  PIPELINE / 005
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                From objective to
                <span className="block text-muted-foreground">
                  computational action.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                KryomAI is designed around a progressive flow in which a
                high-level objective is transformed into coordinated,
                observable, and executable system operations.
              </p>
            </div>

            <div className="mt-16 space-y-3">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <div key={layer.number}>
                    <article className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated hover:shadow-lg sm:p-8">
                      <div className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />

                      <div className="grid gap-6 sm:grid-cols-[64px_1fr_auto] sm:items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                          <Icon
                            size={23}
                            className="text-accent transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                              Layer {layer.number}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-border-strong" />

                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                              {layer.label}
                            </span>
                          </div>

                          <h3 className="mt-3 text-xl font-medium tracking-tight">
                            {layer.name}
                          </h3>

                          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                            {layer.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:max-w-[230px] sm:justify-end">
                          {layer.examples.map((example) => (
                            <span
                              key={example}
                              className="rounded-full border border-border bg-surface-muted px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>

                    {index < architectureLayers.length - 1 ? (
                      <div className="flex justify-center py-2">
                        <ArrowDown
                          size={17}
                          className="text-border-strong"
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Compute Fabric */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <Badge>Computation Fabric</Badge>

                <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                  Intelligence should connect
                  <span className="block text-muted-foreground">
                    to computation.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                  The computation layer is intended to abstract the resources
                  required to execute intelligent workloads across different
                  environments.
                </p>

                <div className="mt-8 flex items-center gap-3 border-l-2 border-accent/50 pl-4">
                  <Zap size={16} className="shrink-0 text-accent" />

                  <p className="text-sm leading-6 text-muted-foreground">
                    The goal is not to replace every compute system, but to
                    intelligently coordinate the resources available to the
                    workload.
                  </p>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {computeTargets.map((target, index) => {
                  const Icon = target.icon;

                  return (
                    <article
                      key={target.title}
                      className="group bg-surface p-6 transition-all duration-300 hover:bg-surface-elevated sm:p-7"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                          <Icon size={19} className="text-accent" />
                        </div>

                        <span className="font-mono text-[9px] tracking-[0.18em] text-subtle-foreground">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-medium">
                        {target.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {target.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Architecture Principles */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="max-w-3xl">
              <Badge>Design Principles</Badge>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Built to evolve with
                <span className="block text-muted-foreground">
                  changing intelligence capabilities.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                The architecture is intended to remain flexible as models,
                hardware, execution environments, and research capabilities
                continue to evolve.
              </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {architecturePrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                        <Icon size={20} className="text-accent" />
                      </div>

                      <span className="font-mono text-[9px] tracking-[0.18em] text-subtle-foreground">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-medium">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Execution Example */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute right-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-accent/[0.04] blur-3xl" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
                <div>
                  <Badge>Illustrative Execution Flow</Badge>

                  <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl">
                    One objective.
                    <span className="block text-muted-foreground">
                      Multiple coordinated operations.
                    </span>
                  </h2>

                  <p className="mt-6 text-base leading-8 text-muted-foreground">
                    A future KryomAI workflow could accept a high-level
                    objective, break it into subtasks, select tools, execute
                    actions, evaluate results, and return a useful outcome.
                  </p>

                  <div className="mt-8">
                    <Button href="/intelligence-os" variant="secondary">
                      Explore Intelligence OS
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute bottom-5 left-[13px] top-5 w-px bg-border" />

                  <div className="space-y-3">
                    {executionSteps.map((step, index) => (
                      <div
                        key={step}
                        className="group relative flex items-center gap-4 rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-accent/40 hover:bg-surface-elevated"
                      >
                        <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-[9px] font-medium text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                          {step}
                        </span>

                        {index < executionSteps.length - 1 ? (
                          <ArrowRight
                            size={14}
                            className="ml-auto text-border-strong"
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Disclaimer / Status */}
        <section className="py-20 sm:py-24">
          <Container>
            <div className="flex items-start gap-3 border-l-2 border-accent pl-5">
              <ShieldCheck
                size={18}
                className="mt-1 shrink-0 text-accent"
              />

              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                This is a proposed and evolving architecture model. It
                communicates KryomAI&apos;s technical direction rather than
                claiming that every layer is already implemented in production.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}