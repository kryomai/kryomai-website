import type { Metadata } from "next";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FlaskConical,
  Globe2,
  Mail,
  MessageSquare,
  Network,
  Users,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KryomAI for research discussions, technical collaboration, partnerships, open-source work, and general inquiries.",
};

const contactPaths = [
  {
    icon: FlaskConical,
    number: "01",
    title: "Research & Technical Discussion",
    description:
      "Discuss intelligent systems, compute orchestration, emerging architectures, scientific computing, and future research directions.",
    label: "Research",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Business & Partnerships",
    description:
      "Explore strategic collaboration, technology partnerships, future integrations, and opportunities around the KryomAI platform.",
    label: "Partnerships",
  },
  {
    icon: Users,
    number: "03",
    title: "Engineering & Collaboration",
    description:
      "Connect around engineering, experimentation, open-source development, and technical contributions to the broader ecosystem.",
    label: "Engineering",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "General Inquiries",
    description:
      "Have a question about KryomAI, Intelligence OS, our long-term direction, or the work currently being explored?",
    label: "General",
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "General Email",
    value: "kryomlabs@gmail.com",
    href: "mailto:kryomlabs@gmail.com",
  },
  {
    icon: Globe2,
    label: "Official Website",
    value: "kryomai.com",
    href: "https://kryomai.com",
  },
];

export default function ContactPage() {
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
            className="absolute right-[-12%] top-[-22%] h-[620px] w-[620px] rounded-full bg-accent/6 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-24%] left-[-15%] h-[500px] w-[500px] rounded-full bg-blue-500/6 blur-3xl"
          />

          <Container>
            <div className="relative grid gap-16 lg:grid-cols-[1fr_0.65fr] lg:items-center lg:gap-20">
              <div className="max-w-5xl">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Contact KryomAI</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                    Open for thoughtful conversations
                  </span>
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                  Start a conversation
                  <span className="block text-muted-foreground">
                    about the future of intelligence.
                  </span>
                </h1>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground sm:text-2xl">
                  Connect with KryomAI to discuss intelligent systems,
                  computation, research, collaboration, and the long-term
                  direction of Intelligence OS.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href="#contact-form">
                    Send an Inquiry
                    <ArrowRight size={16} />
                  </Button>

                  <Button href="/intelligence-os" variant="secondary">
                    Explore Intelligence OS
                    <ArrowUpRight size={16} />
                  </Button>
                </div>

                <div className="mt-14 grid max-w-3xl gap-6 border-t border-border pt-7 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-medium text-foreground">
                      Intelligence Infrastructure
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                      Conversations
                    </p>

                    <p className="mt-2 text-sm font-medium text-foreground">
                      Research · Engineering · Partnerships
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                      Primary Channel
                    </p>

                    <p className="mt-2 text-sm font-medium text-foreground">
                      Email
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Contact Visual */}
              <div className="relative hidden lg:block">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 kryomai-grid opacity-80"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-8 rounded-full border border-border/70"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-20 rounded-full border border-border/50"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-32 rounded-full border border-accent/20"
                  />

                  <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 bg-accent/5 shadow-[0_0_80px_rgba(255,120,40,0.08)]">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <Network size={27} className="text-accent" />

                      <span className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground">
                        Connect
                      </span>

                      <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
                        Intelligence
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-8 top-10 rounded-lg border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      Channel
                    </p>

                    <p className="mt-1 text-xs font-medium">Research</p>
                  </div>

                  <div className="absolute right-8 top-24 rounded-lg border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      Mode
                    </p>

                    <p className="mt-1 text-xs font-medium">Open Dialogue</p>
                  </div>

                  <div className="absolute bottom-12 left-8 rounded-lg border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      Interface
                    </p>

                    <p className="mt-1 text-xs font-medium">Human ↔ System</p>
                  </div>

                  <div className="absolute bottom-10 right-8 rounded-lg border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      Status
                    </p>

                    <div className="mt-1 flex items-center gap-1.5 text-xs font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Available
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-5 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.22em] text-subtle-foreground">
                    CONTACT / 001
                  </div>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-subtle-foreground">
                    CONNECTION LAYER
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Paths */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <Badge>Ways to Connect</Badge>

                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                  Contact pathways
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Start with the area
                <span className="block text-muted-foreground">
                  closest to your interest.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Whether your interest is technical, strategic, scientific, or
                exploratory, clear context helps begin a more useful
                conversation.
              </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2">
              {contactPaths.map((path) => {
                const Icon = path.icon;

                return (
                  <article
                    key={path.title}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated sm:p-8"
                  >
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/30">
                        <Icon size={21} className="text-accent" />
                      </div>

                      <div className="text-right">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                          {path.number}
                        </p>

                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                          {path.label}
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-8 text-xl font-medium tracking-tight">
                      {path.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                      {path.description}
                    </p>

                    <a
                      href="#contact-form"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent"
                    >
                      Start here
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </a>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Inquiry Form */}
        <section
          id="contact-form"
          className="scroll-mt-24 border-b border-border py-24 sm:py-32"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-3">
                  <Badge>Send an Inquiry</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                    Contact interface
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Tell us what
                  <span className="block text-muted-foreground">
                    you want to explore.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                  Share a little context about your background, interest, or
                  proposed discussion. This helps us understand the direction
                  of your message.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Research and technical discussions",
                    "Partnerships and collaboration",
                    "Open-source and engineering conversations",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-accent"
                      />

                      <p className="text-sm leading-6 text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-border pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                    Response Context
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Thoughtful, focused messages help establish productive
                    technical and strategic conversations.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </Container>
        </section>

        {/* Direct Contact */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-3">
                  <Badge>Direct Contact</Badge>

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                    Primary channel
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Prefer email?
                  <span className="block text-muted-foreground">
                    Reach us directly.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                  Email remains the primary channel for initial conversations,
                  research discussions, and collaboration inquiries.
                </p>
              </div>

              <div className="grid gap-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const isExternal = detail.href.startsWith("http");

                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group flex items-center justify-between gap-6 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated sm:p-7"
                    >
                      <div className="flex items-center gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-muted transition-colors duration-300 group-hover:border-accent/30">
                          <Icon size={19} className="text-accent" />
                        </div>

                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle-foreground">
                            {detail.label}
                          </p>

                          <p className="mt-2 text-base font-medium text-foreground sm:text-lg">
                            {detail.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Email Guidance */}
        <section className="border-b border-border py-24 sm:py-32">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 kryomai-grid opacity-30"
              />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
                <div>
                  <Badge>Useful Context</Badge>

                  <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Make the first message
                    <span className="block text-muted-foreground">
                      clear and meaningful.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    A concise subject, relevant background, and clear purpose
                    make it easier to understand your message and identify the
                    right direction for the conversation.
                  </p>

                  <div className="mt-8">
                    <Button href="mailto:kryomlabs@gmail.com">
                      Email KryomAI
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg border border-border bg-background/80 p-5 backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      Suggested Subject
                    </p>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Research Discussion — KryomAI Intelligence OS
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-background/80 p-5 backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      Include
                    </p>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Your background, area of interest, proposed discussion,
                      and relevant links or technical context.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-background/80 p-5 backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      Keep It Focused
                    </p>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Focused messages create clearer and more productive
                      conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Badge>Build the Future</Badge>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Intelligence is a larger conversation.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                If you are exploring intelligent systems, computation, and the
                future of software infrastructure, begin the conversation with
                KryomAI.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="#contact-form">
                  Send an Inquiry
                  <ArrowRight size={16} />
                </Button>

                <Button href="/about" variant="secondary">
                  Learn About KryomAI
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