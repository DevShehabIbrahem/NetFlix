import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeToggle } from "../../Redux/Reducers/ToggleSlice";
const Sidebar = ({ toggle }) => {
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
        <NavLink to="/" onClick={() => disptach(ChangeToggle(!toggle))}>
          Home
        </NavLink>
        <NavLink to="/tvshows" onClick={() => disptach(ChangeToggle(!toggle))}>
          TV Shows
        </NavLink>
        <NavLink to="/movies" onClick={() => disptach(ChangeToggle(!toggle))}>
          Movies
        </NavLink>
        <NavLink to="/popular" onClick={() => disptach(ChangeToggle(!toggle))}>
          New & Popular
        </NavLink>
        <NavLink to="/mylist" onClick={() => disptach(ChangeToggle(!toggle))}>
          My List
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
