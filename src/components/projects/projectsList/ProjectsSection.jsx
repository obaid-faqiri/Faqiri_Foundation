import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="px-6 py-16">

      <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-3">

        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}

      </div>

    </section>
  );
};

export default ProjectsSection;