import React, { useEffect, useState } from "react";
import user from "../../Assets/images/userProfile.png";
import netflix from "../../Assets/images/netflix.png";

import { isActiveStyle, isNotActiveStyle } from "../../styles/style";
import Browse from "../../components/NavBar/Browse";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);
  const [navChange, setNavChange] = useState(false);

  const navChanged =
    "bg-black fixed w-full top-0 transition-all ease-in flex justify-between items-center px-5 py-1 z-10 ";
  const navNoChange =
    "bg-transparent fixed w-full top-0 transition-all ease-in flex justify-between items-center px-5 py-1 z-10 ";
  const scroll = () => {
    if (window.scrollY >= 600) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const HandleClick = () => {
    setMobileNav(!mobileNav);
    setOpen(!open);
  };
  return (
    <div className={`${navChange ? navChanged : navNoChange}`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src={netflix}
            alt="logo"
            className="object-cover"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden  md:flex items-center text-white space-x-4 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Home
          </NavLink>

          <NavLink
            to="tvshows"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Tv Shows
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
            New & popular
          </NavLink>

          <NavLink
            to="mylist"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            my List
          </NavLink>
        </div>

        {/*mobile Nav*/}
        <button onClick={HandleClick} className="text-white md:hidden ml-16">
          Browse
        </button>
        {mobileNav && <Browse mobileNav={mobileNav} open={open} />}
      </div>

      <div>
        <img src={user} alt="user" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Navbar;
