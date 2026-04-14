import WhyHero from "../components/whyChooseUs/whyHero";
import OurProjects from "../components/home/ourProjects";
import HelpingBanner from "../components/shared/HelpingBanner";
import HelpSection from "../components/whyChooseUs/helpSection";
import { CTA } from "../components/shared/ctaSection";
import { Testimonials } from "../components/shared/testimonials";

const WhyChooseUs = () => {
  return (
    <main>
      <WhyHero />
      <OurProjects />
      <HelpSection />
      <HelpingBanner />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default WhyChooseUs;
