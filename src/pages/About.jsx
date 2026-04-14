import AboutHero from "../components/about/aboutHero";
import TeamSection from "../components/about/teamSection";
import AboutSection from "../components/home/aboutSection";
import { CTA } from "../components/shared/ctaSection";
import { Testimonials } from "../components/shared/testimonials";

const About = () => {
  return (
    <main>
      <AboutHero />
      <Testimonials />
      <AboutSection />
      <TeamSection />
      <CTA />
    </main>
  );
};

export default About;
