import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { eventsData } from "./eventsData";
import EventCard from "./EventCard";

const EventsSection = () => {
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    if (index < eventsData.length - 3) {
      setIndex(index + 1);
    }
  };
  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <section className="px-4 py-12 overflow-hidden mx-7 lg:mx-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-8 mb-10 lg:flex-row">
          <h2 className="text-3xl font-bold text-center lg:text-left lg:text-4xl">
            Programs and Initiatives
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center border rounded-full h-14 w-14 hover:bg-teal-900 hover:text-white"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center border rounded-full w-14 h-14 hover:bg-teal-900 hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}

        <div className="overflow-hidden">
          <div
            className="flex flex-auto transition-transform duration-500 ease-in-out "
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-full p-4 md:w-1/2 lg:w-1/3"
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
