import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-background text-foreground border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-0.5 text-xs font-medium rounded bg-muted text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border/50">
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
