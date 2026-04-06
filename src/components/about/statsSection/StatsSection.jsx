import statsData from "./statsData";

const StatsSection = () => {
  return (
    <section
      className="py-20 text-white bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/images/1.jpg')" }}
    >
      <div className="py-20 bg-black/70">
        <div className="grid gap-8 mx-auto text-center max-w-7xl md:grid-cols-4">
          {statsData.map((item) => (
            <div key={item.id}>
              <h2 className="text-4xl font-bold text-green-300">
                {item.number}
              </h2>
              <p className="mt-2 text-gray-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
