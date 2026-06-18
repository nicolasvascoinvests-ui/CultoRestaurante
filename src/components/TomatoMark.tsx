"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

interface TomatoMarkProps {
  className?: string;
  /** stroke width in viewBox units */
  strokeWidth?: number;
  /** when true, animates the self-draw on mount/in-view */
  draw?: boolean;
  title?: string;
}

const leafPaths = [
  "M120 72 C 102 60 84 62 72 74",
  "M120 72 C 108 56 98 50 90 40",
  "M120 72 C 120 56 120 50 122 40",
  "M120 72 C 132 56 142 50 150 40",
  "M120 72 C 138 60 156 62 168 74",
];

/**
 * Minimal line-art tomato echoing the brand wordmark.
 * Strokes draw themselves into view, then sit still.
 */
export default function TomatoMark({
  className,
  strokeWidth = 2.4,
  draw = true,
  title = "El Culto Cocina",
}: TomatoMarkProps) {
  const reduce = useReducedMotion();
  const shouldDraw = draw && !reduce;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const stroke: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3 } },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
      variants={shouldDraw ? container : undefined}
      initial={shouldDraw ? "hidden" : false}
      whileInView={shouldDraw ? "show" : undefined}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Body */}
      <motion.circle cx="120" cy="138" r="74" variants={shouldDraw ? stroke : undefined} />
      {/* Stem */}
      <motion.path d="M120 66 C 119 56 121 50 124 44" variants={shouldDraw ? stroke : undefined} />
      {/* Calyx leaves */}
      {leafPaths.map((d, i) => (
        <motion.path key={i} d={d} variants={shouldDraw ? stroke : undefined} />
      ))}
    </motion.svg>
  );
}
