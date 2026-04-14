import { teamData } from "./teamData";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const TeamSection = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-between gap-10 mb-10 md:flex-row">
          <h2 className="text-3xl  font-semibold text-[#0e3b3b] lg:text-4xl">
            Meet our team
          </h2>

          <button className="px-6 py-4 text-lg font-medium bg-green-200 rounded-full hover:bg-violet-300 hover:text-teal-900">
            Why Choose Us
          </button>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.map((member) => (
            <div key={member.id} className="group">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500 object-top"
                />
              </div>

              {/* NAME */}
              <h3 className="mt-4 text-2xl font-semibold text-[#0e3b3b]">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="my-1 text-base text-gray-500">{member.role}</p>

              {/* ICONS */}
              <div className="flex gap-3 mt-3 text-lg text-gray-500">
                <FaInstagram className="cursor-pointer hover:text-black" />
                <FaFacebookF className="cursor-pointer hover:text-black" />
                <FaXTwitter className="cursor-pointer hover:text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
