import { projectDetailsData } from "./projectDetailsData";

const ProjectDetailsSection = () => {
  return (
    <section className="px-6 py-16">

      <div className="grid gap-10 mx-auto max-w-7xl lg:grid-cols-3">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <img
            src={projectDetailsData.image}
            className="mb-6 rounded-xl"
          />

          <h2 className="mb-4 text-2xl font-bold">
            {projectDetailsData.title}
          </h2>

          <p className="text-gray-600">
            {projectDetailsData.description}
          </p>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="p-6 bg-gray-100 rounded-xl">

          <h3 className="mb-3 font-semibold">Project Info</h3>

          <p>Status: Active</p>
          <p>Category: Healthcare</p>

        </div>

      </div>

    </section>
  );
};

export default ProjectDetailsSection;