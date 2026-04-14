import { heroData } from "./heroData";
import Button from "../../ui/button";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="relative mx-auto max-w-7xl">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:mt-[-30px] lg:mt-0">
          <img
            src={heroData.image}
            alt="hero"
            className="w-full h-[300px] sm:h-[400px] lg:h-[470px] object-cover object-top"
          />
        </div>

        {/* WHITE CARD */}
        <div
          className="
          relative
          lg:absolute
          lg:top-[170px]
          lg:left-[0px]
          md:mt-[-200px]
          bg-white
          w-full
          sm:w-[90%]
          lg:w-[900px]
          p-6 sm:p-8
          mt-[-170px] sm:mt-[-80px] lg:mt-0
          mx-auto lg:mx-0
          rounded-[30px] sm:rounded-[45px]
          shadow-md
        "
        >
          {/* TAG */}
          <span className="text-xs tracking-widest text-gray-500 uppercase sm:text-sm">
            {heroData.tag}
          </span>

          {/* TITLE */}
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-6xl font-bold text-[#0e3b3b] leading-tight ">
            {heroData.title}
          </h1>

          {/* CONTENT */}
          <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:items-center lg:gap-6 lg:mt-8">
            <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
              {heroData.description}
            </p>

            <Button size="lg" className="w-full sm:w-auto whitespace-nowrap">
              {heroData.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
