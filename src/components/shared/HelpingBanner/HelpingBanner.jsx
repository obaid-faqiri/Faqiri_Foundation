import { FaHeart } from "react-icons/fa";
import { bannerItems } from "./bannerData";

const HelpingBanner = () => {
  return (
    <div className="py-6 overflow-hidden bg-[#c0fecf] mt-11 text-[#0e3b3b]">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {bannerItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center mx-10 text-2xl font-semibold"
          >
            <FaHeart className="mr-4" />
            {text}
          </div>
        ))}

        {bannerItems.map((text, index) => (
          <div
            key={"copy" + index}
            className="flex items-center mx-10 text-2xl font-semibold"
          >
            <FaHeart className="mr-4" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpingBanner;
