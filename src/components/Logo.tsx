import TomatoMark from "./TomatoMark";

interface LogoProps {
  tone?: "ink" | "cream";
  className?: string;
}

/** Horizontal wordmark lockup: line-art tomato + EL CULTO / COCINA. */
export default function Logo({ tone = "ink", className }: LogoProps) {
  const text = tone === "cream" ? "text-lino" : "text-tinta";
  const sub = tone === "cream" ? "text-lino/65" : "text-tinta/55";
  const mark = tone === "cream" ? "text-lino" : "text-rojo";

  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <TomatoMark draw={false} className={`h-9 w-9 shrink-0 ${mark}`} strokeWidth={3} />
      <span className="flex flex-col leading-none">
        <span className={`wordmark text-[0.98rem] ${text}`}>EL CULTO</span>
        <span className={`mt-1 text-[0.58rem] font-medium uppercase tracking-[0.42em] ${sub}`}>
          Cocina
        </span>
      </span>
    </span>
  );
}
