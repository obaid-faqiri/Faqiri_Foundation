import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, image }) => {
  return (
    <div className="overflow-hidden bg-white shadow-sm rounded-xl">

      <img src={image} className="object-cover w-full h-48" />

      <div className="p-4">

        <h3 className="mb-3 font-semibold">{title}</h3>

        <Link
          to={`/projects/${id}`}
          className="text-teal-700 hover:underline"
        >
          Read More →
        </Link>

      </div>

    </div>
  );
};

export default ProjectCard;