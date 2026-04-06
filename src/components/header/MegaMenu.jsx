import { NavLink } from "react-router-dom";

const MegaMenu = ({ columns }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">

      <div className="bg-white text-black rounded-2xl shadow-2xl p-8 w-[750px]
      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300">

        <div className="grid grid-cols-3 gap-8">

          {columns.map((column, i) => (
            <ul key={i} className="space-y-2">

              {column.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="block px-3 py-2 rounded-lg
                     hover:text-violet-300 transition"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}

            </ul>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MegaMenu;