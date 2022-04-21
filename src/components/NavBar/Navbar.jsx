import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/images/netflix.png";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { ChangeToggle } from "../../Redux/Reducers/ToggleSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const toggle = useSelector((state) => state.Menu.toggle);
  const dispatch = useDispatch();

  // Change Toggle
  const Changesaidebar = () => {
    dispatch(ChangeToggle(!toggle));
  };

  return (
    <div className="flex items-center fixed top-0 left-0 z-10 text-white  overflow-hidden px-5 w-full">
      <div className="hidden md:flex md:justify-between w-full">
        <div className="flex space-x-4 items-center">
          <div>
            <img src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="space-x-5">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/tvshows"> TV Shows</NavLink>
            <NavLink to="movies"> Movies</NavLink>
            <NavLink to="popular">New & Popular</NavLink>
            <NavLink to="mylist">My List</NavLink>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <div className=" flex space-x-3 font-bold text-[30px] ">
            <div>
              <AiOutlineSearch />
            </div>
            <div>
              <IoIosNotifications />
            </div>
          </div>
          <div>logo</div>
        </div>
        {/*Menu Mobile*/}
      </div>
      <div className="flex justify-end w-full cursor-pointer md:hidden">
        <AiOutlineMenu fontSize={30} onClick={() => Changesaidebar()} />
      </div>
    </div>
  );
};

export default Navbar;
