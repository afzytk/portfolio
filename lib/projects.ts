export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  cover: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "rivalrec",
    title: "RivalRec",
    summary: "Online football match tracking and tournament organiser website",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "BetterAuth"],
    cover: "https://placehold.co/600x400/2563eb/white?text=RivalRec",
    liveUrl: "https://rivalrec.vercel.app/",
    repoUrl: "https://github.com/afzytk/rivalrec",
  },
  {
    slug: "jobvio",
    title: "Jobvio",
    summary: "Job portal for job seekers and employers",
    stack: ["React.js", "Supabase", "Tailwind CSS", "Clerk"],
    cover: "https://placehold.co/600x400/2563eb/white?text=Jobvio",
    repoUrl: "https://github.com/afzytk/jobvio",
  },
  {
    slug: "spylt-ui",
    title: "Spylt UI",
    summary: "A responsive high fidelity UI replica of the Spylt website",
    stack: ["React.js", "GSAP", "Tailwind CSS"],
    cover: "https://placehold.co/600x400/2563eb/white?text=Spylt+UI",
    liveUrl: "https://spylt-ui.vercel.app/",
    repoUrl: "https://github.com/afzytk/spylt-frontend-clone",
  },
];
