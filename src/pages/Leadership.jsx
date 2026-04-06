import LeadershipHero from "../components/leadership/leadershipHero";
import LeadersPreview from "../components/leadership/leadersPreview";
import LeadershipSplit from "../components/leadership/leadershipSplit";
import VolunteersSection from "../components/leadership/volunteers";

// shared
import { CTA } from "../components/shared/ctaSection";
import { Testimonials } from "../components/shared/testimonials";

const Leadership = () => {
  return (
    <main>
      <LeadershipHero />
      <LeadersPreview />
      <LeadershipSplit />
      <VolunteersSection />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Leadership;
