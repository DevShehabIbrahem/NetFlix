import HoverVideoPlayer from "react-hover-video-player";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
const index = (props) => {
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
      <div className="flex absolute top-[75%] text-red-500 space-x-4 left-20">
        <button className="flex items-center bg-slate-100  hover:bg-opacity-75  text-black font-bold px-7 py-1 shadow-2xl rounded-sm">
          <BsFillPlayFill fontSize={40} />
          Play
        </button>
        <button className="flex items-center bg-gray-600 bg-opacity-30 hover:bg-opacity-25 text-white font-bold px-10 ">
          <AiOutlineRead fontSize={28} className="mr-2" />
          More Info
        </button>
      </div>
    </>
  );
};

export default index;
