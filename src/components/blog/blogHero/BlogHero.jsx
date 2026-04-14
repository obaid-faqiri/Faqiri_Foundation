import img from "../../../assets/images/30.jpg";

const MissionHero = () => {
  return (
    <section className="px-6 mb-10 lg:px-12 lg:mt-8">
      {/* DARK HEADER */}
      <div className="bg-[#0e3b3b] rounded-[30px] lg:rounded-[40px] lg:pt-20 lg:pb-28 text-center mt-[-50px] p-16">
        <div className="max-w-3xl mx-auto">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-white lg:text-6xl">Blog</h1>

          {/* DESCRIPTION */}
          <p className="my-6 text-sm text-gray-300 lg:text-lg">
            These blog post ideas aim to showcase the multifaceted nature of
            Chari's work, from education and emergency relief to environmental
            conservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionHero;
