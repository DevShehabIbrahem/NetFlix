import { React, useState } from "react";
import { useSpring, animated } from "react-spring";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const AccordionSection = ({ title, dec, dec2 }) => {
  const [open, setOpen] = useState(false);

  //accordin Animation
  const openAnimation = useSpring({
    from: { Height: "60px" },
    to: { maxHeight: open ? "400px" : "60px" },
    config: { duration: "300" },
  });

  //Rotate Icons
  const rotateEle = useSpring({
    from: { rotate: "0deg" },
    to: { rotate: open ? "180deg" : "0deg" },
    config: { duration: "300" },
  });

  //toggle accordion function
  let toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <animated.div
      className="w-[70%] py-[7px] px-[10px] font-semibold text-white overflow-hidden cursor-pointer  "
      style={openAnimation}
    >
      <div
        className="flex justify-between items-center bg-[#1b1a1a] py-[0.8em] px-[2.2em] w-full mb-[1px] "
        onClick={toggleHandler}
      >
        <h1 className="font-bold text-[1.4rem]">{title}</h1>

        <animated.div
          className="text-[35px]"
          style={rotateEle}
          onClick={toggleHandler}
        >
          {open ? <AiOutlineClose /> : <AiOutlinePlus />}
        </animated.div>
      </div>

      <p className="bg-[#303030] text-[22px] pt-[30px] pb-[20px] px-16 font-bold">
        {dec}
      </p>
      <p className="bg-[#303030] text-[22px] pb-[30px] px-16 font-bold">
        {dec2}
      </p>
    </animated.div>
  );
};
export default AccordionSection;
