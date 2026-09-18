import type { Metadata } from "next";

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Compass,
  Eye,
  Globe2,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about KryomAI, its mission, vision, and long-term direction in intelligence-native computing.",
};

const principles = [
  {
    icon: Target,
    title: "Useful Intelligence",
    description:
      "We focus on turning intelligence into practical capabilities that help people and systems accomplish meaningful work.",
  },
  {
    icon: Layers3,
    title: "Systems Thinking",
    description:
      "Intelligence is considered as part of a larger system involving software, tools, infrastructure, and computation.",
  },
  {
    icon: Lightbulb,
    title: "Research Through Building",
    description:
      "We use working software, prototypes, and experiments to transform ideas into validated technical understanding.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Progress",
    description:
      "We distinguish current capabilities from prototypes, research hypotheses, and long-term possibilities.",
  },
];

const focusAreas = [
  "Intelligent software systems",
  "Agentic task execution",
  "Intelligence orchestration",
  "Computer and tool interaction",
  "Heterogeneous computing interfaces",
  "Future intelligence infrastructure",
];

export default function AboutPage() {
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
            className="absolute right-[-12%] top-[-22%] h-[560px] w-[560px] rounded-full bg-accent/6 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-25%] left-[-10%] h-[420px] w-[420px] rounded-full bg-technical/5 blur-3xl"
          />

          <Container>
            <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div className="max-w-4xl">
                <div className="mb-7 flex items-center gap-4">
                  <Badge>About KryomAI</Badge>

                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                    IDENTITY / 001
                  </span>
                </div>

                <h1 className="text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                  Building toward
                  <span className="block text-muted-foreground">
                    intelligence-native computing.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">
                  KryomAI is an independent technology initiative focused on
                  the foundations of intelligent software and computational
                  systems.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Our direction begins with practical intelligent systems and
                  extends toward a broader vision of software where
                  intelligence can understand objectives, coordinate resources,
                  and execute useful work.
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
                    className="absolute inset-12 rounded-full border border-border"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-24 rounded-full border border-dashed border-border-strong"
                  />

                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background shadow-[0_0_70px_rgba(249,115,22,0.12)]">
                    <div className="text-center">
                      <BrainCircuit
                        size={28}
                        className="mx-auto text-accent"
                      />

                      <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        KryomAI Core
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-8 top-10 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Intelligence
                    </span>
                  </div>

                  <div className="absolute right-8 top-20 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Systems
                    </span>
                  </div>

                  <div className="absolute bottom-24 left-8 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Research
                    </span>
                  </div>

                  <div className="absolute bottom-10 right-8 rounded-lg border border-border bg-background/90 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      Computation
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-subtle-foreground">
                    Independent Technology Initiative
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Identity */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 kryomai-grid-small opacity-25"
          />

          <Container>
            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-4">
                  <Badge>Our Identity</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                    WHY / 001
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Not just another AI application.
                </h2>

                <div className="mt-8 h-px w-20 bg-accent" />
              </div>

              <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  KryomAI is being developed around a systems-level question:
                  what happens when intelligence becomes an integrated
                  capability of computing rather than a separate interface?
                </p>

                <p>
                  Instead of focusing only on chat interfaces or isolated AI
                  features, KryomAI explores the connection between objectives,
                  reasoning, agents, tools, orchestration, execution, and
                  computation.
                </p>

                <p>
                  The goal is to build a foundation that can evolve as
                  intelligent models, software architectures, and computing
                  environments become more capable.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission and Vision */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
              <article className="group relative overflow-hidden bg-surface p-8 sm:p-12 lg:p-14">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors group-hover:border-accent/30 group-hover:bg-accent/5">
                  <Compass size={22} className="text-accent" />
                </div>

                <Badge className="mt-8">Our Mission</Badge>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Make intelligent software more capable, useful, and
                  connected.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  We aim to develop software systems that can understand
                  objectives, coordinate capabilities, interact with tools, and
                  help execute complex tasks across real computing
                  environments.
                </p>

                <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Mission / Practical Intelligence
                </div>
              </article>

              <article className="group relative overflow-hidden bg-surface p-8 sm:p-12 lg:p-14">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors group-hover:border-accent/30 group-hover:bg-accent/5">
                  <Eye size={22} className="text-accent" />
                </div>

                <Badge className="mt-8">Our Vision</Badge>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  A future where intelligence is a native layer of computing.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  We envision computing environments where intelligent systems
                  can work across applications, resources, devices, and
                  computational architectures through a unified software
                  foundation.
                </p>

                <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Vision / Intelligence-Native Systems
                </div>
              </article>
            </div>
          </Container>
        </section>

        {/* Focus Areas */}
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-4">
                  <Badge>What We Focus On</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                    SCOPE / 006
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Connecting intelligence
                  <span className="block text-muted-foreground">
                    with real systems.
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                  KryomAI focuses on the software and architectural layers
                  required to make intelligent capabilities useful beyond
                  isolated model interactions.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="group flex items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated"
                  >
                    <span className="font-mono text-[10px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-sm leading-6 text-muted-foreground">
                      {area}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="text-subtle-foreground transition-colors group-hover:text-accent"
                    />
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
                <Badge>How We Think</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground">
                  PRINCIPLES / 004
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Long-term ambition.
                <span className="block text-muted-foreground">
                  Practical execution.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Our principles guide how we approach product development,
                architecture, experimentation, and technical communication.
              </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => {
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

        {/* Independent Beginning */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
              <div
                aria-hidden="true"
                className="absolute right-[-8%] top-[-35%] h-80 w-80 rounded-full bg-accent/5 blur-3xl"
              />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
                <div>
                  <div className="flex items-center gap-4">
                    <Badge>Beginning of the Journey</Badge>

                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-subtle-foreground sm:inline">
                      ORIGIN / 001
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Starting small.
                    <span className="block text-muted-foreground">
                      Thinking in systems.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    KryomAI begins with a focused software foundation and an
                    ambitious long-term technical direction. The platform will
                    grow through continuous learning, experimentation,
                    engineering, and validation.
                  </p>

                  <div className="mt-8">
                    <Button href="/roadmap" variant="secondary">
                      View Development Roadmap
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong">
                    <BrainCircuit
                      size={20}
                      className="text-accent transition-transform group-hover:scale-110"
                    />

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Start with intelligent software that solves concrete
                      problems.
                    </p>
                  </div>

                  <div className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong">
                    <Network
                      size={20}
                      className="text-accent transition-transform group-hover:scale-110"
                    />

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Expand toward coordinated systems and intelligent
                      infrastructure.
                    </p>
                  </div>

                  <div className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-border-strong">
                    <Globe2
                      size={20}
                      className="text-accent transition-transform group-hover:scale-110"
                    />

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Explore a broader future for intelligence-native
                      computing.
                    </p>
                  </div>
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
              <Badge>Explore KryomAI</Badge>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Learn about the system we are building.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Explore KryomAI Intelligence OS, its architecture, research
                direction, and development roadmap.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/intelligence-os">
                  Explore Intelligence OS
                  <ArrowRight size={16} />
                </Button>

                <Button href="/contact" variant="secondary">
                  Contact KryomAI
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