import { CSSProperties } from "react";

type AccentToken = "verde" | "rojo" | "barro" | "maiz";

const accentHex: Record<AccentToken, string> = {
  verde: "#0e6e2e",
  rojo: "#9a2b1e",
  barro: "#c2702f",
  maiz: "#efc25e",
};

const order: AccentToken[] = ["verde", "rojo", "maiz", "barro"];

/**
 * A single papel-picado flag. Holes are punched with fill-rule evenodd
 * so it reads as cut tissue paper even over photography.
 */
function Flag({ color }: { color: AccentToken }) {
  return (
    <svg viewBox="0 0 64 78" className="block h-full w-full" aria-hidden="true">
      <path
        fill={accentHex[color]}
        fillRule="evenodd"
        d="M0 0 H64 V56 L56 67 L48 56 L40 67 L32 56 L24 67 L16 56 L8 67 L0 56 Z
           M32 14 L41 26 L32 38 L23 26 Z
           M17 45 a5 5 0 1 0 0.1 0 z
           M47 45 a5 5 0 1 0 0.1 0 z
           M32 48 a3 3 0 1 0 0.1 0 z"
      />
    </svg>
  );
}

interface PapelPicadoProps {
  count?: number;
  className?: string;
  /** disable the swaying animation (e.g. footer) */
  still?: boolean;
  /** lighten the hanging string for dark backgrounds */
  dark?: boolean;
}

/**
 * A festive string of papel picado that gently sways in the breeze.
 * Sway is a CSS keyframe, so it is automatically stilled under
 * prefers-reduced-motion.
 */
export default function PapelPicado({
  count = 14,
  className,
  still = false,
  dark = false,
}: PapelPicadoProps) {
  const flags = Array.from({ length: count }, (_, i) => order[i % order.length]);

  return (
    <div
      className={`pointer-events-none relative w-full ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* hanging string */}
      <div className={`absolute left-0 right-0 top-[6px] h-px ${dark ? "bg-lino/30" : "bg-tinta/20"}`} />
      <ul className="flex w-full items-start justify-between px-1">
        {flags.map((color, i) => (
          <li
            key={i}
            className={still ? "" : "animate-sway"}
            style={
              {
                height: "clamp(34px, 6vw, 52px)",
                width: "clamp(26px, 4.6vw, 40px)",
                animationDelay: `${(i % 7) * 0.32}s`,
              } as CSSProperties
            }
          >
            <Flag color={color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
