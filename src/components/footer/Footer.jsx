import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F3D3E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12">
        {/* COLUMN 1 */}
        <div className="space-y-8">
          {/* Brand */}
          <div className="flex items-end gap-2">
            <h1 className="text-3xl font-bold text-green-200">
            Faqiri<sub className="text-xs"> Foundation</sub>
          </h1>
          </div>

          {/* Core values */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-green-200">
              Core Values
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-gray-300">
              At Faqiri Foundation, we prioritize transparency, integrity, and
              inclusivity. These values guide our actions as we work tirelessly
              to bridge the gap between those in need and those willing to help.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-green-200">
              Sign up for our newsletter
            </h3>

            <div className="flex flex-col max-w-lg gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-3 text-white placeholder-gray-400 bg-transparent border border-green-300 rounded-full outline-none"
              />

              <button className="hidden px-8 py-4 font-semibold text-black transition-transform duration-500 ease-in-out bg-green-200 rounded-full lg:block hover:bg-violet-300 active:scale-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-green-200">
            Useful links
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="transition cursor-pointer hover:text-green-300">
              Home
            </li>
            <li className="transition cursor-pointer hover:text-green-300">
              Our Mission
            </li>
            <li className="transition cursor-pointer hover:text-green-300">
              Why Choose Us
            </li>
            <li className="transition cursor-pointer hover:text-green-300">
              Projects
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-green-200">
            Our contacts
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-300" />
              information@office.com
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-300" />+ (0777) 888 88 888
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-300" />
              2307 Beverley, New York
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-8">
            <a className="flex items-center justify-center w-12 h-12 transition border border-green-300 rounded-full hover:bg-green-300 hover:text-black">
              <FaFacebookF />
            </a>

            <a className="flex items-center justify-center w-12 h-12 transition border border-green-300 rounded-full hover:bg-green-300 hover:text-black">
              <FaInstagram />
            </a>

            <a className="flex items-center justify-center w-12 h-12 transition border border-green-300 rounded-full hover:bg-green-300 hover:text-black">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 text-sm text-center text-gray-400">
        <p>© Faqiri Foundation. All rights reserved.</p>
        <p className="mt-1">Designed by you.</p>
      </div>
    </footer>
  );
};

export default Footer;
