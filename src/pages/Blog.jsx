import BlogHero from "../components/blog/blogHero";
import { BlogSection } from "../components/blog/blogList";
import { CTA } from "../components/shared/ctaSection";

const Blog = () => {
  return (
    <main>

      <BlogHero />
      <BlogSection />
      <CTA />

    </main>
  );
};

export default Blog;