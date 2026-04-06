import { missionData } from "./missionData";

const MissionSection = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl lg:text-4xl font-bold text-[#0e3b3b]">
          {missionData.title}
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
          {missionData.description}
        </p>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">

          {missionData.points.map((item, index) => (
            <div
              key={index}
              className="p-6 transition bg-white shadow rounded-2xl hover:shadow-lg"
            >
              <p className="font-semibold text-[#0e3b3b]">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default MissionSection;