import { testimonialData } from "./testimonialData";

const Testimonials = () => {
  return (
    <section
      data-aos="fade-up"
      className="px-6 mx-6 lg:mx-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP TEXT */}
        <div className="grid gap-6 mb-10 lg:grid-cols-2">

          <h2
            data-aos="fade-right"
            className="text-3xl font-bold text-center lg:text-left lg:text-4xl"
          >
            How could you help?
          </h2>

          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[16px] text-gray-500 text-center lg:text-left"
          >
            At Lambda, we believe that the collective power of compassion and
            generosity can create meaningful change in the world. Your support
            is crucial in enabling us to continue our mission of making a
            positive impact on communities in need.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={index * 120} // 🔥 stagger effect
                className="p-8 pt-10 transition border rounded-xl hover:shadow-md"
              >
                <Icon className="p-3 mb-4 text-5xl text-white bg-teal-900 rounded-lg" />

                <h3 className="mb-2 font-semibold text-[22px]">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-md">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;