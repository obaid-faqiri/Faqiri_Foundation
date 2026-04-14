import { aboutData } from "./aboutData";
import Button from "../../ui/button";

const AboutSection = () => {
  return (
    <section className="px-6 mt-12 lg:px-12 xl:px-20">
      <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div>
          <img
            src={aboutData.image}
            alt="Picture of about section"
            className="w-full h-[300px] md:h-[350px] object-cover rounded-[40px] shadow-xl"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-bold text-[#0e3b3b] leading-tight">
            {aboutData.title}
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-gray-600 text-md lg:mx-0 md:my-7">
            {aboutData.description}
          </p>
          <div className="mt-8">
            <Button size="lg" variant="outline">
              {aboutData.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
