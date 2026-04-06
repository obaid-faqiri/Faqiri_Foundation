import { NavLink } from "react-router-dom";

const MobileMenu = ({ links, open }) => {

  if (!open) return null;

  return (
    <div className="absolute left-0 w-full px-6 mt-4 lg:hidden top-full">

      <div className="bg-[#0e3b3b] rounded-2xl p-6 shadow-2xl">

        <ul className="flex flex-col gap-6">

          {links.map((link) => (
            <li key={link.id}>

              {/* Main Link */}
              {link.path && (
                <NavLink
                  to={link.path}
                  className="text-lg text-white hover:text-green-300"
                >
                  {link.title}
                </NavLink>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <div className="flex flex-col gap-2 mt-3 ml-4">
                  {link.dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className="text-sm text-gray-300 hover:text-green-300"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              )}

            </li>
          ))}

          <button className="py-3 mt-6 font-semibold text-black bg-green-200 rounded-full">
            Donate Now
          </button>

        </ul>

      </div>
    </div>
  );
};

export default MobileMenu;