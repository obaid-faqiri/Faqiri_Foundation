import { useState } from "react";
import { reviewsData } from "./reviewsData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../../../assets/images/1.jpg";

const ReviewsSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? reviewsData.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === reviewsData.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="relative max-w-5xl px-6 mx-auto">
        {/* Background Image */}

        <div className="overflow-hidden rounded-2xl">
          <img
            src={img1}
            className="object-cover w-full h-[400px] object-center"
          />
        </div>

        {/* Card */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl text-center w-[70%] shadow-lg">
          <p className="mb-4 text-lg">"{reviewsData[current].text}"</p>

          <h4 className="font-semibold">{reviewsData[current].name}</h4>

          <p className="text-sm text-gray-500">{reviewsData[current].role}</p>
        </div>

        {/* Buttons */}

        <button
          onClick={prevSlide}
          className="absolute flex items-center justify-center text-white transition duration-150 transform -translate-y-1/2 bg-teal-700 rounded-full w-14 h-14 left-10 top-1/2 active:scale-90"
        >
          <FiChevronLeft size={25} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute flex items-center justify-center text-white transition duration-150 transform -translate-y-1/2 bg-teal-700 rounded-full w-14 h-14 right-10 top-1/2 active:scale-90"
        >
          <FiChevronRight size={25} />
        </button>

        {/* Dots */}

        <div className="flex justify-center gap-2 mt-6">
          {reviewsData.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-teal-700" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
