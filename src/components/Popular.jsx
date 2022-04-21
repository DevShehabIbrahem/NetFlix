import React from "react";
import HoverCover from "../components/share/Hoverheader";
import potser from "../Assets/images/poster1.webp";
import Vid from "../Assets/Videos/Words Bubble Up Like .mp4";

const Popular = () => {
  return (
    <div>
      <HoverCover
        videoSrc={Vid}
        pausedOverlay={<img src={potser} alt="poster" />}
      />
    </div>
  );
};

export default Popular;
