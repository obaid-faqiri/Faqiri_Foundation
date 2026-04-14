import img from "../../../assets/images/1.jpg";

const AboutHero = () => {
  return (
    <section className="px-4 mb-10 sm:px-6 lg:px-12 xl:px-20 lg:mt-8">
      {/* DARK HEADER */}
      <div className="bg-[#0e3b3b] rounded-[30px] lg:rounded-[40px] pt-20 pb-28 text-center mt-[-50px]">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            About Us
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 text-sm text-gray-300 sm:text-base">
            Lambda is a dynamic and forward-thinking charity donation
            organization committed to making a positive impact on communities
            around the world.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row ">
            <button className="px-6 py-4 text-sm font-medium text-black bg-green-200 rounded-full hover:bg-violet-300 hover:text-teal-900">
              Why Choose Us
            </button>

            <button className="px-6 py-4 text-sm font-medium text-white transition border border-white rounded-full hover:bg-violet-300 hover:text-teal-900">
              Contact Us
            </button>
          </div>
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

export default AboutHero;
