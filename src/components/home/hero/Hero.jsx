import { heroData } from "./heroData";
import Button from "../../ui/button";

const Hero = () => {
  return (
    <section className="px-6 mt-12 lg:px-12 xl:px-20">
      <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="text-sm tracking-widest text-gray-500 uppercase">
            {heroData.tag}
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0e3b3b] leading-tight">
            {heroData.title}
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-lg text-gray-600 lg:mx-0">
            {heroData.description}
          </p>

          <div className="mt-8">
            <Button size="lg">{heroData.button}</Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={heroData.image}
            alt="hero"
            className="w-full h-[420px] object-cover rounded-[40px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
