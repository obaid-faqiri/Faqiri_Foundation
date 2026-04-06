import EventsHero from "../components/events/eventsHero";
import { EventsSection } from "../components/events/eventsGrid";
import { CTA } from "../components/shared/ctaSection";

const Events = () => {
  return (
    <main>

      <EventsHero />
      <EventsSection />
      <CTA />

    </main>
  );
};

export default Events;