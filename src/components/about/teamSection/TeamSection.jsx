import teamData from "./teamData";

const TeamSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto text-center max-w-7xl">

        <h2 className="mb-12 text-4xl font-bold">
          Meet Our Team
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden transition bg-white shadow rounded-2xl hover:shadow-xl"
            >
              <img
                src={member.img}  
                alt={member.name}
                className="object-cover w-full h-72"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;