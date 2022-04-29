import home from "../../Assets/images/getStartImages/home-bg.jpg";
import Upbar from "./Upbar";
import Features from "../Getstart/FeaturesSections/Features";

import Alldev from "../../json/Alldev.json";
import Tv from "../../json/Tv.json";
import Mobile from "../../json/Mobile.json";
import Kids from "../../json/Kids.json";
import AccordionSection from "./FeaturesSections/AccordionSection";
import accordionData from "../../json/accordionData.json";

const GetStart = () => {
  return (
    <div className="bg-black">
      {/*Banner SEction*/}
      <div
        className="h-screen w-full"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${home})`,
          backgroundPosition: "center center",
        }}
      >
        <Upbar />

        <div className="flex flex-col justify-center items-center font-bold text-white py-[80px] md:pt-[6px] max-w-5xl mx-auto text-center ">
          <h1 className=" text-[1.65rem] md:text-[3.350rem] md:text-center max-w-[700px] ">
            Unlimited movies, TV shows, and more.
          </h1>

          <div className="w-[70%] mx-auto space-y-5 mt-5 md:text-[1.300rem]">
            <p>Watch anywhere. Cancel anytime.</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="flex flex-col md:flex-row  justify-center items-center md:space-y-0 space-y-5 ">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full h-[66px] px-5 outline-0 text-black font-bold"
                />
              </div>

              <div className="bg-[#e50914] md:text-[28px] px-[15px] md:px-[20px] md:py-[8px] leading-[50px] text-center md:w-[20rem] cursor-pointer">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Features SEction*/}
      <Features data={Tv} />
      <Features isLeft data={Mobile} />
      <Features data={Alldev} />
      <Features isLeft data={Kids} />

      <div className="flex flex-col justify-center items-center px-5 border-t-8 border-gray-700 py-[6rem]">
        <h1 className="text-white font-bold text-[50px] mb-10">
          Frequently Asked Questions
        </h1>

        {/*Accaccordion SEction*/}
        {accordionData.map(({ title, dec, dec2 }) => (
          <>
            <AccordionSection title={title} dec={dec} dec2={dec2} />
          </>
        ))}
      </div>
    </div>
  );
};

export default GetStart;
