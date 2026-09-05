import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

export const ProjectGrid = () => {
  return (
    <section className="mt-8">
      <h3 className="text-4xl mb-6">Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
};
