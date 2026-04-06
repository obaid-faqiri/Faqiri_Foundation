import { missionHeroData } from "./missionHeroData";
import Button from "../../ui/button";

const MissionHero = () => {
  return (
    <section className="px-6 mt-12 lg:px-12 xl:px-20">
      <div className="grid items-center gap-12 mx-auto text-center max-w-7xl lg:grid-cols-2 lg:text-left">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            {missionHeroData.title}
          </h1>
          <p className="my-8 text-lg text-gray-600">
            {missionHeroData.description}
          </p>
          <Button>{missionHeroData.button}</Button>
        </div>
        <div>
        <img
          src={missionHeroData.image}
          alt="hero"
          className="w-full h-[420px] object-cover rounded-[40px] shadow-xl "
        />
        </div>
      </div>
    </section>
  );
};

export default MissionHero;
