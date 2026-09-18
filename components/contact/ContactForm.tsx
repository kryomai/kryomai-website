"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  organization: "",
  inquiry: "General Inquiry",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  function updateField(
    field: keyof typeof initialForm,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
          <CheckCircle2 className="text-accent" size={24} />
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          Message received.
        </h2>

        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
          Thank you for reaching out to KryomAI. Your inquiry has been
          recorded, and our team will review it.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
          }}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Send another message
          <ArrowUpRight size={15} />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="organization"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Organization
          </label>

          <input
            id="organization"
            name="organization"
            type="text"
            value={form.organization}
            onChange={(event) =>
              updateField("organization", event.target.value)
            }
            placeholder="Company, lab, or institution"
            className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="inquiry"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Inquiry Type
          </label>

          <select
            id="inquiry"
            name="inquiry"
            value={form.inquiry}
            onChange={(event) => updateField("inquiry", event.target.value)}
            className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          >
            <option>General Inquiry</option>
            <option>Research Collaboration</option>
            <option>Technology Partnership</option>
            <option>Open Source</option>
            <option>Media / Press</option>
            <option>Career / Talent</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us what you would like to explore..."
            className="w-full resize-none rounded-md border border-border bg-background px-3 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-muted-foreground">
          We respect your privacy and only use submitted information to respond
          to your inquiry.
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              Sending
              <Loader2 size={16} className="animate-spin" />
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowUpRight size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}