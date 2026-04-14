import { causesData } from "./causesData";
import CauseCard from "./CauseCard";

const CausesSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-16 sm:gap-4 md:gap-5">
        <span className="bg-[#163C45] py-3 px-8  rounded-full text-[#AAE5BD] font-medium hover:bg-[#AAE5BD] hover:text-[#163C45] hover:border-[#163C45] border border-transparent hover:border-solid cursor-pointer">
          All Causes
        </span>
        <span className="bg-[#AAE5BD] py-3 px-8  rounded-full text-[#163C45] font-medium hover:bg-[#163C45] hover:text-[#AAE5BD] hover:border-[#163C45] border border-transparent hover:border-solid cursor-pointer">
          Emergency
        </span>
        <span className="bg-[#AAE5BD] py-3 px-8  rounded-full text-[#163C45] font-medium hover:bg-[#163C45] hover:text-[#AAE5BD] hover:border-[#163C45] border border-transparent hover:border-solid cursor-pointer ">
          Healthcare
        </span>
        <span className="bg-[#AAE5BD] py-3 px-8  rounded-full text-[#163C45] font-medium hover:bg-[#163C45] hover:text-[#AAE5BD] hover:border-[#163C45] border border-transparent hover:border-solid cursor-pointer">
          Education
        </span>
      </div>

      <div className="grid gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {causesData.map((cause) => (
          <CauseCard key={cause.id} {...cause} />
        ))}
      </div>
    </section>
  );
};

export default CausesSection;
