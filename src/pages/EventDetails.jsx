import EventDetailsSection from "../components/events/eventDetails";
import EventDetailsHero from "../components/events/eventDetails/EventDetailsHero";
import { CTA } from "../components/shared/ctaSection";

const EventDetails = () => {
  return (
    <main>
      <EventDetailsHero />
      <EventDetailsSection />
      <CTA />
    </main>
  );
};

export default EventDetails;
