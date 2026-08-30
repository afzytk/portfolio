import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.slug} />;
      })}
    </div>
  );
};
