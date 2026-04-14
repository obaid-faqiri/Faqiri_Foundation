import { eventsData } from "./eventsData";
import EventCard from "./EventCard";

const EventsSection = () => {
  return (
    <section className="px-12 py-16">
      <div className="grid gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {eventsData.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
