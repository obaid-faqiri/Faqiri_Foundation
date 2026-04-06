import { whyBannerData } from "./whyBannerData";

const WhyBanner = () => {
  return (
    <section className="px-6 -mt-20">

      <div className="max-w-6xl mx-auto">

        <img
          src={whyBannerData.image}
          alt="Why Choose Us"
          className="object-cover w-full h-64 shadow-lg rounded-2xl md:h-96"
        />

      </div>

    </section>
  );
};

export default WhyBanner;