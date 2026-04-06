import AboutSection from "../components/home/aboutSection/AboutSection";
import { CausesSection } from "../components/home/causesSection";
import { CTA } from "../components/shared/ctaSection";
import { EventsSection } from "../components/home/eventsSection";
import HelpingBanner from "../components/shared/HelpingBanner";
import Hero from "../components/home/hero";
import OurProjects from "../components/home/ourProjects/OurProjects";
import ReviewsSlider from "../components/shared/reviewsSlider";
import { Testimonials } from "../components/shared/testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <CausesSection />
      <Testimonials />
      <EventsSection />
      <CTA />
      <HelpingBanner/>
      <OurProjects />
      <ReviewsSlider />
    </main>
  );
};

export default Home;
