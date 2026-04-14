import { leadershipHeroData } from "./leadershipHeroData";

const LeadershipHero = () => {
  return (
    <section className="px-4 mb-10 sm:px-6 xl:px-16 lg:mt-8">
      <div className="bg-[#0e3b3b] rounded-[30px] lg:rounded-[40px] pt-20 pb-28 text-center mt-[-50px] lg:h-[450px] text-gray-200">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          {leadershipHeroData.title}
        </h1>

        <p className="px-20 my-12 text-lg ">{leadershipHeroData.description}</p>
      </div>
    </section>
  );
};

export default LeadershipHero;
