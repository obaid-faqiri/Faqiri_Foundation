import { ourProjectsData } from "./ourProjectsData";
import OurProjectsCard from "./OurProjectsCard";

const OurProjects = () => {
  return (
    <section className="px-6 py-24 m-20 ">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="grid gap-10 mb-16 lg:grid-cols-2">
          <h2 className="text-3xl font-bold">
            Projects for the charity donation organization
          </h2>

          <p className="text-gray-500">
            These projects showcase Lambda commitment to addressing a diverse
            range of issues including education, healthcare, economic
            empowerment, community development, emergency relief, and
            environmental sustainability.
          </p>
        </div>

        {/* Cards */}

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
