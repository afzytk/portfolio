"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { TechIcon } from "./TechIcon";

export const Hero = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={sectionRef} className="py-8">
      <h2 data-reveal className="text-6xl font-bold tracking-tight text-white">
        Hi, I am{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
          Afsal
        </span>
      </h2>
      <p data-reveal className="mt-3 text-2xl text-neutral-400">
        Full Stack Developer
      </p>

      <div data-reveal className="mt-6 flex items-center gap-3">
        <a
          href="https://github.com/afzytk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-elevated/60 backdrop-blur-md transition-colors hover:border-accent/60"
        >
          <TechIcon name="GitHub" size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/afsaltk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-elevated/60 backdrop-blur-md transition-colors hover:border-accent/60"
        >
          <TechIcon name="LinkedIn" size={22} />
        </a>
      </div>

      <a
        data-reveal
        href="/resume.pdf"
        download="Afsal_TK_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-accent/20 py-2 px-6 font-semibold text-white border border-accent/30 transition-colors hover:bg-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base"
      >
        Download Resume
      </a>
    </div>
  );
};
