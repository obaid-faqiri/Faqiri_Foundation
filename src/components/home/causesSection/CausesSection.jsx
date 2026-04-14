import { causesData } from "./causesData";
import CauseCard from "./CauseCard";
import CausesImage from "../../../assets/images/3.jpg";

const CausesSection = () => {
  return (
    <section className="px-6 py-8 m-20 mt-12 bg-teal-900 lg:px-8 xl:px-10 rounded-2xl">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-6 mb-8 lg:grid-cols-2">
          <h2 className="font-bold text-white md:text-4xl text-[25px] text-center lg:text-left">
            The mission of our organization
          </h2>

          <p className="text-sm leading-relaxed text-center text-gray-300 md:text-base lg:text-left">
            At Lambda, we prioritize transparency, integrity, and inclusivity.
            These values guide our actions as we work tirelessly to bridge the
            gap between those in need and those willing to help.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CARDS */}
          <div className="space-y-4">
            {causesData.map((cause) => (
              <CauseCard
                key={cause.id}
                icon={cause.icon}
                title={cause.title}
                description={cause.description}
              />
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={CausesImage}
              alt="donation"
              className="object-top w-full h-[300px] md:h-[350px] rounded-2xl lg:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
