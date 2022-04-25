import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/images/netflix.png";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { GoArrowSmallDown } from "react-icons/go";
import { isActiveStyle, isNotActiveStyle, Change } from "../../styles/style";
import Browse from "../../components/NavBar/Browse";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={Change}>
      <div className="flex md:justify-between w-full">
        <div className="hidden md:flex space-x-4 items-center">
          <div>
            <img src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="space-x-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tvshows"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              TV Shows
            </NavLink>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="popular"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              New & Popular
            </NavLink>
            <NavLink
              to="mylist"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
            >
              My List
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <div className="flex space-x-3 font-bold text-[30px]">
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
        <div className=" flex space-x-14 relative overflow-hidden md:hidden">
          <div>
            <img src={logo} alt="logo" width={100} height={100} />
          </div>

          <div
            className="flex items-center cursor-pointer "
            onClick={() => setToggle(!toggle)}
          >
            Browse
            <GoArrowSmallDown fontSize={20} />
          </div>
        </div>
      </div>
      {toggle && <Browse setToggle={setToggle} />}
    </div>
  );
};

export default Navbar;
