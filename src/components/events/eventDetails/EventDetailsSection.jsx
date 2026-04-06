import img from "../../../assets/images/5.jpg";
import { FaCalendarAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const EventDetailsSection = () => {
  return (
    <section className="px-6 py-16">

      <div className="grid gap-10 mx-auto max-w-7xl lg:grid-cols-3">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <img
            src={img}
            className="w-full mb-6 rounded-xl"
          />

          {/* TITLE */}
          <h2 className="mb-4 text-2xl font-bold">
            Running for Community Support
          </h2>

          {/* DESCRIPTION */}
          <p className="mb-6 text-gray-600">
            Our event brings together passionate individuals to support
            community health and well-being. Every step we take creates impact.
          </p>

          {/* QUOTE (IMPORTANT PART) */}
          <div className="p-4 mb-6 border-l-4 border-teal-600 bg-gray-50">
            <p className="text-gray-700">
              Every step we take together brings us closer to a brighter,
              healthier future for all.
            </p>
          </div>

          {/* EXTRA TEXT */}
          <h3 className="mb-2 font-semibold">Engaging Activities</h3>
          <p className="text-gray-600">
            The event includes workshops, community runs, and awareness
            campaigns designed to empower individuals.
          </p>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* INFO CARD */}
          <div className="p-6 border rounded-xl">

            <p className="mb-2 text-sm text-gray-500">
              Event Date
            </p>

            <p className="flex items-center gap-2 mb-4">
              <FaCalendarAlt />
              June 12, 2024
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 text-gray-600">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>

          </div>

          {/* CONTACT CARD */}
          <div className="p-6 border rounded-xl">

            <h3 className="mb-3 font-semibold">
              Have Additional Questions?
            </h3>

            <p className="mb-2 text-sm text-gray-600">
              +1 977 888 888
            </p>

            <p className="mb-4 text-sm text-gray-600">
              2307 Beverly, New York
            </p>

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