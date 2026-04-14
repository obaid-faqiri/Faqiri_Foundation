import { FaCalendarAlt } from "react-icons/fa";

const EventCard = ({ image, title, category }) => {
  return (
    <div className="overflow-hidden transition bg-white shadow-sm rounded-xl hover:shadow-md">
      <img src={image} alt={title} className="object-cover w-full h-48" />

      <div className="p-4">
        <span className="flex items-center gap-2 text-sm text-gray-500">
          <FaCalendarAlt />
          {category}
        </span>

        <h3 className="mt-2 text-lg font-semibold">{title}</h3>

        <button className="px-6 py-3 mt-4 text-sm font-medium text-white bg-teal-700 rounded-full hover:bg-teal-800">
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;
