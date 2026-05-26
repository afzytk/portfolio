export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-background text-foreground text-center relative overflow-hidden pt-16"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl flex flex-col items-center gap-6 z-10">
        <img
          src="https://github.com/afzytk.png"
          alt="Afsal"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-background shadow-xl ring-2 ring-primary/20"
        />

        <span className="px-3 py-1 text-xs font-medium tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full uppercase">
          Hi there, I'm
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
          Afsal
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-muted-foreground max-w-2xl balance">
          Frontend Developer
        </p>

        <p className="text-base text-muted-foreground/80 max-w-xl leading-relaxed">
          Building high-performance user interfaces and responsive web
          applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 h-11 inline-flex items-center justify-center font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          >
            View Projects
          </a>

          <a
            href="https://github.com/afzytk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 h-11 inline-flex items-center justify-center font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
