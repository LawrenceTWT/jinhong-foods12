"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export interface TextRevealProps {
  /** The text to animate. */
  text: string;
  /** HTML tag for the container element. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Reveal the text word by word or character by character. */
  splitBy?: "words" | "characters";
  /** Delay between each word or character, in seconds. */
  staggerDelay?: number;
  /** Duration of each unit's animation, in seconds. */
  duration?: number;
  /** Delay before this reveal begins, in seconds. */
  startDelay?: number;
  /** Percentage of the element that must be visible before revealing. */
  threshold?: number;
  /** Only run the reveal the first time it enters the viewport. */
  once?: boolean;
  className?: string;
}

export function TextReveal({
  text,
  as: Tag = "p",
  splitBy = "words",
  staggerDelay = 0.05,
  duration = 0.5,
  startDelay = 0,
  threshold = 0.35,
  once = true,
  className,
}: TextRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduceMotion = useReducedMotion();
  const [fallbackInView, setFallbackInView] = React.useState(false);

  React.useEffect(() => {
    if (typeof window.IntersectionObserver !== "undefined") return;
    const frame = window.requestAnimationFrame(() => setFallbackInView(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const units =
    splitBy === "words"
      ? text
          .split(/\s+/)
          .map((word, index, words) =>
            index < words.length - 1 ? `${word}\u00a0` : word,
          )
      : Array.from(text);
  const AnyTag = Tag as React.ElementType;
  const revealed = isInView || fallbackInView || shouldReduceMotion;

  return (
    <AnyTag ref={ref} className={className} aria-label={text}>
      {units.map((unit, index) => (
        <motion.span
          aria-hidden="true"
          key={`${unit}-${index}`}
          initial={{ opacity: 0.08, filter: "blur(9px)", y: "0.28em" }}
          animate={
            revealed
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : { opacity: 0.08, filter: "blur(9px)", y: "0.28em" }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : duration,
            delay: shouldReduceMotion ? 0 : startDelay + index * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", willChange: "opacity, filter, transform" }}
        >
          {unit === " " ? "\u00a0" : unit}
        </motion.span>
      ))}
    </AnyTag>
  );
}
