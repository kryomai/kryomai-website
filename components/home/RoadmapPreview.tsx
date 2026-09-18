import {
  ArrowUpRight,
  CheckCircle2,
  CircleDashed,
  Compass,
  FlaskConical,
  Rocket,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const roadmapStages = [
  {
    number: "01",
    icon: CheckCircle2,
    phase: "Current Focus",
    title: "Foundation & Platform Core",
    description:
      "Establishing the core software foundation, product architecture, developer experience, and initial intelligent system capabilities.",
    status: "Active Development",
    statusType: "active",
  },
  {
    number: "02",
    icon: FlaskConical,
    phase: "Next Direction",
    title: "Intelligence Orchestration",
    description:
      "Developing mechanisms for coordinating models, agents, tools, workflows, and computational resources.",
    status: "In Development",
    statusType: "development",
  },
  {
    number: "03",
    icon: Rocket,
    phase: "Expansion",
    title: "Intelligence-Native Platform",
    description:
      "Expanding KryomAI into a broader platform for intelligent task execution, system interaction, and adaptive computation.",
    status: "Planned",
    statusType: "planned",
  },
  {
    number: "04",
    icon: Compass,
    phase: "Long-Term Direction",
    title: "Advanced Computing Interfaces",
    description:
      "Exploring future interfaces between intelligent software, heterogeneous computing, emerging architectures, and advanced computational systems.",
    status: "Long-Term Direction",
    statusType: "research",
  },
];

const statusClasses = {
  active: "border-accent/30 bg-accent/10 text-accent",
  development:
    "border-technical/30 bg-technical-soft text-technical",
  planned: "border-border bg-surface-muted text-muted-foreground",
  research: "border-border bg-surface-muted text-subtle-foreground",
};

export function RoadmapPreview() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-16rem] top-[12rem] h-[30rem] w-[30rem] rounded-full bg-accent/[0.035] blur-3xl" />
        <div className="absolute bottom-[-15rem] right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.03] blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Badge>Development Roadmap</Badge>

              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                ROADMAP / 004
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
              From foundational software
              <span className="block text-muted-foreground">
                toward intelligence-native computing.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              KryomAI is being developed progressively — starting with
              practical intelligent software and evolving toward a broader
              intelligence infrastructure platform.
            </p>
          </div>

          <Button href="/roadmap" variant="secondary">
            Explore Full Roadmap
            <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[23px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:block"
          />

          <div className="space-y-5">
            {roadmapStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="group relative grid gap-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated sm:grid-cols-[48px_1fr_auto] sm:items-start sm:p-7"
                >
                  {/* Hover accent line */}
                  <div className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Phase marker */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon
                      size={19}
                      className="text-accent transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Main content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                        Phase {stage.number}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-border-strong" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {stage.phase}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                      {stage.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {stage.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-subtle-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-border-strong transition-colors duration-300 group-hover:bg-accent" />
                      Development Sequence {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="sm:pt-1">
                    <span
                      className={[
                        "inline-flex rounded-full border px-3 py-1.5",
                        "font-mono text-[9px] uppercase tracking-[0.14em]",
                        statusClasses[
                          stage.statusType as keyof typeof statusClasses
                        ],
                      ].join(" ")}
                    >
                      {stage.status}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Roadmap principle */}
        <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
            <CircleDashed size={19} className="text-accent" />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Roadmap Principle
            </p>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
              Progress through validated engineering milestones while keeping
              the long-term vision open to new research, technologies, and
              computational possibilities.
            </p>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground lg:text-right">
            Build / Validate / Expand
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-l-2 border-accent pl-5">
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            The roadmap represents a directional development framework.
            Timelines, priorities, and technical scope may change based on
            research results, product validation, and engineering progress.
          </p>
        </div>
      </Container>
    </section>
  );
}