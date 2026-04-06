import { ctaData } from "./ctaData";
import Button from "../../ui/button";

const CTA = () => {
  return (
    <section className="px-6 py-24 bg-gray-50">
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Floating Images */}

        <img
          src={ctaData.images[0]}
          alt=""
          className="absolute top-0 left-0 hidden object-cover w-20 h-20 rounded-lg lg:block"
        />

        <img
          src={ctaData.images[1]}
          alt=""
          className="absolute top-0 right-0 hidden object-cover w-20 h-20 rounded-lg lg:block"
        />

        <img
          src={ctaData.images[2]}
          alt=""
          className="absolute bottom-0 hidden object-cover w-20 h-20 rounded-lg lg:block left-10"
        />

        <img
          src={ctaData.images[3]}
          alt=""
          className="absolute bottom-0 hidden object-cover w-20 h-20 rounded-lg lg:block right-10"
        />

        {/* Content */}

        <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-700">
          {ctaData.title}
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0e3b3b] mt-6">
          {ctaData.number}
        </h2>

        <p className="mt-2 text-gray-500">{ctaData.subtitle}</p>

        <div className="mt-8">
          <Button size="lg">
            {ctaData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
