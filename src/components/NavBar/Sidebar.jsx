import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeToggle } from "../../Redux/Reducers/ToggleSlice";
const Sidebar = ({ toggle }) => {
  const isActiveStyle =
    "flex items-center px-5 my-2 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

  const isNotActiveStyle =
    "flex items-center px-5 my-2 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";

  const disptach = useDispatch();

  return (
    <>
      <span
        className="flex justify-end p-1 cursor-pointer"
        onClick={() => disptach(ChangeToggle(!toggle))}
      >
        <AiOutlineClose />
      </span>
      <div className="px-3 gap-4 flex flex-col py-4">
        <NavLink
          to="/"
          onClick={() => disptach(ChangeToggle(!toggle))}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tvshows"
          onClick={() => disptach(ChangeToggle(!toggle))}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/movies"
          onClick={() => disptach(ChangeToggle(!toggle))}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/popular"
          onClick={() => disptach(ChangeToggle(!toggle))}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          New & Popular
        </NavLink>
        <NavLink
          to="/mylist"
          onClick={() => disptach(ChangeToggle(!toggle))}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          My List
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
