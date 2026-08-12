"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

const titleFirstLine = "讓每一道加工流程";
const titleSecondLine = "更穩定、更有效率";
const description =
  "從肉品鋸切、切片與絞肉，到真空包裝、充填成型和蔬果處理，金虹協助您依產能、空間與製程找到合適設備。";

interface RevealCharactersProps {
  text: string;
  startDelay: number;
  staggerDelay: number;
  duration: number;
}

function RevealCharacters({
  text,
  startDelay,
  staggerDelay,
  duration,
}: RevealCharactersProps) {
  return Array.from(text).map((character, index) => (
    <span
      className="hero-reveal-character"
      key={`${character}-${index}`}
      style={
        {
          "--reveal-delay": `${startDelay + index * staggerDelay}s`,
          "--reveal-duration": `${duration}s`,
        } as CSSProperties
      }
    >
      {character === " " ? "\u00a0" : character}
    </span>
  ));
}

export default function HeroTextReveal() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  const visibilityClass = isVisible ? " is-visible" : "";

  return (
    <>
      <h1
        className={`hero-reveal hero-reveal-title${visibilityClass}`}
        ref={headingRef}
        aria-label={`${titleFirstLine}，${titleSecondLine}`}
      >
        <span className="hero-reveal-line" aria-hidden="true">
          <RevealCharacters
            text={titleFirstLine}
            startDelay={0}
            staggerDelay={0.035}
            duration={0.55}
          />
        </span>
        <br aria-hidden="true" />
        <em className="hero-reveal-line" aria-hidden="true">
          <RevealCharacters
            text={titleSecondLine}
            startDelay={titleFirstLine.length * 0.035}
            staggerDelay={0.035}
            duration={0.55}
          />
        </em>
      </h1>
      <p
        className={`hero-reveal hero-reveal-description${visibilityClass}`}
        aria-label={description}
      >
        <span aria-hidden="true">
          <RevealCharacters
            text={description}
            startDelay={0.62}
            staggerDelay={0.012}
            duration={0.4}
          />
        </span>
      </p>
    </>
  );
}
