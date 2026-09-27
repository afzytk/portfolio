"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

export const ProjectGrid = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-24"
      id="projects"
    >
      <h3
        data-reveal
        className="mb-8 text-4xl font-bold tracking-tight text-white"
      >
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
};
