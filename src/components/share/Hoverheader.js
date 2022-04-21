import HoverVideoPlayer from "react-hover-video-player";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import Sidebar from "../NavBar/Sidebar";
import { useSelector } from "react-redux";
const Hoverheader = (props) => {
  const toggle = useSelector((state) => state.Menu.toggle);

  return (
    <>
      <HoverVideoPlayer
        className="w-full relative z-0 "
        videoSrc={props.videoSrc}
        pausedOverlay={
          <img
            src={props.pausedOverlay.props.src}
            alt="poster"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        }
      />
      <div className="top-[50%]  flex absolute md:top-[75%] text-red-500 space-x-4 left-2 md:left-20">
        <button className="flex items-center bg-slate-100  hover:bg-opacity-75 text-black font-bold px-6 shadow-2xl rounded-md  py-1">
          <BsFillPlayFill className="text-[20px] md:text-[35px]" />
          Play
        </button>
        <button className="flex items-center bg-gray-600 bg-opacity-30 hover:bg-opacity-25 text-white font-bold px-5 md:px-8">
          <AiOutlineRead className="text-[20px] md:text-[35px] mr-2" />
          More Info
        </button>
      </div>
      {toggle && (
        <div className="absolute top-0 left-0 bottom-0 w-190 z-10 text-black bg-white h-screen animate-slide-in  md:hidden">
          <Sidebar toggle={toggle} />
        </div>
      )}
    </>
  );
};

export default Hoverheader;
