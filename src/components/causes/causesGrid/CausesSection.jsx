import { causesData } from "./causesData";
import CauseCard from "./CauseCard";

const CausesSection = () => {
  return (
    <section className="px-6 py-16">

      <div className="grid gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">

        {causesData.map((cause) => (
          <CauseCard key={cause.id} {...cause} />
        ))}

      </div>

    </section>
  );
};

export default CausesSection;