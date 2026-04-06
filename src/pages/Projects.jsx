import ProjectsHero from "../components/projects/projectsHero/ProjectsHero";
import { ProjectsSection } from "../components/projects/projectsList";
import { CTA } from "../components/shared/ctaSection";

const Projects = () => {
  return (
    <main>

      <ProjectsHero />
      <ProjectsSection />
      <CTA />

    </main>
  );
};

export default Projects;