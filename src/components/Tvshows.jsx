import React from "react";
import HoverCover from "../components/share/Hoverheader";
import potser from "../Assets/images/Tekken-.jpg";
import Vid from "../Assets/Videos/Tv.mp4";

const Tvshows = () => {
  return (
    <div>
      <HoverCover
        videoSrc={Vid}
        pausedOverlay={<img src={potser} alt="poster" />}
      />
    </div>
  );
};

export default Tvshows;
