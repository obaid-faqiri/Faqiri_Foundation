import { blogDetailsData } from "./blogDetailsData";
import { FaCalendarAlt } from "react-icons/fa";

const BlogDetailsSection = () => {
  return (
    <section className="px-6 py-16">

      <div className="grid gap-10 mx-auto max-w-7xl lg:grid-cols-3">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <img
            src={blogDetailsData.image}
            className="mb-6 rounded-xl"
          />

          <span className="flex items-center gap-2 mb-3 text-sm text-gray-500">
            <FaCalendarAlt />
            {blogDetailsData.date}
          </span>

          <h2 className="mb-4 text-2xl font-bold">
            {blogDetailsData.title}
          </h2>

          <p className="text-gray-600">
            {blogDetailsData.content}
          </p>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="p-6 bg-gray-100 rounded-xl">

          <h3 className="mb-3 font-semibold">Recent Posts</h3>

          <p className="mb-2">Community Support</p>
          <p className="mb-2">Volunteer Stories</p>
          <p>Charity Events</p>

        </div>

      </div>

    </section>
  );
};

export default BlogDetailsSection;