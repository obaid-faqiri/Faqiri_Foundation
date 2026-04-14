import BlogHero from "../components/blog/blogHero";
import { BlogSection } from "../components/blog/blogList";
import { CTA } from "../components/shared/ctaSection";
import { ProjectsSection } from "../components/projects/projectsList";

const Blog = () => {
  return (
    <main>
      <BlogHero />
      <ProjectsSection />
      <BlogSection />
      <CTA />
    </main>
  );
};

export default Blog;
