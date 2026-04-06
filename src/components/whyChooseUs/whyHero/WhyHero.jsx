import { whyHeroData } from "./whyHeroData";

const WhyHero = () => {
  return (
    <section className="pt-24 pb-32 text-center text-white bg-teal-900 rounded-b-[40px]">

      <div className="max-w-3xl px-6 mx-auto">

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          {whyHeroData.title}
        </h1>

        <p className="text-gray-200">
          {whyHeroData.description}
        </p>

      </div>

    </section>
  );
};

export default WhyHero;