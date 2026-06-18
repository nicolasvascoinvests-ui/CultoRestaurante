"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Logo from "./Logo";
import { navLinks, whatsappLink, whatsappDefaultMessage } from "@/lib/site";
import { WhatsappIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-tinta/10 bg-lino/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="El Culto Cocina — inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm font-medium tracking-wide text-tinta/80 transition-colors hover:text-verde"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Desktop order pill */}
          <a
            href={whatsappLink(whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold text-lino transition-colors hover:bg-rojo-deep sm:inline-flex"
          >
            <WhatsappIcon className="h-4 w-4" />
            Pedir
          </a>

          {/* Compact order button for phones (keeps WhatsApp always reachable) */}
          <a
            href={whatsappLink(whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir por WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-rojo text-lino transition-colors hover:bg-rojo-deep sm:hidden"
          >
            <WhatsappIcon className="h-5 w-5" />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-tinta md:hidden"
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile menu — rendered OUTSIDE the backdrop-blurred header so its
          position:fixed is relative to the viewport (not the 76px header). */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-30 flex flex-col bg-lino md:hidden"
          >
            <ul className="flex flex-1 flex-col gap-1 px-6 pt-8">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-tinta/10 py-4 font-display text-3xl text-tinta transition-colors hover:text-verde"
                  >
                    <span className="mr-3 align-middle text-sm text-rojo">0{i + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-10">
              <a
                href={whatsappLink(whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rojo px-5 py-4 text-base font-semibold text-lino shadow-[0_14px_30px_-12px_rgba(154,43,30,0.7)]"
              >
                <WhatsappIcon className="h-5 w-5" />
                Pedir por WhatsApp
              </a>
              <p className="mt-4 text-center text-sm text-tinta/60">
                Envigado, Antioquia · Dom–Jue 2–10 p. m.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
