import { Project } from "@/lib/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-2xl border overflow-hidden">
      <h1>{project.title}</h1>
      <Image
        src={project.cover}
        alt="project-cover"
        width={600}
        height={400}
        unoptimized
      />

      <p>{project.summary}</p>
      {project.stack.map((skill) => (
        <div key={skill} className="rounded-2xl text-red-500">
          <span>{skill}</span>
        </div>
      ))}
      {project.liveUrl && <a href={project.liveUrl}>Live</a>}

      {project.repoUrl && <a href={project.repoUrl}>Code</a>}
    </div>
  );
};
