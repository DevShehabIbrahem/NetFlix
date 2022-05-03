import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { isActiveStyle, isNotActiveStyle } from "../../styles/style";

const Browse = ({ setToggle, open }) => {
  const openAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration: "300" },
  });

  return (
    <>
      <animated.div
        className="gap-4 flex flex-col items-center justify-center fixed top-[10%] left-[25%] z-20 bg-gradient-to-t from-[#141414c2] to-black w-[180px] md:hidden"
        style={openAnimation}
      >
        <NavLink
          to="/"
          onClick={() => setToggle(false)}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tvshows"
          onClick={() => setToggle(false)}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/movies"
          onClick={() => setToggle(false)}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/popular"
          onClick={() => setToggle(false)}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          New & Popular
        </NavLink>
        <NavLink
          to="/mylist"
          onClick={() => setToggle(false)}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          My List
        </NavLink>
      </animated.div>
    </>
  );
};

export default Browse;
