"use client";

import { TextReveal } from "@/components/unlumen-ui/primitives/text-reveal";

const titleFirstLine = "讓每一道加工流程";
const titleSecondLine = "更穩定、更有效率";
const description =
  "從肉品鋸切、切片與絞肉，到真空包裝、充填成型和蔬果處理，金虹協助您依產能、空間與製程找到合適設備。";

export default function HeroTextReveal() {
  return (
    <>
      <h1>
        <TextReveal
          text={titleFirstLine}
          as="span"
          splitBy="characters"
          staggerDelay={0.08}
          duration={0.85}
          startDelay={0}
          activationDelay={0.7}
          once
          className="hero-reveal-line"
        />
        <br />
        <em>
          <TextReveal
            text={titleSecondLine}
            as="span"
            splitBy="characters"
            staggerDelay={0.08}
            duration={0.85}
            startDelay={0.75}
            activationDelay={0.7}
            once
            className="hero-reveal-line"
          />
        </em>
      </h1>
      <TextReveal
        text={description}
        as="p"
        splitBy="characters"
        staggerDelay={0.024}
        duration={0.6}
        startDelay={1.55}
        activationDelay={0.7}
        once
      />
    </>
  );
}
