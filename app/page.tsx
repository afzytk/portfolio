import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { Contact } from "@/components/Contact";

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <SkillsSection />
      <ProjectGrid />
      <Contact />
    </div>
  );
};

export default page;
