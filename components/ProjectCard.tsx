import { Project } from "@/lib/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-2xl shadow-md border-2 border-blue-300  overflow-hidden mt-8 p-4">
      <h3 className="text-2xl mb-4">{project.title}</h3>
      <Image
        src={project.cover}
        alt="project-cover"
        width={600}
        height={400}
        unoptimized
        className="rounded-2xl mb-4"
      />

      <p className="text-center shadow mb-4">{project.summary}</p>
      <div className="rounded-2xl text-red-500 grid grid-cols-3">
        {project.stack.map((skill) => (
          <span
            className="p-3 text-sm bg-neutral-800 text-neutral-200 rounded-md m-2"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-col">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="bg-violet-500 
                                   hover:bg-violet-700 
                                   text-white font-bold
                                   py-2 px-4 rounded-3xl 
                                   focus:outline-none 
                                   focus:shadow-outline m-4 text-center"
          >
            Live
          </a>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="bg-green-500 
                                   hover:bg-green-700 
                                   text-white font-bold
                                   py-2 px-4 rounded-3xl 
                                   focus:outline-none 
                                   focus:shadow-outline m-4 text-center"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
};
