import img from "../../../assets/images/30.jpg";

const MissionHero = () => {
  return (
    <section className="px-6 mb-10 lg:px-12 lg:mt-8">
      {/* DARK HEADER */}
      <div className="bg-[#0e3b3b] rounded-[30px] lg:rounded-[40px] lg:pt-20 lg:pb-28 text-center mt-[-50px] p-16">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-white lg:text-6xl">
            Frequently asked questions
          </h1>

          {/* DESCRIPTION */}
          <p className="my-6 text-sm text-gray-300 lg:text-lg">
            Charity is more than just a charity organization; it's a movement
            fueled by compassion and a vision of a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionHero;
