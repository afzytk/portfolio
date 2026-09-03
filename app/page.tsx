import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <SkillsSection />
      <ProjectGrid />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
