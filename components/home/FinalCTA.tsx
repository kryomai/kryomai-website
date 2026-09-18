import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Network,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Understand",
    description:
      "Convert objectives, context, and complexity into structured understanding.",
  },
  {
    number: "02",
    icon: Network,
    title: "Coordinate",
    description:
      "Connect models, tools, agents, systems, and computational resources.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Execute",
    description:
      "Transform intelligence into useful, measurable, real-world outcomes.",
  },
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-border py-28 sm:py-36">
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 kryomai-grid opacity-60"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Technical label */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border-strong" />

            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-subtle-foreground">
              THESIS / 001
            </span>

            <span className="h-px w-8 bg-border-strong" />
          </div>

          <Badge>Our Long-Term Thesis</Badge>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl lg:text-7xl">
            Intelligence should not
            <span className="block text-muted-foreground">
              be limited to conversation.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            We believe the next generation of computing will be defined by
            systems that can understand objectives, reason over complexity,
            coordinate resources, and execute meaningful work.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            KryomAI is exploring the software and systems foundations required
            to make that future possible.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/intelligence-os">
              Explore KryomAI Intelligence OS
              <ArrowRight size={16} />
            </Button>

            <Button href="/research" variant="secondary">
              Explore Research Direction
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>

        {/* Principle cards */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
              Intelligence Execution Loop
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
              3 Core Principles
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.number}
                  className="group relative overflow-hidden bg-surface p-6 text-left transition-colors duration-300 hover:bg-surface-elevated sm:p-8"
                >
                  {/* Hover accent */}
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon
                        size={21}
                        className="text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.18em] text-subtle-foreground">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="relative mx-auto mt-10 flex max-w-5xl flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-6 text-subtle-foreground">
            Building toward a future where intelligence is not just accessed,
            but embedded into the systems that power computation.
          </p>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
            KryomAI / Connecting Intelligence with Computation
          </span>
        </div>
      </Container>
    </section>
  );
}