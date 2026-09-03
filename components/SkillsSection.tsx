import { skillCategories } from "@/lib/skills";

export const SkillsSection = () => {
  return (
    <div>
      <p className="text-4xl m-4">Skills</p>
      {skillCategories.map((category) => (
        <div key={category.name}>
          <h3 className="text-2xl m-4">{category.name}</h3>
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="p-3 text-sm bg-neutral-800 text-neutral-200 rounded-md m-2"
            >
              {skill}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
