import { ArrowDownRight } from "lucide-react";

import { Badge } from "./Badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  showArrow?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  showArrow = false,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "relative max-w-4xl",
        isCentered ? "mx-auto text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow ? (
        <div
          className={[
            "mb-5 flex items-center gap-3",
            isCentered ? "justify-center" : "justify-start",
          ].join(" ")}
        >
          <Badge>{eyebrow}</Badge>

          {showArrow ? (
            <ArrowDownRight
              size={15}
              className="text-subtle-foreground"
              aria-hidden="true"
            />
          ) : null}
        </div>
      ) : null}

      <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h2>

      {description ? (
        <p
          className={[
            "mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
            isCentered ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}