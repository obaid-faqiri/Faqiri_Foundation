import { leadersPreviewData } from "./leadersPreviewData";
import { FaPlay } from "react-icons/fa";

const LeadersPreview = () => {
  return (
    <section className="px-6 -mt-40 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leadersPreviewData.map((item) => (
            <div key={item.id} className="text-center">
              {/* IMAGE */}
              <div className="relative overflow-hidden shadow-lg rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[260px] object-cover object-top"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">
                    <FaPlay className="text-[#0e3b3b]" />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <h3 className="mt-3 text-lg font-semibold text-[#0e3b3b]">
                {item.name}
              </h3>

              <p className="text-base text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersPreview;
