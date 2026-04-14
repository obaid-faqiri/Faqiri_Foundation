import { FaDonate } from "react-icons/fa";

const EventCard = ({ image, title, description, category }) => {
  return (
    <div className="overflow-hidden transition bg-white shadow-sm rounded-xl hover:shadow-md">
      <img src={image} alt={title} className="object-cover w-full h-56" />
      <div className="p-5">
        <h3 className="mb-2 font-semibold text-1xl">{title}</h3>

        <p className="my-5 text-gray-500 text-md">{description}</p>

        <div className="flex items-center justify-between ">
          <span className="flex items-center gap-2 text-gray-500 text-md">
            <FaDonate />
            {category}
          </span>

          <button className="p-4 px-6 font-medium text-green-200 bg-teal-900 rounded-full text-md hover:bg-violet-300 hover:text-teal-900">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
