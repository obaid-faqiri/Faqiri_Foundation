import img from "../../../assets/images/30.jpg";

const MissionHero = () => {
  return (
    <section className="px-4 mb-10 sm:px-6 lg:px-12 xl:px-20 lg:mt-8">
      {/* DARK HEADER */}
      <div className="bg-[#0e3b3b] rounded-[30px] lg:rounded-[40px] pt-20 pb-28 text-center mt-[-50px]">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Mission
          </h1>
          <p className="my-6 text-sm text-gray-300 sm:text-base">
            We are more than a charity donation organization; we are a force
            fueled by compassion, committed to uplifting communities and
            transforming lives around the world.
          </p>
        </div>
      </div>

      {/* IMAGE SECTION (SEPARATE — THIS IS THE KEY) */}
      <div className="mx-auto -mt-16 max-w-7xl lg:-mt-20">
        <img
          src={img}
          alt="about"
          className="w-full h-[220px] sm:h-[300px] lg:h-[420px] object-cover rounded-[20px] lg:rounded-[25px] border-[6px] border-white object-top"
        />
      </div>
    </section>
  );
};

export default MissionHero;
