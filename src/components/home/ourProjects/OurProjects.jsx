import { ourProjectsData } from "./ourProjectsData";
import OurProjectsCard from "./OurProjectsCard";

const OurProjects = () => {
  return (
    <section className="px-4 py-10 lg:mx-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 mb-12 lg:grid-cols-2">
          <h2 className="text-3xl font-bold lg:text-[33px]">
            Projects for the charity donation organization
          </h2>
          <p className="text-gray-500">
            These projects showcase Lambda commitment to addressing a diverse
            range of issues including education, healthcare, economic
            empowerment, community development, emergency relief, and
            environmental sustainability.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ourProjectsData.map((project) => (
            <OurProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurProjects;
