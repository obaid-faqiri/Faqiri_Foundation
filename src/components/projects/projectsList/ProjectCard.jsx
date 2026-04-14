const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="grid items-center gap-10 py-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover object-top"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-[#0e3b3b] lg:text-3xl">
          {title}
        </h3>
        <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
        <button
          className="
            mt-6 
            px-6 py-3 
            text-sm font-medium 
            text-[#0e3b3b] 
            border border-[#0e3b3b] 
            rounded-full 
            transition-all duration-300
            hover:bg-[#0e3b3b] 
            hover:text-white
          "
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
