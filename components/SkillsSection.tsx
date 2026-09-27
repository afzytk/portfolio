"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { skillCategories } from "@/lib/skills";
import { TechIcon } from "./TechIcon";

export const SkillsSection = () => {
  const containerRef = useRevealOnScroll<HTMLElement>();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${e.clientX - rect.left}px`,
    );
    e.currentTarget.style.setProperty(
      "--my",
      `${e.clientY - rect.top}px`,
    );
    const overlay = e.currentTarget.querySelector<HTMLElement>(
      ".spotlight-overlay",
    );
    if (overlay) {
      overlay.style.setProperty(
        "--mx",
        `${e.clientX - rect.left}px`,
      );
      overlay.style.setProperty(
        "--my",
        `${e.clientY - rect.top}px`,
        );
    }
  };

  return (
    <section ref={containerRef} id="skills" className="my-24 scroll-mt-24">
      <h2
        data-reveal
        className="mb-10 text-4xl font-bold tracking-tight text-white"
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={category.name}
            data-reveal
            onMouseMove={handleMouseMove}
            className={`spotlight-card glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-accent/40 ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="spotlight-overlay" />

            <div className="relative">
              <h3 className="text-lg font-semibold text-white">
                {category.name}
              </h3>
            </div>

            <div
              className={`relative mt-5 flex flex-wrap gap-2.5 ${
                index === 0 ? "sm:gap-3" : ""
              }`}
            >
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="group/skill flex items-center gap-2 rounded-lg border border-line/70 bg-base/40 px-3 py-2 text-sm text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
                >
                  <TechIcon
                    name={skill}
                    size={index === 0 ? 22 : 18}
                  />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
