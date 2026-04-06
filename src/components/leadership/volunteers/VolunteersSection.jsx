import { volunteersData } from "./volunteersData";
import VolunteerCard from "./VolunteerCard";

const VolunteersSection = () => {
  return (
    <section className="px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="mb-10 text-2xl font-bold text-center">
          Meet Our Volunteers
        </h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">

          {volunteersData.map((volunteer) => (
            <VolunteerCard key={volunteer.id} {...volunteer} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default VolunteersSection;