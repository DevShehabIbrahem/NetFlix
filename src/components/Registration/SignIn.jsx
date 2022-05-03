import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BannerShow, BannerState } from "../../Redux/Reducers/bannerShow";
import Upbar from "../Getstart/Upbar";
import "./style.scss";

const SignIn = () => {
  const banner = useSelector(BannerState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BannerShow(false));
  }, [banner, dispatch]);

  return (
    <div className="h-screen w-full cover">
      <Upbar hidebtn />
      <div className="flex justify-center h-screen max-w-3xl mx-auto">
        <div className="form h-[440px]  md:bg-gradient-to-t md:from-[#141414c2] md:to-black text-white  mx-[2rem] w-[50%] ">
          <h1 className="text-[2rem] font-bold mb-7 ">Sign In</h1>
          <form className="form__sec flex flex-col items-center h-full space-y-[20px] md:mx-16">
            <input
              type="text"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              placeholder="Your Email"
            />

            <input
              type="text"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              placeholder="Your password"
            />

            <div className="bg-[#e50914] md:text-[18px] font-semibold py-1 px-12 cursor-pointer w-full text-center ">
              Sign In
            </div>
            <div className="flex justify-between w-full ">
              <div className="text-[#737373]">
                New to Netflix?
                <Link to="/getstart" className="hover:underline text-white">
                  Sign up now.
                </Link>
              </div>
              <div>
                <h1>NedHelp?</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
