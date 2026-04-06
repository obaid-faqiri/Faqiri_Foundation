// new sections
import WhyHero from "../components/whyChooseUs/whyHero";
import WhyBanner from "../components/whyChooseUs/whyBanner";

// reuse
import OurProjects from "../components/home/ourProjects";
import HelpingBanner from "../components/shared/HelpingBanner";

// shared
import { CTA } from "../components/shared/ctaSection";
import { Testimonials } from "../components/shared/testimonials";

const WhyChooseUs = () => {
  return (
    <main>

      <WhyHero />
      <WhyBanner />

      <OurProjects />

      <HelpingBanner />
      <Testimonials />
      <CTA />

    </main>
  );
};

export default WhyChooseUs;