import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";

const CTA = () => {
  return (
    <section className="px-4 py-2 lg:py-24 sm:px-6 lg:px-12 xl:px-20">
      <div className="relative mx-auto text-center max-w-7xl">
        {/* TEXT */}
        <h2 className="max-w-3xl mx-auto text-xl font-semibold sm:text-2xl lg:text-3xl text-[#0e3b3b]">
          Join us in the journey to empower communities and transform lives.
        </h2>

        <h1 className="mt-8 text-6xl sm:text-7xl lg:text-[120px] font-bold text-[#0e3b3b] leading-none">
          139,364+
        </h1>

        <p className="mt-8 text-gray-500 text-md">people already joined</p>

        <button className="px-6 py-4 mt-6 text-green-200 bg-[#0e3b3b] rounded-full hover:bg-violet-300 transition-transform duration-500 ease-in-out hover:scale-95 hover:text-[#0e3b3b]">
          Join Our Organization
        </button>

        {/* ===== DESKTOP IMAGES ===== */}
        <div className="hidden lg:block">
          {/* LEFT TOP */}
          <img
            src={img1}
            className="absolute top-0 left-0 object-cover w-28 h-28 xl:w-40 xl:h-44 rounded-2xl"
          />

          {/* LEFT BOTTOM */}
          <img
            src={img2}
            className="absolute bottom-0 object-cover w-32 h-32 xl:w-36 xl:h-36 rounded-2xl left-16 top-52"
          />

          {/* RIGHT TOP */}
          <img
            src={img3}
            className="absolute right-0 object-cover w-28 h-28 xl:w-32 xl:h-32 rounded-2xl top-5"
          />

          {/* RIGHT BOTTOM */}
          <img
            src={img4}
            className="absolute bottom-0 object-cover w-32 h-32 xl:w-40 xl:h-36 rounded-2xl right-16"
          />
        </div>

        {/* ===== MOBILE GRID ===== */}
        <div className="grid grid-cols-2 gap-4 mt-12 lg:hidden">
          <img src={img1} className="object-cover w-full h-28 rounded-2xl" />
          <img src={img2} className="object-cover w-full h-28 rounded-2xl" />
          <img src={img3} className="object-cover w-full h-28 rounded-2xl" />
          <img src={img4} className="object-cover w-full h-28 rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
