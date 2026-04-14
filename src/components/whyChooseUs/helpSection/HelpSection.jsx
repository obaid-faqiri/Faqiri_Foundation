import { helpData } from "./helpData";

import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";

const HelpSection = () => {
  return (
    <section className="px-6 mt-20 lg:px-12 xl:px-20">
      <div className="bg-[#0e3b3b] rounded-[30px] py-16 px-6 lg:px-12">
        {/* TOP AVATARS */}
        <div className="flex justify-center mb-6 -space-x-3">
          <img
            src={img1}
            className="object-cover w-10 h-10 border-2 border-white rounded-full"
          />
          <img
            src={img2}
            className="object-cover w-10 h-10 border-2 border-white rounded-full"
          />
          <img
            src={img3}
            className="object-cover w-10 h-10 border-2 border-white rounded-full"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-center text-white lg:text-3xl">
          How could you help?
        </h2>

        {/* ICONS */}
        <div className="grid gap-12 text-center mt-14 md:grid-cols-2 lg:grid-cols-4">
          {helpData.map((item) => {
            const Icon = item.icon; // ✅ VERY IMPORTANT

            return (
              <div key={item.id}>
                {/* ICON BOX */}
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-200 rounded-lg">
                  <Icon className="text-[#0e3b3b] text-lg" />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
