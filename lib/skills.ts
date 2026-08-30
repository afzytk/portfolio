export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Figma", "Vite", "Vitest"],
  },
];
