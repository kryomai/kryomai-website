import type { Metadata } from "next";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CircuitBoard,
  Cpu,
  Network,
  Orbit,
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
  title: "Intelligence OS",
  description:
    "Explore KryomAI Intelligence OS — a long-term platform direction for intelligence-native computing, intelligent orchestration, and heterogeneous computation.",
};

const systemLayers = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Intelligence Layer",
    label: "Understand",
    description:
      "Interprets objectives, reasons over context, plans actions, evaluates decisions, and transforms high-level intent into structured tasks.",
  },
  {
    number: "02",
    icon: Network,
    title: "Coordination Layer",
    label: "Connect",
    description:
      "Coordinates intelligent agents, models, tools, services, data sources, and distributed system components.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Orchestration Layer",
    label: "Control",
    description:
      "Manages execution flows, dependencies, state transitions, scheduling, retries, monitoring, and operational control.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Computation Layer",
    label: "Execute",
    description:
      "Connects workloads with local, remote, specialized, heterogeneous, and future computational resources.",
  },
];

const principles = [
  "Objective-driven interaction",
  "Modular intelligence components",
  "Tool and system coordination",
  "Adaptive execution workflows",
  "Observable and controllable operations",
  "Extensible computation interfaces",
];

const computeTargets = [
  "Classical CPUs",
  "GPUs and accelerators",
  "NPUs and AI processors",
  "Quantum processors",
  "Distributed supercomputers",
  "Scientific and robotic systems",
];

export default function IntelligenceOSPage() {
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
            className="pointer-events-none absolute right-[-12rem] top-[-14rem] h-[42rem] w-[42rem] rounded-full bg-accent/[0.045] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-16rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-technical/[0.025] blur-3xl"
          />

          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* Hero Content */}
              <div className="relative max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Product Platform</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                    INTELLIGENCE OS / 001
                  </span>
                </div>

                <h1 className="mt-7 text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
                  KryomAI
                  <span className="block text-muted-foreground">
                    Intelligence OS
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">
                  An evolving software foundation for intelligence-native
                  computing.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  KryomAI Intelligence OS is being developed as a platform
                  direction that connects intelligence, coordination,
                  execution, and computation into a unified system architecture.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="/architecture">
                    Explore System Architecture
                    <ArrowUpRight size={16} />
                  </Button>

                  <Button href="/roadmap" variant="secondary">
                    View Development Roadmap
                    <ArrowDownRight size={15} />
                  </Button>
                </div>

                <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                      Category
                    </p>

                    <p className="mt-1 text-xs text-foreground">
                      System Platform
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

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                      Status
                    </p>

                    <p className="mt-1 text-xs text-accent">
                      In Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero System Visual */}
              <div className="relative mx-auto w-full max-w-lg">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface/80 p-5 shadow-2xl backdrop-blur-md sm:p-7">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        OS Architecture
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-subtle-foreground">
                      SYS.004
                    </span>
                  </div>

                  <div className="relative flex h-[72%] items-center justify-center">
                    <div className="absolute h-[82%] w-[82%] rounded-full border border-border/70" />

                    <div className="absolute h-[62%] w-[62%] rounded-full border border-dashed border-accent/25 animate-[spin_26s_linear_infinite]" />

                    <div className="absolute h-[44%] w-[44%] rounded-full border border-border" />

                    <div className="absolute left-1/2 top-1/2 h-px w-[84%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-border" />

                    <div className="absolute left-1/2 top-1/2 h-px w-[84%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-border" />

                    <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-accent/50 bg-surface-elevated shadow-[0_0_70px_color-mix(in_srgb,var(--accent)_16%,transparent)] sm:h-32 sm:w-32">
                      <Sparkles size={24} className="text-accent" />

                      <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em]">
                        KryomAI
                      </span>

                      <span className="mt-1 font-mono text-[8px] text-muted-foreground">
                        INTELLIGENCE CORE
                      </span>
                    </div>

                    <div className="absolute left-[1%] top-[19%] rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <BrainCircuit size={13} className="text-accent" />
                        <span className="font-mono text-[8px] text-muted-foreground">
                          REASON
                        </span>
                      </div>
                    </div>

                    <div className="absolute right-[1%] top-[20%] rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Network size={13} className="text-technical" />
                        <span className="font-mono text-[8px] text-muted-foreground">
                          CONNECT
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-[15%] left-[2%] rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Workflow size={13} className="text-accent" />
                        <span className="font-mono text-[8px] text-muted-foreground">
                          ORCHESTRATE
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-[15%] right-[2%] rounded-md border border-border bg-surface px-2.5 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Cpu size={13} className="text-technical" />
                        <span className="font-mono text-[8px] text-muted-foreground">
                          COMPUTE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-border pt-4">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground">
                        Input
                      </p>
                      <p className="mt-1 text-[11px] text-foreground">
                        Objective
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground">
                        Process
                      </p>
                      <p className="mt-1 text-[11px] text-foreground">
                        Intelligence
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-subtle-foreground">
                        Output
                      </p>
                      <p className="mt-1 text-[11px] text-accent">
                        Execution
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-3 hidden rounded-md border border-border bg-surface px-4 py-3 shadow-xl sm:block">
                  <div className="flex items-center gap-2">
                    <Orbit size={13} className="text-accent" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle-foreground">
                      Intelligence-Native Runtime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Definition */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 kryomai-grid opacity-25" />

          <Container>
            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <Badge>What It Is</Badge>

                <h2 className="mt-6 max-w-md text-3xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                  More than an
                  <span className="block text-muted-foreground">
                    AI interface.
                  </span>
                </h2>

                <p className="mt-6 max-w-md font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                  From application interaction to system intelligence
                </p>
              </div>

              <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  Traditional software generally requires users to manually
                  operate applications, select tools, manage workflows, and
                  coordinate different systems.
                </p>

                <p>
                  KryomAI Intelligence OS explores a different model: users
                  express objectives, while intelligent system components help
                  interpret, plan, coordinate, and execute the required work.
                </p>

                <p>
                  The platform is intended to become an intelligence-native
                  software layer that can operate across applications, tools,
                  services, and computational environments.
                </p>

                <div className="border-l-2 border-accent/50 pl-5 text-sm leading-7 text-foreground sm:text-base">
                  The central idea is simple: intelligence should not remain
                  limited to a single application. It should become a
                  coordinated capability of the computing environment itself.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Traditional OS vs Intelligence OS */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="max-w-3xl">
              <Badge>Paradigm Shift</Badge>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                From instruction-driven systems
                <span className="block text-muted-foreground">
                  to objective-driven computing.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                KryomAI explores how computing environments may evolve when
                objectives, context, intelligence, and adaptive execution
                become first-class system concepts.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              <div className="bg-surface p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <CircuitBoard size={19} className="text-muted-foreground" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                    Conventional Model
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  Instruction-driven computing
                </h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "User manually selects applications",
                    "Tasks are divided by the user",
                    "Tools operate in isolated workflows",
                    "Resources are managed explicitly",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-elevated p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <Sparkles size={19} className="text-accent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    KryomAI Direction
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  Objective-driven computing
                </h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "User expresses a high-level objective",
                    "Intelligence interprets and plans",
                    "Systems and tools are coordinated",
                    "Execution adapts to context and resources",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Architecture Layers */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 kryomai-radial opacity-50" />

          <Container>
            <div className="relative max-w-3xl">
              <Badge>System Model</Badge>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                A layered architecture for
                <span className="block text-muted-foreground">
                  intelligent execution.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                The platform is organized into distinct but connected layers,
                allowing intelligence, coordination, orchestration, and
                computation to evolve independently while operating together.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {systemLayers.map((layer) => {
                const Icon = layer.icon;

                return (
                  <article
                    key={layer.number}
                    className="group relative overflow-hidden bg-surface p-7 transition-all duration-300 hover:bg-surface-elevated sm:p-9"
                  >
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                        <Icon
                          size={21}
                          className="text-accent transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.2em] text-subtle-foreground">
                        LAYER {layer.number}
                      </span>
                    </div>

                    <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                      {layer.label}
                    </p>

                    <h3 className="mt-2 text-xl font-medium tracking-tight">
                      {layer.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {layer.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Compute Fabric */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <Badge>Heterogeneous Compute</Badge>

                <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                  Intelligence connected to
                  <span className="block text-muted-foreground">
                    many forms of computation.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                  The long-term direction extends beyond a single processor or
                  machine. KryomAI explores how intelligent workloads could
                  coordinate across diverse computational environments.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {computeTargets.map((target, index) => (
                  <div
                    key={target}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface-elevated"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted">
                      <span className="font-mono text-[10px] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {target}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Core Principles */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <Badge>Core Principles</Badge>

                <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl">
                  Designed around
                  <span className="block text-muted-foreground">
                    intelligent action.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  The system direction is based on principles that guide
                  architecture, engineering, reliability, and product
                  development.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <div
                    key={principle}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10">
                      <Check size={14} className="text-accent" />
                    </div>

                    <div>
                      <span className="font-mono text-[9px] tracking-[0.15em] text-subtle-foreground">
                        0{index + 1}
                      </span>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-foreground">
                        {principle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Current Status */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-[22rem] w-[22rem] rounded-full bg-accent/[0.045] blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge>Current Development Status</Badge>

                  <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl">
                    Building the foundation
                    <span className="block text-muted-foreground">
                      progressively.
                    </span>
                  </h2>

                  <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                    KryomAI Intelligence OS is an active long-term development
                    direction. Initial work focuses on intelligent agents,
                    computer interaction, orchestration, tool coordination, and
                    reliable execution infrastructure.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-3">
                  <ShieldCheck size={18} className="text-accent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                    In Development
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 kryomai-grid opacity-35" />

          <Container>
            <div className="relative mx-auto max-w-3xl text-center">
              <Badge>Continue Exploring</Badge>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Understand the system
                <span className="block text-muted-foreground">
                  behind the vision.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Explore the proposed architecture, research direction, and
                development roadmap behind KryomAI Intelligence OS.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/architecture">
                  View Architecture
                  <ArrowRight size={16} />
                </Button>

                <Button href="/research" variant="secondary">
                  Explore Research
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-subtle-foreground">
                <Zap size={13} className="text-accent" />
                Connecting intelligence with computation
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}