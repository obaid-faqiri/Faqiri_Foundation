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
    <section className="px-6 py-12 mx-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Programs and Initiatives</h2>

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
            className="flex transition-transform duration-500 ease-in-out"
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
