import React from "react";
import HoverCover from "../components/share/Hoverheader";
import potser from "../Assets/images/Tvshow.webp";
import Vid from "../Assets/Videos/Bubble - Official Trailer - Netflix.mp4";
const Home = () => {
  return (
    <div className="w-full">
      <HoverCover
        videoSrc={Vid}
        pausedOverlay={<img src={potser} alt="poster" />}
      />
    </div>
  );
};

export default Home;
