import type { Metadata } from "next";

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CircleDashed,
  Cpu,
  FlaskConical,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Explore the development roadmap and long-term direction of KryomAI Intelligence OS.",
};

const roadmapPhases = [
  {
    number: "01",
    icon: CheckCircle2,
    phase: "Current Phase",
    title: "Foundation & Core Platform",
    status: "Active Development",
    statusType: "active",
    description:
      "Establish the initial software foundation for KryomAI Intelligence OS and build the core components required for intelligent interaction and execution.",
    objectives: [
      "Define core product architecture",
      "Build initial intelligent agent runtime",
      "Establish application and system interfaces",
      "Create foundational developer workflows",
      "Develop initial product website and platform identity",
    ],
  },
  {
    number: "02",
    icon: Workflow,
    phase: "Near-Term Direction",
    title: "Agentic Execution & Orchestration",
    status: "In Development",
    statusType: "development",
    description:
      "Develop the mechanisms required for agents to plan tasks, use tools, coordinate actions, and execute multi-step workflows.",
    objectives: [
      "Task planning and decomposition",
      "Tool and API coordination",
      "Execution state management",
      "Workflow monitoring",
      "Failure handling and recovery",
    ],
  },
  {
    number: "03",
    icon: Network,
    phase: "Platform Expansion",
    title: "Intelligence-Native Platform",
    status: "Planned",
    statusType: "planned",
    description:
      "Expand the platform into a broader intelligent software environment capable of coordinating multiple capabilities, services, and execution contexts.",
    objectives: [
      "Multi-agent collaboration",
      "Extensible capability system",
      "Persistent context and memory",
      "Application-level integrations",
      "Improved observability and controls",
    ],
  },
  {
    number: "04",
    icon: Cpu,
    phase: "Advanced Systems",
    title: "Heterogeneous Computation",
    status: "Research",
    statusType: "research",
    description:
      "Explore how intelligent workloads can dynamically interact with different computational resources based on task requirements.",
    objectives: [
      "Compute abstraction",
      "CPU and GPU workload routing",
      "NPU and accelerator exploration",
      "Local and remote compute coordination",
      "Resource-aware execution",
    ],
  },
  {
    number: "05",
    icon: FlaskConical,
    phase: "Long-Term Direction",
    title: "Advanced Intelligence Infrastructure",
    status: "Long-Term Direction",
    statusType: "research",
    description:
      "Investigate future system architectures that connect intelligent software with emerging computational technologies and advanced execution environments.",
    objectives: [
      "Advanced system interfaces",
      "Emerging compute paradigms",
      "Experimental architecture research",
      "Intelligence-native operating concepts",
      "Long-term computational integration",
    ],
  },
];

const statusClasses = {
  active: "border-accent/30 bg-accent/10 text-accent",
  development: "border-technical/30 bg-technical-soft text-technical",
  planned: "border-border bg-surface-muted text-muted-foreground",
  research: "border-border bg-surface-muted text-subtle-foreground",
};

const developmentPrinciples = [
  {
    icon: Layers3,
    title: "Progressive Development",
    description:
      "Each phase builds on validated capabilities from the previous phase.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Positioning",
    description:
      "Implemented features, prototypes, research, and long-term ideas are clearly distinguished.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence First",
    description:
      "The roadmap remains centered on useful intelligent systems rather than technology for its own sake.",
  },
  {
    icon: Rocket,
    title: "Long-Term Ambition",
    description:
      "The platform can expand as engineering capability, research results, and resources grow.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32 lg:py-40">
          <div
            aria-hidden="true"
            className="absolute inset-0 kryomai-grid opacity-70"
          />

          <div
            aria-hidden="true"
            className="absolute left-[-12%] top-[-20%] h-[520px] w-[520px] rounded-full bg-accent/6 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-25%] right-[-10%] h-[420px] w-[420px] rounded-full bg-technical/5 blur-3xl"
          />

          <Container>
            <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div className="max-w-4xl">
                <div className="mb-7 flex items-center gap-4">
                  <Badge>Development Roadmap</Badge>

                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                    ROADMAP / 004
                  </span>
                </div>

                <h1 className="text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                  A progressive path toward
                  <span className="block text-muted-foreground">
                    intelligence-native computing.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">
                  From foundational intelligent software to broader system-level
                  intelligence infrastructure.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  The KryomAI roadmap represents a directional framework for
                  product development, engineering priorities, and long-term
                  research exploration.
                </p>
              </div>

              <div className="relative hidden lg:block">
                <div className="kryomai-border-glow relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 kryomai-grid-small opacity-70"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 bg-border"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 bg-border"
                  />

                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background shadow-[0_0_70px_rgba(249,115,22,0.12)]">
                    <div className="text-center">
                      <Rocket size={27} className="mx-auto text-accent" />

                      <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        Long-Term
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-7 top-7 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Foundation
                    </span>
                  </div>

                  <div className="absolute right-7 top-16 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Orchestration
                    </span>
                  </div>

                  <div className="absolute bottom-20 left-7 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Platform
                    </span>
                  </div>

                  <div className="absolute bottom-7 right-7 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Advanced Compute
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-subtle-foreground">
                    Development Sequence / 001
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Roadmap Timeline */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 kryomai-grid-small opacity-25"
          />

          <Container>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-4">
                <Badge>Roadmap Phases</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  05 Stages
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Build the foundation.
                <span className="block text-muted-foreground">
                  Expand the intelligence.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                KryomAI is planned as a progressive system. Near-term work
                focuses on practical software capabilities, while later phases
                explore larger architectural possibilities.
              </p>
            </div>

            <div className="relative mt-16">
              <div
                aria-hidden="true"
                className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-accent via-border to-transparent sm:block"
              />

              <div className="space-y-6">
                {roadmapPhases.map((phase) => {
                  const Icon = phase.icon;

                  return (
                    <article
                      key={phase.number}
                      className="group relative grid gap-7 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated sm:grid-cols-[56px_1fr] sm:p-9"
                    >
                      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/5">
                        <Icon
                          size={22}
                          className="text-accent transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                            Phase {phase.number}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-border-strong" />

                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                            {phase.phase}
                          </span>

                          <span
                            className={[
                              "rounded-full border px-2.5 py-1",
                              "font-mono text-[9px] uppercase tracking-[0.12em]",
                              statusClasses[
                                phase.statusType as keyof typeof statusClasses
                              ],
                            ].join(" ")}
                          >
                            {phase.status}
                          </span>
                        </div>

                        <div className="mt-5 flex items-start justify-between gap-5">
                          <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                            {phase.title}
                          </h3>

                          <ArrowUpRight
                            size={19}
                            className="mt-1 shrink-0 text-subtle-foreground transition-colors group-hover:text-accent"
                          />
                        </div>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {phase.description}
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {phase.objectives.map((objective) => (
                            <div
                              key={objective}
                              className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-colors duration-200 group-hover:border-border-strong"
                            >
                              <CheckCircle2
                                size={15}
                                className="mt-0.5 shrink-0 text-accent"
                              />

                              <span className="text-sm leading-6 text-muted-foreground">
                                {objective}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Development Principles */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <Badge>How We Build</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  Principles / 004
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Ambition guided by
                <span className="block text-muted-foreground">
                  engineering discipline.
                </span>
              </h2>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {developmentPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated"
                  >
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                    <Icon
                      size={22}
                      className="text-accent transition-transform duration-300 group-hover:scale-110"
                    />

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

        {/* Current Focus */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
              <div
                aria-hidden="true"
                className="absolute right-[-8%] top-[-35%] h-80 w-80 rounded-full bg-accent/5 blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <Sparkles size={18} className="text-accent" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Current Focus
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Establishing the first usable foundation.
                  </h2>

                  <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                    The immediate priority is to build practical intelligent
                    software capabilities that can later become the foundation
                    of the broader KryomAI Intelligence OS platform.
                  </p>
                </div>

                <div className="flex w-fit items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-3">
                  <CircleDashed size={18} className="text-accent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                    Active Development
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 kryomai-radial opacity-70"
          />

          <Container>
            <div className="relative mx-auto max-w-3xl text-center">
              <Badge>Explore Further</Badge>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                The roadmap is only the beginning.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Explore the platform architecture and research directions that
                inform KryomAI&apos;s long-term development.
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
            </div>
          </Container>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border py-12">
          <Container>
            <div className="flex items-start gap-3 border-l-2 border-accent pl-5">
              <ShieldCheck
                size={18}
                className="mt-1 shrink-0 text-accent"
              />

              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                Roadmap phases are directional and may change according to
                technical feasibility, research outcomes, product validation,
                available resources, and engineering priorities.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}