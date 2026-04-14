const CausesHero = () => {
  return (
    <section className="px-4 mb-10 sm:px-6 lg:px-12 xl:px-20 lg:mt-8">
      {/* DARK HEADER */}
      <div className="bg-[#0e3b3b] rounded-[30px] lg:rounded-[40px] pt-20 pb-28 text-center mt-[-50px]">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            Causes
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg text-gray-300 ">
            Lambda is more than just a charity organization; it's a movement
            fueled by compassion and a vision of a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CausesHero;
