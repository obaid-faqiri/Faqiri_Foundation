import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import MegaMenu from "./MegaMenu";

const NavItem = ({ link }) => {
  const [open, setOpen] = useState(false);

  if (link.dropdown || link.megaMenu) {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-white transition hover:text-green-300"
        >
          {link.title}
          <FiChevronDown />
        </button>

        {open && link.dropdown && <Dropdown items={link.dropdown} />}

        {open && link.megaMenu && <MegaMenu columns={link.megaMenu} />}
      </div>
    );
  }

  return (
    <NavLink
      to={link.path}
      className="text-white transition hover:text-green-300"
    >
      {link.title}
    </NavLink>
  );
};

export default NavItem;
