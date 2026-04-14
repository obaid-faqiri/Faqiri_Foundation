import { projectsHeroData } from "./projectsHeroData";

const ProjectsHero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20 lg:mt-8">
      {/* HERO CONTAINER */}
      <div
        className="
          relative 
          rounded-[30px] lg:rounded-[40px] 
          pt-20 pb-28 
          text-center 
          overflow-hidden
          mt-[-50px]
        "
        style={{
          backgroundImage: `url(${projectsHeroData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0e3b3b]/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            {projectsHeroData.title}
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            {projectsHeroData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
