import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./headerData";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[93%] z-50 bg-[#0e3b3b] text-white px-8 py-4 rounded-full shadow-lg">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-green-200">
            Faqiri<sub className="text-xs"> Foundation</sub>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavItem key={link.id} link={link} />
          ))}
        </nav>

        {/* Button */}
        <button className="hidden px-8 py-4 font-semibold text-black transition-transform duration-500 ease-in-out bg-green-200 rounded-full lg:block hover:bg-violet-300 active:scale-90">
          Donate Now
        </button>

        {/* Mobile icon */}
        <button
          className="text-2xl lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FiMenu />
        </button>
      </div>

      <MobileMenu links={navLinks} open={mobileOpen} />
    </header>
  );
};

export default Header;
