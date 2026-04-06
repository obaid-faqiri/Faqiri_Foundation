import { NavLink } from "react-router-dom";

const Dropdown = ({ items }) => {
  return (        
    <div className="absolute left-0 pt-3 top-full">
      <ul className="w-56 p-2 text-black transition-all duration-300 translate-y-2 bg-white shadow-xl opacity-0 rounded-xl group-hover:opacity-100 group-hover:translate-y-0">

        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className="block px-4 py-2 transition rounded-lg hover:text-violet-300"
            >
              {item.title}
            </NavLink>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Dropdown;