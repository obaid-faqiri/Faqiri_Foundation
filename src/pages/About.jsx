import AboutHero from "../components/about/aboutHero";
import ValuesSection from "../components/about/valuesSection";
import StatsSection from "../components/about/statsSection";
import TeamSection from "../components/about/teamSection";

// shared
import { CTA } from "../components/shared/ctaSection";
import { Testimonials } from "../components/shared/testimonials";

const About = () => {
  return (
    <main>
      <AboutHero />

      <ValuesSection />
      <StatsSection />
      <TeamSection />

      <Testimonials />
      <CTA />
    </main>
  );
};

export default About;
