// shared
import MissionHero from "../components/ourMission/missionHero/MissionHero";
import { CTA } from "../components/shared/ctaSection";
import { CausesSection } from "../components/home/causesSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import HelpingBanner from "../components/shared/HelpingBanner/HelpingBanner";

const OurMissions = () => {
  return (
    <main>
      <MissionHero />
      <CausesSection />
      <AboutSection />
      <HelpingBanner />
      <CTA />
    </main>
  );
};

export default OurMissions;
