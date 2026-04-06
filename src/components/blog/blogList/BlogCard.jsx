import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const BlogCard = ({ id, title, image, date }) => {
  return (
    <div className="overflow-hidden bg-white shadow-sm rounded-xl hover:shadow-md">

      <img src={image} className="object-cover w-full h-48" />

      <div className="p-4">

        <span className="flex items-center gap-2 text-sm text-gray-500">
          <FaCalendarAlt />
          {date}
        </span>

        <h3 className="mt-2 mb-3 font-semibold">
          {title}
        </h3>

        <Link
          to={`/blog/${id}`}
          className="text-teal-700 hover:underline"
        >
          Read More →
        </Link>

      </div>

    </div>
  );
};

export default BlogCard;