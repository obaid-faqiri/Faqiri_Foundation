import { aboutHeroData } from "./aboutHeroData";

const AboutHero = () => {
  return (
    <section className="px-6 mt-12 lg:px-12 xl:px-20">

      <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0e3b3b] leading-tight">
            {aboutHeroData.title}
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-lg text-gray-600 lg:mx-0">
            {aboutHeroData.subtitle}
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={aboutHeroData.image}
            alt="about"
            className="w-full h-[420px] object-cover rounded-[40px] shadow-xl"
          />
        </div>

      </div>

    </section>
  );
};

export default AboutHero;