import { skillCategories } from "@/lib/skills";

export const SkillsSection = () => {
  return (
    <div className="p-5">
      <p className="text-4xl">Skills</p>
      {skillCategories.map((category) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-neutral-800 text-neutral-200 rounded-full m-2"
            >
              {skill}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
