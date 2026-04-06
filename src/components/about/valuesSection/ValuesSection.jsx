import valuesData from "./valuesData";

const ValuesSection = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold">Our Values</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {valuesData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="p-8 transition bg-white shadow rounded-2xl hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="text-4xl text-green-600" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold text-green-700">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;