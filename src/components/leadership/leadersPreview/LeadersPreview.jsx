import { leadersPreviewData } from "./leadersPreviewData";
import { FaPlay } from "react-icons/fa";

const LeadersPreview = () => {
  return (
    <section className="-mt-20 px-6">

      <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-3">

        {leadersPreviewData.map((leader) => (
          <div key={leader.id} className="text-center">

            <div className="relative overflow-hidden rounded-xl">

              <img
                src={leader.image}
                alt={leader.name}
                className="object-cover w-full h-56"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-teal-700 rounded-full">
                  <FaPlay size={14} />
                </div>
              </div>

            </div>

            <h3 className="mt-4 font-semibold">
              {leader.name}
            </h3>

            <p className="text-sm text-gray-500">
              {leader.role}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default LeadersPreview;