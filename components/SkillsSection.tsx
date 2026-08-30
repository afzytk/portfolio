import { skillCategories } from "@/lib/skills";

export const SkillsSection = () => {
  return (
    <div>
      {skillCategories.map((category) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          {category.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
