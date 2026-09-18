import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero";
import { PlatformIntroduction } from "@/components/home/PlatformIntroduction";
import { IntelligenceNative } from "@/components/home/IntelligenceNative";
import { ArchitecturePreview } from "@/components/home/ArchitecturePreview";
import { Capabilities } from "@/components/home/Capabilities";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { RoadmapPreview } from "@/components/home/RoadmapPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "KryomAI | Connecting Intelligence with Computation",
  description:
    "KryomAI is building the foundation for intelligence-native computing through intelligent software, orchestration, heterogeneous compute, and future computational systems.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />

        <PlatformIntroduction />

        <IntelligenceNative />

        <ArchitecturePreview />

        <Capabilities />

        <ResearchPreview />

        <RoadmapPreview />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}