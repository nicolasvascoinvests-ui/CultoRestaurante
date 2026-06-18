"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "motion/react";
import TomatoMark from "./TomatoMark";
import PapelPicado from "./PapelPicado";
import WhatsappButton from "./WhatsappButton";
import { ArrowRightIcon } from "./icons";

const taglineWords = ["Sabores", "que", "despiertan"];

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const wordItem: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

interface FloatingCardProps {
  src: string;
  alt: string;
  className: string;
  rotate: number;
  y?: MotionValue<number>;
  delay: number;
  priority?: boolean;
}

function FloatingCard({ src, alt, className, rotate, y, delay, priority }: FloatingCardProps) {
  return (
    <motion.figure
      style={y ? { y } : undefined}
      initial={{ opacity: 0, scale: 0.9, rotate: rotate * 1.6 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
    >
      <div className="animate-floaty" style={{ animationDelay: `${delay}s` }}>
        <div className="overflow-hidden rounded-[1.4rem] border-[6px] border-lino-soft bg-lino-soft shadow-plate">
          <Image
            src={src}
            alt={alt}
            width={420}
            height={420}
            priority={priority}
            sizes="(max-width: 767px) 0px, (max-width: 1280px) 260px, 320px"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.figure>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Layered parallax — different depths move at different speeds.
  const yWash = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yPapel = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const yCardA = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yCardB = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yCardC = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const tomatoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const tomatoRotate = useTransform(scrollYProgress, [0, 1], [0, 16]);

  const off = reduce ? undefined : true; // gate parallax styles

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-linear-to-b from-lino-soft via-lino to-lino-deep"
      aria-label="Inicio"
    >
      {/* Layer 0 — ambient color washes from the food & papel picado */}
      <motion.div
        aria-hidden="true"
        style={off ? { y: yWash } : undefined}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* static washes — never animate transform on blurred layers (paint cost) */}
        <div className="absolute -left-24 top-24 h-[42vh] w-[42vh] rounded-full bg-maiz/30 blur-[90px]" />
        <div className="absolute right-[-10%] top-1/3 h-[46vh] w-[46vh] rounded-full bg-barro/20 blur-[100px]" />
        <div className="absolute bottom-[-8%] left-1/3 h-[40vh] w-[40vh] rounded-full bg-verde/15 blur-[100px]" />
      </motion.div>

      {/* Papel picado banner */}
      <motion.div style={off ? { y: yPapel } : undefined} className="absolute inset-x-0 top-0 z-20 pt-[calc(var(--nav-h)-0.5rem)]">
        <PapelPicado count={12} />
      </motion.div>

      {/* Floating food cards (desktop) */}
      <div className="absolute inset-0 z-0 hidden md:block" aria-hidden="false">
        <FloatingCard
          src="/images/tacos-birrieros.jpg"
          alt="Trío de tacos birrieros con consomé de birria y limón"
          className="right-[6%] top-[20%] w-[clamp(180px,17vw,260px)]"
          rotate={5}
          y={off ? yCardA : undefined}
          delay={0.5}
          priority
        />
        <FloatingCard
          src="/images/bowl-mexicano.jpg"
          alt="Bowl mexicano con aguacate, arroz, pico de gallo y nachos"
          className="left-[5%] top-[30%] w-[clamp(150px,13vw,210px)]"
          rotate={-6}
          y={off ? yCardB : undefined}
          delay={0.7}
        />
        <FloatingCard
          src="/images/tacos-surtido.jpg"
          alt="Surtido de tacos coloridos sobre mesa festiva"
          className="bottom-[8%] right-[14%] w-[clamp(140px,12vw,190px)]"
          rotate={4}
          y={off ? yCardC : undefined}
          delay={0.9}
        />
      </div>

      {/* Center content */}
      <motion.div
        style={off ? { y: yContent, opacity: contentOpacity } : undefined}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pb-20 pt-[calc(var(--nav-h)+5.5rem)] text-center sm:pt-[calc(var(--nav-h)+6.5rem)]"
      >
        {/* Self-drawing tomato behind the title */}
        <motion.div
          aria-hidden="true"
          style={off ? { scale: tomatoScale, rotate: tomatoRotate } : undefined}
          className="pointer-events-none absolute top-[8%] left-1/2 -z-10 w-[min(78vw,420px)] -translate-x-1/2 text-rojo/15"
        >
          <TomatoMark className="h-auto w-full" strokeWidth={1.6} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="eyebrow text-rojo"
        >
          Est. 2021 · Envigado · Abierto desde las 2 p. m.
        </motion.p>

        <h1 className="mt-5 font-display text-[clamp(2.7rem,8.5vw,5.5rem)] font-semibold leading-[0.98] text-tinta">
          <motion.span
            variants={reduce ? undefined : wordContainer}
            initial={reduce ? false : "hidden"}
            animate={reduce ? false : "show"}
            className="block"
          >
            {taglineWords.map((w) => (
              <span key={w} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span variants={reduce ? undefined : wordItem} className="inline-block">
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span variants={reduce ? undefined : wordItem} className="inline-block italic text-rojo">
                memorias
              </motion.span>
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-tinta/75 sm:text-lg"
        >
          Un culto a la comida con origen mexicano: ingredientes frescos, recetas
          auténticas y una fiesta de sabores que deleitan todos tus sentidos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center"
        >
          <WhatsappButton size="lg" />
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-tinta/25 px-8 py-4 text-base font-semibold text-tinta transition-all duration-300 hover:-translate-y-0.5 hover:border-verde hover:text-verde"
          >
            Ver menú
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Mobile food image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 w-full max-w-[340px] md:hidden"
        >
          <div className="overflow-hidden rounded-[1.4rem] border-[6px] border-lino-soft shadow-plate">
            <Image
              src="/images/tacos-birrieros.jpg"
              alt="Trío de tacos birrieros con consomé y limón"
              width={420}
              height={420}
              priority
              sizes="340px"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-tinta/60">
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Desliza</span>
          <span className="relative flex h-9 w-5 justify-center rounded-full border border-tinta/30">
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rojo"
              style={reduce ? undefined : { animation: "scroll-cue 1.8s ease-in-out infinite" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
