import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  id?: string;
}

/** Serif section header with the small line·diamond·line flourish. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-lino" : "text-tinta";
  const introColor = tone === "light" ? "text-lino/75" : "text-tinta/70";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl`}>
      <Reveal>
        <p className={`eyebrow ${tone === "light" ? "text-maiz" : "text-rojo"}`}>{eyebrow}</p>
        <span
          className={`rule-mex mt-3 ${isCenter ? "justify-center" : ""} flex`}
          aria-hidden="true"
        >
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-barro" />
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={id} className={`mt-4 text-balance text-4xl sm:text-5xl ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className={`mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${introColor}`}>
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
