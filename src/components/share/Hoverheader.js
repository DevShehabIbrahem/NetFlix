import HoverVideoPlayer from "react-hover-video-player";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { useSelector } from "react-redux";
import ModalVideo from "react-modal-video";
import "./ModalVideo/modal-video.scss";
import { useCallback, useEffect, useState } from "react";
const Hoverheader = (props) => {
  console.log(props);
  const prefixs = "https://image.tmdb.org/t/p/original";

  const [isOpen, setOpen] = useState(false);
  // const d = "top-[40%] flex absolute md:top-[80%] text-red-500 space-x-4 left-2 md:left-20""

  //Escape ModalVideo
  const keypress = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);
  return (
    <>
      {/*Video Hover*/}
      <HoverVideoPlayer
        className="w-full relative z-0 "
        videoSrc={props.videoSrc}
        pausedOverlay={
          <img
            src={`${prefixs}${props.pausedOverlay.props.src}`}
            alt="poster"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        }
      />
      {/*Video Modal*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.videoId}
        onClose={() => setOpen(false)}
      />
      <div className="flex overflow-hidden top-[43%] absolute md:top-[75%] left-[5%]  items-center justify-center space-x-5 ">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center bg-slate-100  hover:bg-opacity-75 text-black font-bold px-6 shadow-2xl rounded-md  py-1"
        >
          <BsFillPlayFill className="text-[20px] md:text-[35px]" />
          Play
        </button>

        <button className="flex items-center bg-gray-600 bg-opacity-30 hover:bg-opacity-25 text-white font-bold px-5 md:px-8 py-1">
          <AiOutlineRead className="text-[20px] md:text-[35px] mr-2" />
          More Info
        </button>
      </div>
    </>
  );
};

export default Hoverheader;
