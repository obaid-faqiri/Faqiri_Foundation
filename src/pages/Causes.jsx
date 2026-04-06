import CausesHero from "../components/causes/causesHero";
import { CausesSection } from "../components/causes/causesGrid";
import { CTA } from "../components/shared/ctaSection";

const Causes = () => {
  return (
    <main>

      <CausesHero />
      <CausesSection />
      <CTA />

    </main>
  );
};

export default Causes;