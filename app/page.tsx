import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";

const page = () => {
  return (
    <div>
      <Hero />
      <SkillsSection />
      <ProjectGrid />
    </div>
  );
};

export default page;
