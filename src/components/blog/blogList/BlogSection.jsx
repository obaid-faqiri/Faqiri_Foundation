import { blogData } from "./blogData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="px-6 py-16">

      <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-3">

        {blogData.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}

      </div>

    </section>
  );
};

export default BlogSection;