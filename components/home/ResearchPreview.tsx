import {
  ArrowUpRight,
  BrainCircuit,
  FlaskConical,
  GitBranch,
  Microscope,
  Network,
  ServerCog,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const researchAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Agentic Intelligence",
    description:
      "Exploring systems that can reason, plan, use tools, evaluate outcomes, and operate across complex multi-step objectives.",
    status: "Research",
  },
  {
    number: "02",
    icon: Network,
    title: "Intelligence Orchestration",
    description:
      "Research into coordination mechanisms for agents, models, tools, services, and adaptive intelligent workflows.",
    status: "In Development",
  },
  {
    number: "03",
    icon: ServerCog,
    title: "Systems Infrastructure",
    description:
      "Developing foundations for reliable execution, resource management, observability, and intelligent system control.",
    status: "In Development",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "Heterogeneous Computing",
    description:
      "Exploring how intelligent workloads can be coordinated across CPUs, GPUs, NPUs, quantum systems, and other compute resources.",
    status: "Research",
  },
  {
    number: "05",
    icon: Microscope,
    title: "Intelligence-Native Architectures",
    description:
      "Investigating architectural models where intelligence becomes a foundational capability of the computing environment.",
    status: "Research",
  },
  {
    number: "06",
    icon: FlaskConical,
    title: "Future Compute Interfaces",
    description:
      "Long-term exploration of interfaces between intelligent software and emerging computational paradigms.",
    status: "Long-Term Direction",
  },
];

export function ResearchPreview() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-accent/[0.045] blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.035] blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Badge>Research & Development</Badge>

              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                R&D / 006
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
              Exploring the foundations of
              <span className="block text-muted-foreground">
                future intelligent systems.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              KryomAI combines practical platform development with long-term
              research into intelligent software, systems architecture, and
              emerging computational paradigms.
            </p>
          </div>

          <Button href="/research" variant="secondary">
            View Research Direction
            <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* Research Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className="group relative min-h-[300px] overflow-hidden bg-surface p-6 transition-colors duration-300 hover:bg-surface-elevated sm:p-7"
              >
                {/* Top hover line */}
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Subtle corner detail */}
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-accent/30" />
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon
                      size={20}
                      className="text-accent transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.18em] text-subtle-foreground">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {area.description}
                </p>

                <div className="mt-7 flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-border bg-surface-muted px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    {area.status}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-subtle-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Research Intelligence Strip */}
        <div className="mt-8 grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
            <Sparkles size={20} className="text-accent" />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Research Principle
            </p>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
              Build through experimentation, validate through systems
              engineering, and expand the platform as new computational
              possibilities become practical.
            </p>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground lg:text-right">
            Explore / Validate / Evolve
          </div>
        </div>

        {/* Research Note */}
        <div className="mt-8 border-l-2 border-accent pl-5">
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            Research topics are directional areas rather than claims of
            completed products. Their scope and implementation may evolve as
            KryomAI progresses through experimentation, validation, and
            technical discovery.
          </p>
        </div>
      </Container>
    </section>
  );
}