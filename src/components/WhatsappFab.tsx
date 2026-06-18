"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { whatsappLink, whatsappDefaultMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

/** Persistent, high-contrast ordering button — appears once the hero scrolls away. */
export default function WhatsappFab() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink(whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir por WhatsApp"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.85 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-rojo py-3.5 pl-4 pr-5 text-lino shadow-[0_18px_40px_-12px_rgba(154,43,30,0.85)] transition-colors hover:bg-rojo-deep sm:bottom-7 sm:right-7"
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lino/40" />
            )}
            <WhatsappIcon className="relative h-7 w-7" />
          </span>
          <span className="text-sm font-semibold tracking-wide">
            <span className="sm:hidden">Pedir</span>
            <span className="hidden sm:inline">Pedir por WhatsApp</span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
