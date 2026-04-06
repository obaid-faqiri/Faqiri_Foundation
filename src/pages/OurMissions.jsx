// shared
import MissionHero from "../components/ourMission/missionHero/MissionHero";
import { CTA } from "../components/shared/ctaSection";
import { Testimonials } from "../components/shared/testimonials";

const OurMissions = () => {
  return (
    <main>
      <MissionHero />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default OurMissions;