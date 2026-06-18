"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import TomatoMark from "./TomatoMark";
import { ArrowDownIcon } from "./icons";

/**
 * The menu as a ceremony: a drawn "carta" book that lifts and cracks open on
 * hover, and drops the full menu down when clicked. The menu markup stays in the
 * DOM (server-rendered children) — only its visibility toggles — so SEO and
 * screen readers still get the whole menu.
 */
export default function MenuReveal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Open automatically when arriving via a "#menu" link (nav, hero CTA, chips),
  // so those users land on the menu instead of a closed book. Scrollers still
  // get the closed-book ceremony.
  useEffect(() => {
    const openOnMenuHash = () => {
      if (window.location.hash.startsWith("#menu")) setOpen(true);
    };
    openOnMenuHash();
    window.addEventListener("hashchange", openOnMenuHash);
    return () => window.removeEventListener("hashchange", openOnMenuHash);
  }, []);

  return (
    <div className="mt-12">
      <div className="flex flex-col items-center">
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-panel"
          aria-label={open ? "Cerrar la carta" : "Abrir la carta completa"}
          whileHover={reduce ? undefined : { y: -8 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="group relative block"
        >
          {/* warm glow */}
          <span className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-maiz/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative h-[clamp(320px,56vw,450px)] w-[clamp(240px,42vw,340px)] [perspective:1500px]">
            {/* book thickness */}
            <div className="absolute inset-y-2 -right-2 w-3 rounded-r-lg bg-lino-deep" />
            <div className="absolute inset-x-3 -bottom-2 h-3 rounded-b-lg bg-lino-deep" />

            {/* inner pages — revealed as the cover swings open */}
            <div className="absolute inset-0 overflow-hidden rounded-lg rounded-l-sm bg-lino-soft">
              <div className="ml-7 mt-10 space-y-2.5 pr-5">
                <div className="font-display text-sm italic text-rojo/70">Entradas · Tacos</div>
                {[68, 80, 60, 74, 52, 66, 44].map((w, i) => (
                  <div key={i} className="h-1.5 rounded bg-tinta/12" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>

            {/* front cover */}
            <div
              className={`absolute inset-0 origin-left rounded-lg rounded-l-sm bg-tinta shadow-plate transition-transform duration-700 ease-[cubic-bezier(0.34,1.2,0.64,1)] ${
                open ? "[transform:rotateY(-32deg)]" : "group-hover:[transform:rotateY(-24deg)]"
              }`}
            >
              {/* spine shading */}
              <span className="absolute inset-y-0 left-0 w-3 rounded-l-sm bg-linear-to-r from-black/45 to-transparent" />
              {/* gold inset frame */}
              <span className="absolute inset-[14px] rounded border border-maiz/45" />

              {/* cover content */}
              <div className="relative flex h-full flex-col items-center justify-center gap-3 px-7 text-center">
                <TomatoMark draw={false} strokeWidth={3} className="h-14 w-14 text-lino" />
                <span className="wordmark text-lg text-lino sm:text-xl">EL CULTO</span>
                <span className="rule-mex flex justify-center text-maiz" aria-hidden="true">
                  <span className="inline-block h-1 w-1 rotate-45 bg-maiz" />
                </span>
                <span className="font-display text-[2rem] italic leading-none text-maiz sm:text-4xl">
                  La Carta
                </span>
                <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.35em] text-lino/60">
                  Cocina de autor
                </span>
              </div>

              {/* bookmark ribbon */}
              <span className="absolute -top-1.5 right-9 h-16 w-4 bg-rojo [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]" />
            </div>
          </div>
        </motion.button>

        {/* label / affordance */}
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-tinta">
          {open ? "Cerrar la carta" : "Ábrela y descubre todo el menú"}
          <ArrowDownIcon className={`h-4 w-4 text-rojo transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
      </div>

      {/* the menu drops down */}
      <motion.div
        id="menu-panel"
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div className="pt-14">{children}</div>
      </motion.div>
    </div>
  );
}
