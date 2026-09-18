import type { Metadata } from "next";

import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  FlaskConical,
  GitBranch,
  Microscope,
  Network,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore KryomAI research directions across agentic intelligence, orchestration, intelligent systems, heterogeneous computing, and future computation.",
};

const researchTracks = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Agentic Intelligence",
    category: "Intelligence",
    status: "Research",
    description:
      "Exploring systems that interpret objectives, reason over context, plan multi-step actions, use tools, and evaluate outcomes.",
    topics: [
      "Goal interpretation",
      "Planning and reasoning",
      "Tool-using agents",
      "Self-evaluation workflows",
    ],
  },
  {
    number: "02",
    icon: Network,
    title: "Multi-Agent Coordination",
    category: "Coordination",
    status: "In Development",
    description:
      "Researching how multiple intelligent components can collaborate, delegate subtasks, share state, and coordinate execution.",
    topics: [
      "Agent communication",
      "Task delegation",
      "Shared context",
      "Coordination protocols",
    ],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Intelligent Orchestration",
    category: "Systems",
    status: "In Development",
    description:
      "Developing orchestration mechanisms for task graphs, execution state, tool routing, retries, scheduling, and workflow control.",
    topics: [
      "Task graphs",
      "Execution state",
      "Workflow scheduling",
      "Failure recovery",
    ],
  },
  {
    number: "04",
    icon: ServerCog,
    title: "Intelligence Infrastructure",
    category: "Infrastructure",
    status: "Research",
    description:
      "Exploring reliable software infrastructure for deploying, monitoring, controlling, and scaling intelligent workloads.",
    topics: [
      "Runtime systems",
      "Observability",
      "Permissions",
      "Resource management",
    ],
  },
  {
    number: "05",
    icon: Cpu,
    title: "Heterogeneous Computing",
    category: "Computation",
    status: "Research",
    description:
      "Investigating how intelligent workloads can interact with different computational resources based on task requirements and available capacity.",
    topics: [
      "CPU and GPU workloads",
      "NPU acceleration",
      "Compute abstraction",
      "Resource selection",
    ],
  },
  {
    number: "06",
    icon: Atom,
    title: "Future Compute Interfaces",
    category: "Long-Term",
    status: "Long-Term Direction",
    description:
      "Exploring software interfaces that may connect intelligent systems with emerging computational paradigms and specialized hardware.",
    topics: [
      "Advanced architectures",
      "Specialized processors",
      "Experimental compute",
      "Future system interfaces",
    ],
  },
];

const researchPrinciples = [
  {
    icon: Microscope,
    title: "Experimentation",
    description:
      "Ideas are evaluated through prototypes, technical experiments, and measurable results.",
  },
  {
    icon: Code2,
    title: "Engineering First",
    description:
      "Research directions should connect to implementable software and real system constraints.",
  },
  {
    icon: GitBranch,
    title: "Iterative Progress",
    description:
      "Architecture and priorities evolve as new findings and implementation feedback emerge.",
  },
  {
    icon: CheckCircle2,
    title: "Evidence-Based Claims",
    description:
      "Completed capabilities are distinguished from prototypes, hypotheses, and long-term possibilities.",
  },
];

const researchMethod = [
  {
    step: "01",
    title: "Identify the Problem",
    description:
      "Define the system limitation, technical question, or capability gap.",
  },
  {
    step: "02",
    title: "Form a Hypothesis",
    description:
      "Develop a possible architecture, mechanism, or implementation approach.",
  },
  {
    step: "03",
    title: "Build a Prototype",
    description:
      "Translate the idea into an executable experiment or software component.",
  },
  {
    step: "04",
    title: "Evaluate Results",
    description:
      "Measure reliability, performance, usability, cost, and technical limitations.",
  },
  {
    step: "05",
    title: "Refine or Reconsider",
    description:
      "Improve the approach, change the design, or discard unsupported assumptions.",
  },
];

export default function ResearchPage() {
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
            className="absolute right-[-12%] top-[-20%] h-[560px] w-[560px] rounded-full bg-accent/6 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-25%] left-[-10%] h-[420px] w-[420px] rounded-full bg-technical/5 blur-3xl"
          />

          <Container>
            <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div className="max-w-4xl">
                <div className="mb-7 flex items-center gap-4">
                  <Badge>Research & Exploration</Badge>

                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                    R&D / 006
                  </span>
                </div>

                <h1 className="text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                  Exploring the foundations
                  <span className="block text-muted-foreground">
                    of future intelligence.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">
                  Research-driven development for intelligent software,
                  computational systems, and intelligence-native architectures.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  KryomAI combines practical engineering with long-term
                  exploration into how intelligent systems can understand,
                  coordinate, execute, and connect with computation.
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
                    className="absolute inset-10 rounded-full border border-border"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-20 rounded-full border border-dashed border-border-strong"
                  />

                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background shadow-[0_0_60px_rgba(249,115,22,0.12)]">
                    <div className="text-center">
                      <BrainCircuit
                        size={28}
                        className="mx-auto text-accent"
                      />
                      <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        Research Core
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-8 top-8 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Hypothesis
                    </span>
                  </div>

                  <div className="absolute right-8 top-16 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Prototype
                    </span>
                  </div>

                  <div className="absolute bottom-20 left-8 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Evaluation
                    </span>
                  </div>

                  <div className="absolute bottom-8 right-8 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Refinement
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-subtle-foreground">
                    Research Loop / 001
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Research Tracks */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 kryomai-grid-small opacity-30"
          />

          <Container>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-4">
                <Badge>Research Tracks</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  06 Directions
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Six connected areas of
                <span className="block text-muted-foreground">
                  technical exploration.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                These tracks represent the technical areas that inform the
                development of KryomAI Intelligence OS and its broader
                intelligence-native computing direction.
              </p>
            </div>

            <div className="relative mt-16 grid gap-5 md:grid-cols-2">
              {researchTracks.map((track) => {
                const Icon = track.icon;

                return (
                  <article
                    key={track.number}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated sm:p-9"
                  >
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                        <Icon
                          size={22}
                          className="text-accent transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.2em] text-subtle-foreground">
                        {track.number}
                      </span>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {track.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-border-strong" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        {track.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-medium tracking-tight">
                      {track.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {track.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {track.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-border bg-surface-muted px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                        Technical Direction
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-subtle-foreground transition-colors group-hover:text-accent"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Research Method */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <Badge>Research Method</Badge>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  From hypothesis to
                  <span className="block text-muted-foreground">
                    working systems.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                  KryomAI research is intended to move through a practical
                  cycle of investigation, prototyping, evaluation, and
                  refinement.
                </p>

                <div className="mt-10 rounded-xl border border-border bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <FlaskConical size={18} className="text-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Research Principle
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Every long-term idea should be connected to a testable
                    question, a measurable experiment, or a clearly defined
                    technical assumption.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {researchMethod.map((item) => (
                  <div
                    key={item.step}
                    className="group grid gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated sm:grid-cols-[48px_1fr] sm:p-6"
                  >
                    <span className="font-mono text-xs text-accent">
                      {item.step}
                    </span>

                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-medium text-foreground">
                          {item.title}
                        </h3>

                        <ArrowUpRight
                          size={15}
                          className="text-subtle-foreground transition-colors group-hover:text-accent"
                        />
                      </div>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Principles */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <Badge>Research Principles</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  Rigor / 004
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Ambitious direction.
                <span className="block text-muted-foreground">
                  Grounded execution.
                </span>
              </h2>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {researchPrinciples.map((principle) => {
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

        {/* Research Thesis */}
        <section className="border-b border-border py-20 sm:py-24">
          <Container>
            <div className="grid gap-8 rounded-2xl border border-border bg-surface p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <Sparkles size={18} className="text-accent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Research Thesis
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-2xl font-medium tracking-tight sm:text-3xl">
                  Intelligence should not remain isolated from the systems
                  that execute it.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  KryomAI explores the connection between reasoning,
                  coordination, execution, and the computational resources
                  required to turn intelligence into useful outcomes.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent/30 bg-accent/5">
                <Network size={28} className="text-accent" />
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
              <Badge>Explore the Platform</Badge>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Research becomes meaningful
                <span className="block text-muted-foreground">
                  when it becomes usable.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Explore how KryomAI translates its research direction into an
                evolving intelligence-native software platform.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/intelligence-os">
                  Explore Intelligence OS
                  <ArrowRight size={16} />
                </Button>

                <Button href="/roadmap" variant="secondary">
                  View Roadmap
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}