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
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Figma"],
  },
];
