import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="px-6 py-16 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {projectsData.map((project, index) => (
          <div key={project.id}>
            <ProjectCard {...project} />

            {/* DIVIDER */}
            {index !== projectsData.length - 1 && (
              <div className="border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
