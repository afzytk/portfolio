import { Project } from "@/lib/projects";
import Image from "next/image";
import { TechIcon } from "./TechIcon";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div data-reveal className="glass card-hover flex flex-col rounded-2xl p-4">
      <Image
        src={project.cover}
        alt={`${project.title} cover`}
        width={600}
        height={400}
        unoptimized
        className="mb-4 rounded-2xl"
      />

      <h3 className="mb-2 text-center text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mb-4 text-sm text-neutral-400">{project.summary}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.stack.map((skill) => (
          <span
            className="flex items-center gap-1.5 rounded-lg border border-line/70 bg-elevated/70 px-2.5 py-1.5 text-xs text-neutral-300 transition-colors hover:border-accent/50 hover:text-white"
            key={skill}
          >
            <TechIcon name={skill} size={14} />
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="flex-1 rounded-full bg-accent/20 py-2 px-4 text-center font-semibold text-white border border-accent/30 transition-colors hover:bg-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="flex-1 rounded-full border border-line/80 bg-elevated/60 py-2 px-4 text-center font-semibold text-neutral-200 transition-colors hover:border-accent/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
};
