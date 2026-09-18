import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative flex min-h-[65vh] items-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 kryomai-grid opacity-60"
        />

        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <Badge>System Response · 404</Badge>

            <h1 className="mt-7 text-7xl font-semibold tracking-[-0.08em] sm:text-8xl">
              404
            </h1>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              This route does not exist.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              The requested page could not be found. Return to the KryomAI
              homepage or explore the platform.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                <ArrowLeft size={16} />
                Back to Homepage
              </Link>

              <Link
                href="/intelligence-os"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface-elevated"
              >
                Explore Intelligence OS
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}