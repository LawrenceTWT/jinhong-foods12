"use client";

import * as React from "react";

type RevealUnitStyle = React.CSSProperties & {
  "--text-reveal-delay": string;
  "--text-reveal-duration": string;
};

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
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window.IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsInView(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  const units =
    splitBy === "words"
      ? text
          .split(/\s+/)
          .map((word, index, words) =>
            index < words.length - 1 ? `${word}\u00a0` : word,
          )
      : Array.from(text);
  const AnyTag = Tag as React.ElementType;

  return (
    <AnyTag
      ref={ref}
      className={`text-reveal${isInView ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      aria-label={text}
    >
      {units.map((unit, index) => (
        <span
          aria-hidden="true"
          className="text-reveal-unit"
          key={`${unit}-${index}`}
          style={
            {
              "--text-reveal-delay": `${startDelay + index * staggerDelay}s`,
              "--text-reveal-duration": `${duration}s`,
            } as RevealUnitStyle
          }
        >
          {unit === " " ? "\u00a0" : unit}
        </span>
      ))}
    </AnyTag>
  );
}
