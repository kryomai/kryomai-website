import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kryomai.com"),

  title: {
    default: "KryomAI | Connecting Intelligence with Computation",
    template: "%s | KryomAI",
  },

  description:
    "KryomAI is building the foundation for intelligence-native computing — connecting intelligent software, systems, and computation through an evolving intelligent platform.",

  applicationName: "KryomAI",

  keywords: [
    "KryomAI",
    "KryomAI Intelligence OS",
    "Intelligence-Native Computing",
    "AI Operating System",
    "Intelligent Computing",
    "AI Systems",
    "Compute Orchestration",
    "Future Computing",
  ],

  authors: [{ name: "KryomAI" }],

  creator: "KryomAI",
  publisher: "KryomAI",

  openGraph: {
    title: "KryomAI | Connecting Intelligence with Computation",
    description:
      "Building the foundation for intelligence-native computing.",
    url: "https://kryomai.com",
    siteName: "KryomAI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KryomAI | Connecting Intelligence with Computation",
    description:
      "Building the foundation for intelligence-native computing.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}