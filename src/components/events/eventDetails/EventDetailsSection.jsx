import img from "../../../assets/images/44.jpg";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const EventDetailsSection = () => {
  return (
    <section className="px-24 py-16">
      <div className="grid gap-2 mx-auto max-w-7xl lg:grid-cols-3">
        <div className="lg:col-span-2">
          <img src={img} className="mb-6 w-[95%] rounded-xl" />
          <h2 className="mb-4 text-2xl font-bold">
            Running for Community Support
          </h2>
          <p className="mb-6 text-gray-600">
            Our event brings together passionate individuals to support
            community health and well-being. Every step we take creates impact.
          </p>
          <div className="p-4 mb-6 border-l-4 border-teal-600 bg-gray-50">
            <p className="text-gray-700">
              Every step we take together brings us closer to a brighter,
              healthier future for all.
            </p>
          </div>
          <h3 className="mb-2 font-semibold">Engaging Activities</h3>
          <p className="text-gray-600">
            The event includes workshops, community runs, and awareness
            campaigns designed to empower individuals.
          </p>
        </div>
        <div className="space-y-6">
          <div className="p-6 border rounded-xl">
            <p className="mb-2 text-sm text-gray-500">Event Date</p>
            <p className="flex items-center gap-2 mb-4">
              <FaCalendarAlt />
              June 12, 2024
            </p>
            <div className="flex gap-3 text-gray-600">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="mb-3 font-semibold">Have Additional Questions?</h3>
            <p className="mb-2 text-sm text-gray-600">+1 977 888 888</p>
            <p className="mb-4 text-sm text-gray-600">2307 Beverly, New York</p>
            <button className="w-full py-2 text-white bg-teal-700 rounded-full hover:bg-teal-800">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
